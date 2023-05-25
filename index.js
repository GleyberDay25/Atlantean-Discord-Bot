const express = require("express");
const app = express();
const Database = require("@replit/database")
const db = new Database()
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

app.listen(3000, () => {
  console.log ("its working bro")
}) 

app.get("/", (req, res) => {
  res.send("wuts good yall");
})

const Discord = require("discord.js");
const client = new Discord.Client ({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
  allowedMentions: ["users"]
});

const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "1091155412637732937") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#2596be")
  .setColor("username-box", "#041014")
  .setColor("discriminator-box", "#041014")
  .setColor("message-box", "#041014")
  .setColor("border", "#2596be")
  .setColor("avatar", "#041014")
  .setBackground("https://marketplace.canva.com/EAFTQEWI-Ko/1/0/1600w/canva-black-sky-galaxy-stars-desktop-wallpaper-iWMZ0xN6KXs.jpg")
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
  const welcomeChannel =
client.channels.cache.get("1099469475356610560");
  welcomeChannel.send({content: member.user.toString(), files: [attachment]});

})
client.on("guildMemberRemove", async member => {
  if(member.guild.id !== "1091155412637732937") return;
  const welcomeCard = new canvacord.Leaver()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#2596be")
  .setColor("username-box", "#041014")
  .setColor("discriminator-box", "#041014")
  .setColor("message-box", "#041014")
  .setColor("border", "#2596be")
  .setColor("avatar", "#041014")
  .setBackground("https://marketplace.canva.com/EAFTQEWI-Ko/1/0/1600w/canva-black-sky-galaxy-stars-desktop-wallpaper-iWMZ0xN6KXs.jpg")
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "bye.png") 
      
   const leave = client.channels.cache.get("1104547482177908838");
  leave.send({content: member.user.toString(), files: [attachment]});

})
 

 
client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "1103788179594674288") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#2596be")
  .setColor("username-box", "#041014")
  .setColor("discriminator-box", "#041014")
  .setColor("message-box", "#041014")
  .setColor("border", "#2596be")
  .setColor("avatar", "#041014")
  .setBackground("https://marketplace.canva.com/EAFTQEWI-Ko/1/0/1600w/canva-black-sky-galaxy-stars-desktop-wallpaper-iWMZ0xN6KXs.jpg")
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
  member.guild.channels.cache.get("1103789995870933043").send({content: member.user.toString(), files: [attachment]})
})
client.on("guildMemberRemove", async member => {
  if(member.guild.id !== "1103788179594674288")return;
  const welcomeCard = new canvacord.Leaver()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#2596be")
  .setColor("username-box", "#041014")
  .setColor("discriminator-box", "#041014")
  .setColor("message-box", "#041014")
  .setColor("border", "#2596be")
  .setColor("avatar", "#041014")
  .setBackground("https://marketplace.canva.com/EAFTQEWI-Ko/1/0/1600w/canva-black-sky-galaxy-stars-desktop-wallpaper-iWMZ0xN6KXs.jpg")
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "bye.png")
 const leaverChannel = client.channels.cache.get("1104547482177908838");
  leaverChannel.send({content: member.user.toString(), files: [attachment]});
})
const fs = require("fs");
const prefix = "?"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for (file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on ("message", message => {
if (message.content.startsWith(prefix)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift()
  const command = client.commands.get(commandName)
  if(!command) return
  command.run(client, message, args)
}   
})

client.on("message", message => {
  if(message.content === "?nameme") {
    let nicknames = ["Goofy", "Smart", "Cool", "Dumb", "Gay", "Stoopid", "Awesome"]
    message.reply(`${nicknames[Math.floor(Math.random () * nicknames.length)]} is your new name!`)
  }
  if(message.content === "?helpme") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Need Help?")
    .setDescription("https://discord.gg/UwRb96dxFU")
    .setColor("RANDOM")
    .addField("Prefix", "?")
    .addField("?bored", "For commands")
    .setFooter("< You", message.author.displayAvatarURL())
    .setTimestamp()
    message.reply({embeds: [embed]})
  }
  if(message.content === "?amistupid") {
    let nicknames = ["Yes, you", "No you are not", "A little bit", "You are sometimes", "I spelled stoopid wrong, I think I am"]
    message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content.toLowerCase().startsWith("?bored") || message.content.toLowerCase().startsWith("?Bored") || message.content.toLowerCase().startsWith("?BORED")) {
    let bored = new Discord.MessageEmbed()
    .setTitle("Join the support server if there are any issues!")
    .setAuthor("Atleantean Bot Commands", "https://i.postimg.cc/V6MnBXnk/Screenshot-2023-05-03-9-41-29-PM.png")
    .setDescription("Prefix = ?")
    .setColor("PURPLE")
    .addField("<:atlanteanpaper:1111102024369590313>|─OTHER─|<:atlanteanpaper:1111102024369590313>", "*`?duplicatechannel`*, *`?renamechannel`*")
    .addField("<:atlanteancool:1111102369288167434>|─FUN─|<:atlanteancool:1111102369288167434>", "*`?nameme`*, *`?say`*, *`?amistupid`*, *`?amigay`*, *`?amihappy`*, *`?kiss`*, *`?slap`*, *`?8ball`*, *`?avatar`*, *`?dumbestcommandever`*, *`?rockpaperscissors/?rps`*, *`?hug`*, *`?flipacoin`*")
    .addField("<:atlanteansmile:1111031085976014858>|─EMOJIS─|<:atlanteansmile:1111031085976014858>", "*`?peopleemojis`*, *`?nature-animalemojis`*, *`?activity-sportsemojis`*, *`?vehicle-travelemojis`*, *`?objectemojis`*, *`?symbolemojis`*, *`?flagemojis`*")
      .addField("<:atlanteansword:1111028471410479176>|─ROLEPLAY─|<:atlanteansword:1111028471410479176>", "*`?buyak47`*, *`?buyglock19`*, *`?shootwithglock19`*, *`?shootwithak47`*, *`?bal`*, *`?dep`*, *`?withdraw`*, *`?dailyprize`*, *`?buyknife`*, *`?stabwithknife`*, *`?buysword`*, *`?stabwithsword`*, *`?slicewithsword`*, *`?buylambo`*")
      .addField("<:atlanteanmemeface:1111028079800897739>|─MEMES─|<:atlanteanmemeface:1111028079800897739>", "*`?randomeme`*, *`?twittermeme`*, *`?gifmeme`*, *`?dirtymeme`*, *`?darkmeme`*, *`?wholesomememe`*")
     .addField("<:atlanteansheild:1111027600253530162>|─MODERATION─|<:atlanteansheild:1111027600253530162>", "*`?purge`*, *`?kick`*, *`?ban`*, *`?unban`*, *`?mute`*, *`?unmute`*, *`?snipe`*, *`?warn`*")
      .addField("<:atlanteanutlity:1111025986448916481>|─UTILITY─|<:atlanteanutlity:1111025986448916481>", "*`?serverinfo`*, *`?helpme`*, *`?ping`*, *`?support`*, *`?inviteme`*, *`?botinfo`*, *`?suggest`*, *`?policy`*")
      .addField(`Atlantean is currently in ${client.guilds.cache.size.toLocaleString()} Servers!`, " ")
    .setTimestamp()
    message.reply({embeds: [bored]})
  }
  if(message.content === "?support") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Support server invite link!")
    .setDescription("https://discord.gg/UwRb96dxFU")
    .setColor("PURPLE")
    message.reply({embeds: [embed]})
  }
  if(message.content === "?amigay") {
    let replies = ["Yes, You are gay.", "No, You are not.", "Which gay? If you mean happy do ?amihappy."]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "?amihappy") {
    let replies = ["You are kind of happy.", "You are depressed.", "Wow! You are extremely happy!"]
message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "?peopleemojis") {
    let embed = new Discord.MessageEmbed()
    .setTitle("People Emojis")
    .setDescription("😀 😃 😄 😁 😆 🤩 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 🤪 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 🤬 😶 😐 😑 😯 😦 😧 😮 😲 😵 🤯 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🥱 🙄 🤨 🧐 🤔 🤫 🤭 🤥 😬 🤐 🤢 🤮 🤧 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤲 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 🤏 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 🤟 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 🦻 👃 🦵 🦶 🦾 🦿 👣 👁 👀 🗣 👤 👥 👶 👦 👧 🧒 👨 👩 🧑 👱‍♀️ 👱 🧔 👴 👵 🧓 👲 👳‍♀️ 👳 🧕 👮‍♀️ 👮 👷‍♀️ 👷 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🤱 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 🧏 🧏‍♂️ 🧏‍♀️ 🧙‍♀️ 🧙‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧚‍♀️ 🧚‍♂️ 🧜‍♀️ 🧜‍♂️ 🧝‍♀️ 🧝‍♂️ 🧞‍♀️ 🧞‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 👨‍🦯 👩‍🦯 👨‍🦼 👩‍🦼 👨‍🦽 👩‍🦽 🧑‍🤝‍🧑 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓 🕶 🤿 🌂 ☂️ 🧣 🧤 🧥 🦺 🥻 🩱 🩲 🩳 🩰 🧦 🧢 ⛷ 🏂 🏋️‍♀️ 🏋️ 🤺 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸‍♂️ ⛹️‍♀️ ⛹️ 🤾‍♀️ 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏄‍♀️ 🏄 🏊‍♀️ 🏊 🤽‍♀️ 🤽‍♂️ 🚣‍♀️ 🚣 🏇 🚴‍♀️ 🚴 🚵‍♀️ 🚵 🤹‍♀️ 🤹‍♂️ 🧗‍♀️ 🧗‍♂️ 🧘‍♀️ 🧘‍♂️ 🥰 🥵 🥶 🥳 🥴 🥺 🦸 🦹 🧑‍🦰 🧑‍🦱 🧑‍🦳 🧑‍🦲 🧑‍⚕️ 🧑‍🎓 🧑‍🏫 🧑‍⚖️ 🧑‍🌾 🧑‍🍳 🧑‍🔧 🧑‍🏭 🧑‍💼 🧑‍🔬 🧑‍💻 🧑‍🎤 🧑‍🎨 🧑‍✈️ 🧑‍🚀 🧑‍🚒 🧑‍🦯 🧑‍🦼 🧑‍🦽 🦰 🦱 🦲 🦳")
  .setColor("YELLOW")
  message.reply({embeds: [embed]})
  }
  if(message.content === "?nature-animalemojis") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Nature/Animals Emojis")
    .setDescription("🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙊 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦩 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🦗 🐞 🐜 🕷 🕸 🐢 🐍 🦎 🦂 🦀 🦑 🐙 🦐 🐠 🐟 🐡 🐬 🦈 🐳 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🦌 🐪 🐫 🐘 🦏 🦍 🐎 🐖 🐐 🐏 🐑 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🦓 🦒 🦔 🦧 🦥 🦦 🦨 🦕 🦖 🦪 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌻 🌼 🌸 🌺 🌎 🌍 🌏 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌚 🌝 🌞 🌛 🌜 🌙 🪐 💫 ⭐️ 🌟 ✨ ⚡️ 🔥 💥 ☄️ ☀️ 🌤 ⛅️ 🌥 🌦 🌈 ☁️ 🌧 ⛈ 🌩 🌨 ☃️ ⛄️ ❄️ 🌬 💨 🌪 🌫 🌊 💧 💦 ☔️")
   .setColor("GREEN")
    message.reply({embeds: [embed]})
  }
  if(message.content === "?activity-sportsemojis") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Activity/Sports Emojis")
    .setDescription("⚽️ 🏀 🏈 ⚾️ 🎾 🏐 🏉 🎱 🏓 🏸 🥅 🏒 🏑 🏏 ⛳️ 🏹 🎣 🥊 🥋 ⛸ 🎿 ⛷ 🏂 🏋️‍♀️ 🏋️ 🤺 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸‍♂️ ⛹️‍♀️ ⛹️ 🤾‍♀️ 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏄‍♀️ 🏄 🏊‍♀️ 🏊 🤽‍♀️ 🤽‍♂️ 🚣‍♀️ 🚣 🏇 🚴‍♀️ 🚴 🚵‍♀️ 🚵 🪂 🎽 🏅 🎖 🥇 🥈 🥉 🏆 🏵 🎗 🎫 🎟 🎪 🤹‍♀️ 🤹‍♂️ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🪕 🎲 🎯 🎳 🎮 🎰 🛷 🥌 🪀 🪁")
    .setColor("ORANGE")
    message.reply({embeds: [embed]})
  }
    if(message.content === "?vehicle-travelemojis") {
      let embed = new Discord.MessageEmbed()
      .setTitle("Vehicle/Travel Emojis")
      .setDescription("🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🛺 🏍 🦽 🦼 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 🚁 🛩 ✈️ 🛫 🛬 🚀 🛰 💺 🛶 ⛵️ 🛥 🚤 🛳 ⛴ 🚢 ⚓️ 🚧 ⛽️ 🚏 🚦 🚥 🗺 🗿 🗽 ⛲️ 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛱ 🏖 🏝 ⛰ 🏔 🗻 🌋 🏜 🏕 ⛺️ 🛤 🛣 🏗 🏭 🏠 🏡 🏘 🏚 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 🛕 ⛩ 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁 🛸 ")
      .setColor("BLUE")
      message.reply({embeds: [embed]})
    }
     if(message.content === "?objectemojis") {
       let embed = new Discord.MessageEmbed()
       .setTitle("Object Emojis")
       .setDescription("⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🪓 🦯 🛡 🚬 ⚰️ ⚱️ 🏺 🔮 📿 💈 ⚗️ 🔭 🔬 🕳 💊 💉 🩸 🩹 🩺 🌡 🪒 🚽 🚰 🚿 🛁 🛀 🛎 🔑 🗝 🚪 🪑 🛋 🛏 🛌 🖼 🛍 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🎎 🏮 🎐 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 📌 🎌 🏳️ 🏴 🏁 🪔 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓")
       .setColor("BLACK")
       message.reply({embeds: [embed]})
     } 
      if(message.content === "?symbolemojis") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Symbol Emojis")
        .setDescription("❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 ✔️ ☑️ 🔘 🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🟥 🟧 🟨 🟩 🟦 🟪 🟫 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧 ⏏ ♀ ♂ ⚕ ♾️ ")
        .setColor("PURPLE")
        message.reply({embeds: [embed]})
      }
       if(message.content === "?flagemojis") {
         let embed = new Discord.MessageEmbed()
         .setTitle("Flag Emojis")
         .setDescription("🏴 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇨 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇻 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇪🇦 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇵 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇬 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇲 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇲🇵 🇰🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇹 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇸🇧 🇸🇴 🇿🇦 🇬🇸 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇲🇫 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇯 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇦 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🇺🇸 🇺🇾 🇺🇲 🇺🇳 🇻🇮 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🏳️‍🌈 🏴‍☠️")
         .setColor("RED")
         message.reply({embeds: [embed]})
       }
  if(message.content === "?inviteme") {
    let invite = new Discord.MessageEmbed()
    .setTitle("Atlantean Bot Invite Link")
    .setDescription("https://discord.com/api/oauth2/authorize?client_id=1103495842633089074&permissions=8&scope=bot")
    .setColor("PURPLE")
    message.reply({embeds: [invite]})
  }
if (message.content === "?serverinfo") {
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`${message.guild.name}`)
 .setThumbnail(message.guild.iconURL())
 .addFields({ name: 'Region:', value: `${message.guild.region}`},)
 .addFields({ name: 'Total Members:', value: `${message.guild.memberCount}` }, )
 .addField("Total Emojis", `${message.guild.emojis.cache.size}`)
 .addField("Total Roles", `${message.guild.roles.cache.size}`)
 .addFields(
 { name: 'Owner:', value: `${message.guild.owner}`},
 )
 .setFooter(`GUILD ID: ${message.guild.id}`)
 message.reply({embeds: [embed]})
}
if(message.content === "?avatar") {
 let embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username}`)
.setImage(`${message.author.displayAvatarURL({dynamic : true})}`)
.setColor("RANDOM")
message.reply({embeds: [embed]})
}
if (message.content.toLowerCase().startsWith("?8ball")) {
 let replies = ["Yes.", "No.", "Maybe.", "Not sure.", "Shut up you rat!", "Sure, why not?", "When you grow a braincell, yes.", "THAT'S A SOLID ****NO****"]
 let randomized = replies[Math.floor(Math.random() * replies.length)]
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) return message.reply("What do you want to ask 8ball?")
 let embed = new Discord.MessageEmbed()
 .setTitle("8Ball")
 .addField("Your Question", `${sentence}`)
 .addField("8Ball:", `${randomized}`)
 .setColor("RANDOM")
 .setFooter(" ")
 message.reply({embeds: [embed]})
}
  if(message.content.startsWith("?shootwithak47")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to shoot!")
    else{
      message.channel.send(`${victim} got shot with an AK47.`)
    }
  }
  if(message.content.startsWith("?shootwithglock19")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to shoot!")
    else{
      message.channel.send(`${victim} got shot with a Glock-19.`)
    }
  }
  if(message.content.startsWith("?stabwithknife")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to stab!")
    else{
      message.channel.send(`${victim} was stabbed with a knife and survived from their injuries.`)
    }
  }
  if(message.content.startsWith("?stabwithsword")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to stab!")
    else{
      message.channel.send(`${victim} got stabbed with a sword and it severly injured.`)
    }
  }
if(message.content.startsWith("?slicewithsword")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to slice in half!")
    else{
      message.channel.send(`${victim} got sliced in half!`)
    }
  }
if(message.content.startsWith("?kiss")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Choose your babe!")
    else{
      message.channel.send(`${victim} was smooched! 💋`)
    }
  }
if(message.content.startsWith("?slap")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to slap.")
    else{
      message.channel.send(`${victim} got slapped! 👋`)
    }
  }
 if(message.content === "?randomeme") {
    let replies = ["https://tenor.com/view/meme-dank-life-flirty-gif-5457123", "https://tenor.com/view/meme-i-am-wanted-dance-guys-look-its-the-funny-haha-laugh-gif-25418476", "https://tenor.com/view/memes-meme-random-captions-caption-gif-23557955", "https://i1.sndcdn.com/artworks-XwifFOr3yqt3VVhT-zyUWFw-t500x500.jpg", "https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20220615/76076/1089195539092209666/1089195539092209666.jpg", "https://static.wikia.nocookie.net/4e906cff-de39-45f5-a156-395597600cd5"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "?twittermeme") {
    let replies = ["https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2022/11/twitter1.png?resize=780%2C1139&quality=100&ssl=1", "https://ichef.bbci.co.uk/news/549/cpsprodpb/B89D/production/_96516274_a2d6dcf4-a671-4d3b-ab9f-48b98409ba1a.jpg", "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/07/twitter-down-1657803458.jpg", "https://images.ctfassets.net/lzny33ho1g45/31LQCTwB9gQtEjizR50oCM/878004a035100907498b855a5aa4ae0e/bd44bd4465e645dd5f1a2e6e97fea021.png?w=1400", "https://www.letseatcake.com/wp-content/uploads/2022/11/End-of-Twitter-Tweets-Memes-13.jpg", "https://assets.teenvogue.com/photos/615b48724796d962958e1582/1:1/w_1094,h_1094,c_limit/Screen%20Shot%202021-10-04%20at%202.22.36%20PM.png"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "?gifmeme") {
    let replies = ["https://media2.giphy.com/media/koUtwnvA3TY7C/giphy.gif", "https://media.tenor.com/sQXkvagqfWYAAAAC/lol-funny-memes.gif", "https://media0.giphy.com/media/YWf50NNii3r4k/giphy.gif?cid=6c09b9527p0jq1i3baeuk3t6i2ldm9a5y6g0gipjqahlhzx9&rid=giphy.gif&ct=g", "https://media4.giphy.com/media/xTk9ZzD6NuYrMuDBx6/200w.gif", "https://media1.giphy.com/media/nn2kmb1lRtpkY/200w.gif", "https://media.giphy.com/media/yr7n0u3qzO9nG/giphy.gif"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "?dirtymeme") {
    let replies = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCPp-QE_GOLwFkNn_Av2WSyw0WMRaNzzghpcQW-E&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREH4pIhJjfpGQjPkx4S5N1NQvgyrlKdiD9YHnLz92L&s", "https://image.marriage.com/advice/wp-content/uploads/2020/10/29-Dirty-Sex-Memes-2.jpg", "https://i.chzbgr.com/full/9044270080/h558D6B92/packaged-goods-her-pulled-out-right-yup", "https://www.letseatcake.com/wp-content/uploads/2022/02/Dirty-Memes-23.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5nMDtEAfaxaD3LZgaXeJMclfTj9N2pExebtZmrw&s"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "?darkmeme") {
    let replies = ["https://i.pinimg.com/736x/a3/43/a4/a343a43ad51ff282e3b20609328c964b.jpg", "https://i.pinimg.com/236x/d6/cb/00/d6cb008bc1291154467fd223ec8df556.jpg", "https://i.chzbgr.com/full/9094466304/h31E05859/person-going-90-mph-school-zone-and-pre-schoolers-are-crossing-street-this-is-where-fun-begins", "https://cdn.ebaumsworld.com/mediaFiles/picture/604025/86034992.jpg", "https://i.imgflip.com/563zyg.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
 if(message.content === "?wholesomememe") {
    let replies = ["https://www.boredpanda.com/blog/wp-content/uploads/2022/11/funny-wholesome-memes-1-63628e20497f9__700.jpg", "https://www.rd.com/wp-content/uploads/2022/01/When-you%E2%80%99re-waiting-for-your-bestie-and-finally-see-them-640357669.jpg?fit=700,700", "https://www.rd.com/wp-content/uploads/2022/01/In-case-no-one-told-you-yet-today-you%E2%80%99re-doing-great-931446400.jpg?fit=700,700", "https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/639767fabfd0c945ef926c56_wholesome-memes-4.jpg", "https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/63976dfc2fe48b2ad1071e3b_wholesome-memes-7.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content === "?ping") {
 let embed = new Discord.MessageEmbed()
 .setTitle("🏓 Pong!")
 .setDescription(`**${client.ws.ping}ms** Latency!`)
 .setColor("RANDOM")
 .setFooter(
 `Requested by ${message.author.username}`,
 message.author.displayAvatarURL()
 );
 message.reply({embeds: [embed]})
 }
  if(message.content === "?dumbestcommandever") {
    message.react("🤪");
  }
  if (message.content === "?rockpaperscissors" || message.content === "?rps" || message.content === "?RPS") {
 message.reply("<:atlanteanx:1111021057688739950> | PICK AN OBJECT TO PLAY RPS WITH! EXAMPLE: ****?rps rock**** | <:atlanteanx:1111021057688739950>")
 }

 if (message.content === "?rps rock" || message.content === "?Rps rock" || message.content === "?RPS ROCK") {
 let replies = ["YOU CHOSE ***ROCK*** :rock:, I CHOSE ***PAPER*** :newspaper:. :tada: ****PAPER**** WINS! :tada:", "YOU CHOSE ***ROCK*** :rock:, I CHOSE ***SCISSORS*** :scissors:. :tada: ****ROCK**** WINS! :tada:", "YOU CHOSE ***ROCK*** :rock:, I CHOSE ***ROCK*** :rock:. <:atlanteanx:1111021057688739950> IT'S A TIE! <:atlanteanx:1111021057688739950>"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "?rps paper" || message.content === "?Rps paper" || message.content === "?RPS PAPER") {
 let replies = ["YOU CHOSE ***PAPER*** :newspaper:, I CHOSE ***ROCK*** :rock:. :tada: ****PAPER**** WINS! :tada:", "YOU CHOSE ***PAPER*** :newspaper:, I CHOSE ***SCISSORS*** :scissors:. :tada: ****SCISSORS**** WIN! :tada:", "YOU CHOSE ***PAPER*** :newspaper:, I CHOSE ***PAPER*** :newspaper:. <:atlanteanx:1111021057688739950> IT'S A TIE! <:atlanteanx:1111021057688739950>"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "?rps scissors" || message.content === "?Rps scissors" || message.content === "?RPS SCISSORS") {
 let replies = ["YOU CHOSE ***SCISSORS*** :scissors:, I CHOSE ***ROCK*** :rock:. :tada: ****ROCK**** WINS! :tada:", "YOU CHOSE ***SCISSORS*** :scissors:, I CHOSE ***PAPER*** :newspaper:. :tada: ****SCISSORS**** WIN! :tada", "YOU CHOSE ***SCISSORS*** :scissors:, I CHOSE ***SCISSORS*** :scissors:. <:atlanteanx:1111021057688739950> IT'S A TIE! <:atlanteanx:1111021057688739950>"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }
})
client.on("message", async message => {
  if(message.content === "?buylambo") {
     let lambo = 6000
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > lambo) {
     await db.set(`wallet_${message.author.id}`, currentBalance - lambo) }
    if(`wallet_${message.author.id}`, currentBalance < lambo) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a lamborghini for $6000!")
    .setImage("https://hips.hearstapps.com/hmg-prod/images/2022-lamborghini-aventador-109-1625607587.jpg?crop=0.691xw:0.776xh;0.204xw,0.180xh&resize=640:*")
     message.reply({embeds: [embed]})
  } 
  if(message.content === "?buysword") {
     let sword = 4000
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > sword) {
     await db.set(`wallet_${message.author.id}`, currentBalance - sword) }
    if(`wallet_${message.author.id}`, currentBalance < sword) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a sword for $4000!")
    .setImage("https://www.darksword-armory.com/wp-content/uploads/2014/09/Medieval-knight-sword.jpg")
     message.reply({embeds: [embed]})
  }
    if(message.content === "?buyknife") {
     let knife = 500
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > knife) {
     await db.set(`wallet_${message.author.id}`, currentBalance - knife) }
    if(`wallet_${message.author.id}`, currentBalance < knife) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a knife for $500!")
    .setImage("https://images.thdstatic.com/productImages/8bb22b32-9328-478a-9aac-3085782c0a24/svn/klein-tools-pocket-knives-44228r-64_1000.jpg")
     message.reply({embeds: [embed]})
  }
    if(message.content === "?buyglock19") {
     let glock = 1500
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > glock) {
     await db.set(`wallet_${message.author.id}`, currentBalance - glock) }
    if(`wallet_${message.author.id}`, currentBalance < glock) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a Glock-19 for $1500!")
    .setImage("https://us.glock.com/-/media/Global/US/old/US-Site/70-Pistols/hero-all-assets/hero-img-1-1-feature-sm.ashx")
     message.reply({embeds: [embed]})
  }
    if(message.content === "?buyak47") {
     let ak47 = 3000
      let invBalance = await db.get(`inventory_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > ak47) {
     await db.set(`wallet_${message.author.id}`, currentBalance - ak47)
    await db.set(`inventory_${message.author.id}`, invBalance + gun2)}
    if(`wallet_${message.author.id}`, currentBalance < ak47) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a AK47 for $3000!")
    .setImage("https://cdn.shopify.com/s/files/1/1980/1771/products/AKBlacktoymodelbyrope_grande.jpg?v=1681406751")
     message.reply({embeds: [embed]})
  }
  if(message.content.toLowerCase().startsWith("?dep")) {
       let amount = message.content.split(" ").slice(1)
    let currentBalance = await db.get(`bank_${message.author.id}`)
    if(!amount[0]) return message.reply("`?dep (amount)`")
    if(`wallet_${message.author.id}`, currentBalance > amount) {
     await db.set(`bank_${message.author.id}`, currentBalance + amount).then(message.reply(`Deposited $${amount} to your bank.`)) }
    if(`wallet_${message.author.id}`, currentBalance < amount) return message.reply("You don't have enough!")
  }
 if(message.content.toLowerCase().startsWith("?withdraw")) {
       let amount = message.content.split(" ").slice(1)
    let currentBalance = await db.get(`bank_${message.author.id}`)
    if(!amount[0]) return message.reply("`?withdraw (amount)`")
    if(`bank_${message.author.id}`, currentBalance > amount) {
     await db.set(`wallet_${message.author.id}`, currentBalance + amount).then(message.reply(`Withdrew $${amount} from your bank to your wallet.`)) }
    if(`bank_${message.author.id}`, currentBalance < amount) return message.reply("You don't have enough!")
  }
      if(message.content.toLowerCase().startsWith("?inventory")) {
  let inv = await db.get(`inventory_${message.author.id}`)

  if(inv === null) balance = 0
  let invEmbed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username}'s Inventory`)
  .setDescription(`${inv}`)
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    message.reply({embeds: [invEmbed]})
  }
  if(message.content === "?shop") {
    let shop = new Discord.MessageEmbed()
    .setTitle("Shop and Prices")
    .addField("All Items", " ")
    .addField(" ", "?buylambo - $6000")
    .addField(" ", "?buysword - $4000")
    .addField(" ", "?buyknife - $500")
    .addField(" ", "?buyglock19 - $1500")
    .addField(" ", "?buyak47 - $3000")
    .setColor("RANDOM")
    message.reply({embeds: [shop]})
  }
})
client.on("message", async message => {
  if(message.content === "ping") {
    message.reply("Pong!")
  }
  if(message.content.toLowerCase().startsWith("?balance") || message.content.toLowerCase().startsWith("?bal")) {
  let balance = await db.get(`wallet_${message.author.id}`)
  let bank = await db.get(`bank_${message.author.id}`)

  if(balance === null) balance = 0
  if(bank === null) bank = 0
  let currency = "$"
  let moneyEmbed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username}'s Balance`)
  .setDescription(`Wallet: ${currency}${balance}\nBank: ${currency}${bank}`)
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    message.reply({embeds: [moneyEmbed]})
  }
  if(message.content.toLowerCase().startsWith("?dailyprize")) {
    const check = await db.get(`dailyCheck_${message.author.id}`)
    const timeout = 86400000;
    if(check !== null && timeout - (Date.now() - check) > 0) {
     const { default: ms } = await import(`pretty-ms`);
      const timeLeft = ms(timeout - (Date.now() - check))
      message.reply(`You already claimed your daily prize, Come back after ${timeLeft}`)
    } else {
      let currency = "$"
      let reward = 1000
      let currentBalance = await db.get(`wallet_${message.author.id}`)
      message.reply(`Nice! You have claimed ${currency}${reward.toLocaleString()} as your daily reward! Come back tommorow!`)
      await db.set(`wallet_${message.author.id}`, currentBalance + reward)
      await db.set(`dailyCheck_${message.author.id}`, Date.now())
    }
  }
})
client.on("message", message => {
  const args = message.content.split(" ").slice(1)
  if(message.content === "?policy") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Atlantean Privacy Policy")
      .setDescription("1. By using Atlantean, you accept that your messages will be read by the bot, channels and servers will be accesed etc. \n2. Atlantean takes your data by creating a database with your in-bot wallet, bank, and inventory.")
      .setColor("RANDOM")
    message.reply({embeds: [embed]})
  }
    if(message.content.startsWith("?purge")) {
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("You don't have permission!")
    let amountToPurge = args[0]
    if(isNaN(amountToPurge)) return message.reply("`?purge (Number)`")
    message.delete()
    message.channel.bulkDelete(amountToPurge)
    message.channel.send(`Deleted ${amountToPurge} messages!`).then(v => v.delete({timeout: 10000}))
      .catch(() => {
      message.reply("<:atlanteanx:1111021057688739950> | Due to Discord API I cannot delete messages older than 14 days.")
      })
  }
  if(message.content.startsWith("?kick")) {
    if(message.member.permissions.has("KICK_MEMBERS")) {
      let member = message.mentions.members.first()
 if(!args[0]) return message.reply("`?kick @user (reason)`")
      else {
        member.kick().then(mem => {
          message.channel.send(`Kicked ${mem.user.username}!`)
        })
      }
    } else {
      message.reply("You don't have permission to do that.")
    }
  }
    if(message.content.startsWith("?ban")) {
    if(message.member.permissions.has("BAN_MEMBERS")) {
      let member = message.mentions.members.first()
 if(!args[0]) return message.reply("`?ban @user (reason)`")
      else {
        member.ban().then(mem => {
         let embed = new Discord.MessageEmbed()
          .setTitle(`${member} has been banned`)
          .setColor("BLUE")
          .setThumbnail('https://media2.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif')
           .addField("User and Reason", (args.join(" ")))
          .setFooter(`Moderator: ${message.author.username}`)
          message.channel.send({embeds: [embed]})
        })
      }
    } else {
      message.reply("You don't have permission to do that.")
    }
  }
if(message.content.startsWith("?unban")) {
if(message.member.permissions.has("BAN_MEMBERS")) {
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.reply("`?unban (userid) (reason)`")
if(isNaN(args[0])) return message.reply("Please provide a real id!")
} else {
  message.reply("You don't have permission!")
}
}
  if(message.content.startsWith("?warn")) {
 if(message.member.permissions.has("MANAGE_MESSAGES")) {
 let args = message.content.split(" ").slice(1)
 let victim = message.mentions.users.first()
 if(!args[0]) return message.reply("`?warn @user (reason)`")
 
 let embed = new Discord.MessageEmbed()
 .setTitle("Warned")
 .setDescription(args.join(" "))
 .setThumbnail('https://cdn.discordapp.com/attachments/1102697856005058622/1102750626775060540/Screenshot_2023-04-23_5.13.58_PM.png')
 .setColor("PURPLE")
 .setFooter(`Moderator: ${message.author.username}`)
 .setTimestamp()
 message.channel.send({embeds: [embed]})

} else {
 message.reply("You don't have permission to do that!")
}
}
});
client.on("message", message => {
  if(message.content === "pingy") {
    message.reply("Pongy!")
  }
  if(message.content.startsWith("?mute")) {
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don't have permission!")
    let role = message.guild.roles.cache.find(role => role.name === "muted")
    let member = message.mentions.members.first()
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!reason) return message.reply("`?mute @user (reason)`")
    if(!role) return message.reply("You don't have a muted role!")
 if(!member) return message.reply("You didn't specify a member!")
    if(member.roles.cache.has(role.id)) return message.channel.send("That user is already muted!")
    member.roles.add(role)
    .then(() => {
      message.channel.send(`Succesfully muted ${member} with reason: ${reason}`)
    })
    .catch(() => {
      message.reply("Oops, Something went wrong.")
    })
  }
  if(message.content.startsWith("?unmute")) {
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don't have permission")
    let role = message.guild.roles.cache.find(role => role.name === "muted")
    let member = message.mentions.members.first()
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!reason) return message.reply("`?unmute @user (reason)`")
    if(!role) return message.reply("You don't have a muted role!")
 if(!member) return message.reply("You didnt specify a member!")
    if(!member.roles.cache.has(role.id)) return message.reply("That user not muted!")
    member.roles.remove(role)
    .then(() => {
      message.channel.send(`Succesfully unmuted ${member} with reason: ${reason}`)
    })
    .catch(() => {
      message.reply("Oops, Something went wrong.")
    })
  }
})
client.snipe = new Discord.Collection()
client.on("messageDelete", deletedMsg => {
 client.snipe.set(deletedMsg.channel.id, deletedMsg)
})
client.on("message", message => {
if(message.content.startsWith("?snipe")) {
 let channel = message.mentions.channels.first() || message.channel
 let msg = client.snipe.get(channel.id)
 if(!msg) return message.reply("There is nothing to snipe!")
 let embed = new Discord.MessageEmbed()
 .setTitle(msg.author.tag)
 .setThumbnail(msg.author.displayAvatarURL({dynamic: true}))
 .setColor("RANDOM")
 .setDescription(msg.content)
 if(msg.attachments.first()) embed.setImage(msg.attachments.first().url)
 message.reply({embeds: [embed]})
}
})
client.on("message", message => {
  if(message.content === "?setupverification") {
    let embed = new Discord.MessageEmbed()
    .setTitle("How to setup verification with Atlantean!")
    .addField("Step 1", "Create a role with the name `Verified`. ")
    .addField("Step 2", "Setup permissions for this role.")
    .addField("Step 3", "Create a verification channel telling them to type `?verify`.")
    .addField("Additional Note (Important)", "For the verification channel, make it viewable by everyone and allow everyone to send messages, then, add the `Verified` role and remove the permission to view the channel for the `Verified` role.")
    message.reply({embeds: [embed]})
  }
   if(message.content.startsWith("?duplicatechannel")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) {
return message.channel.send("You don't have permission.")
}
message.channel.clone({position: message.channel.rawPosition }).then(ch => { ch.send('Succesfully duplicated channel! :white_check_mark:'); })
 let args = message.content
 .toLowerCase() 
 .split(" ")
 .slice(1);
}
  if(message.content === "?botinfo") {
    let info = new Discord.MessageEmbed()
    .setAuthor("Atlantean Bot", "https://i.postimg.cc/V6MnBXnk/Screenshot-2023-05-03-9-41-29-PM.png")
    .addField("General Info", "Developer - `mangos#0600`", true)
    .addField("Server Count", `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("Get started with", "?bored, ?Bored, ?BORED")
    .addField("Other", `**${client.ws.ping}ms** Latency.`)
    .addField("Hosted on Replit", "Running 24/7 with UptimeRobot")
    .addField("6 files", "Main file - 800+ lines of code", true)
    .addField("Coded in `discord.js v13.9.0`", "`node.js`", true)
    .setTimestamp()
    .setColor("RANDOM")
    message.reply({embeds: [info]})
  }
if (message.content.startsWith("?suggest")) {
 let args = message.content
 .split(" ")
 .slice(1)
 if(!args[0]) return message.reply("Hey! To suggest something you need to send something!")
 const reportlog = new Discord.MessageEmbed()
 .setTitle('A New Suggestion!') 
 .setColor('RANDOM')
.setDescription(args.join(" "))
.setFooter(`Suggestion by ${message.author.tag}`)
.setTimestamp()
client.channels.cache.get('1105225382090788946').send({embeds: [reportlog]}).then (sentMessage => {
 sentMessage.react("✅")
 })
 message.reply("Your Suggestion has been succesfully been sent. ✅") 
}
if(message.content.startsWith("?hug")) {
 let l = message.mentions.users.first()
 if(!l) message.reply("Please Mention someone to hug.")
 else {
 message.channel.send(`${l} was hugged!`)
 }
}
   if(message.content.startsWith("?renamechannel")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) {
return message.reply("You don't have permission.")
}
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.reply("Choose a name!")
 message.channel.setName(args.join(" "))
     message.channel.send("Renamed Channel. :white_check_mark: Note: If this channel's name was changed twice by Atlantean already the command will not work.")
}
  if(message.content.startsWith("?userinfo")) {
 let user = message.mentions.users.first();
 let member =
message.mentions.members.first() || message.member;
    if(!member) return message.reply("Mention a user!")
    if(!user) return message.reply("`?userinfo @user`")
 let embed = new
 Discord.MessageEmbed()
 .setColor("BLURPLE")
 .setTitle(`${user.username}'s User info`)
 .setThumbnail(user.displayAvatarURL({dynamic: true}))
 .setDescription(`**Username:** ${user.tag}\n**User ID:** ${user.id}\n**Created At:** ${user.createdAt}\n**Joined At:** ${member.joinedAt}\n**Nickname:** ${member.displayName}`)
 .setFooter(`Requested by ${message.author.username}`)
 message.channel.send({embeds: [embed]})
}
  if(message.content === "?flipacoin") {
    let replies = [":coin: Heads! :coin:", ":coin: Tails! :coin:"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content.startsWith("?feedback")) {
 let args = message.content
 .split(" ")
 .slice(1)
 if(!args[0]) return message.reply("Hey! To provide feedback you need to send something!")
 const reportlog = new Discord.MessageEmbed()
 .setTitle('Feedback') 
 .setColor('RANDOM')
.setDescription(args.join(" "))
.setFooter(`Feedback sent by ${message.author.tag}`)
.setTimestamp()
client.channels.cache.get('1105225382090788946').send({embeds: [reportlog]}).then (sentMessage => {
 sentMessage.react("✅")
 })
}
  if(message.content.toLowerCase() === "?verify") {
let verify = new Discord.MessageEmbed()
  .setTitle(`:wave: Welcome to ${message.guild.name}!`)
  .setDescription("To gain access to the server must pass the verification.")
  .addField("How to Verify", "Click on the :white_check_mark: to verify.") 
.setColor("PURPLE")
message.channel.send({embeds: [verify]}).then(sentMessage => {
  sentMessage.react("✅")
})

const filter = (reaction, user) => {
 return ['✅'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
 .then(collected => {
 const reaction = collected.first();
 if(reaction.emoji.name === '✅') {
   let role = message.guild.roles.cache.find(role => role.name === "Verified")
 message.member.roles.add(role)
 }
 })
 .catch(collected => {
 message.reply('error');
 });
} 
})
client.on("message", async message => {
    if(message.content === "?help") {
    const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Choose Category!')
					.setMinValues(1)
					.setMaxValues(1)
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'Moderation',
							description: 'Moderation Commands',
							value: 'second_option',
              customId: 'cool'
						},
						{
							label: 'I am also an option',
							description: 'This is a description as well',
							value: 'third_option',
						},
					]),
			);
    message.reply({content: "Hello", components: [row]});
    let moderation = new Discord.MessageEmbed()
    .setTitle("WORKING")
    if(message.customId === 'cool') {
      await message.channel.send({embeds: [moderation]})
    }
  }
})




 
client.on("ready", async () => {
  console.log(`${client.user.tag} is online!`)
 function randomStatus() {
 let status = [`?bored • ${client.guilds.cache.size.toLocaleString()} Servers`, `/help • ${client.guilds.cache.size.toLocaleString()} Servers`, `https://bit.ly/atlanteanbot`]
 let rstatus = Math.floor(Math.random() * status.length);
 client.user.setActivity(status[rstatus], {type: "LISTENING"}, {status: "DND"})
 }; setInterval(randomStatus, 5000) 
})


client.login(process.env.token);
