const Discord = require('discord.js');
module.exports = {
	name: 'kick',
    description: 'Kick people',
    guildOnly: true,
	execute(message, args) {
		const mencionado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        const razon = args.join(' ').slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("No tienes suficientes permisos para usar este comando");
        if(!mencionado) return message.reply("¿A quién quieres banear?");
        if(mencionado.hasPermission("ADMINISTRATOR")) return message.reply("Su nivel de administrador es mayor a 9000, no puedo banearlo");
        if(!razon) return message.reply("Debes añadir una razón");
        
        const embed = new Discord.RichEmbed()
        .setTitle("KICK")
        .setColor("RANDOM")
        .addField("Usuario expulsado:", `${mencionado}`)
        .addField("Expulsado por:", `${message.author.username}`)
        .addField("Canal:", message.channel)
        .addField("Hora:", message.createdAt)
        .addField("Razón:", razon);
    
        let logs = message.guild.channels.find(`name`, "logs");
        if(!logs) return message.channel.send("No encuentro el canal de logs por ningún lado :eyes:");
    
        message.guild.member(mencionado).kick(razon);
        logs.send(embed);
        message.channel.send(`El usuario ${mencionado.user.username} acaba de ser baneado por ${message.author.username}`);
	},
};