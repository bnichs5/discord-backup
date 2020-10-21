const Discord = require("discord.js"),
backup = require("discord-backup"),
client = new Discord.Client(),
settings = {
    token: "haxin tokens? no papa"
};

client.on("ready", () => {
    console.log("Successfully connected to Discord.");

    backup.setStorageFolder(__dirname + "/backups/");
    console.log("Set backup location.");

    let guild = client.guilds.cache.find(guild => guild.name === "/r/AnimePiracy Server");
    console.log("Found guild ID from guild name: " + guild.id);

    let startTime = Math.round(new Date().getTime());

    backup.create(guild, {
        maxMessagesPerChannel: 999999,
        jsonBeautify: true,
        doNotBackup: ["bans"],
    }).then((backupData) => {
        let endTime = Math.round(new Date().getTime());
        console.log("Backup is done, ID: " + backupData.id)
        console.log("The process took: " + (endTime - startTime) / 1000 + " seconds to complete.")
        console.log("Exiting...")
        process.exit()
    });

});

client.login(settings.token);