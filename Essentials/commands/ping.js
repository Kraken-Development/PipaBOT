const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	aliases: ['latency'],
	execute(message) {
		let latencia = Math.floor(message.client.ping);
            const embed = new Discord.RichEmbed()
            .setAuthor(`Latencia de ${message.author.username}`)
            .setColor("RANDOM")
            .setTitle("Latencia")
            .setThumbnail(message.author.displayAvatarURL)
            .addField("Latencia:", + latencia + "ms");
            message.channel.send(embed);
	},
};