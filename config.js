module.exports = {
  // Bot-Grundkonfiguration
  token: 'DEIN_BOT_TOKEN',
  clientId: 'DEINE_CLIENT_ID',
  guildId: 'DEINE_SERVER_ID',

  // Rollenkonfiguration
  ticketRoles: {
    support: ['SUPPORT_ROLLE_1_ID', 'SUPPORT_ROLLE_2_ID'],
    team: ['TEAM_ROLLE_ID'],
    fraction: ['FRAKTION_ROLLE_1_ID', 'FRAKTION_ROLLE_2_ID'],
    highteam: ['HIGHTEAM_ROLLE_ID']
  },

  // Kanal- und Kategorie-IDs
  logChannelId: 'LOGS_KANAL_ID',
  ticketCategories: {
    support: 'TICKET_KATEGORIE_ID',
    team: 'TICKET_KATEGORIE_ID',
    fraction: 'TICKET_KATEGORIE_ID',
    highteam: 'TICKET_KATEGORIE_ID'
  },

  // Textnachrichten
  messages: {
    noPermission: '⛔ Keine Berechtigung!',
    ticketAlreadyExists: '❌ Du hast bereits ein offenes Ticket!',
    ticketCreated: '✅ Ticket erstellt:',
    ticketClosed: '🔒 Dein Ticket wurde geschlossen!',
    panelCreated: '✅ Panel erfolgreich erstellt!',
    error: '❌ Ein Fehler ist aufgetreten!',
    selectPlaceholder: 'Ticket-Typ auswählen',
    ticketInstructions: 'Bitte beschreibe dein Anliegen so genau wie möglich.',
    ticketOptions: '🔒 - Ticket schließen\n🙋♂️ - Ticket übernehmen',
    claimedLabel: 'Übernommen',
    ticketClaimed: '✅ {user} hat das Ticket übernommen!',
    allClosed: '✅ Erfolgreich {count} Tickets geschlossen!',
    closeError: '❌ Fehler beim Schließen der Tickets!',
    invalidRoles: '❌ Ungültige Rollen-IDs: {roles}',
    dmNotification: 'Ein Teammitglied hat auf Ihr Ticket geantwortet. Bitte überprüfen Sie das Ticket für weitere Informationen.',
    dmSent: 'DM wurde erfolgreich an den Ticket-Ersteller gesendet.',
    dmError: 'Fehler beim Senden der DM. Möglicherweise hat der Benutzer Direktnachrichten deaktiviert.'
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

  // Logging-Einstellungen
  logs: {
    colors: {
      create: 0x00FF00, // Grün
      close: 0xFF0000,  // Rot
      claim: 0xFFA500   // Orange
    }
  }
};