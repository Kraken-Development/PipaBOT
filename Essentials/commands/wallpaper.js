const Discord = require('discord.js');
module.exports = {
    name: 'wallpaper',
    aliases: ['wallpaperhelp', 'wallpaper-help'],
    execute(message) {
      message.channel.send('You have to enter the resolution of your screen. For example: pip!wallpaper-1366x768');
      message.channel.send('If you don\'t know the resolution of your screen, go to this website: https://whatismyresolution.com/');
    },
};