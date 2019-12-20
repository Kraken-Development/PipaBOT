module.exports = {
    name: 'stop',
    aliases: ['leave'],
    description: 'bot stops the song and leaves the channel',
    execute: async (message) => {
        if(!message.member.voiceChannel) return message.channel.send('No estás conectado a un canal de voz');
        if(!message.guild.me.voiceChannel) return message.channel.send('No estoy conectado a un canal de voz');
        if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('No estás conectado al mismo canal');

        message.guild.me.voiceChannel.leave();

        message.channel.send(':white_check_mark: Saliendo del canal de voz... :white_check_mark:');
    },
};