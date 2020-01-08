const Discord = require('discord.js');
module.exports = {
    name: 'tijeras',
  aliases: ['tijera'],
    execute(message) {
        let respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Elegiste tijeras`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("Elegí tijeras", "Empate") ; break;
                 case 2: embed.addField("Elegí piedra", "Gané") ; break;
                 case 3: embed.addField("Elegí papel:", "Perdí") ; break;            
          }
          message.channel.send(embed);
    },
};