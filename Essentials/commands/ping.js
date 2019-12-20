const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	aliases: ['latency'],
	description: 'Ping!',
	execute(message) {
		let latencia = Math.floor(message.client.ping);
            const embed = new Discord.RichEmbed()
            .setAuthor(`Ping de ${message.author.username}`)
            .setColor("RANDOM")
            .setTitle("Mira tu ping!")
            .setThumbnail(message.author.displayAvatarURL)
            .addField("Pong!", ":ping_pong:" + latencia + "ms");
            message.channel.send(embed);
	},
};