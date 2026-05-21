const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !mute
    if (message.content.startsWith("!mute")) {

        // YETKİ
        if (
            !message.member.permissions.has("ModerateMembers")
        ) {

            return message.reply(
                "❌ Bu komut için yetkin yok!"
            );

        }

        // KULLANICI
        const kullanıcı =
        message.mentions.members.first();

        if (!kullanıcı) {

            return message.reply(
                "❌ Bir kullanıcı etiketle!"
            );

        }

        // SÜRE
        const süre =
        parseInt(
            message.content.split(" ")[2]
        );

        if (!süre) {

            return message.reply(
"!mute @kişi dakika"
            );

        }

        // MUTE
        await kullanıcı.timeout(
            süre * 60 * 1000
        );

        // MESAJ
        message.channel.send(
`🔇 ${kullanıcı} ${süre} dakika susturuldu!`
        );

    }

});