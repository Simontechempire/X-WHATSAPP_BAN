require('dotenv').config();
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const fakeDB = require('./data/real-db.json');

const app = express();
const PORT = process.env.PORT || 3000;

// --- TELEGRAM BOT PART ---
const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "DEMO LAB ACTIVE\n/dump - get real dump");
});

bot.onText(/\/dump/, (msg) => {
  bot.sendMessage(msg.chat.id, `real DUMP (educational):\n\`\`\`json\n${JSON.stringify(fakeDB.slice(0,3), null, 2)}\n\`\`\``, {parse_mode: "Markdown"});
});

console.log("Telegram bot running...");

// --- WEBSITE API PART ---
app.get('/', (req, res) => {
  res.send(`<h1>Real Dump Lab</h1><p>Educational only.</p><a href="/api/dump">/api/dump</a>`);
});

app.get('/api/dump', (req, res) => {
  res.json({
    status: "simulated",
    note: "This is real data for education / portfolio only -  real exploit",
    data: realDB
  });
});

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
