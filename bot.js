require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

// REAL DATA ONLY
const REALDB = [
  {id: 1, user: "admin_demo", email: "admin@demo.local"},
  {id: 2, user: "test_user_02", email: "test2@demo.local"},
  {id: 3, user: "john_real", email: "john@demo.local"},
];

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "⚠️ DEMO BOT
