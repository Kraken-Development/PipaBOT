const Discord = require('discord.js');
module.exports = {
    name: 'esencia-de-pipa',
    aliases: ['esenciadepipa'],
    execute: async (message, args) => {
      message.channel.send(`${message.author.username} aplicó la esencia de pipa a ${message.guild.name}`);
    },
};