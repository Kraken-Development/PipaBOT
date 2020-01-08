const Discord = require('discord.js');
module.exports = {
    name: 'piedrapapeltijeras',
    aliases: ['piedra/papel/tijeras', 'piedra//papel//tijeras'],
    execute(message, args) {
      message.channel.send("Selecciona tu movimiento: pp!piedra // pp!papel // pip!tijeras")
    },
};