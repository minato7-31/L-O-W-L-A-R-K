const {
    EmbedBuilder
} = require("discord.js");

const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !ship
    if (message.content.startsWith("!ship")) {

        const kullanıcılar =
        message.mentions.users.map(
            x => x
        );

        // 2 KİŞİ
        if (kullanıcılar.length < 2) {

            return message.reply(
                "❌ 2 kişi etiketle!"
            );

        }

        const user1 =
        kullanıcılar[0];

        const user2 =
        kullanıcılar[1];

        // RANDOM %
        const yüzde =
        Math.floor(
            Math.random() * 101
        );

        // DURUM
        let durum =
        "💔 Kötü eşleşme";

        if (yüzde >= 30)
        durum =
        "💕 Güzel eşleşme";

        if (yüzde >= 60)
        durum =
        "💖 Çok iyi eşleşme";

        if (yüzde >= 90)
        durum =
        "💍 Ruh eşi!";

        // EMBED
        const embed =
        new EmbedBuilder()

        .setTitle(
            "💘 Ship Sistemi"
        )

        .setDescription(`
${user1} ❤️ ${user2}

💖 Aşk Oranı:
%${yüzde}

${durum}
        `)

        .setColor("Pink")

        // RESİM
        .setImage(
            "attachment://ship.png"
        )

        .setThumbnail(
            user1.displayAvatarURL({
                dynamic: true
            })
        )

        .setTimestamp();

        // GÖNDER
        message.reply({
            embeds: [embed],
            files: ["./ship.png"]
        });

    }

});