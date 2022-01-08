const Discord = require("discord.js"),
backup = require("discord-backup"),
client = new Discord.Client(),
settings = {
    token: "OTI5MjA2MDk2.Ydj6dQ.-_fIgwCNu9i"
};

client.on("ready", () => {
    console.log("Successfully connected to Discord.");

    backup.setStorageFolder(__dirname + "/backups/");
    console.log("Set backup location.");

    let guild = client.guilds.cache.find(guild => guild.name === "Study's server");
    console.log("Found guild ID from guild name: " + guild.id);

    let startTime = Math.round(new Date().getTime());

    const backupID = "929222691603480576";
    //const backupID = "929229089301200896";
    



    //backup.load(backupID, guild, {maxMessagesPerChannel: 999}).then(() => {});
    

    /*
    , {
        clearGuildBeforeRestore: true,
        maxMessagesPerChannel: 999
    });
    
    */

    /*.then((backupID) => {
        let endTime = Math.round(new Date().getTime());
        console.log("Restore is done, ID: " + backupID)
        console.log("The process took: " + (endTime - startTime) / 1000 + " seconds to complete.")
        console.log("Exiting...")
        //process.exit()
    });


*/



    backup.load(backupID, guild, {
        maxMessagesPerChannel: 999999
    }).then(() => {
      
       //clearGuildBeforeRestore: true
      //backup.remove(backupID); 
    // When the backup is loaded, it's recommended to delete it
    });



});

client.login(settings.token);
