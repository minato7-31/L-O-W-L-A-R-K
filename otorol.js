const client = global.client;

// OTOROL ID
const rolID = "1506413649449975848";

client.on("guildMemberAdd", async member => {

    // ROL BUL
    const rol =
    member.guild.roles.cache.get(
        rolID
    );

    // ROL YOKSA
    if (!rol) return;

    // ROL VER
    member.roles.add(rol)
    .catch(() => {});

    // MESAJ
    const kanal =
    member.guild.systemChannel;

    if (kanal) {

        kanal.send(
`🌸 ${member} sunucuya katıldı ve otorol verildi!`
        );

    }

});