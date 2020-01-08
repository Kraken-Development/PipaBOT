const Discord = require('discord.js');
module.exports = {
    name: 'piedra',
    execute(message) {
        let respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Elegiste piedra`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("Elegí tijeras:", "Perdí") ; break;
                 case 2: embed.addField("Elegí piedra", "Empate") ; break;
                 case 3: embed.addField("Elegí papel:", "Gané") ; break;            
          }
          message.channel.send(embed);
    },
};
