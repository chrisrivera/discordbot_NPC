# discordbot_NPC
discordNPC bot


![GitHub Logo](/bot.png)


# Required:
  * [Creating a bot account](https://discordpy.readthedocs.io/en/latest/discord.html)
  * node.js
  * npm install discord.io winston –save
  * npm install https://github.com/woor/discord.io/tarball/gateway_v6
  * npm install pm2 -g

# To Run:
  * pm2 start NPCbot.js
  	* **note** this bot requires the discord account token to be stored in an auth.json file at the same level as the bot.
  	*example:*
  				```javascript
  				{
					"token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
				}
				```
  
# Resources:
  * [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
