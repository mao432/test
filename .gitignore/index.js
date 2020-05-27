const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("^^Aide | En cour de développement");
    console.log("Le bot est en ligne !!");
});

bot.login(process.env.TOKEN)
