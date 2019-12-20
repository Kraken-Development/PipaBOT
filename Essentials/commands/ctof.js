const Discord = require('discord.js');
module.exports = {
    name: 'ctof',
    aliases: ['celsius-to-fahrenheit', 'c-to-f'],
    execute: async (message, args) => {
    let celsius = args.join(" ");
    if(!celsius) return message.channel.send('Debes ingresar el valor en °C');
    let fahrenheit = celsius * 1.8 + 32;
    const embed = new Discord.RichEmbed()
    .setTitle('Conversión de Celsius a Fahrenheit')
    .addField('Celsius:', 'C° ' + celsius)
    .addField('Fahrenheit:', 'F° ' + fahrenheit)
    .setColor("RANDOM");
    message.channel.send(embed);
    },
};