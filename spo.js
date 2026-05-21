const { EmbedBuilder } = require("discord.js");

const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    if (message.content === "!spo") {

        const member = message.guild.members.cache.get(message.author.id);

        const activity = member.presence?.activities?.find(
            x => x.name === "Spotify"
        );

        if (!activity) {

            return message.reply("❌ Şu anda Spotify dinlemiyorsun!");

        }

        const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle("🎵 Spotify")
        .setDescription(`
🎶 Şarkı:
${activity.details}

👤 Sanatçı:
${activity.state}

💿 Albüm:
${activity.assets.largeText}
`)
        .setThumbnail(
            `https://i.scdn.co/image/${activity.assets.largeImage.slice(8)}`
        )
        .setFooter({
            text: `${message.author.username} dinliyor`
        })
        .setTimestamp();

        message.reply({
            embeds: [embed]
        });

    }

});