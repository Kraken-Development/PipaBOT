const Discord = require('discord.js');
module.exports = {
    name: 'whatsnew',
    aliases: ['whats-new', 'what\'snew', 'what\'s-new'],
    execute: async (message, args) => {
      const embed = new Discord.RichEmbed()
        .setColor("#74FF00")
        .setTitle(`Lista de cambios:`)
        .setDescription("Versión 1.1.4")
      .addField("Se añadió:", "roll\n searchsp\n whatsnew")
      .addField("Se reparó:", "userinfo")
      .addField("Se modificó:", "ctof\n ftoc\n searchgl\n searchgl\n searchyt\n suma\n resta\n division\n multiplicacion")
      .addField("Se actualizó:", "help\n help2")
      .addField("Se aplicó:", "Esencia de pipa");
      message.channel.send(embed);
    },
};
