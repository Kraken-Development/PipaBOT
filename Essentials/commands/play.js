const ytdl = require('ytdl-core');
module.exports = {
    name: 'play',
    execute: async (message, args) => {
        if(!message.member.voiceChannel) return message.channel.send('You\'re not connected in a voice channel');
        if(message.guild.me.voiceChannel) return message.channel.send('I\'m already connected in a voice channel');
        if(!args[0]) return message.channel.send('You must enter a YouTube URL');

        let validate = await ytdl.validateURL(args[0]);
        if(!validate) return message.channel.send(':x: Invalid URL :x:');

        let info = await ytdl.getInfo(args[0]);

        message.channel.send(`Selected song: **${info.title}**`);

        let connection = await message.member.voiceChannel.join();

        let dispatcher = connection.playStream(ytdl(args[0], { filter: "audioonly" }));

    },
};