const Discord = require('discord.js');
module.exports = {
    name: 'ban',
  guildOnly: true,
	execute(message, args) {
		const userDiscord = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        const reason = args.join(' ').slice(22);
    
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No tienes suficientes permisos para ejecutar este comando");
        if(!userDiscord) return message.reply("Usuario no encontrado");
        if(userDiscord.hasPermission("BAN_MEMBERS")) return message.reply(`El nivel de admin de ${userDiscord.user.username} es de más de 9000!`);
        if(!reason) return message.reply("Debes ingresar una razón");
        
        const embed = new Discord.RichEmbed()
        .setTitle("**BAN**")
        .setColor("RANDOM")
        .addField("Usuario baneado:", `${userDiscord}`)
        .addField("Baneado por:", `${message.author.username}`)
        .addField("Canal:", message.channel)
        .addField("Día:", message.createdAt)
        .addField("Razón:", reason);
    
        let logs = message.guild.channels.find(`name`, "logs");
        if(logs) logs.send(embed);
    
        message.guild.member(userDiscord).ban(reason);
        message.channel.send(`${message.author.username} acaba de hacerse la JUGADA DE LA PARTIDA baneando a ${userDiscord.user.username}`);
	},
};