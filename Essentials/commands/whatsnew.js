const Discord = require('discord.js');
module.exports = {
    name: 'whatsnew',
    aliases: ['whats-new', 'what\'snew', 'what\'s-new', 'whatisnew', 'what-is-new'],
    execute: async (message, args) => {
      const embed = new Discord.RichEmbed()
        .setColor("#74FF00")
        .setTitle(`What's new?`)
        .setDescription("Version 1.0.1")
      .addField("Added:", "Literally everything")
      message.channel.send(embed);
    },
};
