const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    aliases: ['pfp', 'icon'],
	description: 'just an avatar',
	execute(message) {
		let mencionado = message.mentions.members.first() || message.member;
          const embed = new Discord.RichEmbed()
          .setTitle(`Avatar de: ${mencionado.user.username}`)
          .setColor('RANDOM')
          .setImage(mencionado.user.displayAvatarURL);
          message.channel.send(embed);
	},
};