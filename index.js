const express = require("express");
const app = express();
const Database = require("@replit/database")
const db = new Database()
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

app.listen(3000, () => {
  console.log ("its working bro")
}) const express = require("express");
const app = express();
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

app.listen(3000, () => {
  console.log ("its working bro")
}) 

app.get("/", (req, res) => {
  res.send("wuts good yall");
})

const Discord = require("discord.js");
const client = new Discord.Client ({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"],
  allowedMentions: ["users", "channels"]
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
      
   const leave = client.channels.cache.get("1099174387019685940");
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
  
 const leave = client.channels.cache.get("1103790029907693588");
  leave.send({content: member.user.toString(), files: [attachment]});
})




client.on("messageCreate", message => {
  if(message.content === "a!nameme") {
    let nicknames = ["Goofy", "Smart", "Cool", "Dumb", "Gay", "Stoopid", "Awesome"]
    message.reply(`${nicknames[Math.floor(Math.random () * nicknames.length)]} is your new name!`)
  }

  if(message.content === "a!amistupid") {
    let nicknames = ["Yes, you", "No you are not", "A little bit", "You are sometimes", "I spelled stoopid wrong, I think I am"]
    message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content.toLowerCase().startsWith("a!help") || message.content.toLowerCase().startsWith("a!Help") || message.content.toLowerCase().startsWith("a!HELP")) {
    let bored = new Discord.MessageEmbed()
    .setTitle("Join the support server if there are any issues!")
    .setAuthor("Atlantean Bot Commands", "https://i.postimg.cc/V6MnBXnk/Screenshot-2023-05-03-9-41-29-PM.png")
    .setDescription("ⓘ Prefix = a!")
    .setColor("PURPLE")
    .addField("<:atlanteanpaper:1111102024369590313>|─OTHER─|<:atlanteanpaper:1111102024369590313>", " *`a!custombot`*, ***`a!vote`***, *`a!policy`*, *`a!support`*, *`a!invite`*")
    .addField("<:atlanteancool:1111102369288167434>|─FUN─|<:atlanteancool:1111102369288167434>", "*`a!nameme`*, *`a!say`*, *`a!amistupid`*, *`a!amigay`*, *`a!amihappy`*, *`a!kiss`*, *`a!slap`*, *`a!8ball`*, *`a!dumbestcommandever`*, *`a!rockpaperscissors/a!rps`*, *`a!hug`*, *`a!flipacoin`*")
      .addField("<:atlanteansword:1111028471410479176>|─ROLEPLAY/ECONOMY─|<:atlanteansword:1111028471410479176>", "*`a!buyak47`*, *`a!buyglock19`*, *`a!shootwithglock19`*, *`a!shootwithak47`*, *`a!bal`*, *`a!dep`*, *`a!withdraw`*, *`a!dailyprize`*, *`a!buyknife`*, *`a!stabwithknife`*, *`a!buysword`*, *`a!stabwithsword`*, *`a!slicewithsword`*, *`a!buylambo`*, *`a!shop`*")
      .addField("<:atlanteanmemeface:1111028079800897739>|─MEMES─|<:atlanteanmemeface:1111028079800897739>", "*`a!randomeme`*, *`a!twittermeme`*, *`a!gifmeme`*, *`a!dirtymeme`*, *`a!darkmeme`*, *`a!wholesomememe`*")
     .addField("<:atlanteansheild:1111027600253530162>|─MODERATION─|<:atlanteansheild:1111027600253530162>", "*`a!purge`*, *`a!kick`*, *`a!ban`*, *`a!unban`*, *`a!mute`*, *`a!unmute`*, *`a!snipe`*, *`a!warn`*, *`a!showwarns`*, *`a!clearwarns`*")
      .addField("<:atlanteanutlity:1111025986448916481>|─UTILITY─|<:atlanteanutlity:1111025986448916481>", "*`a!serverinfo`*, *`a!ping`*, *`a!botinfo`*, *`a!suggest`*, *`a!avatar`*, *`a!peopleemojis`*, *`a!nature-animalemojis`*, *`a!activity-sportsemojis`*, *`a!vehicle-travelemojis`*, *`a!objectemojis`*, *`a!symbolemojis`*, *`a!flagemojis`*, *`a!duplicatechannel`*, *`a!renamechannel`*")
      .addField("<:atlanteancheck:1114965552507654175>|─VERIFICATION─|<:atlanteancheck:1114965552507654175>", 
 "*`a!setupverification`*, *`a!setverify`*, *`a!setrole`*, *`a!setrrole`*, *`a!rvrole`*, *`a!rvchannel`*, *`a!rrvrole`*")
      .setFooter("To verify with Atlantean type a!verify in the verification channel. (Make sure verification is all setup)")
      .addField(`Atlantean is currently in ${client.guilds.cache.size.toLocaleString()} Servers!`, " ")
    .setTimestamp()
    const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
        .setURL('https://discord.com/api/oauth2/authorize?client_id=1103495842633089074&permissions=8&scope=bot')
          .setLabel('Invite')
          .setEmoji('1114965552507654175')
          .setStyle('LINK'),
          
          new MessageButton()
            .setURL('https://atlantean-bot.gleyberdaywithmangos25.repl.co/')
            .setLabel('Website')
          .setEmoji('1111102024369590313')
            .setStyle('LINK'),
          
            new MessageButton()
            .setURL('https://discord.gg/UwRb96dxFU')
            .setLabel('Support')
          .setEmoji('1111027600253530162')
            .setStyle('LINK'),
          
                    new MessageButton()
          .setURL('https://atlantean-bot.gleyberdaywithmangos25.repl.co/policy.html')
          .setLabel('Privacy Policy')
          .setEmoji('1111028471410479176')
          .setStyle('LINK')
        );
    message.reply({embeds: [bored], components: [row]})
  }
  if(message.content === "a!support") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Support server invite link!")
    .setURL("https://discord.gg/UwRb96dxFU")
    .setColor("PURPLE")
    message.reply({embeds: [embed]})
  }
  if(message.content === "a!amigay") {
    let replies = ["Yes, You are gay.", "No, You are not.", "Which gay? If you mean happy do a!amihappy."]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!amihappy") {
    let replies = ["You are kind of happy.", "You are depressed.", "Wow! You are extremely happy!"]
message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!peopleemojis") {
    let embed = new Discord.MessageEmbed()
    .setTitle("People Emojis")
    .setDescription("😀 😃 😄 😁 😆 🤩 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 🤪 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 🤬 😶 😐 😑 😯 😦 😧 😮 😲 😵 🤯 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🥱 🙄 🤨 🧐 🤔 🤫 🤭 🤥 😬 🤐 🤢 🤮 🤧 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤲 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 🤏 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 🤟 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 🦻 👃 🦵 🦶 🦾 🦿 👣 👁 👀 🗣 👤 👥 👶 👦 👧 🧒 👨 👩 🧑 👱‍♀️ 👱 🧔 👴 👵 🧓 👲 👳‍♀️ 👳 🧕 👮‍♀️ 👮 👷‍♀️ 👷 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🤱 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 🧏 🧏‍♂️ 🧏‍♀️ 🧙‍♀️ 🧙‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧚‍♀️ 🧚‍♂️ 🧜‍♀️ 🧜‍♂️ 🧝‍♀️ 🧝‍♂️ 🧞‍♀️ 🧞‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 👨‍🦯 👩‍🦯 👨‍🦼 👩‍🦼 👨‍🦽 👩‍🦽 🧑‍🤝‍🧑 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓 🕶 🤿 🌂 ☂️ 🧣 🧤 🧥 🦺 🥻 🩱 🩲 🩳 🩰 🧦 🧢 ⛷ 🏂 🏋️‍♀️ 🏋️ 🤺 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸‍♂️ ⛹️‍♀️ ⛹️ 🤾‍♀️ 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏄‍♀️ 🏄 🏊‍♀️ 🏊 🤽‍♀️ 🤽‍♂️ 🚣‍♀️ 🚣 🏇 🚴‍♀️ 🚴 🚵‍♀️ 🚵 🤹‍♀️ 🤹‍♂️ 🧗‍♀️ 🧗‍♂️ 🧘‍♀️ 🧘‍♂️ 🥰 🥵 🥶 🥳 🥴 🥺 🦸 🦹 🧑‍🦰 🧑‍🦱 🧑‍🦳 🧑‍🦲 🧑‍⚕️ 🧑‍🎓 🧑‍🏫 🧑‍⚖️ 🧑‍🌾 🧑‍🍳 🧑‍🔧 🧑‍🏭 🧑‍💼 🧑‍🔬 🧑‍💻 🧑‍🎤 🧑‍🎨 🧑‍✈️ 🧑‍🚀 🧑‍🚒 🧑‍🦯 🧑‍🦼 🧑‍🦽 🦰 🦱 🦲 🦳")
  .setColor("YELLOW")
  message.reply({embeds: [embed]})
  }
  if(message.content === "a!nature-animalemojis") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Nature/Animals Emojis")
    .setDescription("🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙊 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦩 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🦗 🐞 🐜 🕷 🕸 🐢 🐍 🦎 🦂 🦀 🦑 🐙 🦐 🐠 🐟 🐡 🐬 🦈 🐳 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🦌 🐪 🐫 🐘 🦏 🦍 🐎 🐖 🐐 🐏 🐑 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🦓 🦒 🦔 🦧 🦥 🦦 🦨 🦕 🦖 🦪 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌻 🌼 🌸 🌺 🌎 🌍 🌏 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌚 🌝 🌞 🌛 🌜 🌙 🪐 💫 ⭐️ 🌟 ✨ ⚡️ 🔥 💥 ☄️ ☀️ 🌤 ⛅️ 🌥 🌦 🌈 ☁️ 🌧 ⛈ 🌩 🌨 ☃️ ⛄️ ❄️ 🌬 💨 🌪 🌫 🌊 💧 💦 ☔️")
   .setColor("GREEN")
    message.reply({embeds: [embed]})
  }
  if(message.content === "a!activity-sportsemojis") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Activity/Sports Emojis")
    .setDescription("⚽️ 🏀 🏈 ⚾️ 🎾 🏐 🏉 🎱 🏓 🏸 🥅 🏒 🏑 🏏 ⛳️ 🏹 🎣 🥊 🥋 ⛸ 🎿 ⛷ 🏂 🏋️‍♀️ 🏋️ 🤺 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸‍♂️ ⛹️‍♀️ ⛹️ 🤾‍♀️ 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏄‍♀️ 🏄 🏊‍♀️ 🏊 🤽‍♀️ 🤽‍♂️ 🚣‍♀️ 🚣 🏇 🚴‍♀️ 🚴 🚵‍♀️ 🚵 🪂 🎽 🏅 🎖 🥇 🥈 🥉 🏆 🏵 🎗 🎫 🎟 🎪 🤹‍♀️ 🤹‍♂️ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🪕 🎲 🎯 🎳 🎮 🎰 🛷 🥌 🪀 🪁")
    .setColor("ORANGE")
    message.reply({embeds: [embed]})
  }
    if(message.content === "a!vehicle-travelemojis") {
      let embed = new Discord.MessageEmbed()
      .setTitle("Vehicle/Travel Emojis")
      .setDescription("🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🛺 🏍 🦽 🦼 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 🚁 🛩 ✈️ 🛫 🛬 🚀 🛰 💺 🛶 ⛵️ 🛥 🚤 🛳 ⛴ 🚢 ⚓️ 🚧 ⛽️ 🚏 🚦 🚥 🗺 🗿 🗽 ⛲️ 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛱ 🏖 🏝 ⛰ 🏔 🗻 🌋 🏜 🏕 ⛺️ 🛤 🛣 🏗 🏭 🏠 🏡 🏘 🏚 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 🛕 ⛩ 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁 🛸 ")
      .setColor("BLUE")
      message.reply({embeds: [embed]})
    }
     if(message.content === "a!objectemojis") {
       let embed = new Discord.MessageEmbed()
       .setTitle("Object Emojis")
       .setDescription("⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🪓 🦯 🛡 🚬 ⚰️ ⚱️ 🏺 🔮 📿 💈 ⚗️ 🔭 🔬 🕳 💊 💉 🩸 🩹 🩺 🌡 🪒 🚽 🚰 🚿 🛁 🛀 🛎 🔑 🗝 🚪 🪑 🛋 🛏 🛌 🖼 🛍 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🎎 🏮 🎐 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 📌 🎌 🏳️ 🏴 🏁 🪔 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓")
       .setColor("BLACK")
       message.reply({embeds: [embed]})
     } 
      if(message.content === "a!symbolemojis") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Symbol Emojis")
        .setDescription("❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ !?️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 ✔️ ☑️ 🔘 🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🟥 🟧 🟨 🟩 🟦 🟪 🟫 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧 ⏏ ♀ ♂ ⚕ ♾️ ")
        .setColor("PURPLE")
        message.reply({embeds: [embed]})
      }
       if(message.content === "a!flagemojis") {
         let embed = new Discord.MessageEmbed()
         .setTitle("Flag Emojis")
         .setDescription("🏴 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇨 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇻 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇪🇦 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇵 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇬 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇲 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇲🇵 🇰🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇹 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇸🇧 🇸🇴 🇿🇦 🇬🇸 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇲🇫 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇯 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇦 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🇺🇸 🇺🇾 🇺🇲 🇺🇳 🇻🇮 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🏳️‍🌈 🏴‍☠️")
         .setColor("RED")
         message.reply({embeds: [embed]})
       }
  if(message.content === "a!invite") {
    let invite = new Discord.MessageEmbed()
    .setTitle("Atlantean Bot Invite Link")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=1103495842633089074&permissions=8&scope=bot")
    .setColor("PURPLE")
    message.reply({embeds: [invite]})
  }
if (message.content === "a!serverinfo") {
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`***${message.guild.name}*** Server Info`)
 .setThumbnail(message.guild.iconURL())
 .addField("Member Count:", `${message.guild.memberCount}`, true)
   .addField("Total Roles", `${message.guild.roles.cache.size}`, true)
   .addField("Total Categories and Channels:", `${message.guild.channels.cache.size}`)
 .addField("Total Emojis:", `${message.guild.emojis.cache.size}`, true)
   .addField("Total Stickers:", `${message.guild.stickers.cache.size}`, true)
 .setFooter(`GUILD ID: ${message.guild.id}`)
 message.reply({embeds: [embed]})
}
if(message.content.startsWith("a!avatar")) {
    let mentioned = message.mentions.users.first()
  let args = message.content.split(" ").slice(1)
   if(!mentioned) return message.reply("Mention someone!")
 let embed = new Discord.MessageEmbed()
.setTitle(`${args}`)
.setImage(`${mentioned.displayAvatarURL({dynamic : true})}`)
.setColor("RANDOM")
message.reply({embeds: [embed]})
}
if (message.content.toLowerCase().startsWith("a!8ball")) {
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
  if(message.content.startsWith("a!shootwithak47")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to shoot!")
    else{
      message.channel.send(`${victim} got shot with an AK47.`)
    }
  }
  if(message.content.startsWith("a!shootwithglock19")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to shoot!")
    else{
      message.channel.send(`${victim} got shot with a Glock-19.`)
    }
  }
  if(message.content.startsWith("a!stabwithknife")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to stab!")
    else{
      message.channel.send(`${victim} was stabbed with a knife and survived from their injuries.`)
    }
  }
  if(message.content.startsWith("a!stabwithsword")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to stab!")
    else{
      message.channel.send(`${victim} got stabbed with a sword and it severly injured.`)
    }
  }
if(message.content.startsWith("a!slicewithsword")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to slice in half!")
    else{
      message.channel.send(`${victim} got sliced in half!`)
    }
  }
if(message.content.startsWith("a!kiss")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Choose your babe!")
    else{
      let kiss = new Discord.MessageEmbed()
      .setImage("https://media.tenor.com/9rKqDz2fQkEAAAAC/cat-kiss.gif")
      .setColor("RED")
      message.channel.send({embeds: [kiss], content: `${victim} was kissed by ${message.author.username} 💋!`})
    }
  }
if(message.content.startsWith("a!slap")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to slap.")
    else{
      let kiss = new Discord.MessageEmbed()
      .setImage("https://i.gifer.com/XaaW.gif")
      .setColor("RED")
      message.channel.send({embeds: [kiss], content: `${victim} was slapped by ${message.author.username} 👋!`})
    }
  }
 if(message.content === "a!randomeme") {
    let replies = ["https://tenor.com/view/meme-dank-life-flirty-gif-5457123", "https://tenor.com/view/meme-i-am-wanted-dance-guys-look-its-the-funny-haha-laugh-gif-25418476", "https://tenor.com/view/memes-meme-random-captions-caption-gif-23557955", "https://i1.sndcdn.com/artworks-XwifFOr3yqt3VVhT-zyUWFw-t500x500.jpg", "https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20220615/76076/1089195539092209666/1089195539092209666.jpg", "https://static.wikia.nocookie.net/4e906cff-de39-45f5-a156-395597600cd5", "https://i.pinimg.com/originals/cd/43/43/cd4343de0e337741f0c10b9ec91a89ba.jpg", "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-30-632854d5bb609__700.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/relatable-jokes-167-601ba4641d5bd__700.jpg", "https://i.pinimg.com/736x/14/27/ce/1427ce6c9057f37b62a872ffc0f47da3.jpg", "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/86397457.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!twittermeme") {
    let replies = ["https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2022/11/twitter1.png?resize=780%2C1139&quality=100&ssl=1", "https://ichef.bbci.co.uk/news/549/cpsprodpb/B89D/production/_96516274_a2d6dcf4-a671-4d3b-ab9f-48b98409ba1a.jpg", "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/07/twitter-down-1657803458.jpg", "https://images.ctfassets.net/lzny33ho1g45/31LQCTwB9gQtEjizR50oCM/878004a035100907498b855a5aa4ae0e/bd44bd4465e645dd5f1a2e6e97fea021.png?w=1400", "https://www.letseatcake.com/wp-content/uploads/2022/11/End-of-Twitter-Tweets-Memes-13.jpg", "https://assets.teenvogue.com/photos/615b48724796d962958e1582/1:1/w_1094,h_1094,c_limit/Screen%20Shot%202021-10-04%20at%202.22.36%20PM.png", "https://pbs.twimg.com/media/EBJ45rxWsAATI8z.jpg", "https://pbs.twimg.com/media/EwnlWinXIAYYOEc.jpg", "https://pbs.twimg.com/media/FvoMUvIWYBIV5X9?format=jpg&name=large", "https://pbs.twimg.com/media/EBJ34xwXsAAvIs4.jpg", "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/10/26/Pictures/_1b8238d2-1749-11eb-8018-0bdbc3b69c17.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!gifmeme") {
    let replies = ["https://media2.giphy.com/media/koUtwnvA3TY7C/giphy.gif", "https://media.tenor.com/sQXkvagqfWYAAAAC/lol-funny-memes.gif", "https://media0.giphy.com/media/YWf50NNii3r4k/giphy.gif?cid=6c09b9527p0jq1i3baeuk3t6i2ldm9a5y6g0gipjqahlhzx9&rid=giphy.gif&ct=g", "https://media4.giphy.com/media/xTk9ZzD6NuYrMuDBx6/200w.gif", "https://media1.giphy.com/media/nn2kmb1lRtpkY/200w.gif", "https://media.giphy.com/media/yr7n0u3qzO9nG/giphy.gif", "https://media0.giphy.com/media/OLXcRtL8DKwKDg66XU/giphy.gif", "https://media.giphy.com/media/3oriNNS1lufUZxzBvi/giphy.gif", "https://i.pinimg.com/originals/6f/0a/16/6f0a16aa1b1310912e82f2d605d5601c.gif", "https://66.media.tumblr.com/a81fa312b085f4e4790b4fe3bf7eed63/c915c74bdc576251-a0/s500x750/28d401098f58404fbf663b284ece1c7af078f610.gif", "https://thumbs.gfycat.com/AgonizingGroundedGnatcatcher-size_restricted.gif"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!dirtymeme") {
    let replies = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCPp-QE_GOLwFkNn_Av2WSyw0WMRaNzzghpcQW-E&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREH4pIhJjfpGQjPkx4S5N1NQvgyrlKdiD9YHnLz92L&s", "https://image.marriage.com/advice/wp-content/uploads/2020/10/29-Dirty-Sex-Memes-2.jpg", "https://i.chzbgr.com/full/9044270080/h558D6B92/packaged-goods-her-pulled-out-right-yup", "https://www.letseatcake.com/wp-content/uploads/2022/02/Dirty-Memes-23.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5nMDtEAfaxaD3LZgaXeJMclfTj9N2pExebtZmrw&s", "https://i.pinimg.com/236x/91/e3/38/91e338331133b1bea4a7a09bf9bc5d4c.jpg", "https://www.letseatcake.com/wp-content/uploads/2022/02/Dirty-Memes-9.jpg", "https://i.pinimg.com/550x/4d/ae/c6/4daec66e2b117f3031d15b0be19cb816.jpg", "https://tfln.co/wp-content/uploads/2019/04/sex-memes-so-dirty-you-re-going-to-need-to-get-tested-after-laughing-at-them-32.jpeg", "https://cdn.ebaumsworld.com/thumbs/2017/07/31/021822/85424561/lol.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!darkmeme") {
    let replies = ["https://i.pinimg.com/736x/a3/43/a4/a343a43ad51ff282e3b20609328c964b.jpg", "https://i.pinimg.com/236x/d6/cb/00/d6cb008bc1291154467fd223ec8df556.jpg", "https://i.chzbgr.com/full/9094466304/h31E05859/person-going-90-mph-school-zone-and-pre-schoolers-are-crossing-street-this-is-where-fun-begins", "https://cdn.ebaumsworld.com/mediaFiles/picture/604025/86034992.jpg", "https://i.imgflip.com/563zyg.jpg", "https://cdn.ebaumsworld.com/mediaFiles/picture/2242139/86404805.jpeg", "https://images3.memedroid.com/images/UPLOADED857/61169529de189.jpeg", "https://i.imgflip.com/5ukbt7.jpg", "https://images3.memedroid.com/images/UPLOADED380/5ecd023e65dcf.jpeg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
 if(message.content === "a!wholesomememe") {
    let replies = ["https://www.boredpanda.com/blog/wp-content/uploads/2022/11/funny-wholesome-memes-1-63628e20497f9__700.jpg", "https://www.rd.com/wp-content/uploads/2022/01/When-you%E2%80%99re-waiting-for-your-bestie-and-finally-see-them-640357669.jpg?fit=700,700", "https://www.rd.com/wp-content/uploads/2022/01/In-case-no-one-told-you-yet-today-you%E2%80%99re-doing-great-931446400.jpg?fit=700,700", "https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/639767fabfd0c945ef926c56_wholesome-memes-4.jpg", "https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/63976dfc2fe48b2ad1071e3b_wholesome-memes-7.jpg", "https://www.letseatcake.com/wp-content/uploads/2021/04/wholesome-memes-20.jpg", "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/08/yuanmhln7gh31.jpg", "https://www.letseatcake.com/wp-content/uploads/2021/04/wholesome-memes-7.jpg", "https://i.chzbgr.com/thumb800/20115205/hB5E60AA6/funny-dog-memes-animal-memes-funny-animal-memes-memes-funny-funny-memes-wholesome-wholesome-memes", "https://static.demilked.com/wp-content/uploads/2022/03/62282e085dc83-wholesome-memes-kalesalad-159-622734d37c04e__700.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content === "a!ping") {
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
  if(message.content === "a!dumbestcommandever") {
    message.react("🤪");
  }
  if (message.content === "a!rockpaperscissors" || message.content === "a!rps" || message.content === "a!RPS") {
 message.reply("<:atlanteanx:1111021057688739950> | PICK AN OBJECT TO PLAY RPS WITH! EXAMPLE: ****a!rps rock**** | <:atlanteanx:1111021057688739950>")
 }

 if (message.content === "a!rps rock" || message.content === "a!Rps rock" || message.content === "a!RPS ROCK") {
 let replies = ["YOU CHOSE ***ROCK*** :rock:, I CHOSE ***PAPER*** :newspaper:. :tada: ****PAPER**** WINS! :tada:", "YOU CHOSE ***ROCK*** :rock:, I CHOSE ***SCISSORS*** :scissors:. :tada: ****ROCK**** WINS! :tada:", "YOU CHOSE ***ROCK*** :rock:, I CHOSE ***ROCK*** :rock:. <:atlanteanx:1111021057688739950> IT'S A TIE! <:atlanteanx:1111021057688739950>"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "a!rps paper" || message.content === "a!Rps paper" || message.content === "a!RPS PAPER") {
 let replies = ["YOU CHOSE ***PAPER*** :newspaper:, I CHOSE ***ROCK*** :rock:. :tada: ****PAPER**** WINS! :tada:", "YOU CHOSE ***PAPER*** :newspaper:, I CHOSE ***SCISSORS*** :scissors:. :tada: ****SCISSORS**** WIN! :tada:", "YOU CHOSE ***PAPER*** :newspaper:, I CHOSE ***PAPER*** :newspaper:. <:atlanteanx:1111021057688739950> IT'S A TIE! <:atlanteanx:1111021057688739950>"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "a!rps scissors" || message.content === "a!Rps scissors" || message.content === "a!RPS SCISSORS") {
 let replies = ["YOU CHOSE ***SCISSORS*** :scissors:, I CHOSE ***ROCK*** :rock:. :tada: ****ROCK**** WINS! :tada:", "YOU CHOSE ***SCISSORS*** :scissors:, I CHOSE ***PAPER*** :newspaper:. :tada: ****SCISSORS**** WIN! :tada", "YOU CHOSE ***SCISSORS*** :scissors:, I CHOSE ***SCISSORS*** :scissors:. <:atlanteanx:1111021057688739950> IT'S A TIE! <:atlanteanx:1111021057688739950>"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }
  if(message.content === '<@1103495842633089074>') {
message.reply(`Hello! I'm so glad to be in ${message.guild.name}! To get started please type a!help`) 
}
})
client.on("messageCreate", async message => {
  if(message.content === "a!buylambo") {
     let lambo = 6000
    let l = "Lamborghini"
    let invBalance = await db.get(`lambo_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > lambo) {
     await db.set(`wallet_${message.author.id}`, currentBalance - lambo) 
       await db.set(`lambo_${message.author.id}`, invBalance + l)}
    if(`wallet_${message.author.id}`, currentBalance < lambo) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a lamborghini for $6000!")
    .setImage("https://hips.hearstapps.com/hmg-prod/images/2022-lamborghini-aventador-109-1625607587.jpg?crop=0.691xw:0.776xh;0.204xw,0.180xh&resize=640:*")
     message.reply({embeds: [embed]})
  } 
  if(message.content === "a!buysword") {
     let sword = 4000
    let s1 = "Sword"
    let invBalance = await db.get(`sword_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > sword) {
     await db.set(`wallet_${message.author.id}`, currentBalance - sword) 
    await db.set(`sword_${message.author.id}`, invBalance + s1)}
    if(`wallet_${message.author.id}`, currentBalance < sword) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a sword for $4000!")
    .setImage("https://www.darksword-armory.com/wp-content/uploads/2014/09/Medieval-knight-sword.jpg")
     message.reply({embeds: [embed]})
  }
    if(message.content === "a!buyknife") {
     let knife = 1000
     let k1 = "Knife"
      let knifeBalance = await db.get(`knife_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > knife) {
     await db.set(`wallet_${message.author.id}`, currentBalance - knife) 
    await db.set(`knife_${message.author.id}`, knifeBalance + k1)}
    if(`wallet_${message.author.id}`, currentBalance < knife) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a knife for $500!")
    .setImage("https://images.thdstatic.com/productImages/8bb22b32-9328-478a-9aac-3085782c0a24/svn/klein-tools-pocket-knives-44228r-64_1000.jpg")
     message.reply({embeds: [embed]})
  }
    if(message.content === "a!buyglock19") {
     let glock = 1500
      let gun1 = "GLOCK-19"
      let invBalance = await db.get(`glock19_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > glock) {
     await db.set(`wallet_${message.author.id}`, currentBalance - glock) 
    await db.set(`glock19_${message.author.id}`, invBalance + gun1)}
    if(`wallet_${message.author.id}`, currentBalance < glock) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a Glock-19 for $1500!")
    .setImage("https://us.glock.com/-/media/Global/US/old/US-Site/70-Pistols/hero-all-assets/hero-img-1-1-feature-sm.ashx")
     message.reply({embeds: [embed]})
  }
    if(message.content === "a!buyak47") {
     let ak47 = 3000
      let gun2 = "AK-47"
      let invBalance = await db.get(`ak_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > ak47) {
     await db.set(`wallet_${message.author.id}`, currentBalance - ak47)
    await db.set(`ak_${message.author.id}`, invBalance + gun2)}
    if(`wallet_${message.author.id}`, currentBalance < ak47) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a AK47 for $3000!")
    .setImage("https://cdn.shopify.com/s/files/1/1980/1771/products/AKBlacktoymodelbyrope_grande.jpg?v=1681406751")
     message.reply({embeds: [embed]})
  }
  if(message.content.toLowerCase().startsWith("a!dep")) {
       let amount = message.content.split(" ").slice(1)
    let currentBalance = await db.get(`bank_${message.author.id}`)
    if(!amount[0]) return message.reply("`a!dep (amount)`")
    if(`wallet_${message.author.id}`, currentBalance > amount) {
     await db.set(`bank_${message.author.id}`, currentBalance + amount).then(message.reply(`Deposited $${amount} to your bank.`)) }
    if(`wallet_${message.author.id}`, currentBalance < amount) return message.reply("You don't have enough!")
  }
 if(message.content.toLowerCase().startsWith("a!withdraw")) {
       let amount = message.content.split(" ").slice(1)
    let currentBalance = await db.get(`bank_${message.author.id}`)
    if(!amount[0]) return message.reply("`a!withdraw (amount)`")
    if(`bank_${message.author.id}`, currentBalance > amount) {
     await db.set(`wallet_${message.author.id}`, currentBalance + amount).then(message.reply(`Withdrew $${amount} from your bank to your wallet.`)) }
    if(`bank_${message.author.id}`, currentBalance < amount) return message.reply("You don't have enough!")
  }
      if(message.content.toLowerCase().startsWith("a!inventory")) {
        let lambo = await db.get(`lambo_${message.author.id}`)
        let knife = await db.get(`knife_${message.author.id}`)
        let sword = await db.get(`sword_${message.author.id}`)
        let g = await db.get(`glock19_${message.author.id}`)
        let ak47 = await db.get(`ak47_${message.author.id}`)

  if(lambo === null) balance = 0
        if(knife === null) balance = 0
        if(sword === null) balance = 0
        if(g === null) balance = 0
        if(ak47 === null) balance = 0
  let invEmbed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username}'s Inventory`)
  .setDescription(`Cars: \n ${lambo} \n Weapons: \n ${knife} \n ${sword} \n ${g} \n ${ak47}`)
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    message.reply({embeds: [invEmbed]})
  }
  if(message.content === "a!shop") {
    let shop = new Discord.MessageEmbed()
    .setTitle("Shop and Prices")
    .addField("All Items", " ")
    .addField(" ", "a!buylambo - $6000")
    .addField(" ", "a!buysword - $4000")
    .addField(" ", "a!buyknife - $1000")
    .addField(" ", "a!buyglock19 - $1500")
    .addField(" ", "a!buyak47 - $3000")
    .setColor("RANDOM")
    message.reply({embeds: [shop]})
  }
})
client.on("messageCreate", async message => {
  if(message.content === "ping") {
    message.reply("Pong!")
  }
  if(message.content.toLowerCase().startsWith("a!balance") || message.content.toLowerCase().startsWith("a!bal")) {
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
  if(message.content.toLowerCase().startsWith("a!dailyprize")) {
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
client.on("messageCreate", message => {
  const args = message.content.split(" ").slice(1)
  if(message.content === "a!policy") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Atlantean Privacy Policy")
      .setURL("https://atlantean-bot.gleyberdaywithmangos25.repl.co/policy.html")
      .setColor("RANDOM")
    message.reply({embeds: [embed]})
  }
    if(message.content.startsWith("a!purge")) {
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("You don't have permission!")
    let amountToPurge = args[0]
    if(isNaN(amountToPurge)) return message.reply("`a!purge (Number)`")
    message.delete()
    message.channel.bulkDelete(amountToPurge)
    message.channel.send(`Deleted ${amountToPurge} messages!`).then(v => v.delete({timeout: 10000}))
      .catch(() => {
      message.reply("<:atlanteanx:1111021057688739950> | Due to Discord API I cannot delete messages older than 14 days.")
      })
  }
  if(message.content.startsWith("a!kick")) {
    if(message.member.permissions.has("KICK_MEMBERS")) {
      let member = message.mentions.members.first()
 if(!args[0]) return message.reply("`a!kick @user (reason)`")
      else {
        member.kick().then(mem => {
          let embed = new Discord.MessageEmbed()
          .setTitle("Kicked!")
          .setDescription(args.join(" "))
          .setFooter(`Moderator: ${message.author.tag}`)
          message.channel.send({embeds: [embed]})
        })
      }
    } else {
      message.reply("You don't have permission to do that.")
    }
  }
    if(message.content.startsWith("a!ban")) {
    if(message.member.permissions.has("BAN_MEMBERS")) {
      let member = message.mentions.members.first()
 if(!args[0]) return message.reply("`a!ban @user (reason)`")
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
if(message.content.startsWith("a!unban")) {
if(message.member.permissions.has("BAN_MEMBERS")) {
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.reply("`a!unban (userid) (reason)`")
if(isNaN(args[0])) return message.reply("Please provide a real id!")
} else {
  message.reply("You don't have permission!")
}
}
});
client.on("messageCreate", message => {
  if(message.content === "pingy") {
    message.reply("Pongy!")
  }
  if(message.content.startsWith("a!mute")) {
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don't have permission!")
    let role = message.guild.roles.cache.find(role => role.name === "muted")
    let member = message.mentions.members.first()
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!reason) return message.reply("`a!mute @user (reason)`")
    if(!role) return message.reply("You don't have a muted role!")
 if(!member) return message.reply("You didn't specify a member!")
    if(member.roles.cache.has(role.id)) return message.channel.send("That user is already muted!")
    member.roles.add(role)
    .then(() => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Muted!")
      .setDescription(`${member} has been muted for ${reason}!`)
      message.channel.send({embeds: [embed]})
    })
    .catch(() => {
      message.reply("Oops, Something went wrong.")
    })
  }
  if(message.content.startsWith("a!unmute")) {
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don't have permission")
    let role = message.guild.roles.cache.find(role => role.name === "muted")
    let member = message.mentions.members.first()
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!reason) return message.reply("`a!unmute @user (reason)`")
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
client.on("messageCreate", message => {
if(message.content.startsWith("a!snipe")) {
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
client.on("messageCreate", message => {
  if(message.content === "a!setupverification") {
    let embed = new Discord.MessageEmbed()
    .setTitle("How to setup verification with Atlantean!")
    .addField("Step 1", "Set the verification channel `a!setverify #channel`.")
    .addField("Step 2", "Set the verification role `a!setrole @role`.")
    .addField("Step 3 (Do this before setting the channel)", "Send a message telling people to type a!verify `To verify type ||a!verify||`. You can spoil it to prevent self-bots.")
    message.reply({embeds: [embed]})
  }
   if(message.content.startsWith("a!duplicatechannel")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) {
return message.channel.send("You don't have permission.")
}
message.channel.clone({position: message.channel.rawPosition }).then(ch => { ch.send('Succesfully duplicated channel! :white_check_mark:'); })
 let args = message.content
 .toLowerCase() 
 .split(" ")
 .slice(1);
}
  if(message.content === "a!botinfo") {
    let info = new Discord.MessageEmbed()
    .setAuthor("Atlantean Bot", "https://i.postimg.cc/V6MnBXnk/Screenshot-2023-05-03-9-41-29-PM.png")
    .addField("General Info", "Developer - `mangosdev#0600`", true)
    .addField("Server Count", `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("Get started with", "a!help, a!Help, a!HELP")
    .addField("Other", `**${client.ws.ping}ms** Latency.`)
    .addField("Hosted on Replit", "Running 24/7 with UptimeRobot")
    .addField("6 files", "Main file - 1000+ lines of code", true)
    .addField("Coded in `discord.js v13.16.0`", " ", true)
    .setTimestamp()
    .setColor("RANDOM")
    message.reply({embeds: [info]})
  }
if (message.content.startsWith("a!suggest")) {
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
if(message.content.startsWith("a!hug")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to hug.")
    else{
      let kiss = new Discord.MessageEmbed()
      .setImage("https://media.tenor.com/jvucWRuY6hIAAAAM/hugging-its-okay.gif")
      .setColor("RED")
      message.channel.send({embeds: [kiss], content: `${victim} was hugged by ${message.author.username}!`})
    }
  }
   if(message.content.startsWith("a!renamechannel")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) {
return message.reply("You don't have permission.")
}
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.reply("Choose a name!")
 message.channel.setName(args.join(" "))
     message.channel.send("Renamed Channel. :white_check_mark: Note: If this channel's name was changed twice by Atlantean already the command will not work.")
}
  if(message.content.startsWith("a!userinfo")) {
 let user = message.mentions.users.first();
 let member =
message.mentions.members.first() || message.member;
    if(!member) return message.reply("Mention a user!")
    if(!user) return message.reply("`a!userinfo @user`")
 let embed = new
 Discord.MessageEmbed()
 .setColor("BLURPLE")
 .setTitle(`${user.username}'s User info`)
 .setThumbnail(user.displayAvatarURL({dynamic: true}))
 .setDescription(`**Username:** ${user.tag}\n**User ID:** ${user.id}\n**Created At:** ${user.createdAt}\n**Joined At:** ${member.joinedAt}\n**Nickname:** ${member.displayName}`)
 .setFooter(`Requested by ${message.author.username}`)
 message.channel.send({embeds: [embed]})
}
  if(message.content === "a!flipacoin") {
    let replies = [":coin: Heads! :coin:", ":coin: Tails! :coin:"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content.startsWith("a!feedback")) {
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
})
client.on("messageCreate",   async message => {
  if(message.content.startsWith("a!setwelcomechannel")) {
    let channel = message.mentions.channels.first()
    message.reply(`${channel} has been set as the welcome channel!`)
    await db.set(`channel_${message.member.guild}`)
  }
  })
client.on("messageCreate", async message => {
    if(message.content.toLowerCase().startsWith("a!warn")) {
 if(message.member.permissions.has("MANAGE_MESSAGES")) {
 let args = message.content.split(" ").slice(1)
   let victim = message.mentions.users.first()
   let warning = 1
   let warnings = await db.get(`warnings_${victim}_${message.guild.id}`)
 if(!args[0]) return message.reply("`a!warn @user (reason)`")
 
 let embed = new Discord.MessageEmbed()
 .setTitle("Warned")
 .setDescription(`${args}`)
 .setThumbnail('https://cdn.discordapp.com/attachments/1102697856005058622/1102750626775060540/Screenshot_2023-04-23_5.13.58_PM.png')
 .setColor("PURPLE")
 .setFooter(`Moderator: ${message.author.username}`)
 .setTimestamp()
 message.channel.send({embeds: [embed]})
   await db.set(`warnings_${victim}_${message.guild.id}`, warnings + warning)

} else {
 message.reply("You don't have permission to do that!")
}
}
  if(message.content.startsWith("a!showwarns")) {
    
    let args = message.mentions.users.first()
    if(!args) return message.reply("`a!showwarns (@user)`")
    let warnings = await db.get(`warnings_${args}_${message.guild.id}`)
    if(warnings === null) warnings = 0
    let warningembed = new Discord.MessageEmbed()
  .setTitle(`${args}'s Warnings`)
  .setDescription(`${warnings}`)
  .setColor("RANDOM")
  .setThumbnail(args.displayAvatarURL({dynamic: true}))
    message.reply({embeds: [warningembed]})
  }
      if(message.content.toLowerCase().startsWith("a!clearwarns")) {
 if(message.member.permissions.has("MANAGE_MESSAGES")) {
 let goofy = message.content.split(" ").slice(1)
   let victim = message.mentions.users.first()
   let warnings = await db.get(`warnings_${victim}_${message.guild.id}`)
 if(!goofy[0]) return message.reply("`a!clearwarns @user`")
 
 let embed = new Discord.MessageEmbed()
 .setTitle("Warned")
 .setDescription(`${victim} has been cleared of ${goofy} warnings.`)
 .setThumbnail('https://cdn.discordapp.com/attachments/1102697856005058622/1102750626775060540/Screenshot_2023-04-23_5.13.58_PM.png')
 .setColor("PURPLE")
 .setFooter(`Moderator: ${message.author.username}`)
 .setTimestamp()
 message.channel.send({embeds: [embed]})
   await db.set(`warnings_${victim}_${message.guild.id}`, warnings - goofy)

} else {
 message.reply("You don't have permission to do that!")
}
}
  if(message.content.startsWith("a!say")) {
    message.delete()
    let args = message.content.split(" ").slice(1)
    let toSay = args.join(" ")
  if(!toSay) return message.reply("What should I say?")
  message.channel.send(`${toSay}`)
}
})
client.on('messageCreate', async (message) => {
  const number = Math.floor(Math.random() * 100) + 1;
    const n = Math.floor(Math.random() * 100) + 1;
    const d = Math.floor(Math.random() * 100) + 1;
    if (message.content.includes("To gain access to our channels you must verify by clicking the check mark below.")) {
        message.react('✅');
        const filter = (reaction, user) => reaction.emoji.name === '✅';
       let role = message.guild.roles.cache.find(role => role.name === "Verified")
      const collector = message.createReactionCollector({ filter, time: 15_000 });
        collector.on('collect', (r, u) => {
  message.guild.members.fetch(u).then(fetchedMember => {
    fetchedMember.roles.add(role);
  });
});
    }
  if(message.content === "a!vote") {
    let vote = new Discord.MessageEmbed()
    .setTitle("Upvote Atlantean!")
    .setDescription(`Blist: https://blist.xyz/bot/1103495842633089074 \n
Discords: https://discords.com/bots/bot/1103495842633089074 \n
DiscordBotList: https://discordbotlist.com/bots/atlantean \n
Discord Bots: https://discord.bots.gg/bots/1103495842633089074 \n 
 Botlist: https://botlist.me/bots/1103495842633089074`)
   .addField(" ", "VoidBots: https://voidbots.net/bot/1103495842633089074/")
    message.reply({embeds: [vote]})
  }
  if(message.content.startsWith("a!newrole")) {
    let args = message.content.split(" ").slice(1)
    message.guild.roles.create(args)
    message.channel.send("Created a new role for you!")
  }
  if(message.content === "a!custombot") {
    let bot = new Discord.MessageEmbed()
    .setTitle("Custom bots")
    .setDescription("Join the atlantean support server `a!support` and follow the steps")
    .addField("Note:", "No NSFW")
    .setFooter("Payment starting at nitro basic!")
    .setTimestamp()
    message.reply({embeds: [bot]})
  }
  if(message.content === "c") {
    let replies = [`${number}${n}${d} Type this code in the channel`]
    message.author.send(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === `${number}${n}${d}`) {
    message.channel.send("nice")
  }
  if(message.content === "but") {
    const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('BREH')
					.setStyle('DANGER'),
			);
  }
})


client.api.applications(`1103495842633089074`).commands.post({
 data: {
 name: "help",
 description: "Get started with the Atlantean Bot!"
 }
 });

 client.ws.on('INTERACTION_CREATE', async interaction => {
 const command = interaction.data.name.toLowerCase();
 const args = interaction.data.options;
 if (command === 'help'){ 
   let ok = new Discord.MessageEmbed()
   .setTitle("Join the support server if there are any issues!")
    .setAuthor("Atlantean Bot Commands", "https://i.postimg.cc/V6MnBXnk/Screenshot-2023-05-03-9-41-29-PM.png")
    .setDescription("ⓘ Prefix = a!")
    .setColor("PURPLE")
    .addField("<:atlanteanpaper:1111102024369590313>|─OTHER─|<:atlanteanpaper:1111102024369590313>", " *`a!custombot`*, ***`a!vote`***, *`a!policy`*, *`a!support`*, *`a!invite`*")
    .addField("<:atlanteancool:1111102369288167434>|─FUN─|<:atlanteancool:1111102369288167434>", "*`a!nameme`*, *`a!say`*, *`a!amistupid`*, *`a!amigay`*, *`a!amihappy`*, *`a!kiss`*, *`a!slap`*, *`a!8ball`*, *`a!dumbestcommandever`*, *`a!rockpaperscissors/a!rps`*, *`a!hug`*, *`a!flipacoin`*")
      .addField("<:atlanteansword:1111028471410479176>|─ROLEPLAY/ECONOMY─|<:atlanteansword:1111028471410479176>", "*`a!buyak47`*, *`a!buyglock19`*, *`a!shootwithglock19`*, *`a!shootwithak47`*, *`a!bal`*, *`a!dep`*, *`a!withdraw`*, *`a!dailyprize`*, *`a!buyknife`*, *`a!stabwithknife`*, *`a!buysword`*, *`a!stabwithsword`*, *`a!slicewithsword`*, *`a!buylambo`*, *`a!shop`*")
      .addField("<:atlanteanmemeface:1111028079800897739>|─MEMES─|<:atlanteanmemeface:1111028079800897739>", "*`a!randomeme`*, *`a!twittermeme`*, *`a!gifmeme`*, *`a!dirtymeme`*, *`a!darkmeme`*, *`a!wholesomememe`*")
     .addField("<:atlanteansheild:1111027600253530162>|─MODERATION─|<:atlanteansheild:1111027600253530162>", "*`a!purge`*, *`a!kick`*, *`a!ban`*, *`a!unban`*, *`a!mute`*, *`a!unmute`*, *`a!snipe`*, *`a!warn`*, *`a!showwarns`*, *`a!clearwarns`*")
      .addField("<:atlanteanutlity:1111025986448916481>|─UTILITY─|<:atlanteanutlity:1111025986448916481>", "*`a!serverinfo`*, *`a!ping`*, *`a!botinfo`*, *`a!suggest`*, *`a!avatar`*, *`a!peopleemojis`*, *`a!nature-animalemojis`*, *`a!activity-sportsemojis`*, *`a!vehicle-travelemojis`*, *`a!objectemojis`*, *`a!symbolemojis`*, *`a!flagemojis`*, *`a!duplicatechannel`*, *`a!renamechannel`*")
      .addField("<:atlanteancheck:1114965552507654175>|─VERIFICATION─|<:atlanteancheck:1114965552507654175>", 
 "*`a!setupverification`*, *`a!setverify`*, *`a!setrole`*, *`a!setrrole`*, *`a!rvrole`*, *`a!rvchannel`*, *`a!rrvrole`*")
      .setFooter("To verify with Atlantean type a!verify in the verification channel. (Make sure verification is all setup)")
      .addField(`Atlantean is currently in ${client.guilds.cache.size.toLocaleString()} Servers!`, " ")
    .setTimestamp()
    const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
        .setURL('https://discord.com/api/oauth2/authorize?client_id=1103495842633089074&permissions=8&scope=bot')
          .setLabel('Invite')
          .setEmoji('1114965552507654175')
          .setStyle('LINK'),
          
          new MessageButton()
            .setURL('https://atlantean-bot.gleyberdaywithmangos25.repl.co/')
            .setLabel('Website')
          .setEmoji('1111102024369590313')
            .setStyle('LINK'),
          
            new MessageButton()
            .setURL('https://discord.gg/UwRb96dxFU')
            .setLabel('Support')
          .setEmoji('1111027600253530162')
            .setStyle('LINK'),
          
                    new MessageButton()
          .setURL('https://atlantean-bot.gleyberdaywithmangos25.repl.co/policy.html')
          .setLabel('Privacy Policy')
          .setEmoji('1111028471410479176')
          .setStyle('LINK')
        );
 client.api.interactions(interaction.id, interaction.token).callback.post({
 data: {
 type: 4,
 data: {
 embeds: [ok], components: [row]
 }
 }
 })
 }
 });

client.api.applications(`1103495842633089074`).commands.post({
 data: {
 name: "vote",
 description: "Voting websites for Atlantean."
 }
 });

 client.ws.on('INTERACTION_CREATE', async interaction => {
 const command = interaction.data.name.toLowerCase();
 const args = interaction.data.options;
 if (command === 'vote'){ 
let voter = new Discord.MessageEmbed()
    .setTitle("Upvote Atlantean!")
    .setDescription(`Blist: https://blist.xyz/bot/1103495842633089074 \n
Discords: https://discords.com/bots/bot/1103495842633089074 \n
DiscordBotList: https://discordbotlist.com/bots/atlantean \n
Discord Bots: https://discord.bots.gg/bots/1103495842633089074 \n 
 Botlist: https://botlist.me/bots/1103495842633089074`)
   .addField(" ", "VoidBots: https://voidbots.net/bot/1103495842633089074/")
 client.api.interactions(interaction.id, interaction.token).callback.post({
 data: {
 type: 4,
 data: {
 embeds: [voter]
 }
 }
 })
 }
 });

client.api.applications(`1103495842633089074`).commands.post({
 data: {
 name: "policy",
 description: "Link to the Atlantean Privacy Policy."
 }
 });

 client.ws.on('INTERACTION_CREATE', async interaction => {
 const command = interaction.data.name.toLowerCase();
 const args = interaction.data.options;
 if (command === 'policy'){ 
let embed = new Discord.MessageEmbed()
      .setTitle("Atlantean Privacy Policy")
      .setURL("https://atlantean-bot.gleyberdaywithmangos25.repl.co/policy.html")
      .setColor("RANDOM")
 client.api.interactions(interaction.id, interaction.token).callback.post({
 data: {
 type: 4,
 data: {
 embeds: [embed]
 }
 }
 })
 }
 });

client.api.applications(`1103495842633089074`).commands.post({
 data: {
 name: "support",
 description: "Atlantean support server."
 }
 });

 client.ws.on('INTERACTION_CREATE', async interaction => {
 const command = interaction.data.name.toLowerCase();
 const args = interaction.data.options;
 if (command === 'support'){ 
let embed = new Discord.MessageEmbed()
    .setTitle("Support server invite link!")
    .setURL("https://discord.gg/UwRb96dxFU")
    .setColor("PURPLE")
 client.api.interactions(interaction.id, interaction.token).callback.post({
 data: {
 type: 4,
 data: {
 embeds: [embed]
 }
 }
 })
 }
 });

client.api.applications(`1103495842633089074`).commands.post({
 data: {
 name: "invite",
 description: "Invite link for Atlantean."
 }
 });

 client.ws.on('INTERACTION_CREATE', async interaction => {
 const command = interaction.data.name.toLowerCase();
 const args = interaction.data.options;
 if (command === 'invite'){ 
let inviter = new Discord.MessageEmbed()
    .setTitle("Atlantean Bot Invite Link")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=1103495842633089074&permissions=8&scope=bot")
    .setColor("PURPLE")
 client.api.interactions(interaction.id, interaction.token).callback.post({
 data: {
 type: 4,
 data: {
 embeds: [inviter]
 }
 }
 })
 }
 });

 
client.on("ready", async () => {
  console.log(`${client.user.tag} is online!`)
 function randomStatus() {
 let status = [`a!help • ${client.guilds.cache.size.toLocaleString()} Servers`, `/help • ${client.guilds.cache.size.toLocaleString()} Servers`, `https://bit.ly/atlanteanbot`, `a!vote • ${client.guilds.cache.size.toLocaleString()} Servers`, "Slash commands! RE-INVITE ME!"]
 let rstatus = Math.floor(Math.random() * status.length);
 client.user.setActivity(status[rstatus], {type: "LISTENING"})
   client.user.setStatus("DND");
 }; setInterval(randomStatus, 5000) 
})


client.login("Atlantean's token");

app.get("/", (req, res) => {
  res.send("wuts good yall");
})

const Discord = require("discord.js");
const client = new Discord.Client ({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"],
  allowedMentions: ["users", "channels"]
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
      
   const leave = client.channels.cache.get("1099174387019685940");
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
  
 const leave = client.channels.cache.get("1103790029907693588");
  leave.send({content: member.user.toString(), files: [attachment]});
})
const fs = require("fs");
const prefix = "a!"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for (file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on ("messageCreate", message => {
if (message.content.startsWith(prefix)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift()
  const command = client.commands.get(commandName)
  if(!command) return
  command.run(client, message, args)
}   
})

client.on("messageCreate", message => {
  if(message.content === "a!nameme") {
    let nicknames = ["Goofy", "Smart", "Cool", "Dumb", "Gay", "Stoopid", "Awesome"]
    message.reply(`${nicknames[Math.floor(Math.random () * nicknames.length)]} is your new name!`)
  }

  if(message.content === "a!amistupid") {
    let nicknames = ["Yes, you", "No you are not", "A little bit", "You are sometimes", "I spelled stoopid wrong, I think I am"]
    message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content.toLowerCase().startsWith("a!help") || message.content.toLowerCase().startsWith("a!Help") || message.content.toLowerCase().startsWith("a!HELP")) {
    let bored = new Discord.MessageEmbed()
    .setTitle("Join the support server if there are any issues!")
    .setAuthor("Atlantean Bot Commands", "https://i.postimg.cc/V6MnBXnk/Screenshot-2023-05-03-9-41-29-PM.png")
    .setDescription("ⓘ Prefix = a!")
    .setColor("PURPLE")
    .addField("<:atlanteanpaper:1111102024369590313>|─OTHER─|<:atlanteanpaper:1111102024369590313>", " *`a!custombot`*, ***`a!vote`***, *`a!policy`*, *`a!support`*, *`a!inviteme`*")
    .addField("<:atlanteancool:1111102369288167434>|─FUN─|<:atlanteancool:1111102369288167434>", "*`a!nameme`*, *`a!say`*, *`a!amistupid`*, *`a!amigay`*, *`a!amihappy`*, *`a!kiss`*, *`a!slap`*, *`a!8ball`*, *`a!dumbestcommandever`*, *`a!rockpaperscissors/a!rps`*, *`a!hug`*, *`a!flipacoin`*")
      .addField("<:atlanteansword:1111028471410479176>|─ROLEPLAY/ECONOMY─|<:atlanteansword:1111028471410479176>", "*`a!buyak47`*, *`a!buyglock19`*, *`a!shootwithglock19`*, *`a!shootwithak47`*, *`a!bal`*, *`a!dep`*, *`a!withdraw`*, *`a!dailyprize`*, *`a!buyknife`*, *`a!stabwithknife`*, *`a!buysword`*, *`a!stabwithsword`*, *`a!slicewithsword`*, *`a!buylambo`*, *`a!shop`*")
      .addField("<:atlanteanmemeface:1111028079800897739>|─MEMES─|<:atlanteanmemeface:1111028079800897739>", "*`a!randomeme`*, *`a!twittermeme`*, *`a!gifmeme`*, *`a!dirtymeme`*, *`a!darkmeme`*, *`a!wholesomememe`*")
     .addField("<:atlanteansheild:1111027600253530162>|─MODERATION─|<:atlanteansheild:1111027600253530162>", "*`a!purge`*, *`a!kick`*, *`a!ban`*, *`a!unban`*, *`a!mute`*, *`a!unmute`*, *`a!snipe`*, *`a!warn`*, *`a!showwarns`*, *`a!clearwarns`*")
      .addField("<:atlanteanutlity:1111025986448916481>|─UTILITY─|<:atlanteanutlity:1111025986448916481>", "*`a!serverinfo`*, *`a!ping`*, *`a!botinfo`*, *`a!suggest`*, *`a!avatar`*, *`a!peopleemojis`*, *`a!nature-animalemojis`*, *`a!activity-sportsemojis`*, *`a!vehicle-travelemojis`*, *`a!objectemojis`*, *`a!symbolemojis`*, *`a!flagemojis`*, *`a!duplicatechannel`*, *`a!renamechannel`*")
      .addField("<:atlanteancheck:1114965552507654175>|─VERIFICATION─|<:atlanteancheck:1114965552507654175>", 
 "*`a!setupverification`*, *`a!setverify`*, *`a!setrole`*, *`a!setrrole`*, *`a!rvrole`*, *`a!rvchannel`*, *`a!rrvrole`*")
      .setFooter("To verify with Atlantean type a!verify in the verification channel. (Make sure verification is all setup)")
      .addField(`Atlantean is currently in ${client.guilds.cache.size.toLocaleString()} Servers!`, " ")
    .setTimestamp()
    const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
        .setURL('https://discord.com/api/oauth2/authorize?client_id=1103495842633089074&permissions=8&scope=bot')
          .setLabel('Invite')
          .setStyle('LINK'),
          
          new MessageButton()
            .setURL('https://atlantean-bot.gleyberdaywithmangos25.repl.co/')
            .setLabel('Website')
            .setStyle('LINK'),
          
            new MessageButton()
            .setURL('https://discord.gg/UwRb96dxFU')
            .setLabel('Support')
            .setStyle('LINK'),
          
                    new MessageButton()
          .setURL('https://atlantean-bot.gleyberdaywithmangos25.repl.co/policy.html')
          .setLabel('Privacy Policy')
          .setStyle('LINK')
        );
    message.reply({embeds: [bored], components: [row]})
  }
  if(message.content === "a!support") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Support server invite link!")
    .setDescription("https://discord.gg/UwRb96dxFU")
    .setColor("PURPLE")
    message.reply({embeds: [embed]})
  }
  if(message.content === "a!amigay") {
    let replies = ["Yes, You are gay.", "No, You are not.", "Which gay? If you mean happy do a!amihappy."]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!amihappy") {
    let replies = ["You are kind of happy.", "You are depressed.", "Wow! You are extremely happy!"]
message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!peopleemojis") {
    let embed = new Discord.MessageEmbed()
    .setTitle("People Emojis")
    .setDescription("😀 😃 😄 😁 😆 🤩 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 🤪 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 🤬 😶 😐 😑 😯 😦 😧 😮 😲 😵 🤯 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🥱 🙄 🤨 🧐 🤔 🤫 🤭 🤥 😬 🤐 🤢 🤮 🤧 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤲 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 🤏 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 🤟 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 🦻 👃 🦵 🦶 🦾 🦿 👣 👁 👀 🗣 👤 👥 👶 👦 👧 🧒 👨 👩 🧑 👱‍♀️ 👱 🧔 👴 👵 🧓 👲 👳‍♀️ 👳 🧕 👮‍♀️ 👮 👷‍♀️ 👷 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🤱 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 🧏 🧏‍♂️ 🧏‍♀️ 🧙‍♀️ 🧙‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧚‍♀️ 🧚‍♂️ 🧜‍♀️ 🧜‍♂️ 🧝‍♀️ 🧝‍♂️ 🧞‍♀️ 🧞‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 👨‍🦯 👩‍🦯 👨‍🦼 👩‍🦼 👨‍🦽 👩‍🦽 🧑‍🤝‍🧑 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓 🕶 🤿 🌂 ☂️ 🧣 🧤 🧥 🦺 🥻 🩱 🩲 🩳 🩰 🧦 🧢 ⛷ 🏂 🏋️‍♀️ 🏋️ 🤺 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸‍♂️ ⛹️‍♀️ ⛹️ 🤾‍♀️ 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏄‍♀️ 🏄 🏊‍♀️ 🏊 🤽‍♀️ 🤽‍♂️ 🚣‍♀️ 🚣 🏇 🚴‍♀️ 🚴 🚵‍♀️ 🚵 🤹‍♀️ 🤹‍♂️ 🧗‍♀️ 🧗‍♂️ 🧘‍♀️ 🧘‍♂️ 🥰 🥵 🥶 🥳 🥴 🥺 🦸 🦹 🧑‍🦰 🧑‍🦱 🧑‍🦳 🧑‍🦲 🧑‍⚕️ 🧑‍🎓 🧑‍🏫 🧑‍⚖️ 🧑‍🌾 🧑‍🍳 🧑‍🔧 🧑‍🏭 🧑‍💼 🧑‍🔬 🧑‍💻 🧑‍🎤 🧑‍🎨 🧑‍✈️ 🧑‍🚀 🧑‍🚒 🧑‍🦯 🧑‍🦼 🧑‍🦽 🦰 🦱 🦲 🦳")
  .setColor("YELLOW")
  message.reply({embeds: [embed]})
  }
  if(message.content === "a!nature-animalemojis") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Nature/Animals Emojis")
    .setDescription("🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙊 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦩 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🦗 🐞 🐜 🕷 🕸 🐢 🐍 🦎 🦂 🦀 🦑 🐙 🦐 🐠 🐟 🐡 🐬 🦈 🐳 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🦌 🐪 🐫 🐘 🦏 🦍 🐎 🐖 🐐 🐏 🐑 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🦓 🦒 🦔 🦧 🦥 🦦 🦨 🦕 🦖 🦪 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌻 🌼 🌸 🌺 🌎 🌍 🌏 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌚 🌝 🌞 🌛 🌜 🌙 🪐 💫 ⭐️ 🌟 ✨ ⚡️ 🔥 💥 ☄️ ☀️ 🌤 ⛅️ 🌥 🌦 🌈 ☁️ 🌧 ⛈ 🌩 🌨 ☃️ ⛄️ ❄️ 🌬 💨 🌪 🌫 🌊 💧 💦 ☔️")
   .setColor("GREEN")
    message.reply({embeds: [embed]})
  }
  if(message.content === "a!activity-sportsemojis") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Activity/Sports Emojis")
    .setDescription("⚽️ 🏀 🏈 ⚾️ 🎾 🏐 🏉 🎱 🏓 🏸 🥅 🏒 🏑 🏏 ⛳️ 🏹 🎣 🥊 🥋 ⛸ 🎿 ⛷ 🏂 🏋️‍♀️ 🏋️ 🤺 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸‍♂️ ⛹️‍♀️ ⛹️ 🤾‍♀️ 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏄‍♀️ 🏄 🏊‍♀️ 🏊 🤽‍♀️ 🤽‍♂️ 🚣‍♀️ 🚣 🏇 🚴‍♀️ 🚴 🚵‍♀️ 🚵 🪂 🎽 🏅 🎖 🥇 🥈 🥉 🏆 🏵 🎗 🎫 🎟 🎪 🤹‍♀️ 🤹‍♂️ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🪕 🎲 🎯 🎳 🎮 🎰 🛷 🥌 🪀 🪁")
    .setColor("ORANGE")
    message.reply({embeds: [embed]})
  }
    if(message.content === "a!vehicle-travelemojis") {
      let embed = new Discord.MessageEmbed()
      .setTitle("Vehicle/Travel Emojis")
      .setDescription("🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🛺 🏍 🦽 🦼 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 🚁 🛩 ✈️ 🛫 🛬 🚀 🛰 💺 🛶 ⛵️ 🛥 🚤 🛳 ⛴ 🚢 ⚓️ 🚧 ⛽️ 🚏 🚦 🚥 🗺 🗿 🗽 ⛲️ 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛱ 🏖 🏝 ⛰ 🏔 🗻 🌋 🏜 🏕 ⛺️ 🛤 🛣 🏗 🏭 🏠 🏡 🏘 🏚 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 🛕 ⛩ 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁 🛸 ")
      .setColor("BLUE")
      message.reply({embeds: [embed]})
    }
     if(message.content === "a!objectemojis") {
       let embed = new Discord.MessageEmbed()
       .setTitle("Object Emojis")
       .setDescription("⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🪓 🦯 🛡 🚬 ⚰️ ⚱️ 🏺 🔮 📿 💈 ⚗️ 🔭 🔬 🕳 💊 💉 🩸 🩹 🩺 🌡 🪒 🚽 🚰 🚿 🛁 🛀 🛎 🔑 🗝 🚪 🪑 🛋 🛏 🛌 🖼 🛍 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🎎 🏮 🎐 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 📌 🎌 🏳️ 🏴 🏁 🪔 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓")
       .setColor("BLACK")
       message.reply({embeds: [embed]})
     } 
      if(message.content === "a!symbolemojis") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Symbol Emojis")
        .setDescription("❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ !?️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 ✔️ ☑️ 🔘 🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🟥 🟧 🟨 🟩 🟦 🟪 🟫 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧 ⏏ ♀ ♂ ⚕ ♾️ ")
        .setColor("PURPLE")
        message.reply({embeds: [embed]})
      }
       if(message.content === "a!flagemojis") {
         let embed = new Discord.MessageEmbed()
         .setTitle("Flag Emojis")
         .setDescription("🏴 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇨 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇻 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇪🇦 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇵 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇬 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇲 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇲🇵 🇰🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇹 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇸🇧 🇸🇴 🇿🇦 🇬🇸 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇲🇫 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇯 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇦 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🇺🇸 🇺🇾 🇺🇲 🇺🇳 🇻🇮 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🏳️‍🌈 🏴‍☠️")
         .setColor("RED")
         message.reply({embeds: [embed]})
       }
  if(message.content === "a!inviteme") {
    let invite = new Discord.MessageEmbed()
    .setTitle("Atlantean Bot Invite Link")
    .setDescription("https://discord.com/api/oauth2/authorize?client_id=1103495842633089074&permissions=8&scope=bot")
    .setColor("PURPLE")
    message.reply({embeds: [invite]})
  }
if (message.content === "a!serverinfo") {
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`***${message.guild.name}*** Server Info`)
 .setThumbnail(message.guild.iconURL())
 .addField("Member Count:", `${message.guild.memberCount}`, true)
   .addField("Total Roles", `${message.guild.roles.cache.size}`, true)
   .addField("Total Categories and Channels:", `${message.guild.channels.cache.size}`)
 .addField("Total Emojis:", `${message.guild.emojis.cache.size}`, true)
   .addField("Total Stickers:", `${message.guild.stickers.cache.size}`, true)
 .setFooter(`GUILD ID: ${message.guild.id}`)
 message.reply({embeds: [embed]})
}
if(message.content === "a!avatar") {
    let mentioned = message.mentions.users.first()
   if(!mentioned) return message.reply("Mention someone!")
 let embed = new Discord.MessageEmbed()
.setTitle(`${mentioned}`)
.setImage(`${mentioned.displayAvatarURL({dynamic : true})}`)
.setColor("RANDOM")
message.reply({embeds: [embed]})
}
if (message.content.toLowerCase().startsWith("a!8ball")) {
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
  if(message.content.startsWith("a!shootwithak47")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to shoot!")
    else{
      message.channel.send(`${victim} got shot with an AK47.`)
    }
  }
  if(message.content.startsWith("a!shootwithglock19")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to shoot!")
    else{
      message.channel.send(`${victim} got shot with a Glock-19.`)
    }
  }
  if(message.content.startsWith("a!stabwithknife")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to stab!")
    else{
      message.channel.send(`${victim} was stabbed with a knife and survived from their injuries.`)
    }
  }
  if(message.content.startsWith("a!stabwithsword")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to stab!")
    else{
      message.channel.send(`${victim} got stabbed with a sword and it severly injured.`)
    }
  }
if(message.content.startsWith("a!slicewithsword")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to slice in half!")
    else{
      message.channel.send(`${victim} got sliced in half!`)
    }
  }
if(message.content.startsWith("a!kiss")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Choose your babe!")
    else{
      let kiss = new Discord.MessageEmbed()
      .setImage("https://media.tenor.com/9rKqDz2fQkEAAAAC/cat-kiss.gif")
      .setColor("RED")
      message.channel.send({embeds: [kiss], content: `${victim} was kissed by ${message.author.username} 💋!`})
    }
  }
if(message.content.startsWith("a!slap")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to slap.")
    else{
      let kiss = new Discord.MessageEmbed()
      .setImage("https://i.gifer.com/XaaW.gif")
      .setColor("RED")
      message.channel.send({embeds: [kiss], content: `${victim} was slapped by ${message.author.username} 👋!`})
    }
  }
 if(message.content === "a!randomeme") {
    let replies = ["https://tenor.com/view/meme-dank-life-flirty-gif-5457123", "https://tenor.com/view/meme-i-am-wanted-dance-guys-look-its-the-funny-haha-laugh-gif-25418476", "https://tenor.com/view/memes-meme-random-captions-caption-gif-23557955", "https://i1.sndcdn.com/artworks-XwifFOr3yqt3VVhT-zyUWFw-t500x500.jpg", "https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20220615/76076/1089195539092209666/1089195539092209666.jpg", "https://static.wikia.nocookie.net/4e906cff-de39-45f5-a156-395597600cd5", "https://i.pinimg.com/originals/cd/43/43/cd4343de0e337741f0c10b9ec91a89ba.jpg", "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-30-632854d5bb609__700.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/relatable-jokes-167-601ba4641d5bd__700.jpg", "https://i.pinimg.com/736x/14/27/ce/1427ce6c9057f37b62a872ffc0f47da3.jpg", "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/86397457.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!twittermeme") {
    let replies = ["https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2022/11/twitter1.png?resize=780%2C1139&quality=100&ssl=1", "https://ichef.bbci.co.uk/news/549/cpsprodpb/B89D/production/_96516274_a2d6dcf4-a671-4d3b-ab9f-48b98409ba1a.jpg", "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/07/twitter-down-1657803458.jpg", "https://images.ctfassets.net/lzny33ho1g45/31LQCTwB9gQtEjizR50oCM/878004a035100907498b855a5aa4ae0e/bd44bd4465e645dd5f1a2e6e97fea021.png?w=1400", "https://www.letseatcake.com/wp-content/uploads/2022/11/End-of-Twitter-Tweets-Memes-13.jpg", "https://assets.teenvogue.com/photos/615b48724796d962958e1582/1:1/w_1094,h_1094,c_limit/Screen%20Shot%202021-10-04%20at%202.22.36%20PM.png", "https://pbs.twimg.com/media/EBJ45rxWsAATI8z.jpg", "https://pbs.twimg.com/media/EwnlWinXIAYYOEc.jpg", "https://pbs.twimg.com/media/FvoMUvIWYBIV5X9?format=jpg&name=large", "https://pbs.twimg.com/media/EBJ34xwXsAAvIs4.jpg", "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/10/26/Pictures/_1b8238d2-1749-11eb-8018-0bdbc3b69c17.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!gifmeme") {
    let replies = ["https://media2.giphy.com/media/koUtwnvA3TY7C/giphy.gif", "https://media.tenor.com/sQXkvagqfWYAAAAC/lol-funny-memes.gif", "https://media0.giphy.com/media/YWf50NNii3r4k/giphy.gif?cid=6c09b9527p0jq1i3baeuk3t6i2ldm9a5y6g0gipjqahlhzx9&rid=giphy.gif&ct=g", "https://media4.giphy.com/media/xTk9ZzD6NuYrMuDBx6/200w.gif", "https://media1.giphy.com/media/nn2kmb1lRtpkY/200w.gif", "https://media.giphy.com/media/yr7n0u3qzO9nG/giphy.gif", "https://media0.giphy.com/media/OLXcRtL8DKwKDg66XU/giphy.gif", "https://media.giphy.com/media/3oriNNS1lufUZxzBvi/giphy.gif", "https://i.pinimg.com/originals/6f/0a/16/6f0a16aa1b1310912e82f2d605d5601c.gif", "https://66.media.tumblr.com/a81fa312b085f4e4790b4fe3bf7eed63/c915c74bdc576251-a0/s500x750/28d401098f58404fbf663b284ece1c7af078f610.gif", "https://thumbs.gfycat.com/AgonizingGroundedGnatcatcher-size_restricted.gif"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!dirtymeme") {
    let replies = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCPp-QE_GOLwFkNn_Av2WSyw0WMRaNzzghpcQW-E&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREH4pIhJjfpGQjPkx4S5N1NQvgyrlKdiD9YHnLz92L&s", "https://image.marriage.com/advice/wp-content/uploads/2020/10/29-Dirty-Sex-Memes-2.jpg", "https://i.chzbgr.com/full/9044270080/h558D6B92/packaged-goods-her-pulled-out-right-yup", "https://www.letseatcake.com/wp-content/uploads/2022/02/Dirty-Memes-23.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5nMDtEAfaxaD3LZgaXeJMclfTj9N2pExebtZmrw&s", "https://i.pinimg.com/236x/91/e3/38/91e338331133b1bea4a7a09bf9bc5d4c.jpg", "https://www.letseatcake.com/wp-content/uploads/2022/02/Dirty-Memes-9.jpg", "https://i.pinimg.com/550x/4d/ae/c6/4daec66e2b117f3031d15b0be19cb816.jpg", "https://tfln.co/wp-content/uploads/2019/04/sex-memes-so-dirty-you-re-going-to-need-to-get-tested-after-laughing-at-them-32.jpeg", "https://cdn.ebaumsworld.com/thumbs/2017/07/31/021822/85424561/lol.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === "a!darkmeme") {
    let replies = ["https://i.pinimg.com/736x/a3/43/a4/a343a43ad51ff282e3b20609328c964b.jpg", "https://i.pinimg.com/236x/d6/cb/00/d6cb008bc1291154467fd223ec8df556.jpg", "https://i.chzbgr.com/full/9094466304/h31E05859/person-going-90-mph-school-zone-and-pre-schoolers-are-crossing-street-this-is-where-fun-begins", "https://cdn.ebaumsworld.com/mediaFiles/picture/604025/86034992.jpg", "https://i.imgflip.com/563zyg.jpg", "https://cdn.ebaumsworld.com/mediaFiles/picture/2242139/86404805.jpeg", "https://images3.memedroid.com/images/UPLOADED857/61169529de189.jpeg", "https://i.imgflip.com/5ukbt7.jpg", "https://images3.memedroid.com/images/UPLOADED380/5ecd023e65dcf.jpeg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
 if(message.content === "a!wholesomememe") {
    let replies = ["https://www.boredpanda.com/blog/wp-content/uploads/2022/11/funny-wholesome-memes-1-63628e20497f9__700.jpg", "https://www.rd.com/wp-content/uploads/2022/01/When-you%E2%80%99re-waiting-for-your-bestie-and-finally-see-them-640357669.jpg?fit=700,700", "https://www.rd.com/wp-content/uploads/2022/01/In-case-no-one-told-you-yet-today-you%E2%80%99re-doing-great-931446400.jpg?fit=700,700", "https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/639767fabfd0c945ef926c56_wholesome-memes-4.jpg", "https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/63976dfc2fe48b2ad1071e3b_wholesome-memes-7.jpg", "https://www.letseatcake.com/wp-content/uploads/2021/04/wholesome-memes-20.jpg", "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/08/yuanmhln7gh31.jpg", "https://www.letseatcake.com/wp-content/uploads/2021/04/wholesome-memes-7.jpg", "https://i.chzbgr.com/thumb800/20115205/hB5E60AA6/funny-dog-memes-animal-memes-funny-animal-memes-memes-funny-funny-memes-wholesome-wholesome-memes", "https://static.demilked.com/wp-content/uploads/2022/03/62282e085dc83-wholesome-memes-kalesalad-159-622734d37c04e__700.jpg"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content === "a!ping") {
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
  if(message.content === "a!dumbestcommandever") {
    message.react("🤪");
  }
  if (message.content === "a!rockpaperscissors" || message.content === "a!rps" || message.content === "a!RPS") {
 message.reply("<:atlanteanx:1111021057688739950> | PICK AN OBJECT TO PLAY RPS WITH! EXAMPLE: ****a!rps rock**** | <:atlanteanx:1111021057688739950>")
 }

 if (message.content === "a!rps rock" || message.content === "a!Rps rock" || message.content === "a!RPS ROCK") {
 let replies = ["YOU CHOSE ***ROCK*** :rock:, I CHOSE ***PAPER*** :newspaper:. :tada: ****PAPER**** WINS! :tada:", "YOU CHOSE ***ROCK*** :rock:, I CHOSE ***SCISSORS*** :scissors:. :tada: ****ROCK**** WINS! :tada:", "YOU CHOSE ***ROCK*** :rock:, I CHOSE ***ROCK*** :rock:. <:atlanteanx:1111021057688739950> IT'S A TIE! <:atlanteanx:1111021057688739950>"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "a!rps paper" || message.content === "a!Rps paper" || message.content === "a!RPS PAPER") {
 let replies = ["YOU CHOSE ***PAPER*** :newspaper:, I CHOSE ***ROCK*** :rock:. :tada: ****PAPER**** WINS! :tada:", "YOU CHOSE ***PAPER*** :newspaper:, I CHOSE ***SCISSORS*** :scissors:. :tada: ****SCISSORS**** WIN! :tada:", "YOU CHOSE ***PAPER*** :newspaper:, I CHOSE ***PAPER*** :newspaper:. <:atlanteanx:1111021057688739950> IT'S A TIE! <:atlanteanx:1111021057688739950>"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "a!rps scissors" || message.content === "a!Rps scissors" || message.content === "a!RPS SCISSORS") {
 let replies = ["YOU CHOSE ***SCISSORS*** :scissors:, I CHOSE ***ROCK*** :rock:. :tada: ****ROCK**** WINS! :tada:", "YOU CHOSE ***SCISSORS*** :scissors:, I CHOSE ***PAPER*** :newspaper:. :tada: ****SCISSORS**** WIN! :tada", "YOU CHOSE ***SCISSORS*** :scissors:, I CHOSE ***SCISSORS*** :scissors:. <:atlanteanx:1111021057688739950> IT'S A TIE! <:atlanteanx:1111021057688739950>"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }
  if(message.content === '<@1103495842633089074>') {
message.reply(`Hello! I'm so glad to be in ${message.guild.name}! To get started please type a!help`) 
}
})
client.on("messageCreate", async message => {
  if(message.content === "a!buylambo") {
     let lambo = 6000
    let l = "Lamborghini"
    let invBalance = await db.get(`lambo_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > lambo) {
     await db.set(`wallet_${message.author.id}`, currentBalance - lambo) 
       await db.set(`lambo_${message.author.id}`, invBalance + l)}
    if(`wallet_${message.author.id}`, currentBalance < lambo) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a lamborghini for $6000!")
    .setImage("https://hips.hearstapps.com/hmg-prod/images/2022-lamborghini-aventador-109-1625607587.jpg?crop=0.691xw:0.776xh;0.204xw,0.180xh&resize=640:*")
     message.reply({embeds: [embed]})
  } 
  if(message.content === "a!buysword") {
     let sword = 4000
    let s1 = "Sword"
    let invBalance = await db.get(`sword_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > sword) {
     await db.set(`wallet_${message.author.id}`, currentBalance - sword) 
    await db.set(`sword_${message.author.id}`, invBalance + s1)}
    if(`wallet_${message.author.id}`, currentBalance < sword) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a sword for $4000!")
    .setImage("https://www.darksword-armory.com/wp-content/uploads/2014/09/Medieval-knight-sword.jpg")
     message.reply({embeds: [embed]})
  }
    if(message.content === "a!buyknife") {
     let knife = 1000
     let k1 = "Knife"
      let knifeBalance = await db.get(`knife_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > knife) {
     await db.set(`wallet_${message.author.id}`, currentBalance - knife) 
    await db.set(`knife_${message.author.id}`, knifeBalance + k1)}
    if(`wallet_${message.author.id}`, currentBalance < knife) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a knife for $500!")
    .setImage("https://images.thdstatic.com/productImages/8bb22b32-9328-478a-9aac-3085782c0a24/svn/klein-tools-pocket-knives-44228r-64_1000.jpg")
     message.reply({embeds: [embed]})
  }
    if(message.content === "a!buyglock19") {
     let glock = 1500
      let gun1 = "GLOCK-19"
      let invBalance = await db.get(`glock19_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > glock) {
     await db.set(`wallet_${message.author.id}`, currentBalance - glock) 
    await db.set(`glock19_${message.author.id}`, invBalance + gun1)}
    if(`wallet_${message.author.id}`, currentBalance < glock) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a Glock-19 for $1500!")
    .setImage("https://us.glock.com/-/media/Global/US/old/US-Site/70-Pistols/hero-all-assets/hero-img-1-1-feature-sm.ashx")
     message.reply({embeds: [embed]})
  }
    if(message.content === "a!buyak47") {
     let ak47 = 3000
      let gun2 = "AK-47"
      let invBalance = await db.get(`ak_${message.author.id}`)
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    if(`wallet_${message.author.id}`, currentBalance > ak47) {
     await db.set(`wallet_${message.author.id}`, currentBalance - ak47)
    await db.set(`ak_${message.author.id}`, invBalance + gun2)}
    if(`wallet_${message.author.id}`, currentBalance < ak47) return message.reply("You don't have enough!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("You bought a AK47 for $3000!")
    .setImage("https://cdn.shopify.com/s/files/1/1980/1771/products/AKBlacktoymodelbyrope_grande.jpg?v=1681406751")
     message.reply({embeds: [embed]})
  }
  if(message.content.toLowerCase().startsWith("a!dep")) {
       let amount = message.content.split(" ").slice(1)
    let currentBalance = await db.get(`bank_${message.author.id}`)
    if(!amount[0]) return message.reply("`a!dep (amount)`")
    if(`wallet_${message.author.id}`, currentBalance > amount) {
     await db.set(`bank_${message.author.id}`, currentBalance + amount).then(message.reply(`Deposited $${amount} to your bank.`)) }
    if(`wallet_${message.author.id}`, currentBalance < amount) return message.reply("You don't have enough!")
  }
 if(message.content.toLowerCase().startsWith("a!withdraw")) {
       let amount = message.content.split(" ").slice(1)
    let currentBalance = await db.get(`bank_${message.author.id}`)
    if(!amount[0]) return message.reply("`a!withdraw (amount)`")
    if(`bank_${message.author.id}`, currentBalance > amount) {
     await db.set(`wallet_${message.author.id}`, currentBalance + amount).then(message.reply(`Withdrew $${amount} from your bank to your wallet.`)) }
    if(`bank_${message.author.id}`, currentBalance < amount) return message.reply("You don't have enough!")
  }
      if(message.content.toLowerCase().startsWith("a!inventory")) {
        let lambo = await db.get(`lambo_${message.author.id}`)
        let knife = await db.get(`knife_${message.author.id}`)
        let sword = await db.get(`sword_${message.author.id}`)
        let g = await db.get(`glock19_${message.author.id}`)
        let ak47 = await db.get(`ak47_${message.author.id}`)

  if(lambo === null) balance = 0
        if(knife === null) balance = 0
        if(sword === null) balance = 0
        if(g === null) balance = 0
        if(ak47 === null) balance = 0
  let invEmbed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username}'s Inventory`)
  .setDescription(`Cars: \n ${lambo} \n Weapons: \n ${knife} \n ${sword} \n ${g} \n ${ak47}`)
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    message.reply({embeds: [invEmbed]})
  }
  if(message.content === "a!shop") {
    let shop = new Discord.MessageEmbed()
    .setTitle("Shop and Prices")
    .addField("All Items", " ")
    .addField(" ", "a!buylambo - $6000")
    .addField(" ", "a!buysword - $4000")
    .addField(" ", "a!buyknife - $1000")
    .addField(" ", "a!buyglock19 - $1500")
    .addField(" ", "a!buyak47 - $3000")
    .setColor("RANDOM")
    message.reply({embeds: [shop]})
  }
})
client.on("messageCreate", async message => {
  if(message.content === "ping") {
    message.reply("Pong!")
  }
  if(message.content.toLowerCase().startsWith("a!balance") || message.content.toLowerCase().startsWith("a!bal")) {
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
  if(message.content.toLowerCase().startsWith("a!dailyprize")) {
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
client.on("messageCreate", message => {
  const args = message.content.split(" ").slice(1)
  if(message.content === "a!policy") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Atlantean Privacy Policy")
      .setDescription("https://atlantean-bot.gleyberdaywithmangos25.repl.co/policy.html")
      .setColor("RANDOM")
    message.reply({embeds: [embed]})
  }
    if(message.content.startsWith("a!purge")) {
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("You don't have permission!")
    let amountToPurge = args[0]
    if(isNaN(amountToPurge)) return message.reply("`a!purge (Number)`")
    message.delete()
    message.channel.bulkDelete(amountToPurge)
    message.channel.send(`Deleted ${amountToPurge} messages!`).then(v => v.delete({timeout: 10000}))
      .catch(() => {
      message.reply("<:atlanteanx:1111021057688739950> | Due to Discord API I cannot delete messages older than 14 days.")
      })
  }
  if(message.content.startsWith("a!kick")) {
    if(message.member.permissions.has("KICK_MEMBERS")) {
      let member = message.mentions.members.first()
 if(!args[0]) return message.reply("`a!kick @user (reason)`")
      else {
        member.kick().then(mem => {
          let embed = new Discord.MessageEmbed()
          .setTitle("Kicked!")
          .setDescription(args.join(" "))
          .setFooter(`Moderator: ${message.author.tag}`)
          message.channel.send({embeds: [embed]})
        })
      }
    } else {
      message.reply("You don't have permission to do that.")
    }
  }
    if(message.content.startsWith("a!ban")) {
    if(message.member.permissions.has("BAN_MEMBERS")) {
      let member = message.mentions.members.first()
 if(!args[0]) return message.reply("`a!ban @user (reason)`")
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
if(message.content.startsWith("a!unban")) {
if(message.member.permissions.has("BAN_MEMBERS")) {
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.reply("`a!unban (userid) (reason)`")
if(isNaN(args[0])) return message.reply("Please provide a real id!")
} else {
  message.reply("You don't have permission!")
}
}
});
client.on("messageCreate", message => {
  if(message.content === "pingy") {
    message.reply("Pongy!")
  }
  if(message.content.startsWith("a!mute")) {
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don't have permission!")
    let role = message.guild.roles.cache.find(role => role.name === "muted")
    let member = message.mentions.members.first()
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!reason) return message.reply("`a!mute @user (reason)`")
    if(!role) return message.reply("You don't have a muted role!")
 if(!member) return message.reply("You didn't specify a member!")
    if(member.roles.cache.has(role.id)) return message.channel.send("That user is already muted!")
    member.roles.add(role)
    .then(() => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Muted!")
      .setDescription(`${member} has been muted for ${reason}!`)
      message.channel.send({embeds: [embed]})
    })
    .catch(() => {
      message.reply("Oops, Something went wrong.")
    })
  }
  if(message.content.startsWith("a!unmute")) {
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don't have permission")
    let role = message.guild.roles.cache.find(role => role.name === "muted")
    let member = message.mentions.members.first()
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!reason) return message.reply("`a!unmute @user (reason)`")
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
client.on("messageCreate", message => {
if(message.content.startsWith("a!snipe")) {
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
client.on("messageCreate", message => {
  if(message.content === "a!setupverification") {
    let embed = new Discord.MessageEmbed()
    .setTitle("How to setup verification with Atlantean!")
    .addField("Step 1", "Set the verification channel `a!setverify #channel`.")
    .addField("Step 2", "Set the verification role `a!setrole @role`.")
    .addField("Step 3 (Do this before setting the channel)", "Send a message telling people to type a!verify `To verify type ||a!verify||`. You can spoil it to prevent self-bots.")
    message.reply({embeds: [embed]})
  }
   if(message.content.startsWith("a!duplicatechannel")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) {
return message.channel.send("You don't have permission.")
}
message.channel.clone({position: message.channel.rawPosition }).then(ch => { ch.send('Succesfully duplicated channel! :white_check_mark:'); })
 let args = message.content
 .toLowerCase() 
 .split(" ")
 .slice(1);
}
  if(message.content === "a!botinfo") {
    let info = new Discord.MessageEmbed()
    .setAuthor("Atlantean Bot", "https://i.postimg.cc/V6MnBXnk/Screenshot-2023-05-03-9-41-29-PM.png")
    .addField("General Info", "Developer - `mangos#0600`", true)
    .addField("Server Count", `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("Get started with", "a!help, a!Help, a!HELP")
    .addField("Other", `**${client.ws.ping}ms** Latency.`)
    .addField("Hosted on Replit", "Running 24/7 with UptimeRobot")
    .addField("6 files", "Main file - 1000+ lines of code", true)
    .addField("Coded in `discord.js v13.16.0`", " ", true)
    .setTimestamp()
    .setColor("RANDOM")
    message.reply({embeds: [info]})
  }
if (message.content.startsWith("a!suggest")) {
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
if(message.content.startsWith("a!hug")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to hug.")
    else{
      let kiss = new Discord.MessageEmbed()
      .setImage("https://media.tenor.com/jvucWRuY6hIAAAAM/hugging-its-okay.gif")
      .setColor("RED")
      message.channel.send({embeds: [kiss], content: `${victim} was hugged by ${message.author.username}!`})
    }
  }
   if(message.content.startsWith("a!renamechannel")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) {
return message.reply("You don't have permission.")
}
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.reply("Choose a name!")
 message.channel.setName(args.join(" "))
     message.channel.send("Renamed Channel. :white_check_mark: Note: If this channel's name was changed twice by Atlantean already the command will not work.")
}
  if(message.content.startsWith("a!userinfo")) {
 let user = message.mentions.users.first();
 let member =
message.mentions.members.first() || message.member;
    if(!member) return message.reply("Mention a user!")
    if(!user) return message.reply("`a!userinfo @user`")
 let embed = new
 Discord.MessageEmbed()
 .setColor("BLURPLE")
 .setTitle(`${user.username}'s User info`)
 .setThumbnail(user.displayAvatarURL({dynamic: true}))
 .setDescription(`**Username:** ${user.tag}\n**User ID:** ${user.id}\n**Created At:** ${user.createdAt}\n**Joined At:** ${member.joinedAt}\n**Nickname:** ${member.displayName}`)
 .setFooter(`Requested by ${message.author.username}`)
 message.channel.send({embeds: [embed]})
}
  if(message.content === "a!flipacoin") {
    let replies = [":coin: Heads! :coin:", ":coin: Tails! :coin:"]
 message.reply(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content.startsWith("a!feedback")) {
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
})
client.on("messageCreate",   async message => {
  if(message.content.startsWith("a!setwelcomechannel")) {
    let channel = message.mentions.channels.first()
    message.reply(`${channel} has been set as the welcome channel!`)
    await db.set(`channel_${message.member.guild}`)
  }
  })
client.on("messageCreate", async message => {
    if(message.content.toLowerCase().startsWith("a!warn")) {
 if(message.member.permissions.has("MANAGE_MESSAGES")) {
 let args = message.content.split(" ").slice(1)
   let victim = message.mentions.users.first()
   let warning = 1
   let warnings = await db.get(`warnings_${victim}_${message.guild.id}`)
 if(!args[0]) return message.reply("`a!warn @user (reason)`")
 
 let embed = new Discord.MessageEmbed()
 .setTitle("Warned")
 .setDescription(`${args}`)
 .setThumbnail('https://cdn.discordapp.com/attachments/1102697856005058622/1102750626775060540/Screenshot_2023-04-23_5.13.58_PM.png')
 .setColor("PURPLE")
 .setFooter(`Moderator: ${message.author.username}`)
 .setTimestamp()
 message.channel.send({embeds: [embed]})
   await db.set(`warnings_${victim}_${message.guild.id}`, warnings + warning)

} else {
 message.reply("You don't have permission to do that!")
}
}
  if(message.content.startsWith("a!showwarns")) {
    
    let args = message.mentions.users.first()
    if(!args) return message.reply("`a!showwarns (@user)`")
    let warnings = await db.get(`warnings_${args}_${message.guild.id}`)
    if(warnings === null) warnings = 0
    let warningembed = new Discord.MessageEmbed()
  .setTitle(`${args}'s Warnings`)
  .setDescription(`${warnings}`)
  .setColor("RANDOM")
  .setThumbnail(args.displayAvatarURL({dynamic: true}))
    message.reply({embeds: [warningembed]})
  }
      if(message.content.toLowerCase().startsWith("a!clearwarns")) {
 if(message.member.permissions.has("MANAGE_MESSAGES")) {
 let goofy = message.content.split(" ").slice(1)
   let victim = message.mentions.users.first()
   let warnings = await db.get(`warnings_${victim}_${message.guild.id}`)
 if(!goofy[0]) return message.reply("`a!clearwarns @user`")
 
 let embed = new Discord.MessageEmbed()
 .setTitle("Warned")
 .setDescription(`${victim} has been cleared of ${goofy} warnings.`)
 .setThumbnail('https://cdn.discordapp.com/attachments/1102697856005058622/1102750626775060540/Screenshot_2023-04-23_5.13.58_PM.png')
 .setColor("PURPLE")
 .setFooter(`Moderator: ${message.author.username}`)
 .setTimestamp()
 message.channel.send({embeds: [embed]})
   await db.set(`warnings_${victim}_${message.guild.id}`, warnings - goofy)

} else {
 message.reply("You don't have permission to do that!")
}
}
  if(message.content.startsWith("a!say")) {
    message.delete()
    let args = message.content.split(" ").slice(1)
    let toSay = args.join(" ")
  if(!toSay) return message.reply("What should I say?")
  message.channel.send(`${toSay}`)
}
})
client.on('messageCreate', async (message) => {
  const number = Math.floor(Math.random() * 100) + 1;
    const n = Math.floor(Math.random() * 100) + 1;
    const d = Math.floor(Math.random() * 100) + 1;
    if (message.content.includes("To gain access to our channels you must verify by clicking the check mark below.")) {
        message.react('✅');
        const filter = (reaction, user) => reaction.emoji.name === '✅';
       let role = message.guild.roles.cache.find(role => role.name === "Verified")
      const collector = message.createReactionCollector({ filter, time: 15_000 });
        collector.on('collect', (r, u) => {
  message.guild.members.fetch(u).then(fetchedMember => {
    fetchedMember.roles.add(role);
  });
});
    }
  if(message.content === "a!vote") {
    let vote = new Discord.MessageEmbed()
    .setTitle("Upvote Atlantean!")
    .setDescription(`Blist: https://blist.xyz/bot/1103495842633089074 \n
Discords: https://discords.com/bots/bot/1103495842633089074 \n
DiscordBotList: https://discordbotlist.com/bots/atlantean \n
Discord Bots: https://discord.bots.gg/bots/1103495842633089074 \n 
 Botlist: https://botlist.me/bots/1103495842633089074`)
    message.reply({embeds: [vote]})
  }
  if(message.content.startsWith("a!newrole")) {
    let args = message.content.split(" ").slice(1)
    message.guild.roles.create(args)
    message.channel.send("Created a new role for you!")
  }
  if(message.content === "a!custombot") {
    let bot = new Discord.MessageEmbed()
    .setTitle("Custom bots")
    .setDescription("Join the atlantean support server `a!support` and follow the steps")
    .addField("Note:", "No NSFW")
    .setFooter("Payment starting at nitro basic!")
    .setTimestamp()
    message.reply({embeds: [bot]})
  }
  if(message.content === "c") {
    let replies = [`${number}${n}${d} Type this code in the channel`]
    message.author.send(replies[Math.floor(Math.random() * replies.length)])
  }
  if(message.content === `${number}${n}${d}`) {
    message.channel.send("nice")
  }
  if(message.content === "but") {
    const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('BREH')
					.setStyle('DANGER'),
			);
  }
})


client.api.applications(`1103495842633089074`).commands.post({
 data: {
 name: "help",
 description: "Get started with the Atlantean Bot!"
 }
 });

 client.ws.on('INTERACTION_CREATE', async interaction => {
 const command = interaction.data.name.toLowerCase();
 const args = interaction.data.options;
 if (command === 'help'){ 
   let ok = new Discord.MessageEmbed()
   .setTitle("Join the support server if there are any issues!")
    .setAuthor("Atlantean Bot Commands", "https://i.postimg.cc/V6MnBXnk/Screenshot-2023-05-03-9-41-29-PM.png")
    .setDescription("ⓘ Prefix = a!")
    .setColor("PURPLE")
    .addField("<:atlanteanpaper:1111102024369590313>|─OTHER─|<:atlanteanpaper:1111102024369590313>", " *`a!custombot`*, ***`a!vote`***, *`a!policy`*, *`a!support`*, *`a!inviteme`*")
    .addField("<:atlanteancool:1111102369288167434>|─FUN─|<:atlanteancool:1111102369288167434>", "*`a!nameme`*, *`a!say`*, *`a!amistupid`*, *`a!amigay`*, *`a!amihappy`*, *`a!kiss`*, *`a!slap`*, *`a!8ball`*, *`a!dumbestcommandever`*, *`a!rockpaperscissors/a!rps`*, *`a!hug`*, *`a!flipacoin`*")
      .addField("<:atlanteansword:1111028471410479176>|─ROLEPLAY/ECONOMY─|<:atlanteansword:1111028471410479176>", "*`a!buyak47`*, *`a!buyglock19`*, *`a!shootwithglock19`*, *`a!shootwithak47`*, *`a!bal`*, *`a!dep`*, *`a!withdraw`*, *`a!dailyprize`*, *`a!buyknife`*, *`a!stabwithknife`*, *`a!buysword`*, *`a!stabwithsword`*, *`a!slicewithsword`*, *`a!buylambo`*, *`a!shop`*")
      .addField("<:atlanteanmemeface:1111028079800897739>|─MEMES─|<:atlanteanmemeface:1111028079800897739>", "*`a!randomeme`*, *`a!twittermeme`*, *`a!gifmeme`*, *`a!dirtymeme`*, *`a!darkmeme`*, *`a!wholesomememe`*")
     .addField("<:atlanteansheild:1111027600253530162>|─MODERATION─|<:atlanteansheild:1111027600253530162>", "*`a!purge`*, *`a!kick`*, *`a!ban`*, *`a!unban`*, *`a!mute`*, *`a!unmute`*, *`a!snipe`*, *`a!warn`*, *`a!showwarns`*, *`a!clearwarns`*")
      .addField("<:atlanteanutlity:1111025986448916481>|─UTILITY─|<:atlanteanutlity:1111025986448916481>", "*`a!serverinfo`*, *`a!ping`*, *`a!botinfo`*, *`a!suggest`*, *`a!avatar`*, *`a!peopleemojis`*, *`a!nature-animalemojis`*, *`a!activity-sportsemojis`*, *`a!vehicle-travelemojis`*, *`a!objectemojis`*, *`a!symbolemojis`*, *`a!flagemojis`*, *`a!duplicatechannel`*, *`a!renamechannel`*")
      .addField("<:atlanteancheck:1114965552507654175>|─VERIFICATION─|<:atlanteancheck:1114965552507654175>", 
 "*`a!setupverification`*, *`a!setverify`*, *`a!setrole`*, *`a!setrrole`*, *`a!rvrole`*, *`a!rvchannel`*, *`a!rrvrole`*")
      .setFooter("To verify with Atlantean type a!verify in the verification channel. (Make sure verification is all setup)")
      .addField(`Atlantean is currently in ${client.guilds.cache.size.toLocaleString()} Servers!`, " ")
    .setTimestamp()
    const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
        .setURL('https://discord.com/api/oauth2/authorize?client_id=1103495842633089074&permissions=8&scope=bot')
          .setLabel('Invite')
          .setStyle('LINK'),
          
          new MessageButton()
            .setURL('https://atlantean-bot.gleyberdaywithmangos25.repl.co/')
            .setLabel('Website')
            .setStyle('LINK'),
          
            new MessageButton()
            .setURL('https://discord.gg/UwRb96dxFU')
            .setLabel('Support')
            .setStyle('LINK'),
          
                    new MessageButton()
          .setURL('https://atlantean-bot.gleyberdaywithmangos25.repl.co/policy.html')
          .setLabel('Privacy Policy')
          .setStyle('LINK')
        );
 client.api.interactions(interaction.id, interaction.token).callback.post({
 data: {
 type: 4,
 data: {
 embeds: [ok], components: [row]
 }
 }
 })
 }
 });









 
client.on("ready", async () => {
  console.log(`${client.user.tag} is online!`)
 function randomStatus() {
 let status = [`a!help • ${client.guilds.cache.size.toLocaleString()} Servers`, `/help • ${client.guilds.cache.size.toLocaleString()} Servers`, `https://bit.ly/atlanteanbot`, `a!vote • ${client.guilds.cache.size.toLocaleString()} Servers`]
 let rstatus = Math.floor(Math.random() * status.length);
 client.user.setActivity(status[rstatus], {type: "LISTENING"})
   client.user.setStatus("DND");
 }; setInterval(randomStatus, 5000) 
})


client.login(process.env.token);
