onst Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "525432583044071485"; // ايدي السررفر
var channel = "525432583044071487";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers a7aaaaaaaa ')
    },305);
})

client.login(process.env.BOT_TOKEN);


var prefix = "#";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});

client.on('ready', async() => {
var server = "525432583044071485"; // ايدي السررفر
var channel = "525432583044071487";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam ')
    },305);
})

client.on('ready', async() => {
var server = "525432583044071485"; // ايدي السررفر
var channel = "525432583044071487";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam ')
    },305);
})

client.on('ready', async() => {
var server = "525432583044071485"; // ايدي السررفر
var channel = "525432583044071487";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam , Unevers Town Spam ')
    },305);
})
