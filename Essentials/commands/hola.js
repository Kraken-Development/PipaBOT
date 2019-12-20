const Discord = require('discord.js');
module.exports = {
    name: 'hola',
    description: 'pipa saluda',
    execute(message) {
        let respuestas = 10;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Pipa te ha saludado`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("Hola:", "Humano") ; break;
                 case 2: embed.addField("Hola:", "Creador") ; break;
                 case 3: embed.addField("Hola:", "Diseñador") ; break;
                 case 4: embed.addField("Hola:", "Gamer") ; break;
                 case 5: embed.addField("Hola:", "Cadaver") ; break;
                 case 6: embed.addField("Hola:", "Zombie") ; break;
                 case 7: embed.addField("Hola:", "Alien") ; break;
                 case 8: embed.addField("Hola:", "Gato") ; break;
                 case 9: embed.addField("Hola:", "Perro") ; break;
                 case 10: embed.addField("Hola:", "Robot") ; break;
          }
          message.channel.send(embed);
    },
};