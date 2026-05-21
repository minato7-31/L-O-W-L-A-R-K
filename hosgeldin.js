const {
    EmbedBuilder
} = require("discord.js");

const client = global.client;

client.on("guildMemberAdd", async member => {

    // HOŞGELDİN KANALI
    const kanal =
    member.guild.systemChannel;

    // KANAL YOKSA
    if (!kanal) return;

    // EMBED
    const embed =
    new EmbedBuilder()

    .setTitle(
        "🌸 Hoşgeldin"
    )

    .setDescription(`
💖 ${member}

✨ Hep bizimle kal!
    `)

    .setColor("Pink")

    .setThumbnail(
        member.user.displayAvatarURL({
            dynamic: true
        })
    )

    // GIF
    .setImage(
        "attachment://hosgeldin.gif"
    )

    .setTimestamp();

    // GÖNDER
    kanal.send({
        embeds: [embed],
        files: ["./hosgeldin.gif"]
    });

});