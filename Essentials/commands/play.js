const ytdl = require('ytdl-core');
module.exports = {
    name: 'play',
    execute: async (message, args) => {
        if(!message.member.voiceChannel) return message.channel.send('No estás conectado a un canal de voz');
        if(message.guild.me.voiceChannel) return message.channel.send('Ya estoy conectado a un canal de voz');
        if(!args[0]) return message.channel.send('Debes ingresar una URL de YouTube');

        let validate = await ytdl.validateURL(args[0]);
        if(!validate) return message.channel.send(':x: URL inválido :x:');

        let info = await ytdl.getInfo(args[0]);

        message.channel.send(`Canción elegida: **${info.title}**`);

        let connection = await message.member.voiceChannel.join();

        let dispatcher = connection.playStream(ytdl(args[0], { filter: "audioonly" }));

    },
};