const Discord = require('discord.js');
module.exports = {
    name: 'ctof',
    aliases: ['celsius-to-fahrenheit', 'c-to-f'],
    execute: async (message, args) => {
    let celsius = args.join(" ");
    if(!celsius) return message.channel.send('You must enter the value in °C');
    let fahrenheit = celsius * 1.8 + 32;
    const embed = new Discord.RichEmbed()
    .setTitle('Celsius to Fahrenheit conversion')
    .addField('Celsius:', 'C° ' + celsius)
    .addField('Fahrenheit:', 'F° ' + fahrenheit)
    .setColor("RANDOM");
    message.channel.send(embed);
    },
};