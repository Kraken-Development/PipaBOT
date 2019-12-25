const Discord = require('discord.js');
module.exports = {
    name: 'whatsnew',
    aliases: ['whats-new', 'what\'snew', 'what\'s-new'],
    execute: async (message, args) => {
      const embed = new Discord.RichEmbed()
        .setColor("#74FF00")
        .setTitle(`Lista de cambios:`)
        .setDescription("Versión 1.1.5")
      .addField("Se añadió:", "fogata\n recetas")
      .addField("Se actualizó:", "help2\n pipa")
      .addField("Se aplicó:", "Esencia de pipa");
      message.channel.send(embed);
    },
};

