const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !ban
    if (message.content.startsWith("!ban")) {

        // YETKİ
        if (
            !message.member.permissions.has("BanMembers")
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

        // KENDİNİ BANLAYAMAZSIN
        if (kullanıcı.id === message.author.id) {

            return message.reply(
                "❌ Kendini banlayamazsın!"
            );

        }

        // BANLA
        await kullanıcı.ban()
        .catch(() => {

            return message.reply(
                "❌ Kullanıcı banlanamadı!"
            );

        });

        // MESAJ
        message.channel.send(
`🔨 ${kullanıcı.user.tag} sunucudan banlandı!`
        );

    }

});