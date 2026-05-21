const client = global.client;

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // !sa
    if (message.content === "!sa") {

        message.reply(
            "🌸 Aleyküm Selam, hoş geldin!"
        );

    }

});