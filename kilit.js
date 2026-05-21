const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !kilit
    if (message.content === "!kilit") {

        // YETKİ
        if (
            !message.member.permissions.has("ManageChannels")
        ) {

            return message.reply(
                "❌ Bu komut için yetkin yok!"
            );

        }

        // KANALI KİLİTLE
        await message.channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            {
                SendMessages: false
            }
        );

        // MESAJ
        message.channel.send(
            "🔒 Kanal kilitlendi!"
        );

    }

    // !kilitaç
    if (message.content === "!kilitaç") {

        // YETKİ
        if (
            !message.member.permissions.has("ManageChannels")
        ) {

            return message.reply(
                "❌ Bu komut için yetkin yok!"
            );

        }

        // KİLİDİ AÇ
        await message.channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            {
                SendMessages: true
            }
        );

        // MESAJ
        message.channel.send(
            "🔓 Kanalın kilidi açıldı!"
        );

    }

});