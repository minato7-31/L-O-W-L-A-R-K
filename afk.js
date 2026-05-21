const {
    EmbedBuilder
} = require("discord.js");

const {
    QuickDB
} = require("quick.db");

const db = new QuickDB();

const client = global.client;

// AFK AYARLA
client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !afk
    if (message.content.startsWith("!afk")) {

        const sebep =
        message.content.slice(5)
        || "Sebep belirtilmedi.";

        // DB KAYIT
        await db.set(
            `afk_${message.author.id}`,
            sebep
        );

        // EMBED
        const embed =
        new EmbedBuilder()

        .setTitle(
            "🌙 AFK Modu"
        )

        .setDescription(`
💤 ${message.author}

AFK moduna geçti!

📝 Sebep:
${sebep}
        `)

        .setColor("Purple")

        .setTimestamp();

        message.reply({
            embeds: [embed]
        });

    }

});

// ETİKETLENİNCE
client.on("messageCreate", async message => {

    if (message.author.bot) return;

    const user =
    message.mentions.users.first();

    if (!user) return;

    // AFK MI
    const afk =
    await db.get(
        `afk_${user.id}`
    );

    if (afk) {

        message.reply(`
🌙 ${user.username} şu anda AFK!

📝 Sebep:
${afk}
        `);

    }

});

// AFK ÇIKAR
client.on("messageCreate", async message => {

    if (message.author.bot) return;

    const afk =
    await db.get(
        `afk_${message.author.id}`
    );

    if (afk) {

        await db.delete(
            `afk_${message.author.id}`
        );

        message.reply(
            "✅ AFK modundan çıktın!"
        );

    }

});