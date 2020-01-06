const Discord = require('discord.js');
module.exports = {
    name: 'rockpaperscissors',
    aliases: ['rock/paper/scissors', 'rock//paper//scissors'],
    execute(message, args) {
      message.channel.send("Select movement: pip!rock // pip!paper // pip!scissors")
    },
};