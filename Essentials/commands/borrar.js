module.exports = {
    name: 'borrar',
    aliases: ['delete', 'clean', 'prune'],
	description: 'messages pruensss',
	execute(message, args) {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permiso para usar este comando");
        if(!args[0]) return message.channel.send("¿Cuántos mensajes tengo que borrar?");
        let number = args[0];
        if(isNaN(number)) return message.channel.send("Necesitas poner numeros, no letras ni simbolos");
        number = parseInt(number);
        if(number >= 101 || number <= 0) return message.channel.send("Debes ingresar un valor entre 0 y 100");
        message.channel.bulkDelete(number + 1).then(() => {
            message.channel.send(`Se desintegraron ${number} mensajes usando las gemas del infinito`).then(m => m.delete(5000));
        }).catch(error => {
            message.channel.send(`Ocurrió un error: ${error.message}`);
        });
    },
};