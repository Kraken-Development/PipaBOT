module.exports = {
    name: 'prune',
  guildOnly: true,
    aliases: ['delete', 'clean'],
	execute(message, args) {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have enough permissions to perform this action");
        if(!args[0]) return message.channel.send("How many numbers to I have to delete?");
        let number = args[0];
        if(isNaN(number)) return message.channel.send("Letters or simbols are not allowed");
        number = parseInt(number);
        if(number >= 100 || number <= 0) return message.channel.send("You must enter a value between 0 and 99");
        message.channel.bulkDelete(number + 1).then(() => {
            message.channel.send(`${number} messages got disintegrated by using the infinity stones`).then(m => m.delete(5000));
        }).catch(error => {
            message.channel.send("Pipa used DELETE");
          message.channel.send("but the attack missed");
          message.channel.send(`Reason: ${error.message}`)     
        });
    },
};