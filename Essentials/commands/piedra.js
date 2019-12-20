const Discord = require('discord.js');
module.exports = {
    name: 'piedra',
    description: 'eliges piedra',
    execute(message) {
        let respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Piedra,Papel o Tijeras`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("Tijeras:", "Perdi") ; break;
                 case 2: embed.addField("Piedra", "Empate") ; break;
                 case 3: embed.addField("Papel:", "Gane") ; break;            
          }
          message.channel.send(embed);
    },
};