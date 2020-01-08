module.exports = {
    name: 'di',
    aliases: ['repite'],
    execute(message, args) {
        let text = args.join(' ');
        if(!text) return message.reply("Qué tengo que decir?");
        message.delete();
        message.channel.send(text);
    },
};