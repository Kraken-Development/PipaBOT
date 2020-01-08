const Discord = require('discord.js');
module.exports = {
    name: 'yesorno',
  aliases: ['yes-or-no'],
    execute(message, args) {
        let texto = args.join(' ');
          let respuestas = 6;
      if(!texto) return message.reply("Ask me anything!");
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Yes or no`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("Obviously", "Yes") ; break;
            case 2: embed.addField("Obviamente", "No") ; break;
            case 3: embed.addField("Maybe", "No") ; break;
            case 4: embed.addField("Maybe", "Yes") ; break;
            case 5: embed.addField("Im not sure but...", "No") ; break;
            case 6: embed.addField("Im not sure but...", "Yes") ; break;
                }
          message.channel.send(embed);
    },
};