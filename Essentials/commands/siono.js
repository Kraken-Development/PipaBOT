const Discord = require('discord.js');
module.exports = {
    name: 'siono',
  aliases: ['si-o-no'],
    execute(message, args) {
        let texto = args.join(' ');
          let respuestas = 6;
      if(!texto) return message.reply("Pregúntame lo que sea!");
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Sí o no`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("Obviamente", "Sí") ; break;
            case 2: embed.addField("Obviamente", "No") ; break;
            case 3: embed.addField("Quizás", "No") ; break;
            case 4: embed.addField("Quizás", "Sí") ; break;
            case 5: embed.addField("No estoy seguro pero...", "No") ; break;
            case 6: embed.addField("No estoy seguro pero...", "Sí") ; break;
                }
          message.channel.send(embed);
    },
};