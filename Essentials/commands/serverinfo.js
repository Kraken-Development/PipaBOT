const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	aliases: ['server-info'],
	description: 'server info',
	execute(message) {
		var server = message.guild;
        const embed = new Discord.RichEmbed()
        .setThumbnail(server.iconURL)
        .setAuthor(server.name, server.iconURL)
        .addField("Region:", server.region, true)
        .addField('Created in:', server.joinedAt.toDateString(), true)
        .addField('Owner:', server.owner.user.tag, true)
        .addField('Members:', server.memberCount, true)
        .addField('Roles:', server.roles.size, true)
        .setColor("RANDOM");

        message.channel.send(embed);

	},
};