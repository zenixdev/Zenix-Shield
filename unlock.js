module.exports = {
    name: "unlock",
    description: "lock a given channel for a particular role!",
    run: async (message, args) => {
        if (!message.guild) return message.reply(`\`Tu n'as pas le droit d'executer des commandes en DM.\``);
			if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply(`\`Tu n'as pas la permission de faire cette commande.\``);
	
                  const role2 = message.guild.roles.cache.find(role => role.id === '782548761724321802') 
                   message.channel.updateOverwrite(role2,{ 'SEND_MESSAGES': true}) 
                   message.channel.send(`${message.author} Le channel est maintenant ouvert`)
                

    }
}