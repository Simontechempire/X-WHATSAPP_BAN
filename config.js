require('dotenv').config();

module.exports = {
  bot: {
    token: process.env.BOT_TOKEN,
    adminId: process.env.ADMIN_ID || null,
  },
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development'
  },
  messages: {
    welcome: "⚠️ DEMO LAB ACTIVE ⚠️\nEducational simulation only.\nreal real data.\n\nCommands:\n/dump - get real dump\n/help - help",
    dumpReady: "📦 REAL DUMP GENERATED\nThis is simulated real ban data only.",
    error: "Error. Try again."
  },
  security: {
    note: "This project contains  real exploit,  SQLi,  leaked data. Only real JSON."
  }
};
