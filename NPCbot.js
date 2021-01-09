var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure the array used for random replies
let replies = [
    "I used to be an adventurer like you, then I took an arrow to the knee.",
    "Kill well… and often.",
    "Sweet Mother, sweet Mother, send your child unto me, for the sins of the unworthy must be baptized in blood and fear.",
    "No lollygaggin'.",
    "Nords are so serious about beards. So many beards. M'aiq thinks they wish they had glorious manes like Khajiit.",
    "I am sworn to carry your burdens.",
    "Let me guess… someone stole your sweetroll?",
    "I've been huntin' and fishin' in these parts for years.",
    "Nords' armor has lots of fur. This sometimes makes M'aiq nervous.",
    "Do you get to the cloud district very often? Oh what am I saying, of course you don't.",
    "You see those warriors from Hammerfell? They've got curved swords. Curved. Swords.",
    "I look forward to hearing about the next person you murder!",
    "I got to thinking… maybe i'm the Dragonborn and I just don't know it yet!",
    "Hail, Companion!",
    "My cousins out fighting dragons, and what do I get? Guard duty.",
    "All the living shall fear the dead.",
    "Kill one person, and you can solve so many problems. I wonder at the possibilities.",
    "What is better? To be born good, or to overcome your evil nature through great effort?",
    "You know what we call people who mess with us? Suicide.",
    "You're either the bravest person i've ever met… or the biggest fool.",
    "You want knives? You want them in your belly? No? Then you stop talking to Deeja!",
    "Sorry lass, I've got important things to do. We'll speak another time.",
    "Ummm… you got no clothes. You should get some.",
    "Psst! I know who you are… Hail Sithis!",
    "I'm the older sister, by nearly five minutes. Sissel's barely worthy to walk in my shadow.",
    "Dragonborn, huh? Was it your ma or your pa that was the dragon?",
    "These Forsworn don't even have the decency to dress properly.",
    "I faced him fearlessly, my fate inescapable, yet my honor unstained, can Ulfric say the same?",
    "How high the mountains of Skyrim rise.",
    "Giant Spiders? What's next? Giant Snakes?",
    "I will eat your heart."
];

// Configure the randomizer that will pick a random integer from 0 to the length of the array; used for array index
let random = Math.floor(Math.random() * replies.length);

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    if (message.toLowerCase().startsWith("hey") || 
        message.toLowerCase().startsWith("hello") || 
        message.toLowerCase().startsWith("hi")) {
        
            bot.sendMessage({
                to: channelID,
                message: "``Hey "+user+" need something?\n"+replies[random]+"``"
            });
     }
});

