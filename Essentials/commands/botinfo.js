const Discord = require('discord.js');
module.exports = {
    name: 'botinfo',
    aliases: ['bot-info', 'info-bot', 'infobot'],
    execute(message, args) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
        .setTitle(`Information about the bot:`)
        .addField("Created by:", "Kraken Development")
        .addField("Version:", "1.0.0")
        .addField("Repository:", "https://github.com/Kraken-Development/PipaBOT")
        .addField("Language:", "English (Also available in spanish)")
      message.channel.send(embed);
    },
};