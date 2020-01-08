const Discord = require('discord.js');
module.exports = {
    name: 'help',
    aliases: ['commands', 'command-list', 'commands-list'],
    execute(message, args) {
      
      if(!args[0]) {
      if(message.channel.type != 'dm') message.react('✅')

      const embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/474331584447643658/647640189379936276/Sin_titulo.png")
        .setColor("#74FF00")
      .setTitle("Lista de comandos disponibles")
      .setDescription("Para tener más información sobre un comando, escribe\n `pp!help [Comando]`")
      .addField("▬MODERACIÓN▬", "`pp!ban`\n`pp!kick`\n`pp!borrar`")
      .addField("▬INFORMACIÓN▬", "`pp!serverinfo`\n`pp!userinfo`\n`pp!botinfo`\n`pp!avatar`\n`pp!invite`\n`pp!ping`\n`pp!whatsnew`")
      .addField("▬BÚSQUEDA▬", "`pp!searchgl`\n`pp!searchyt`\n`pp!searchsp`")
      .addField("▬CÁLCULO▬", "`pp!suma`\n`pp!resta`\n`pp!multiplicacion`\n`pp!division`\n`pp!f-to-c`\n`pp!c-to-f`")
      .addField("▬WALLPAPER▬", "`pp!wallpaper-1280x720`\n`pp!wallpaper-1280x800`\n`ppwallpaper-1366x768`\n`pp!wallpaper-1920x1080`\n`pp!wallpaper-4k`")
      .addField("▬DIVERSIÓN▬", "`pp!hola`\n`pp!piedra/papel/tijeras`\n`pip!siono`\n`pp!repite`\n`pp!roll`\n`pp!pipa`")
      .addField("▬MÚSICA▬", "`pp!play`\n`pp!stop`");
        message.author.send(embed);
      } else {
      
      let commandName = args[0];
      
        if(args[0] == '[Comando]') {
          message.channel.send("Jaja muy gracioso...")
        }
        if(args[0] == 'ban') {
          message.channel.send("Banea un usuario en el servidor (Debes tener permisos de BANEAR MIEMBROS)");
          message.channel.send("Uso: pip!ban [Nombre] [Razón]");
        }
        if(args[0] == 'kick') {
          message.channel.send("Kickea un usuario en el servidor (Debes tener permisos de BANEAR MIEMBROS)");
          message.channel.send("Uso: pp!kick [Nombre] [Razón]")
        }
        if(args[0] == 'borrar') {
          message.channel.send("Borra un número de mensajes en el servidor (Debes tener permisos de GESTIONAR MENSAJES)");
          message.channel.send("Uso: pp!borrar [Número de mensajes]");
        }
        if(args[0] == 'serverinfo') {
          message.channel.send("Muestra información sobre el servidor");
          message.channel.send("Uso: pp!serverinfo");
        }
        if(args[0] == 'userinfo') {
          message.channel.send("Muestra información sobre el usuario elegido (Si no hay ninguno, muestra información sobre ti)");
          message.channel.send("Uso: pp!userinfo [Nombre]");
        }
        if(args[0] == 'botinfo') {
          message.channel.send("Muestra información sobre el bot");
          message.channel.send("Uso: pp!botinfo");
        }
        if(args[0] == 'avatar') {
          message.channel.send("Muestra el avatar del usuario elegido (Si no hay ninguno, muestra tu avatar)");
          message.channel.send("Uso: pp!avatar [Nombre]");
        }
        if(args[0] == 'invite') {
          message.channel.send("Muestra el link de invitacion al bot y su versión en inglés");
          message.channel.send("Uso: pp!invite");
        }
        if(args[0] == 'ping') {
          message.channel.send("Muestra tu latencia (en ms)");
          message.channel.send("Uso: pp!ping");
        }
        if(args[0] == 'whatsnew') {
          message.channel.send("Muestra los últimos cambios en el bot");
          message.channel.send("Uso: pp!whatsnew");
        }
        if(args[0] == 'searchgl') {
          message.channel.send("Búsqueda en Google");
          message.channel.send("Uso: pp!searchgl [Búsqueda]");
        }
        if(args[0] == 'searchyt') {
          message.channel.send("Búsqueda en YouTube");
          message.channel.send("Uso: pp!searchyt [Búsqueda]");
        }
        if(args[0] == 'searchsp') {
          message.channel.send("Búsqueda en Spotify");
          message.channel.send("Uso: pp!searchsp [Búsqueda]");
        }
        if(args[0] == 'suma') {
          message.channel.send("Haz una ecuación de suma de 2 a 5 números");
          message.channel.send("Uso: pp!suma [Números]");
        }
        if(args[0] == 'resta') {
          message.channel.send("Haz una ecuación de resta de 2 a 5 números");
          message.channel.send("Uso: pp!minus [Números]");
        }
        if(args[0] == 'multiplicacion') {
          message.channel.send("Haz una ecuación de multiplicación de 2 a 5 números");
          message.channel.send("Uso: pp!multiplicacion [Números]");
        }
        if(args[0] == 'division') {
          message.channel.send("Haz una ecuación de división de 2 a 5 números");
          message.channel.send("Uso: pp!division [Números]");
        }
        if(args[0] == 'f-to-c') {
          message.channel.send("Convierte de Fahrenheit a Celsius");
          message.channel.send("Uso: pp!f-to-c [Fahrenheit]");
        }
        if(args[0] == 'c-to-f') {
          message.channel.send("Convierte de Celsius a Fahrenheit");
          message.channel.send("Uso: pp!c-to-f [Celsius]");
        }
        if(args[0] == 'wallpaper-1280x720') {
          message.channel.send("Muestra un wallpaper aleatorio en 1280x720");
          message.channel.send("Uso: pp!wallpaper-1280x720");
        }
        if(args[0] == 'wallpaper-1280x800') {
          message.channel.send("Muestra un wallpaper aleatorio en 1280x800");
          message.channel.send("Uso: pp!wallpaper-1280x800");
        }
        if(args[0] == 'wallpaper-1366x768') {
          message.channel.send("Muestra un wallpaper aleatorio en 1366x768");
          message.channel.send("Uso: pp!wallpaper-1366x768");
        }
        if(args[0] == 'wallpaper-1920x1080') {
          message.channel.send("Muestra un wallpaper aleatorio en 1920x1080");
          message.channel.send("Uso: pp!wallpaper-1920x1080");
        }
        if(args[0] == 'wallpaper-4k') {
          message.channel.send("Muestra un wallpaper aleatorio en 4K");
          message.channel.send("Uso: pp!wallpaper-4k");
        }
        if(args[0] == 'hola') {
          message.channel.send("Pipa te saluda");
          message.channel.send("Uso: pp!hola");
        }
        if(args[0] == 'piedra/papel/tijeras') {
          message.channel.send("Empieza una ronda de Piedra, papel o tijeras contra Pipa");
          message.channel.send("Uso: pp!piedra // pp!papel // pp!tijeras");
        }
        if(args[0] == 'yesorno') {
          message.channel.send("Pipa responde una pregunta de sí o no");
          message.channel.send("Uso: pp!siono [Pregunta]");
        }
        if(args[0] == 'repite') {
          message.channel.send("Pipa repite lo que digas (Claro que lo va a hacer, es un loro)");
          message.channel.send("Uso: pp!repite [Mensaje]");
        }
        if(args[0] == 'roll') {
          message.channel.send("Tira un dado!");
          message.channel.send("Uso: pp!roll");
        }
        if(args[0] == 'pipa') {
          message.channel.send("Pipa manda una foto de alguien de su familia");
          message.channel.send("Usage: pp!pipa");
        }
      }
    },
};