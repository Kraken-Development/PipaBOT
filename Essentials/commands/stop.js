module.exports = {
    name: 'stop',
    aliases: ['leave'],
    execute: async (message) => {
        if(!message.member.voiceChannel) return message.channel.send('You are not connected to a voice channel');
        if(!message.guild.me.voiceChannel) return message.channel.send('Im not connected to a voice channel');
        if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('You\'re not connected to the same channel as I');

        message.guild.me.voiceChannel.leave();

        message.channel.send(':white_check_mark: Leaving... :white_check_mark:');
    },
};