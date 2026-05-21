const client = global.client;

const spamMap = new Map();

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !spamengel aç/kapat
    if (message.content.startsWith("!spamengel")) {

        if (
            !message.member.permissions.has("Administrator")
        ) {

            return message.reply(
                "❌ Yönetici olmalısın!"
            );

        }

        const args =
        message.content.split(" ")[1];

        // AÇ
        if (args === "aç") {

            global.spamEngel = true;

            return message.reply(
                "✅ Spam engel açıldı!"
            );

        }

        // KAPAT
        if (args === "kapat") {

            global.spamEngel = false;

            return message.reply(
                "❌ Spam engel kapatıldı!"
            );

        }

        // YANLIŞ KULLANIM
        return message.reply(
"!spamengel aç / kapat"
        );

    }

    // KAPALIYSA
    if (!global.spamEngel) return;

    // KULLANICI YOKSA
    if (!spamMap.has(message.author.id)) {

        spamMap.set(
            message.author.id,
            {
                msg: 1,
                lastMsg: Date.now()
            }
        );

    } else {

        const data =
        spamMap.get(message.author.id);

        const difference =
        Date.now() - data.lastMsg;

        // 3 SANİYE İÇİNDE
        if (difference < 3000) {

            data.msg++;

            // 5 MESAJ
            if (data.msg >= 5) {

                await message.delete()
                .catch(() => {});

                const msg =
                await message.channel.send(
`🚫 ${message.author} spam yaptığı için mesajı silindi!`
                );

                setTimeout(() => {

                    msg.delete()
                    .catch(() => {});

                }, 3000);

            }

        } else {

            data.msg = 1;

        }

        data.lastMsg = Date.now();

    }

});