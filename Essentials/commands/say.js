module.exports = {
    name: 'say',
    aliases: ['repeat'],
    execute(message, args) {
        let text = args.join(' ');
        if(!text) return message.reply("What do I have to say?");
        message.delete();
        message.channel.send(text);
    },
};