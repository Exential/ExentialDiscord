const Discord = require('discord.js');

var bot = new Discord.Client();

var prefix = '*';

bot.login('NDUwOTk5NzQ3MjMxMDg4NjQw.De7ZyA.zssKmMwJRNcbzA2vpfdey9hi0h8');

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "accueil").send(`:arrow_forward: **${member.user.username}** a rejoint le serveur !`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "depart").send(`:ski: **${member.user.username}** a quitter le serveur !`)

})

bot.on('ready', () => {
    bot.user.setGame("Fortnite");
    console.log("Bot Exential prêt");

});

bot.on('message', message => {
        

if(message.content.startsWith(prefix + "purge")) {

    let myrole = message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES");
    let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES");

    if (!myrole) {
        return message.channel.send(":no_entry:**Je n'ai pas les permissions nécessaires**");
    }

    if (!yourole) {
        return message.channel.send(":no_entry:**Vous n'avez pas les permissions nécessaires**")
    }

    var suppression = message.content.substr(6);
    if (suppression < 2 || suppression > 101) {
        return message.reply("Choisis une autre valeur entre 1 & 100")
    }
    message.channel.bulkDelete(suppression, true).then(ok => {
        message.reply("**Suppression de " + "" + suppression + "" + " messages**")
        .then(message => setTimeout(function(){message.delete}, 5000))
        .catch(err => console.log(err));
    })
}
})