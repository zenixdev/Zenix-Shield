const Discord = require('discord.js');
module.exports = {
    run: async(message, args) => {
        let embed = new Discord.MessageEmbed() 
            .setTitle('<a:812347665304125471:841655035791802438> **Liste des commandes** <a:812347665304125471:841655035791802438>')
            .addField("<:adm1:840186867080888320> ┋ __Owner__ ", "`wl`, `bl`")

            .addField("<:mod77:840186890165944332> ┋ __Modération__", "`ban`, `kick`, `tempban`,`clear`, `unban`, `mute`, `unmute`, `tempmute`, `slowmode`, `réglement`")

            .addField("<a:823538178622488616:840201003248255027> ┋ __Divertissement__", "`anonymous`, `fbi`, `poutine`, `trump`, `macron`, `cheh`, `meme`, `coinflip`, `issou`, `covid`, `8ball`, `nitro`, `panda`, `koala`, `fox`, `cat`, `dog`")

            .addField(" ┋ __NSFW__", "`hentai`, `boobs`, `4k`, `waifu`, `ass`, `wallpaper`")

            .addField("<:816750102881370203:840196254675107879> ┋ __Général__", "`help`, `embed`, `img`, `user-info`, `server-info`, `sondage`, `about`,`ascii`, `reversetext`, `pic`, `rdm-number`")

            .setThumbnail("https://media.discordapp.net/attachments/787462683658158142/843598168222203954/unknown_1.png?width=688&height=606")
            .setFooter(message.client.username, message.client.user.avatarURL({ dynamic: true}))
            .setColor("#ff0000")
            .setTimestamp()
            message.channel.send(embed)
         
    },
    name: 'help'
    
}