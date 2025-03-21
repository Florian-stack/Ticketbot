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
  
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent
    ]
  });
  
  const config = {
    token: 'MTMzNTI5NjA2NjI0NDk2ODQ0OA.GIdeNf.ns0d2XPAZJT7k60lwMe6O_SETG3soegvqZ3Y4g',
    clientId: '1335296066244968448',
    guildId: '1335295708059795526',
    ticketRoles: {
      support: ['1351635168108089364', '1351635227201507461'],
      team: '1351635282146889811',
      fraction: ['1351635331300196506', '1351635370189787300'],
      highteam: '1351635415014309960'
    },
    logChannelId: '1335295708059795529', // Neu hinzugefügter Log-Kanal
  
    ticketCategories: {
      support: '1335298631049281607',
      team: '1335298631049281607',
      fraction: '1335298631049281607',
      highteam: '1335298631049281607'
    }
  };
    
    const ticketChannels = new Map();
    const ticketTypes = {
      support: { emoji: '🛠️', name: 'Support' },
      team: { emoji: '👥', name: 'Teambewerbung' },
      fraction: { emoji: '🚔', name: 'Fraktionsbewerbung' },
      highteam: { emoji: '👑', name: 'High Team' }
    };
    
    client.on('ready', () => {
      console.log(`Eingeloggt als ${client.user.tag}!`);
      registerCommands();
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
    
    client.on('interactionCreate', async interaction => {
      try {
        if (interaction.isCommand() && interaction.commandName === 'ticket-panel') {
          await createTicketPanel(interaction);
        }
        if (interaction.isCommand() && interaction.commandName === 'close-all-tickets') {
          await handleCloseAllTickets(interaction);
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
      }
    });
  
  
  async function sendLog(action, user, details) {
    const logChannel = client.channels.cache.get(config.logChannelId);
    if (!logChannel) return console.error('Log-Kanal nicht gefunden!');
  
    const actionColors = {
      create: 0x00FF00,   // Grün
      close: 0xFF0000,    // Rot
      claim: 0xFFA500     // Orange
    };
  
    const logEmbed = new EmbedBuilder()
      .setTitle(`📝 Ticket ${action}`)
      .setColor(actionColors[action] || 0x2F3136)
      .setDescription(details)
      .addFields(
        { name: 'Benutzer', value: user.toString(), inline: true },
        { name: 'Datum', value: new Date().toLocaleString(), inline: true }
      )
      .setFooter({ text: 'Dortmund City Ticket System' });
  
    await logChannel.send({ embeds: [logEmbed] });
  }
  
    
    async function createTicketPanel(interaction) {
      if (!interaction.memberPermissions.has(PermissionFlagsBits.Administrator)) {
        return interaction.reply({ 
          content: '⛔ Keine Berechtigung!', 
          ephemeral: true 
        });
      }
    
      const embed = new EmbedBuilder()
        .setTitle('🎫 Dortmund City Ticket System')
        .setDescription([
          '**Willkommen beim Dortmund City Support!**\n',
          '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
          '**Ticket-Typen:**',
          '🛠️ **Support** - Technische Hilfe & Fragen',
          '👥 **Teambewerbung** - Bewerbung für unser Team',
          '🚔 **Fraktionsbewerbung** - Fraktionsangelegenheiten',
          '👑 **High Team** - Kontakt zur Serverleitung',
          '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
          '▶️ Wähle unten deinen Ticket-Typ aus!'
        ].join('\n'))
        .setColor(0x2F3136)
        .setThumbnail('https://i.imgur.com/A3yS5LJ.png')
        .setFooter({ text: 'Dortmund City RP | Professioneller Support rund um die Uhr' });
    
      const selectMenu = new StringSelectMenuBuilder()
        .setCustomId('ticket_type')
        .setPlaceholder('Ticket-Typ auswählen')
        .addOptions(
          { label: 'Support', emoji: '🛠️', value: 'support' },
          { label: 'Teambewerbung', emoji: '👥', value: 'team' },
          { label: 'Fraktionsbewerbung', emoji: '🚔', value: 'fraction' },
          { label: 'High Team', emoji: '👑', value: 'highteam' }
        );
    
      await interaction.channel.send({ 
        embeds: [embed], 
        components: [new ActionRowBuilder().addComponents(selectMenu)]
      });
      await interaction.reply({ 
        content: '✅ Panel erfolgreich erstellt!', 
        ephemeral: true 
      });
    }
    
    async function handleTicketCreation(interaction) {
      const ticketType = interaction.values[0];
      const { emoji, name } = ticketTypes[ticketType];
      const roleIds = Array.isArray(config.ticketRoles[ticketType]) 
        ? config.ticketRoles[ticketType] 
        : [config.ticketRoles[ticketType]];
    
      try {
        // Validierung der Rollen-IDs
        const invalidRoles = roleIds.filter(id => !interaction.guild.roles.cache.has(id));
        if (invalidRoles.length > 0) {
          throw new Error(`Ungültige Rollen-IDs: ${invalidRoles.join(', ')}`);
        }
    
        if (ticketChannels.has(interaction.user.id)) {
          return interaction.reply({ 
            content: '❌ Du hast bereits ein offenes Ticket!', 
            ephemeral: true 
          });
        }
    
        // Channel-Name bereinigen
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
            allow: [
              PermissionFlagsBits.ViewChannel,
              PermissionFlagsBits.SendMessages
            ]
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
          permissionOverwrites: permissionOverwrites,
          reason: `Ticket erstellt von ${interaction.user.tag}`
        });
    
        ticketChannels.set(interaction.user.id, { 
          channelId: channel.id, 
          type: ticketType 
        });
    
        await sendLog('create', interaction.user, 
          `**Typ:** ${name}\n**Kanal:** ${channel.toString()}`
        );
    
        const ticketEmbed = new EmbedBuilder()
          .setTitle(`${emoji} ${name} Ticket`)
          .setDescription([
            `Hallo ${interaction.user},\n`,
            'Bitte beschreibe dein Anliegen so genau wie möglich.',
            '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
            '**Zuständiges Team:**',
            `> ${roleIds.map(r => `<@&${r}>`).join('\n> ')}`,
            '**Ticket-Optionen:**',
            '🔒 - Ticket schließen',
            '🙋♂️ - Ticket übernehmen'
          ].join('\n'))
          .setColor(0x2F3136);
    
        const buttons = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId('close_ticket')
            .setLabel('Schließen')
            .setStyle(ButtonStyle.Danger)
            .setEmoji('🔒'),
          new ButtonBuilder()
            .setCustomId('claim_ticket')
            .setLabel('Übernehmen')
            .setStyle(ButtonStyle.Success)
            .setEmoji('🙌')
        );
    
        await channel.send({ 
          content: `${interaction.user} ${roleIds.map(r => `<@&${r}>`).join(' ')}`,
          embeds: [ticketEmbed],
          components: [buttons]
        });
    
        await interaction.reply({ 
          content: `✅ Ticket erstellt: ${channel}`, 
          ephemeral: true 
        });
    
      } catch (error) {
        console.error('Fehler beim Ticket erstellen:', error);
        await interaction.reply({ 
          content: `❌ Fehler: ${error.message}`,
          ephemeral: true 
        });
      }
    }
    
  
        async function handleCloseAllTickets(interaction) {
          if (!interaction.memberPermissions.has(PermissionFlagsBits.Administrator)) {
            return interaction.reply({ 
              content: '⛔ Nur Admins können alle Tickets schließen!', 
              ephemeral: true 
            });
          }
        
          const category = interaction.guild.channels.cache.get(config.categoryId);
          if (!category) return interaction.reply('❌ Ticket-Kategorie nicht gefunden!');
        
          try {
            const tickets = category.children.cache;
            let count = 0;
        
            // Lösche alle Kanäle in der Kategorie
            await Promise.all(tickets.map(async channel => {
              try {
                await channel.delete();
                count++;
              } catch (err) {
                console.error(`Konnte Kanal ${channel.name} nicht löschen:`, err);
              }
            }));
        
            // Leere die Ticket Map
            ticketChannels.clear();
        
            await interaction.reply({
              content: `✅ Erfolgreich ${count} Tickets geschlossen!`,
              ephemeral: true
            });
        
          } catch (error) {
            console.error('Fehler beim Schließen aller Tickets:', error);
            await interaction.reply({
              content: '❌ Fehler beim Schließen der Tickets!',
              ephemeral: true
            });
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
        
          // Überprüfe, ob der Benutzer mindestens eine der erforderlichen Rollen hat
          const hasRole = roleIds.some(roleId => member.roles.cache.has(roleId));
          if (!hasRole) {
            return interaction.reply({ 
              content: '❌ Keine Berechtigung!', 
              ephemeral: true 
            });
          }
        
          // Entferne Zugriff für alle zugehörigen Rollen
          await Promise.all(roleIds.map(async roleId => {
            await interaction.channel.permissionOverwrites.delete(roleId);
          }));
        
          // Füge claimenden Member hinzu
          await interaction.channel.permissionOverwrites.create(member.id, {
            ViewChannel: true,
            SendMessages: true,
            ManageMessages: true
          });
        
          // Update Embed und Buttons
          const newEmbed = EmbedBuilder.from(interaction.message.embeds[0])
            .spliceFields(3, 1, { 
              name: '**Bearbeitet von:**',
              value: `> ${member}` 
            });
        
          const newButtons = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId('close_ticket')
              .setLabel('Schließen')
              .setStyle(ButtonStyle.Danger)
              .setEmoji('🔒'),
            new ButtonBuilder()
              .setCustomId('claim_ticket')
              .setLabel('Übernommen')
              .setStyle(ButtonStyle.Secondary)
              .setDisabled(true)
              .setEmoji('✅')
          );
        
          await interaction.message.edit({ 
            embeds: [newEmbed],
            components: [newButtons]
          });
        
          await interaction.reply({ 
            content: `✅ ${member} hat das Ticket übernommen!` 
          });
        
          await sendLog('claim', interaction.user,
            `**Ticket:** ${interaction.channel.toString()}\n**Übernommen von:** ${member.toString()}`
          );
        }
    
    async function handleTicketClose(interaction) {
      const userEntry = Array.from(ticketChannels.entries()).find(
          ([userId, data]) => data.channelId === interaction.channel.id
      );
  
      if (!userEntry) return;
  
      const [userId, ticketData] = userEntry;
  
      if (interaction.user.id !== userId && 
          !interaction.member.roles.cache.has(config.ticketRoles[ticketData.type])) {
          return interaction.reply({ 
              content: '❌ Keine Berechtigung!', 
              ephemeral: true 
          });
      }
  
      // Log-Eintrag vor dem Löschen des Kanals
      await sendLog('close', interaction.user,
          `**Ticket:** ${interaction.channel.name}\n**Geschlossen von:** ${interaction.user.tag}`
      );
  
      // Kanal löschen
      await interaction.channel.delete();
      ticketChannels.delete(userId);
  
      // Benutzer per DM informieren mit Fehlerbehandlung
      try {
          const user = await client.users.fetch(userId);
          await user.send('🔒 Dein Ticket wurde geschlossen!');
      } catch (error) {
          console.error('Fehler beim Senden der DM:', error);
      }
  }
    
    client.login(config.token);
