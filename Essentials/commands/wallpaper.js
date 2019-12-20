const Discord = require('discord.js');
module.exports = {
    name: 'wallpaper',
    aliases: ['wallpaperhelp', 'wallpaper-help'],
    description: 'wallpaper help command',
    execute(message) {
      message.channel.send('Debes poner la resolución de tu pantalla. Ejemplo: pp!wallpaper-1366x768');
      message.channel.send('Si no sabes tu resolución de pantalla, entra a esta página: https://cualesmiresolucion.com/');
    },
};