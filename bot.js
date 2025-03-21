const { 
  Client, 
  GatewayIntentBits, 
  EmbedBuilder, 
  ActionRowBuilder, 
  ButtonBuilder, 
  ButtonStyle,
  StringSelectMenuBuilder,
  PermissionFlagsBits
} = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./config.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

const ticketChannels = new Map();

client.on('ready', async () => {
  console.log(`Eingeloggt als ${client.user.tag}!`);
  await registerCommands();
  
  // Rollen-Cache aktualisieren
  const guild = client.guilds.cache.get(config.guildId);
  await guild.roles.fetch();
  console.log('Rollen initialisiert:', guild.roles.cache.size);
});

async function registerCommands() {
  const rest = new REST({ version: '9' }).setToken(config.token);
  
  const commands = [{
    name: 'ticket-panel',
    description: 'Erstellt das Ticket Panel'
  }, {
    name: 'close-all-tickets',
    description: 'Schließt alle aktiven Tickets'
  }];

  try {
    await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId),
      { body: commands }
    );
    console.log('Commands registriert!');
  } catch (error) {
    console.error('Fehler beim Registrieren:', error);
  }
}

async function sendLog(action, user, details) {
  const logChannel = client.channels.cache.get(config.logChannelId);
  if (!logChannel) return;

  const logEmbed = new EmbedBuilder()
    .setTitle(`📝 Ticket ${action}`)
    .setColor(config.logs.colors[action] || 0x2F3136)
    .setDescription(details)
    .addFields(
      { name: 'Benutzer', value: user.toString(), inline: true },
      { name: 'Datum', value: new Date().toLocaleString(), inline: true }
    )
    .setFooter({ text: config.embeds.ticket.footer });

  await logChannel.send({ embeds: [logEmbed] });
}

client.on('interactionCreate', async interaction => {
  try {
    if (interaction.isCommand()) {
      switch (interaction.commandName) {
        case 'ticket-panel':
          await createTicketPanel(interaction);
          break;
        case 'close-all-tickets':
          await handleCloseAllTickets(interaction);
          break;
      }
    }

    if (interaction.isStringSelectMenu() && interaction.customId === 'ticket_type') {
      await handleTicketCreation(interaction);
    }

    if (interaction.isButton()) {
      switch (interaction.customId) {
        case 'close_ticket':
          await handleTicketClose(interaction);
          break;
        case 'claim_ticket':
          await handleTicketClaim(interaction);
          break;
      }
    }
  } catch (error) {
    console.error('Fehler:', error);
    interaction.reply({ 
      content: config.messages.error, 
      flags: 64 
    });
  }
});

async function createTicketPanel(interaction) {
  if (!interaction.memberPermissions.has(PermissionFlagsBits.Administrator)) {
    return interaction.reply({ 
      content: config.messages.noPermission, 
      flags: 64 
    });
  }

  const embed = new EmbedBuilder()
    .setTitle(config.embeds.panel.title)
    .setDescription(config.embeds.panel.description)
    .setColor(config.embeds.panel.color)
    .setThumbnail(config.embeds.panel.thumbnail)
    .setFooter({ text: config.embeds.panel.footer });

  const selectMenu = new StringSelectMenuBuilder()
    .setCustomId('ticket_type')
    .setPlaceholder(config.messages.selectPlaceholder)
    .addOptions(
      Object.entries(config.ticketTypes).map(([key, type]) => ({
        label: type.name,
        emoji: type.emoji,
        value: key
      }))
    );

  await interaction.channel.send({ 
    embeds: [embed], 
    components: [new ActionRowBuilder().addComponents(selectMenu)]
  });
  await interaction.reply({ 
    content: config.messages.panelCreated, 
    flags: 64 
  });
}

async function handleTicketCreation(interaction) {
  const ticketType = interaction.values[0];
  const { emoji, name } = config.ticketTypes[ticketType];
  
  try {
    const roleIds = Array.isArray(config.ticketRoles[ticketType]) 
      ? config.ticketRoles[ticketType] 
      : [config.ticketRoles[ticketType]];

    const invalidRoles = roleIds.filter(id => !interaction.guild.roles.cache.has(id));
    if (invalidRoles.length > 0) {
      throw new Error(config.messages.invalidRoles.replace('{roles}', invalidRoles.join(', ')));
    }

    if (ticketChannels.has(interaction.user.id)) {
      return interaction.reply({ 
        content: config.messages.ticketAlreadyExists, 
        flags: 64 
      });
    }

    const sanitizedName = interaction.user.username
      .replace(/[^a-z0-9]/gi, '-')
      .slice(0, 90);

    const permissionOverwrites = [
      {
        id: interaction.guild.id,
        deny: [PermissionFlagsBits.ViewChannel]
      },
      {
        id: interaction.user.id,
        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
      },
      ...roleIds.map(roleId => ({
        id: roleId,
        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ManageMessages
        ]
      }))
    ];

    const channel = await interaction.guild.channels.create({
      name: `${ticketType}-${sanitizedName}`,
      parent: config.ticketCategories[ticketType],
      permissionOverwrites: permissionOverwrites
    });

    ticketChannels.set(interaction.user.id, { 
      channelId: channel.id, 
      type: ticketType 
    });

    await sendLog('create', interaction.user, 
      `**Typ:** ${name}\n**Kanal:** ${channel.toString()}`
    );

    const ticketEmbed = new EmbedBuilder()
      .setTitle(config.embeds.ticket.titles[ticketType])
      .setDescription([
        `Hallo ${interaction.user},\n${config.messages.ticketInstructions}`,
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
        `**Zuständiges Team:**\n> ${roleIds.map(r => `<@&${r}>`).join('\n> ')}`,
        `**Ticket-Optionen:**\n${config.messages.ticketOptions}`
      ].join('\n'))
      .setColor(config.embeds.ticket.color)
      .setFooter({ text: config.embeds.ticket.footer });

    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('close_ticket')
        .setLabel(config.buttons.close.label)
        .setStyle(ButtonStyle[config.buttons.close.style])
        .setEmoji(config.buttons.close.emoji),
      new ButtonBuilder()
        .setCustomId('claim_ticket')
        .setLabel(config.buttons.claim.label)
        .setStyle(ButtonStyle[config.buttons.claim.style])
        .setEmoji(config.buttons.claim.emoji)
    );

    await channel.send({ 
      content: `${interaction.user} ${roleIds.map(r => `<@&${r}>`).join(' ')}`,
      embeds: [ticketEmbed],
      components: [buttons]
    });

    await interaction.reply({ 
      content: `${config.messages.ticketCreated} ${channel}`, 
      flags: 64 
    });

  } catch (error) {
    console.error('Ticket Fehler:', error);
    await interaction.reply({ 
      content: `${config.messages.error}: ${error.message}`, 
      flags: 64 
    });
  }
}

async function handleTicketClose(interaction) {
  const userEntry = Array.from(ticketChannels.entries()).find(
    ([userId, data]) => data.channelId === interaction.channel.id
  );

  if (!userEntry) return;

  const [userId, ticketData] = userEntry;

  if (interaction.user.id !== userId && 
      !interaction.member.roles.cache.hasAny(...config.ticketRoles[ticketData.type])) {
    return interaction.reply({ 
      content: config.messages.noPermission, 
      flags: 64 
    });
  }

  await sendLog('close', interaction.user,
    `**Ticket:** ${interaction.channel.name}\n**Geschlossen von:** ${interaction.user.tag}`
  );

  await interaction.channel.delete();
  ticketChannels.delete(userId);

  try {
    const user = await client.users.fetch(userId);
    await user.send(config.messages.ticketClosed);
  } catch (error) {
    console.error('DM Fehler:', error);
  }
}

async function handleTicketClaim(interaction) {
  const ticketData = Array.from(ticketChannels.values()).find(
    data => data.channelId === interaction.channel.id
  );

  if (!ticketData) return;

  const member = interaction.member;
  const roleIds = Array.isArray(config.ticketRoles[ticketData.type]) 
    ? config.ticketRoles[ticketData.type] 
    : [config.ticketRoles[ticketData.type]];

  if (!roleIds.some(roleId => member.roles.cache.has(roleId))) {
    return interaction.reply({ 
      content: config.messages.noPermission, 
      flags: 64 
    });
  }

  await Promise.all(roleIds.map(async roleId => {
    await interaction.channel.permissionOverwrites.delete(roleId);
  }));

  await interaction.channel.permissionOverwrites.create(member.id, {
    ViewChannel: true,
    SendMessages: true,
    ManageMessages: true
  });

  const newEmbed = EmbedBuilder.from(interaction.message.embeds[0])
    .spliceFields(3, 1, { 
      name: '**Bearbeitet von:**',
      value: `> ${member}` 
    });

  const newButtons = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('close_ticket')
      .setLabel(config.buttons.close.label)
      .setStyle(ButtonStyle[config.buttons.close.style])
      .setEmoji(config.buttons.close.emoji),
    new ButtonBuilder()
      .setCustomId('claim_ticket')
      .setLabel(config.messages.claimedLabel)
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(true)
      .setEmoji('✅')
  );

  await interaction.message.edit({ 
    embeds: [newEmbed],
    components: [newButtons]
  });

  await interaction.reply(config.messages.ticketClaimed.replace('{user}', member.toString()));
  await sendLog('claim', interaction.user,
    `**Ticket:** ${interaction.channel.toString()}\n**Übernommen von:** ${member.toString()}`
  );
}

async function handleCloseAllTickets(interaction) {
  if (!interaction.memberPermissions.has(PermissionFlagsBits.Administrator)) {
    return interaction.reply({ 
      content: config.messages.noPermission, 
      flags: 64 
    });
  }

  try {
    let count = 0;
    for (const [userId, data] of ticketChannels) {
      const channel = interaction.guild.channels.cache.get(data.channelId);
      if (channel) {
        await channel.delete();
        count++;
      }
    }
    ticketChannels.clear();

    await interaction.reply({
      content: config.messages.allClosed.replace('{count}', count),
      flags: 64
    });

  } catch (error) {
    console.error('Fehler beim Schließen:', error);
    await interaction.reply({
      content: config.messages.closeError,
      flags: 64
    });
  }
}

client.login(config.token);