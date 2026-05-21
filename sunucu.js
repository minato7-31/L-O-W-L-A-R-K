const { EmbedBuilder } = require("discord.js");

const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    if (message.content === "!sunucu") {

        const embed = new EmbedBuilder()
        .setColor("Purple")
        .setTitle("🌸 Sunucu Bilgileri")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addFields(
            {
                name: "📛 Sunucu Adı",
                value: `${message.guild.name}`,
                inline: true
            },
            {
                name: "👑 Kurucu",
                value: `<@${message.guild.ownerId}>`,
                inline: true
            },
            {
                name: "👥 Üye Sayısı",
                value: `${message.guild.memberCount}`,
                inline: true
            },
            {
                name: "🆔 Sunucu ID",
                value: `${message.guild.id}`,
                inline: false
            },
            {
                name: "📅 Kuruluş Tarihi",
                value: `<t:${parseInt(message.guild.createdTimestamp / 1000)}:F>`,
                inline: false
            }
        )
        .setImage(message.guild.bannerURL({ size: 1024 }))
        .setFooter({
            text: `${message.author.username} tarafından istendi`
        })
        .setTimestamp();

        message.reply({
            embeds: [embed]
        });

    }

});