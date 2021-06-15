const Discord = require('discord.js'),
	fs = require('fs'),
	{ token, prefix } = require('./config.json');
bot = new Discord.Client();

bot.login(token);
bot.on('ready', () => {
	console.log('connecté');
	bot.user.setActivity(`en direct`, { type: 'STREAMING', url: 'https://twitch.tv/zeniiixfn' });
});

bot.commands = new Discord.Collection();
fs.readdir('./commands', (err, files) => {
	if (err) throw err;
	files.forEach((file) => {
		if (!file.endsWith('.js')) return;
		const command = require(`./commands/${file}`);
		bot.commands.set(command.name, command);
		console.log(`${file}`);
	});
});

bot.on('message', (message) => {
	if (message.type !== 'DEFAULT' || message.author.bot) return;

	const args = message.content.trim().split(/ +/g);
	const commandName = args.shift().toLowerCase();
	if (!commandName.startsWith(prefix)) return;
	const command = bot.commands.get(commandName.slice(prefix.length));
	if (!command) return;
	if (command.guildOnly && !message.guild) return message.channel.send("Désolé, une erreur s'est produite.");
	command.run(message, args, bot);
});
bot.on('guildMemberAdd', (member) => {
	console.log(`${member} est arrivé`);

  let embed = new Discord.MessageEmbed()
    .setDescription(`Bienvenue à ${member}!`)
    .setColor("RANDOM")

	member.guild.channels.cache
		.find((channel) => channel.name === '💬』chat')
    .send(embed)
		//.send(`Bienvenue ${member} sur le serveur on n'est maintenant ${member.guild.memberCount}`);
	member.roles.add('818956412272115734');
});

bot.on('guildMemberRemove', (member) => {
	console.log(`${member} est parti`);
	member.guild.channels.cache
		.find((channel) => channel.id === '823192282077200455')
		.send(`${member} A quitté le serveur on n'est maintenant ${member.guild.memberCount}`);
});


bot.on('message', async (message) => {
	let blacklist = [ '.com', '.fr', 'discord.gg/', '.txt', 'https://' ];

	for (let i in blacklist) {
		if (message.content.toLowerCase().includes(blacklist[i].toLowerCase())){
      if (message.deletable) message.delete();
      message.channel.send(`Vous n'avez pas l'autorisation d'envoyé des liens ici ${message.author}!`);
    }
	}
});


bot.on('message', async message => {

  let messageArray = message.content.split(' '),
    args = messageArray.slice(1)

  // messageArray[0] messageArray[1] messageArray[2]
  if (message.content.startsWith(prefix + 'clear')) {
		if (!message.guild) return message.reply(`\`Tu n'as pas le droit d'executer des commandes en DM.\``);
		if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply(`\`Tu n'as pas la permission de faire cette commande.\``);

		let member = message.mentions.users.first();
		let messages = message.channel.messages.fetch();
		let count = args[0];

    if (count && count < 99 && count > 0) {
      await message.channel.bulkDelete(Number(count) + 1, true);
      message.channel.send(`${message.author} > ${count} messages suprimées `)
    } else if (member) {
      let userMessages = (await messages).filter((m) => m.author.id === member.id);
			await message.channel.bulkDelete(userMessages, true);
      message.channel.send(`${message.author} > Les messages de ${userMessages.user.tag} ont été suprimées.`)
    } else {
      await message.channel.bulkDelete(Number(99) + 1, true);
      message.channel.send(`${message.author} > 100 messages suprimées `)
    }
	}


	if (message.content === prefix + 'mrc') message.channel.send('Merci à tous ce qui rejoigne 👌');
	if (message.content === prefix + 'bvn') message.channel.send('Bienvenue sur le serveur en profite bien 😁');
	if (message.content === prefix + 'bjr')	message.channel.send('Bonjour à toi 🔰');
  if (message.content === prefix + 'mrc') message.channel.send('Merci à tous ce qui rejoigne 👌')}
)


bot.on("message", async message => {
	if (message.content === "close"){
		if(message.channel.ParentID == "840613570550693918"){
			message.channel.send("Le problème a été reglé, le salon sera fermé dans 30 secondes !")
			message.guild.channels.cache.get(message.channels.id).setName(`Problème reglé`)
			setTimeout(() => {
				message.channel.delete()
			}, 30 *600)
		}
	}
})
bot.on("message", async message => {
	let args = message.content.trim().split(/ +/g)
	if (args [0].toLocaleLowerCase() === prefix + 'kick') {
		member = message.mentions.members.first()
		if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(message.author.username + "Tu n'a pas la permissions")
		if (!membre) return message.channel.send(message.author.username + "Tu doit mentionné un membre")
		if (membre.hasPermission("ADMINSTRATOR")) return message.channel.send(message.author.username + "tu ne peux pas kick cette utulisateur")
		message.guild.member(member).kick(member)
		message.channel.send("L'utilisateur" + member+ " a été kick du  serveur")
	}
})

//mute //
bot.on("message",async message => {
	if(message.content.startsWith("mute")){
		let User = message.guild.member(message.mentions.users.first())
		let time = message.content.split(" ").slice(1).join(" ").slice(23)
		let reason = message.content.split(" ").slice(2).join(" ").slice(1)
		if(!time || !reason || !User) return message.reply("Vous vous etes trompé :\nmute @user <temps> <reaison>")
		let dUser = User.id
		if(dUser == message.author.id) return message.reply("Vous ne pouvez pas vous ato-mute !")
		if(isNaN(time[0])) return message.reply("Veuillez rentree une valeur chiffré !")
		if(time[0] < 1) return message.reply("Veuillez rentrer une valeur suppérieur a 1 !")
		let mutrole = "id du role"
		if(User.roles.cache.has(muterole)) return message.reply("Ce membre eest déjà mute !")

		message.channel.send(User + "a bien été mute par " + message.author + "pendant" + time[0] + " secondes pour la raison " + reason)

		User.roles.add(muterole)

		setTimeout(() => {
        User.roles.remove(mutrole)
		message.channel.send(User+ a)
		}, time[0] * 600)
	}
})
bot.on("message", async message => {
	if(message.content.startsWith("sug")){
		let msg = message.content.slice(4)
		if(!msg) return message.reply(" msg")

		let embed = new Discord.MessageEmbed()
		.addField('Nouvell suggestions de "+message.author.username, msg')
		let msgreaction = await message.channel.send(embed)

		await msgrecation.react("801790524053913621")
		await msgrecation.react("750465255389397123")
	}
})
//ping
bot.on("message", async message =>{
	if(message.content === "ping"){
		let msg = await message.channel.send("**Ping en cours...**")

		let embed = new Discord.MessageEmbed()
		.addField("**Votre ping est de : ",Math.floor(msg.createdAt - message.createdAt))
		.addField("**Ma latence est de :", bot.ws.ping)
		message.channel.send(embed)
		msg.delete()
	}
})