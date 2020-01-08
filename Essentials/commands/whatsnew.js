const Discord = require('discord.js');
module.exports = {
    name: 'whatsnew',
    aliases: ['whats-new', 'what\'snew', 'what\'s-new', 'whatisnew', 'what-is-new'],
    execute: async (message, args) => {
      const embed = new Discord.RichEmbed()
        .setColor("#74FF00")
        .setTitle(`Qué es lo nuevo?`)
        .setDescription("Versión 1.1.6")
      .addField("Se modificó:", "help\n otros comandos");
      message.channel.send(embed);
    },
};
