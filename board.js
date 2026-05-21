const {
    EmbedBuilder
} = require("discord.js");

const {
    QuickDB
} = require("quick.db");

const db = new QuickDB();

const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !leaderboard
    if (message.content === "!leaderboard") {

        // TÜM XP VERİLERİ
        const all =
        await db.all();

        // XP OLANLAR
        const xpData =
        all.filter(data =>
            data.id.startsWith("xp_")
        );

        // SIRALA
        xpData.sort((a, b) =>
            b.value - a.value
        );

        // İLK 10
        const top10 =
        xpData.slice(0, 10);

        // YAZI
        let text = "";

        for (let i = 0; i < top10.length; i++) {

            const userId =
            top10[i].id.replace("xp_", "");

            const user =
            await client.users.fetch(userId)
            .catch(() => null);

            if (!user) continue;

            text += `
🏆 ${i + 1}. ${user.username}
✨ XP: ${top10[i].value}
            `;

        }

        // EMBED
        const embed =
        new EmbedBuilder()

        .setTitle(
            "🏆 Leaderboard"
        )

        .setDescription(
            text || "Veri yok!"
        )

        .setColor("Gold")

        .setFooter({
            text:
            `${message.guild.name}`
        })

        .setTimestamp();

        // GÖNDER
        message.channel.send({
            embeds: [embed]
        });

    }

});