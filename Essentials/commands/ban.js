const Discord = require('discord.js');
module.exports = {
    name: 'ban',
	description: 'just an avatar',
	execute(message, args) {
		const mencionado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        const razon = args.join(' ').slice(22);
    
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No tienes suficientes permisos para usar este comando");
        if(!mencionado) return message.reply("No se ha podido encontrar el usuario");
        if(mencionado.hasPermission("BAN_MEMBERS")) return message.reply("Su nivel de administrador es mayor a 9000, no puedo banearlo");
        if(!razon) return message.reply("Debes añadir una razón");
        
        const embed = new Discord.RichEmbed()
        .setTitle("**BAN**")
        .setColor("RANDOM")
        .addField("Usuario baneado:", `${mencionado}`)
        .addField("Baneado por:", `${message.author.username}`)
        .addField("Canal:", message.channel)
        .addField("Hora:", message.createdAt)
        .addField("Razón:", razon);
    
        let logs = message.guild.channels.find(`name`, "logs");
        if(!logs) return message.channel.send("No encuentro el canal de logs por ningún lado :eyes:");
    
        message.guild.member(mencionado).ban(razon);
        logs.send(embed);
        message.channel.send(`${message.author.username} acaba de hacer **La Jugada de La Partida**, baneando a ${mencionado.user.username}. Para más información ve a ${logs}`);
	},
};