module.exports = {
    // Bot-Stammdaten
    token: 'DEIN_BOT_TOKEN',
    clientId: 'DEINE_CLIENT_ID',
    guildId: 'DEINE_GUILD_ID',
  
    // Rollenkonfiguration
    ticketRoles: {
      support: ['SUPPORT_ROLLEN_IDS'],
      team: ['TEAM_ROLLEN_ID'],
      fraction: ['FRAKTIONS_ROLLEN_IDS'],
      highteam: ['HIGHTEAM_ROLLE_IDS'],
    },
  
    // Kanal-IDs
    logChannelId: 'LOG_KANAL_ID',
    ticketCategories: {
      support: 'KATEGORIE_ID',
      team: 'KATEGORIE_ID',
      fraction: 'KATEGORIE_ID',
      highteam: 'KATEGORIE_ID'
    },
  
    // Texteinstellungen
    messages: {
      noPermission: '⛔ Keine Berechtigung!',
      ticketAlreadyExists: '❌ Du hast bereits ein offenes Ticket!',
      ticketCreated: '✅ Ticket erstellt:',
      ticketClosed: '🔒 Dein Ticket wurde geschlossen!'
    },
  
    // Embed-Einstellungen
    embeds: {
      panel: {
        title: '🎫 Dortmund City Ticket System',
        description: [
          '**Willkommen beim Dortmund City Support!**\n',
          '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
          '**Ticket-Typen:**',
          '🛠️ **Support** - Technische Hilfe & Fragen',
          '👥 **Teambewerbung** - Bewerbung für unser Team',
          '🚔 **Fraktionsbewerbung** - Fraktionsangelegenheiten',
          '👑 **High Team** - Kontakt zur Serverleitung',
          '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
          '▶️ Wähle unten deinen Ticket-Typ aus!'
        ].join('\n'),
        color: 0x2F3136,
        thumbnail: 'https://i.imgur.com/A3yS5LJ.png',
        footer: 'Dortmund City RP | Professioneller Support rund um die Uhr'
      },
      
      ticket: {
        titles: {
          support: '🛠️ Support Ticket',
          team: '👥 Teambewerbung',
          fraction: '🚔 Fraktionsbewerbung',
          highteam: '👑 High Team'
        },
        color: 0x2F3136,
        footer: 'Dortmund City Ticket System'
      }
    },
  
    // Ticket-Typen
    ticketTypes: {
      support: { emoji: '🛠️', name: 'Support' },
      team: { emoji: '👥', name: 'Teambewerbung' },
      fraction: { emoji: '🚔', name: 'Fraktionsbewerbung' },
      highteam: { emoji: '👑', name: 'High Team' }
    },
  
    // Button-Einstellungen
    buttons: {
      close: {
        label: 'Schließen',
        style: 'Danger',
        emoji: '🔒'
      },
      claim: {
        label: 'Übernehmen',
        style: 'Success',
        emoji: '🙌'
      }
    },
  
    // Log-Einstellungen
    logs: {
      colors: {
        create: 0x00FF00,
        close: 0xFF0000,
        claim: 0xFFA500
      }
    }
  };