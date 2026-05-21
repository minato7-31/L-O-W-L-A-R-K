const { EmbedBuilder } = require("discord.js");

const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !pp
    if (message.content.startsWith("!pp")) {

        const user =
        message.mentions.users.first()
        || message.author;

        const embed =
        new EmbedBuilder()

        .setTitle(
            `🖼️ ${user.username} Profil Fotoğrafı`
        )

        .setImage(
            user.displayAvatarURL({
                dynamic: true,
                size: 4096
            })
        )

        .setColor("Random")

        .setFooter({
            text:
            `${message.author.username} tarafından istendi`
        })

        .setTimestamp();

        message.reply({
            embeds: [embed]
        });

    }

});