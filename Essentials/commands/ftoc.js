const Discord = require('discord.js');
module.exports = {
    name: 'ftoc',
    aliases: ['fahrenheit-to-celsius', 'f-to-c'],
    execute: async (message, args) => {
    let fahrenheit = args.join(" ");
    let almostCelsius = fahrenheit - 32;
    let celsius = almostCelsius / 1.8;
    if(!fahrenheit) return message.channel.send('Debes ingresar el valor en °F');
    const embed = new Discord.RichEmbed()
    .setTitle('Conversión de Fahrenheit a Celsius')
    .addField('Fahrenheit:', 'F° ' + fahrenheit)
    .addField('Celsius:', 'C° ' + celsius)
    .setColor("RANDOM");
    message.channel.send(embed);
    },
};