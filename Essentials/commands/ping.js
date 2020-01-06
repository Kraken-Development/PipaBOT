const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	aliases: ['latency'],
	execute(message) {
		let latencia = Math.floor(message.client.ping);
            const embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}'s latency'`)
            .setColor("RANDOM")
            .setTitle("Latency")
            .setThumbnail(message.author.displayAvatarURL)
            .addField("Latencia:", + latencia + "ms");
            message.channel.send(embed);
	},
};