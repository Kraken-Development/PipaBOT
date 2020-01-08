const Discord = require('discord.js');
module.exports = {
    name: 'wallpaper',
    aliases: ['wallpaperhelp', 'wallpaper-help'],
    execute(message) {
      message.channel.send('Tienes que ingresar la resolución de tu pantalla, por ejemplo: pp!wallpaper-1366x768');
      message.channel.send('Si no sabes la resolución de tu pantalla, ve a ésta página: https://cualesmiresolucion.com/');
    },
};