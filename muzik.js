const {
    Client,
    GatewayIntentBits
} = require("discord.js");

const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource,
    AudioPlayerStatus
} = require("@discordjs/voice");

const play = require("play-dl");

// EKSTRA
const prism = require("prism-media");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.once("ready", () => {
    console.log(`${client.user.tag} aktif!`);
});

client.on("messageCreate", async message => {

    if(message.author.bot) return;

    // !PLAY
    if(message.content.startsWith("!play")) {

        const args =
        message.content.split(" ").slice(1);

        const url = args[0];

        if(!url) {

            return message.reply(
                ":musical_note: Şarkı linki gir!"
            );
        }

        // SES KANALI
        const voiceChannel =
        message.member.voice.channel;

        if(!voiceChannel) {

            return message.reply(
                ":x: Önce ses kanalına gir!"
            );
        }

        // BAĞLAN
        const connection =
        joinVoiceChannel({

            channelId:
            voiceChannel.id,

            guildId:
            message.guild.id,

            adapterCreator:
            message.guild.voiceAdapterCreator
        });

        // YOUTUBE STREAM
        const stream =
        await play.stream(url);

        // PLAYER
        const player =
        createAudioPlayer();

        // RESOURCE
        const resource =
        createAudioResource(
            stream.stream,
            {
                inputType:
                stream.type
            }
        );

        // ÇAL
        player.play(resource);

        connection.subscribe(player);

        // MESAJ
        message.channel.send(
            ":notes: Şarkı çalıyor!"
        );

        player.on(
            AudioPlayerStatus.Playing,
            () => {

                console.log(
                    "Müzik başladı!"
                );

            }
        );

    }

});
