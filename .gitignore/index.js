const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("^^Aide | En cour de développement");
    console.log("Le bot est en ligne !!");
});

bot.login("Njk1NTc2NzMxNjgzMTI3MzI4.Xs7HhQ.IU2w1oauoXu-dSeFJ58fmOxWNKA");
