module.exports = {
    name: 'di',
    aliases: ['repite'],
    description: 'pipa repitirá lo que dices',
    execute(message, args) {
        let texto = args.join(' ');
        if(!texto) return message.reply("Dime que es lo que quieres que diga **owo**");
        message.delete();
        message.channel.send(texto);
    },
};