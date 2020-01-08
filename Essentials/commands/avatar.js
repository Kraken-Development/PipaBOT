const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    aliases: ['pfp', 'icon'],
	execute(message) {
		let userDiscord = message.mentions.members.first() || message.member;
          const embed = new Discord.RichEmbed()
          .setTitle(`Avatar de ${userDiscord.user.username}`)
          .setColor('RANDOM')
          .setImage(userDiscord.user.displayAvatarURL);
          message.channel.send(embed);
	},
};