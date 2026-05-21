const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !sil
    if (message.content.startsWith("!sil")) {

        // YETKİ
        if (
            !message.member.permissions.has("ManageMessages")
        ) {

            return message.reply(
                "❌ Mesaj silme yetkin yok!"
            );

        }

        // SAYI
        const sayı =
        parseInt(
            message.content.split(" ")[1]
        );

        // HATALI
        if (!sayı || sayı < 1 || sayı > 100) {

            return message.reply(
                "❌ 1 ile 100 arasında sayı yaz!"
            );

        }

        // MESAJLARI SİL
        await message.channel.bulkDelete(
            sayı,
            true
        );

        // BİLGİ
        const msg =
        await message.channel.send(
`🗑️ ${sayı} mesaj silindi!`
        );

        setTimeout(() => {

            msg.delete()
            .catch(() => {});

        }, 3000);

    }

});