const Discord = require('discord.js');
module.exports = {
    name: 'help',
    aliases: ['commands', 'command-list', 'commands-list'],
    description: 'list of available commands',
    execute(message) {
      const embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/474331584447643658/647640189379936276/Sin_titulo.png")
        .setColor("#74FF00")
        .setTitle(`Información sobre el bot:`)
        .addField("Programadores:", "Blox, GatoLandia")
        .addField("Versión del bot:", "1.1.4")
        .addField("Repositorio:", "https://github.com/Gato-Landia/PipaBOT")
        .addField("pp!pipa", "Muestra una imagen de un loro aleatorio")
        .addField("pp!hola", "Pipa te saluda")
        .addField("pp!piedra/pp!papel/pp!tijeras", "Inicias una ronda de Piedra, papel o tijeras contra Pipa")
        .addField("pp!siono", "Di una pregunta de si o no, Pipa te la responderá")
        .addField("pp!repite", "Pipa repitirá lo que digas")
        .addField("pp!invite", "Pipa enviará un link para invitar al bot a cualquier servidor")
        .addField("pp!ping", "Mira tu ping (ms)!")
        .addField("pp!kick [Nombre] [Razón]", "Kickea a una persona del servidor")
        .addField("pp!ban [Nombre] [Razón]", "Banea a una persona del servidor")
        .addField("pp!borrar [Número de mensajes]", "Borra un determinado número de mensajes en el canal")
        .addField("pp!serverinfo", "Muestra información del servidor")
        .addField("pp!userinfo [Nombre]", "Muestra información del usuario indicado")
        .addField("pp!avatar [Nombre]", "Muestra el avatar de la persona elegida, si no se especifica se muestra tu avatar")
        .addField("pp!play [URL]", "Reproduce el URL indicado")
        .addField("pp!stop", "Detiene la reproducción del URL y sale del canal de voz")
        .addField("pp!searchsp [Búsqueda]", "Busca en Spotify")
        .addField("pp!searchgl [Búsqueda]", "Busca en Google")
        .addField("pp!searchyt [Búsqueda]", "Busca en YouTube")
        .addField("pp!wallpaper-1366x768/1280x720/1280x800/1920x1080/4k", "Muestra un wallpaper aleatorio dependiendo de tu resolución")
        .setFooter("Page 1 of 2");
        message.channel.send(embed);
    },
};