const Discord = require('discord.js');
module.exports = {
    name: 'hi',
    execute(message) {
        let respuestas = 10;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Pipa greeted you`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("Hello,", "Human") ; break;
                 case 2: embed.addField("Hello,", "Creator") ; break;
                 case 3: embed.addField("Hello,", "Designer") ; break;
                 case 4: embed.addField("Hello,", "Gamer") ; break;
                 case 5: embed.addField("Hello,", "Cadaver") ; break;
                 case 6: embed.addField("Hello,", "Zombie") ; break;
                 case 7: embed.addField("Hello,", "Alien") ; break;
                 case 8: embed.addField("Hello,", "Cat") ; break;
                 case 9: embed.addField("Hello,", "Dog") ; break;
                 case 10: embed.addField("Hello,", "Robot") ; break;
          }
          message.channel.send(embed);
    },
};