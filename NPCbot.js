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

let jokes = [
    "'How is your wife,' asked Zalither. 'She's in bed with laryngitis,' replied Harlyth. 'Is that Argonian bastard back in town again?'",
	"'I keep seeing spots before my eyes.' 'Have you seen a healer?' 'No, just spots.'",
	"A big Nord named Julgen was set on by a gang of thieves. He fought them furiously, but in the end, they beat him into semiconsciousness. They searched his pockets and discovered that he only had three gold pieces on him. 'Do you mean to tell us you fought us like a mad lupe for three lousy gold pieces?' sneered one of the thieves. 'No,' answered Julgen. 'I was afraid you were after the four hundred gold pieces in my boot.'",
	"During the War of Betony, the Bretons in the Isle of Craghold were under siege for several days. After the island was liberated, Lord Bridwell found the ruins of the castle where a crowd of survivors were hidden away in the dark. It was going to be a difficult job freeing them, as part of the roof had collapsed trapping them all within. Bridwell stuck his head in the only opening and shouted to the Bretons below: 'Are there any expectant mothers down there?' 'It's hard to say, your Lordship,' said a young woman. 'We've only been down here for a few days.'",
	"An elderly Breton met with a contemporary of his at a guild meeting. 'Harryston, old man, I wanted to express my sympathy. I hear that you buried your wife last week.' 'Had to, old boy,' replied Harryston. 'Dead, you know.'",
	"Why was the Sentinel army so useless during the War of Betony? The cannons were too heavy, so all three garbage scows sunk.",
	"What does a new Sentinel private learn first as a combat technique? How to retreat.",
	"What is the thinnest book in the world? Redguard Heroes of the War of Betony.",
	"A Dark Elf man killed his wife after catching her making love with another man. When the magistrate asked him why he killed her instead of her lover, the man replied, 'I considered it better to kill one woman than a different man every week.'",
	"A Dark Elf woman was being shown around Daggerfall. When she was shown the magnificent Castle Daggerfall, she smiled sweetly to her guide and whispered, 'It reminds me of sex.' 'That's odd,' said her guide. 'Why does our Castle Daggerfall remind you of sex?' The Dark Elf sighed, 'Everything does.'",
	"Yelithah told Vathysah that she was having dinner with a Dark Elf named Morleth that night. 'I hear he's an animal,' said Vathysah. 'He'll rip your dress right off you.' 'Thank you for telling me,' said Yelithah, 'I'll be sure to wear an old dress.'",
	"How do you separate sailors in the Khajiiti navy? With a hammer and tongs.",
	"'This orchard has sentimental value to me,' said Mojhad, the Khajiit, to his friend, Hasillid. 'Under that tree, for example, is where I first made love. And that tree, is where her mother stood, watching us.' 'She watched you while you made love to her daughter?' said Hasillid, clearly impressed. 'Didn't she say anything?' 'Meow.'",
	"What do you call a Wood Elf who doesn't lie or cheat or steal? A dead Wood Elf."
];
	
// Configure the randomizer that will pick a random integer from 0 to the length of the array; used for array index
let mrandom = Math.floor(Math.random() * replies.length);
let jrandom = Math.floor(Math.random() * jokes.length);

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
                message: "``Hey "+user+" need something?\n"+replies[mrandom]+"``"
            });
        mrandom = Math.floor(Math.random() * replies.length);
     }
	else if (message.toLowerCase().startsWith("joke")){
            bot.sendMessage({
                to: channelID,
                message: "``Hey "+user+" Here's a joke I heard when I visited Daggerfall!\n"+jokes[jrandom]+"``"
            });
            jrandom = Math.floor(Math.random() * jokes.length);
	}
});
