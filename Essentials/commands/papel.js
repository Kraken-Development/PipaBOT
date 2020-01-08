const Discord = require('discord.js');
module.exports = {
    name: 'papel',
    execute(message) {
        let respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Elegiste papel`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("Elegí tijeras", "Gané") ; break;
                 case 2: embed.addField("Elejí piedra", "Perdí") ; break;
                 case 3: embed.addField("Elejí papel:", "Empate") ; break;            
          }
          message.channel.send(embed);
    },
};