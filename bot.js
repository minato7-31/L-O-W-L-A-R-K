const {
    Client,
    GatewayIntentBits
} = require("discord.js");

const fs = require("fs");

// CLIENT
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences
    ]
});

// GLOBAL CLIENT
global.client = client;

// DOSYALARI YÜKLE
fs.readdirSync("./").forEach(file => {

    if (
        file.endsWith(".js")
        &&
        file !== "bot.js"
    ) {

        console.log(`${file} yüklendi!`);

        require(`./${file}`);

    }

});

// BOT HAZIR
client.once("ready", () => {

    console.log(`
=================================
${client.user.tag} aktif!
=================================
    `);

});

// TOKEN
client.login(process.env.TOKEN);

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bot aktif!");
});

app.listen(PORT, () => {
  console.log(`Web server ${PORT} portunda aktif!`);
});