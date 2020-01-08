const Discord = require('discord.js');
module.exports = {
    name: 'botinfo',
    aliases: ['bot-info', 'info-bot', 'infobot'],
    execute(message, args) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
        .setTitle(`Información sobre el bot:`)
        .addField("Creado por:", "Kraken Development")
        .addField("Versión:", "2.0.0")
        .addField("Repositorio:", "https://github.com/Kraken-Development/PipaBOT")
        .addField("Idioma:", "Español (También disponible en Inglés)")
      message.channel.send(embed);
    },
};