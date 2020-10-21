## How to backup?
1. Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications/).
2. Generate a client token with the bot scope.
3. Update the token in `settings["token"]` in `backup.js` with your newly created bot token.
4. Add the bot to the server you wish to backup with the following URL:
    > https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID_HERE&permissions=0&scope=bot
5. Update the `let guild =` variable to the name of the server you wish to backup.
6. `node backup.js`

## How to not backup specific channels?
* Remove "Text Permissions > Read Messages" permissions for the bot user on each channel that you do not want backed up. If the bot cannot read the channel, it cannot back it up.

## How to backup more than 999,999 messages per channel?
* Adjust the `maxMessagesPerChannel: 999999,` variable to however many messages you want to backup.


*Be warned that the Discord API is incredibly slow and you will be looking at hours long execution time at this many messages, especially across multiple channels.*

## What options are there for the `doNotBackup` variable?
* You can chose not to backup any of the following:
    * roles
    * channels
        * This includes channels, categories, and messages.
    * emojis
    * bans
        * If you wish to backup bans, the bot must permission to ban users in order to access the ban list.

## How do I backup images?
* You can backup images by adding `saveImages: "base64"` or `saveImages: "url"` to the `backup.create()` function call.

`base64` backs up the actual image data where as `url` simply backs up a link to the Discord image hosted on the Discord server. If the Discord server gets banned, the URLs will all be deleted so it is recommended to use `base64` or not back up images at all.

*Image backups will also exponentially increase backup execution time.*

## Why is the bot not backing up my channel/messages?
* Make sure the bot has permission to read the channel and make sure the total amount of messages in the channel is not more than the `maxMessagesPerChannel` variable. To check how many messages are in a channel, you can use `in: #general-chat` or `in: #{your channel name here}` in the Discord search bar. It'll return the total amount. 