const{Client,GatewayIntentBits,EmbeddedBuilder,PermissionsBitField,Permissions} = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent
  ],
});
import {key} from '.key.js'
const ms = require("ms")
client.on("ready", () => {{
    console.log("Berm Join The World!")
    client.user.setActivity(`test 123`,{type: "watching"})
}});




const channelIdToNotify = '890057261131632660'; // Replace with the ID of the text channel where you want to send the message
const userVoiceChannel = new Map();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('voiceStateUpdate', (oldState, newState) => {
  const member = newState.member;

  if (oldState.channelId !== newState.channelId) {
    if (!oldState.channelId && newState.channelId) {
      // User has joined a voice channel
      const channelName = newState.channel.name;

      const textChannel = member.guild.channels.cache.get(channelIdToNotify);

      if (textChannel) {
        textChannel.send(`**${member.user.tag}** has entered the voice channel: **${channelName}**`);
      }
    } else if (oldState.channelId && !newState.channelId) {
      // User has disconnected from a voice channel
      const oldChannelName = oldState.channel.name;

      const textChannel = member.guild.channels.cache.get(channelIdToNotify);

      if (textChannel) {
        textChannel.send(`**${member.user.tag}** has disconnected from the voice channel: **${oldChannelName}**`);
      }
    } else if (oldState.channelId && newState.channelId) {
      // User has moved from one voice channel to another
      const oldChannelName = oldState.channel.name;
      const newChannelName = newState.channel.name;

      const textChannel = member.guild.channels.cache.get(channelIdToNotify);

      if (textChannel) {
        textChannel.send(`**${member.user.tag}** has moved from **${oldChannelName}** to **${newChannelName}**`);
      }
    }
  }
  userVoiceChannel.set(member.id, newState.channelId);
});

client.on("messageCreate",(message)=>{
    /*
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    console.log(args);
    const arguement = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const messageArray = message.content.split(" ");
    const arguements = messageArray.slice(1);
    const cmd = messageArray[0];
    
   var i = 1;
   if (i === 1){return 
    message.channel.send("ว่างป่าว");
    message.channel.send("เค้าเหงาอ่ะ");
    i++}
       */
    var a = ["https://cdn.discordapp.com/attachments/890046187309248573/1164438887360380968/348373462_230971036354327_1575330663064901750_n.png?ex=65433738&is=6530c238&hm=434f761587a6dc5763d451b4e47f836987399b92ee75da9f2e31320ee007440e&", 
    "https://cdn.discordapp.com/attachments/890046187309248573/1164438887872073808/352352757_945020776833816_7694305582741486468_n.png?ex=65433739&is=6530c239&hm=f4f60a4c552020e6919da38afbbda0717723d6e6430a5ca154e4bd36bbd9209f&", 
    "https://cdn.discordapp.com/attachments/890046187309248573/1164438888488652820/tatadada.jpg?ex=65433739&is=6530c239&hm=834babd3f95bf69d5e94fbed95af2972fe815efe92e65105b68d7fe5d801eb8d&",
     "https://cdn.discordapp.com/attachments/890046187309248573/1164438889524641863/HNY.jpg?ex=65433739&is=6530c239&hm=fe0bdbf21a91644cc092dc3e6420de1f89fdb98f1bac508358544f0e0f33ef8b&", 
     "https://cdn.discordapp.com/attachments/890046187309248573/1164438890267021362/NothingOnlyMotivation.jpg?ex=65433739&is=6530c239&hm=97dca1637d0986beee1aca5962bda2bb7c1ce8aee2cd44e7f5e6dbc3f11bca0d&",
      "https://cdn.discordapp.com/attachments/890046187309248573/1164438890652913704/78f5cdedf6b166cb.png?ex=65433739&is=6530c239&hm=b4a9e27b4d8f2666bcace320673ad6604f88f345899ec50d40667412e4a969f7&", 
      "https://cdn.discordapp.com/attachments/890046187309248573/1164438891030396928/7941e540933e5e61.jpg?ex=65433739&is=6530c239&hm=79a88beb9da9f03e793a3405addc3b84c242e7f9f82c48c32d0c35dde44798e6&", 
      "https://cdn.discordapp.com/attachments/890046187309248573/1164438891294625812/305647630_1197116964198624_3862351381701372397_n_-_Copy.jpg?ex=65433739&is=6530c239&hm=a4679e4a5ce95d1235ac54a2a699d6cc1cbbe44dc8a9abfe780c9b69528e6eab&", 
      "https://cdn.discordapp.com/attachments/890046187309248573/1164438891873456249/296357988_622294486232876_1530397533166582653_n.png?ex=6543373a&is=6530c23a&hm=0eb9430f2fdfec93cf5204074cd7fd14b2be31849f9c6c412281fe861917ca00&", 
      "https://cdn.discordapp.com/attachments/890046187309248573/1164438892632621096/yahjong.jpg?ex=6543373a&is=6530c23a&hm=c954bb065a3ce748e45619f04ad209570bdf72098e190c4e35a96ecb625faa64&", 
      "https://cdn.discordapp.com/attachments/890046187309248573/1164439053274460200/10637.jpg?ex=65433760&is=6530c260&hm=ad3379e0d3e6eacb36d87bb433e81fe9d7660f36d10be1c5ad4ad6b0d557cea6&", 
      "https://cdn.discordapp.com/attachments/890046187309248573/1164439053878444063/10499.jpg?ex=65433760&is=6530c260&hm=9814c365059b021d004f213336f2262bf568c207d47615cd925c3f9e01bac6e8&", 
      "https://cdn.discordapp.com/attachments/890046187309248573/1164439054234943588/messageImage_1658335681553.jpg?ex=65433760&is=6530c260&hm=5c187ac0aed2da36893be6aad2700b3cf0ca39d60ba4ca8c18b0cf26b98089b9&", 
      "https://cdn.discordapp.com/attachments/890046187309248573/1164439054541139999/294691932_1191483091635433_7417590889916053873_n.jpg?ex=65433760&is=6530c260&hm=8f892c2c64579bdec318bc8dad27cab0c235df3ac9bbd6e79fc6ae29535f604d&", 
      "https://cdn.discordapp.com/attachments/890046187309248573/1164439054834745375/294572351_869965160650109_410015225912749235_n.jpg?ex=65433760&is=6530c260&hm=ebe4aca116f5c6a3718691ca73805c30069d388b665839161dc0a58b4c4c7b6c&",
       "https://cdn.discordapp.com/attachments/890046187309248573/1164439055132524575/293248655_601991081545532_8065097734023892862_n.png?ex=65433760&is=6530c260&hm=8a99a773a9bfe28343e96e4a2a84e6db4fc76fa5cc89120fae6b0fc8426aa3bd&",
        "https://cdn.discordapp.com/attachments/890046187309248573/1164439055388389377/messageImage_1658234499655.jpeg?ex=65433761&is=6530c261&hm=bed5295596fb79b066f158de4c6de200926e9633737dd7882ab23fa3990374df&",
        "https://cdn.discordapp.com/attachments/890046187309248573/1164439055619080222/16338291.png?ex=65433761&is=6530c261&hm=44100022545f3513c3dcd19f68a1e9ba11ee402938404c6f148e215ea1df5579&",
         "https://cdn.discordapp.com/attachments/890046187309248573/1164439055862333440/4ff0efcb2c25a573.png?ex=65433761&is=6530c261&hm=89d810338db202982b888f7dee6ddbf132fdc12eb602b1e16957d3a35282161b&",
          "https://cdn.discordapp.com/attachments/890046187309248573/1164439056093032550/messageImage_1658052717638.jpg?ex=65433761&is=6530c261&hm=83e3a48eac2043e0bf4ebabca695613951ef1d9c6ab3485dad0e460e0ab7e166&",
           "https://cdn.discordapp.com/attachments/890046187309248573/1164439214398640138/293225039_588696882619744_3443245674030030990_n.jpg?ex=65433786&is=6530c286&hm=9574283f8c7fd246d4a2d75b36ac5b37ba4d74f0db47bbd0c4905b0e8b7837df&", 
           "https://cdn.discordapp.com/attachments/890046187309248573/1164439214776131605/291951493_341285324860042_4180146869381707841_n.png?ex=65433787&is=6530c287&hm=d6ac6fc609c223f25fb9a706f456e5a83965be26b84d01ce4c1b9e9147e5a986&",
            "https://cdn.discordapp.com/attachments/890046187309248573/1164439215396888596/292350680_720870865660653_2287560245377372846_n.jpg?ex=65433787&is=6530c287&hm=88c597df8e8e8eb1c5ecfdb57f4a21d3a539b93ed15f7666dc191ebf1dbffbda&",
             "https://cdn.discordapp.com/attachments/890046187309248573/1164439215061340170/messageImage_1658051602930.jpg?ex=65433787&is=6530c287&hm=e15c3fcad2e21bbe41bfa56fa8002a4ef2b4c01cc251ac3d168c6fea6c16e8f5&",
              "https://cdn.discordapp.com/attachments/890046187309248573/1164439215715647498/292265856_1245225196313540_857836928147953078_n.png?ex=65433787&is=6530c287&hm=a98754d2dc5a498774c2a8cc20d2b6489cda35c1516df34f283f5a66e66ae0a6&", 
              "https://cdn.discordapp.com/attachments/890046187309248573/1164439215984087120/292309778_420436530029420_6464687195876902679_n.png?ex=65433787&is=6530c287&hm=fc42045fb62d11b8a9197f2be8d14011cd7b9ef838695809683e7b2688e08178&", 
              "https://cdn.discordapp.com/attachments/890046187309248573/1164439216403521597/292415829_1407597809743071_1701941619907808583_n.jpg?ex=65433787&is=6530c287&hm=1f5b98dd80ab7df2d2e28e9d38dea3eb88e96572ad1bc5625dcfccb2135bb720&", 
              "https://cdn.discordapp.com/attachments/890046187309248573/1164439216785195058/291582606_579833313759509_2590399299710498187_n.jpg?ex=65433787&is=6530c287&hm=c79708f2df200844eda7905dae5175694041bab2dc49d55530f7ff0374469be9&", 
              "https://cdn.discordapp.com/attachments/890046187309248573/1164439217179467797/292308296_586624279478606_851864529017761449_n.jpg?ex=65433787&is=6530c287&hm=afdea65a4cee8bcb2ba69c52a82a653445111b963e86fa2bbc5873c3d2f0ddc5&",
               "https://cdn.discordapp.com/attachments/890046187309248573/1164439217485643806/messageImage_1658051170516.jpg?ex=65433787&is=6530c287&hm=001dfae98d235daa814e95072e8197e4abc296b49b9db815c69df20177e4883e&",
               "https://cdn.discordapp.com/attachments/890046187309248573/1164439720961507359/unknown.png?ex=654337ff&is=6530c2ff&hm=109dd99748a204488c9ead91404e5013b097ce7837f500fc496239229b7be7f7&", 
               "https://cdn.discordapp.com/attachments/890046187309248573/1164439721359970324/291018911_571486537936421_5560449270834245434_n.jpg?ex=654337ff&is=6530c2ff&hm=4c960275d976d739e6627d5d4171b2b9e77ffdb63e2ba076606fd48f3cb7eb84&",
                "https://cdn.discordapp.com/attachments/890046187309248573/1164439722152689664/290420076_571049478083359_2981421524404304708_n.jpg?ex=65433800&is=6530c300&hm=16e363b76aa3efac663d927e930a46c2fa352d3901af34c142be329bb6894519&",
                 "https://cdn.discordapp.com/attachments/890046187309248573/1164439721821347880/290676653_722382488846803_5815251816863136749_n.jpg?ex=654337ff&is=6530c2ff&hm=e67ec526ae3d61db62b5f8570dd63f4c83643c59450e3f126564dfa4f2472b53&",
                  "https://cdn.discordapp.com/attachments/890046187309248573/1164439722463072307/156F7C10-C1F5-46EF-8E4C-E5FA42CB28A9.jpg?ex=65433800&is=6530c300&hm=9d211ece1a29e0cb3d671bdb191f4325513c86dd6bbbcaccf057db18d531f4fb&",
                   "https://cdn.discordapp.com/attachments/890046187309248573/1164439722920247376/290153837_726878431882280_8522829985476132318_n.jpg?ex=65433800&is=6530c300&hm=e8473c0c4d8aceb561b137c1501e838f09a3f2a49be56238d40945a29036c223&",
                    "https://cdn.discordapp.com/attachments/890046187309248573/1164439723587141642/288916393_1056053401988505_8645338760075400328_n.png?ex=65433800&is=6530c300&hm=a813b3cfcb3de6ffc10443ebcacb711a782b60ddf0ef291c20469e47dfc4a97b&",
                     "https://cdn.discordapp.com/attachments/890046187309248573/1164439723280961656/64957.jpg?ex=65433800&is=6530c300&hm=afb2fc1475b4d0d81435c1745ab62f7daa29de1d3e101c583b9e4ff2414bf007&", 
                     "https://cdn.discordapp.com/attachments/890046187309248573/1164439723964633088/289683329_992019041462345_297050210275194081_n.jpg?ex=65433800&is=6530c300&hm=8d7d6b7e3560a7a56d9e5367c21af1e2c89e2df4eb17fe8ccea906f23741ef96&",
                      "https://cdn.discordapp.com/attachments/890046187309248573/1164439724266627132/SPOILER_IMG_1863.jpg?ex=65433800&is=6530c300&hm=63cf8cc01a1409080bb5b4873f7c9e8ebc0cce4fb1d66d1cdcf80c9a9417edbf&", 
                      "https://cdn.discordapp.com/attachments/890046187309248573/1164441194290479104/unownfsa.png?ex=6543395e&is=6530c45e&hm=e717101cc72f775c6cc6cb0bbb5a1a353b1ad4d9d66edf0df96591b7a80a177b&", 
                      "https://cdn.discordapp.com/attachments/890046187309248573/1164441194533752852/IMG_0380.jpg?ex=6543395f&is=6530c45f&hm=3cc781a1042667c4844789fe890403005aa4edefe221aadd54a84cb479b5f4af&", 
                      "https://cdn.discordapp.com/attachments/890046187309248573/1164441195309699132/283208019_1369090336911143_2917117487235080893_n.jpg?ex=6543395f&is=6530c45f&hm=fd6dfa246b1d1843a9f01d4d466ab784304ad853254a5934f2e0c3a5c9228d3a&", 
                      "https://cdn.discordapp.com/attachments/890046187309248573/1164441194923835452/bigsmtete.png?ex=6543395f&is=6530c45f&hm=82a843fa52f670cc4f291116c312fae403c0ded4a3000b4fadabdc5280771cac&",
                       "https://cdn.discordapp.com/attachments/890046187309248573/1164441195636867164/184308.jpg?ex=6543395f&is=6530c45f&hm=388fd5ce619533c0c6cafef4d2413e9e97bdd38916b4a666645206e467fbd202&",
                        "https://cdn.discordapp.com/attachments/890046187309248573/1164441195934646332/SPILER_unknown.png?ex=6543395f&is=6530c45f&hm=b9a4f2ce4d01b66350ebbb69789c17bb7a33bb9ca39ebc18b908cabb4dc3b9a3&",
                         "https://cdn.discordapp.com/attachments/890046187309248573/1164441196203085856/1_224.png?ex=6543395f&is=6530c45f&hm=ef2da7ee5d16b18094c3dac0dc9a55465eb9569e9f7fbd2241d9601c4e8a0d79&", 
                         "https://cdn.discordapp.com/attachments/890046187309248573/1164441196454756424/1_223.png?ex=6543395f&is=6530c45f&hm=b1ff484dbec6e5fe2fc8d1ce107e4def3c2d1fcb127cb4ad63b1ac8f968c66ef&", 
                         "https://cdn.discordapp.com/attachments/890046187309248573/1164441196714786826/1_215.png?ex=6543395f&is=6530c45f&hm=a5c67ab97d62a99d0cf44d9996123e4c74050cfd0dbb2a15669bb33b068040ec&", 
                         "https://cdn.discordapp.com/attachments/890046187309248573/1164441197033558037/1_208.png?ex=6543395f&is=6530c45f&hm=4bc2a642d4d1636c3226285283602ee7276fb67516fe224385f566b3d0eb8229&", 
                         "https://cdn.discordapp.com/attachments/890046187309248573/1164441826195951686/6fe89f833b4ea5fd.jpg?ex=654339f5&is=6530c4f5&hm=ec278b96d4f83f5f4276f6d246ca2aa0e611cd32aa982575bb93338fb3ecbef9&",
                          "https://cdn.discordapp.com/attachments/890046187309248573/1164441826724429824/e57e871f6a85ba9a.png?ex=654339f5&is=6530c4f5&hm=4c17ba2b835f870a5127923aeacf9657d5d720fe7ec4091349c1680a9630ed26&",
                           "https://cdn.discordapp.com/attachments/890046187309248573/1164441827894640691/Oyashi.png?ex=654339f6&is=6530c4f6&hm=9de5985a534df680df4325cdcf1bb5ce1a93c1654d831f076921471a6e1dbe1f&", 
                           "https://cdn.discordapp.com/attachments/890046187309248573/1164441827361968228/bettersen.png?ex=654339f5&is=6530c4f5&hm=a1262a8e2234fb32f03c3d545b5e0d62aa06c2bdd6f6964528d55d7731f8a2e1&", 
                           "https://cdn.discordapp.com/attachments/890046187309248573/1164441829282959390/Bikaodskg.png?ex=654339f6&is=6530c4f6&hm=4be04017fec07e55cffa6d164a82f97cf1103a4692908038439d0ad6fe79e7db&", 
                           "https://cdn.discordapp.com/attachments/890046187309248573/1164441828360196166/Sittinghereithinkimdumb.png?ex=654339f6&is=6530c4f6&hm=673d1b045f688d5104b38143e9247160f676598cfea0a53efe81cb40669e8fac&",
                            "https://cdn.discordapp.com/attachments/890046187309248573/1164441830105026580/Perm.jpg?ex=654339f6&is=6530c4f6&hm=682d9adc5f6bfc275cf228b7de233a391dc724e3122f1ac60ad1b7a3ce965bae&", 
                            "https://cdn.discordapp.com/attachments/890046187309248573/1164441829815631882/Clongsticker.png?ex=654339f6&is=6530c4f6&hm=8b5a6b014494d498b41455b4680d323b9cf5d3423faafadd3ccbe4833f344bd6&", 
                            "https://cdn.discordapp.com/attachments/890046187309248573/1164441830620942386/ctesthnupvm0u941.jpg?ex=654339f6&is=6530c4f6&hm=154ae7990833cc388d6c90ce44cbb5a8b2f5e95ec55456ed72d4bebded654156&",
                             "https://cdn.discordapp.com/attachments/890046187309248573/1164441830906150962/1578546732088.jpg?ex=654339f6&is=6530c4f6&hm=66024359e98b9d023af9c1097536956591b27c85062e494ff4ad058f4278cada&", 
                             "https://cdn.discordapp.com/attachments/890046187309248573/1164442137119707226/127159125_1023144661431418_8760565349093122428_n.jpg?ex=65433a3f&is=6530c53f&hm=9ea2adf0945d15dfff7b514c71efd02a25bd69dab65885b98ac01713aead631e&",
                              "https://cdn.discordapp.com/attachments/890046187309248573/1164442137677537330/being.png?ex=65433a3f&is=6530c53f&hm=bd640610829748779c0da589c430299eab4d5b9b51f8651fbd59d39a8ed48e36&",
                               "https://cdn.discordapp.com/attachments/890046187309248573/1164442138327662602/Illuminalong.png?ex=65433a40&is=6530c540&hm=2a7f1810daf5aa395eb8640ed58de760e1c6d07f14a53759ddcecfc449bd79c0&", 
                               "https://cdn.discordapp.com/attachments/890046187309248573/1164442138856149032/terminator.png?ex=65433a40&is=6530c540&hm=7141220cb02324085f351b26d24a182451f4fa4c6546bf6a62f43b4918ff2860&", 
                               "https://cdn.discordapp.com/attachments/890046187309248573/1164442139409784913/messageImage_1623040336159.jpg?ex=65433a40&is=6530c540&hm=95a1e92f1a052b0f7bc54e1979464e5d670cabe201da3b47c7e590d544069fb4&", 
                               "https://cdn.discordapp.com/attachments/890046187309248573/1164442140055715890/071d4a8d8ad5696a.jpg?ex=65433a40&is=6530c540&hm=7f4ef0bdf1a9d4ed32bc88ba5611b762e366cd1a366c41e6321f2e41f1293cf3&",
                                "https://cdn.discordapp.com/attachments/890046187309248573/1164442140399652945/2.jpeg?ex=65433a40&is=6530c540&hm=28364c3eb3648ea7ca5b3ba1af647382ac480aecb05a3c6774fff46965918194&",
                                 "https://cdn.discordapp.com/attachments/890046187309248573/1164442140735184916/a4c86975ebcbedba.png?ex=65433a40&is=6530c540&hm=aefc7284cb3faf888ce25335cfa37831dff1c39f5cc86271816a546e865fc659&",
                                  "https://cdn.discordapp.com/attachments/890046187309248573/1164442141322395678/258861790_5090359954325697_7788243620480181081_n.png?ex=65433a40&is=6530c540&hm=b8b545127bec3618716fa318cf1fe1b7c18253ba4745ac8965668b67633e0f2f&",
                                   "https://cdn.discordapp.com/attachments/890046187309248573/1164442141980893184/250611276_640962473953311_4590608178359468765_n.png?ex=65433a40&is=6530c540&hm=8cb4ef35734b3200aee17b879d97b2cab3d48889acc4bda5d5f21d04e1d39d96&",
                                    "https://cdn.discordapp.com/attachments/890046187309248573/1164442448685191208/messageImage_1631516155357.jpg?ex=65433a8a&is=6530c58a&hm=99470a6d900002d7961687470e738e97c5f1ff0d1c7957a3d8cc66809ec8134b&",
                                     "https://cdn.discordapp.com/attachments/890046187309248573/1164442449280782406/Wide_PUPERM.jpg?ex=65433a8a&is=6530c58a&hm=f31b535825415baf537f64e97f6f234d3b5def1c7281672abe183d255ae82ec7&",
                                      "https://cdn.discordapp.com/attachments/890046187309248573/1164442448995553301/28380.jpg?ex=65433a8a&is=6530c58a&hm=7081e4c4ec3ea62bd543eba51883388e4e089a95a946f8d734192833c430c8f6&", 
                                      "https://cdn.discordapp.com/attachments/890046187309248573/1164442449607925810/03d80736c638aaf4.jpg?ex=65433a8a&is=6530c58a&hm=5561468191e844c51eada6e1515a30c841e2b7495dcfed38aa4ba1d4da323409&", 
                                      "https://cdn.discordapp.com/attachments/890046187309248573/1164442450031546380/6a3904088f409c58.jpg?ex=65433a8a&is=6530c58a&hm=5dc304fb2adda0911100384090fbc69c8631502f416dfa5385dde9b8c734708e&", 
                                      "https://cdn.discordapp.com/attachments/890046187309248573/1164442450371301496/12008.jpg?ex=65433a8a&is=6530c58a&hm=eff0ba6b84bb6b2c0ee4bb7bd9f2453a48df6a26c09d6e2dc5af905915bada01&", 
                                      "https://cdn.discordapp.com/attachments/890046187309248573/1164442450933321789/12007.jpg?ex=65433a8a&is=6530c58a&hm=5b771bcde535d97618613edd03c285fe45a6eaa7be9d4603251b2cca66f2df3f&", 
                                      "https://cdn.discordapp.com/attachments/890046187309248573/1164442450643918868/12006.jpg?ex=65433a8a&is=6530c58a&hm=25591ffa12de18490f91f0f8e8874fd66f4d005bc6c1d19c73884bed15730f4a&", 
                                      "https://cdn.discordapp.com/attachments/890046187309248573/1164442451507945472/Permpupil.jpg?ex=65433a8a&is=6530c58a&hm=44745f87568b4fd6a384a8a4ade2caf5745139336289e13a00dee8ce8de800f1&",
                                       "https://cdn.discordapp.com/attachments/890046187309248573/1164442451860262952/messageImage_1617034473802.jpg?ex=65433a8a&is=6530c58a&hm=43725d60ebefa4748c23ff020978fe285612d1b9439af35d2b7bc4f3bbf7a5c5&", 
                                       "https://cdn.discordapp.com/attachments/890046187309248573/1164442932804325456/messageImage_1616528513500.jpg?ex=65433afd&is=6530c5fd&hm=c7761ce6454dffa69b44c80809b674259c357b9d4a888a52b141ac44f2aaa206&",
                                        "https://cdn.discordapp.com/attachments/890046187309248573/1164442932447817819/messageImage_1616528454602.jpg?ex=65433afd&is=6530c5fd&hm=8bd56614549d2174d9480a8f4d40fd159d0bfcb469e0e70b1543ce0d4982280e&",
                                         "https://cdn.discordapp.com/attachments/890046187309248573/1164442933097934908/messageImage_1616144718296.jpg?ex=65433afd&is=6530c5fd&hm=44e58cf66e6b9786c6bb8c07cabad5be30c69c330047df31b42bc919c0ea53cf&",
                                          "https://cdn.discordapp.com/attachments/890046187309248573/1164442933429280818/0912d3b3f17d138e.jpg?ex=65433afd&is=6530c5fd&hm=19c06ded91b74c58dbd6d004b590ea523eb8de80396de0ada7ff4f366e942051&",
                                           "https://cdn.discordapp.com/attachments/890046187309248573/1164442933932593223/Perm_wanwai.jpg?ex=65433afd&is=6530c5fd&hm=4f26501d5f1a2ae53a37f10301a21c51666cb26aca9ca0392aaad6b9788006b2&", 
                                           "https://cdn.discordapp.com/attachments/890046187309248573/1164442934830178335/messageImage_1615047271859.jpg?ex=65433afd&is=6530c5fd&hm=97bb1003b8c6fdb1d47a39e3cf25f72284a6d62c43d41ea3ef4e8a428505132f&", 
                                           "https://cdn.discordapp.com/attachments/890046187309248573/1164442935140560926/messageImage_1610549441604.jpg?ex=65433afe&is=6530c5fe&hm=9a5072e0620fb3ad167e1881ab9758509b16c26fede1ee72c83944e6fc3a15e8&", 
                                           "https://cdn.discordapp.com/attachments/890046187309248573/1164442935501266984/messageImage_1610197099223.jpg?ex=65433afe&is=6530c5fe&hm=cada01070f43205c3f870ccbc9585cd6bc2938131750fcc0cf522f776dfbffff&",
                                            "https://cdn.discordapp.com/attachments/890046187309248573/1164442935966830612/69944.jpg?ex=65433afe&is=6530c5fe&hm=ced008d82776f83578fb07506047340143565066d0ed1e7a07f06f4169745523&",
                                             "https://cdn.discordapp.com/attachments/890046187309248573/1164444676594614363/permm.png?ex=65433c9d&is=6530c79d&hm=bfd4ebbe64678f926af73d42537f026ccdb2f28993dfdfb9a320ba904aedff66&", 
                                             "https://cdn.discordapp.com/attachments/890046187309248573/1164444725957365821/berm.gif?ex=65433ca9&is=6530c7a9&hm=5acfb6a43324094f105ce2b2d3464ed1597bdb164df15afffe714c9132799562&", 
                                             "https://cdn.discordapp.com/attachments/890046187309248573/1164444726339051641/image.png?ex=65433ca9&is=6530c7a9&hm=3814e1aee853e4fb0e360f5216860f7546bfa08dbebc6da4ea08c3b483c80d4b&", 
                                             "https://cdn.discordapp.com/attachments/890046187309248573/1164444814151004191/opencv_testimwrite.jpg?ex=65433cbe&is=6530c7be&hm=d523b92037c446232e2859d17e5126a26883dd0b78ac8433b76e437973c3bb59&",
                                              "https://cdn.discordapp.com/attachments/890046187309248573/1164444750485663754/20220615_160554.mp4?ex=65433cae&is=6530c7ae&hm=c84d6d5b37d22c654caa7bbe53d32329212b47851e6638077e595c2e70c19c99&",
                                               "https://cdn.discordapp.com/attachments/890046187309248573/1164444818429186068/10616.jpg?ex=65433cbf&is=6530c7bf&hm=a8019fdcd3ceeeca7eaf4d5767a7856240ba2072795190ab1efb2b2d6b4af938&",
                                                "https://cdn.discordapp.com/attachments/890046187309248573/1164444819020591144/10719.jpg?ex=65433cbf&is=6530c7bf&hm=dc120ca3ba487bd309ce096903a5de513c50cc3ba7237a58297ce35f1a01607d&", 
                                                "https://cdn.discordapp.com/attachments/890046187309248573/1164444821952401439/10568.jpg?ex=65433cbf&is=6530c7bf&hm=a60293771c9196c2a5e320cf79ed0afff59ebf5789b69e56f1662513a9ab4720&", 
                                                "https://cdn.discordapp.com/attachments/890046187309248573/1164444820627009556/10514.jpg?ex=65433cbf&is=6530c7bf&hm=37fa77281c0930a72e6b650a6e7bb2ff47cb586186e36a76de4943d5685c7cb5&",
                                                 "https://cdn.discordapp.com/attachments/890046187309248573/1164444985656082514/FB_IMG_1656573829879.jpg?ex=65433ce6&is=6530c7e6&hm=fd1439526b8b03c37b5dfddc96a6e562fe1f1a97aec715dd4887004663cc6fc5&",
                                                  "https://cdn.discordapp.com/attachments/890046187309248573/1164444909328138310/546d885862184c488247bdc568056d9c.gif?ex=65433cd4&is=6530c7d4&hm=cf3ef7f1ed481831c28c2929b502936f8226b6612eaad8f80ed7cf3b4fc43851&", 
                                                  "https://cdn.discordapp.com/attachments/890046187309248573/1164445052005789726/302665386_817798519578397_661863559593590265_n.png?ex=65433cf6&is=6530c7f6&hm=b29d1a68d9fbafad8bb95b813ac8c9bc1410bf84ccdf5bffb94643b7dbd98db7&", 
                                                  "https://cdn.discordapp.com/attachments/890046187309248573/1164444989632294982/109063668_283997396269065_8286012146521401944_n.jpg?ex=65433ce7&is=6530c7e7&hm=184d8f986afde55da79bc6ee62a85f58100f3705201d8d463c579530125c5c89&", 
                                                  "https://cdn.discordapp.com/attachments/890046187309248573/1164445154007056524/berm8.png?ex=65433d0f&is=6530c80f&hm=3b6db3ba75a15bd28dfddbd2c5d594fea4fe3c11b6a7580a809a5420fd08a873&",
                                                   "https://cdn.discordapp.com/attachments/890046187309248573/1164445154460045392/berm6.png?ex=65433d0f&is=6530c80f&hm=f0af7079f2020c0ea4d342e3d6771c0fb7a9601d32e9f7b7fa5506abe13f5435&",
                                                    "https://cdn.discordapp.com/attachments/890046187309248573/1164445155059826769/berm5.png?ex=65433d0f&is=6530c80f&hm=f26630ee7ffc21b4f373c53d1b80b7aefda9b1dba15aa137c006c96e35a4af10&", 
                                                    "https://cdn.discordapp.com/attachments/890046187309248573/1164445155550564383/berm3.png?ex=65433d0f&is=6530c80f&hm=33640ed86c9c978f52d2b8a4a9e2937a95831293d9ffacf195ed8d80f3812c27&", 
                                                    "https://cdn.discordapp.com/attachments/890046187309248573/1164445155290525727/berm4.png?ex=65433d0f&is=6530c80f&hm=580e76b64974f043df1b6d122bb6da20e38db172d92393b2fc152807a6e59181&", 
                                                    "https://cdn.discordapp.com/attachments/890046187309248573/1164445155810607164/berm1.png?ex=65433d0f&is=6530c80f&hm=89e93838e708c090b4d296cd56e3c9c0f45b1ebdcfac55e5d6285297be29713c&", 
                                                    "https://cdn.discordapp.com/attachments/890046187309248573/1164445156070666260/berm.png?ex=65433d0f&is=6530c80f&hm=4150327bb0038f040581b94dc1895a0c8579ca07110974fb4ae618f5f45a7e15&", 
                                                    "https://cdn.discordapp.com/attachments/890046187309248573/1164445329186365500/18860.jpg?ex=65433d38&is=6530c838&hm=87e32418bc218de44a3d7c4e59d5becb990d3c1367e096743b313e0151d9a8f9&", 
                                                    "https://cdn.discordapp.com/attachments/890046187309248573/1164445351978225744/39272.jpg?ex=65433d3e&is=6530c83e&hm=4a0e938e0beeee55896311b6e10716894eefcbdd3f4df46666d1c805dc156955&", 
                                                    "https://cdn.discordapp.com/attachments/890046187309248573/1164445434266271764/61946.jpg?ex=65433d51&is=6530c851&hm=a9b485893d40033e67d0a0334bb71f40b8f39611caa43ecc7a532fc6e0c53de5&",
                                                     "https://cdn.discordapp.com/attachments/890046187309248573/1164445434501156955/61947.jpg?ex=65433d51&is=6530c851&hm=8edb3e6e648348a4c926f31bf330f6a8abce1e13d22b519dce77b3f7c63489d4&", 
                                                     "https://cdn.discordapp.com/attachments/890046187309248573/1164445434790543462/62019.jpg?ex=65433d52&is=6530c852&hm=5cc4138b61340fc3d4b0f5c4d90374bd95385d4a03ac477dfa5652962a117e94&", 
                                                     "https://cdn.discordapp.com/attachments/890046187309248573/1164445460312887427/49484.jpg?ex=65433d58&is=6530c858&hm=de61ca10d0215e2155ffe8b18467adbb36ba2eb6f5e54c4d6bd49c504aec9a4d&", 
                                                     "https://cdn.discordapp.com/attachments/890046187309248573/1164445435071578152/62084.jpg?ex=65433d52&is=6530c852&hm=42dfb1529a1f4e18d3504f65e694f2df409bbd476b6966f2b04b389140b84830&",
                                                      "https://cdn.discordapp.com/attachments/890046187309248573/1164445552361095228/20210912_231733_1.jpg?ex=65433d6e&is=6530c86e&hm=605ddddcd38f41054ae22e0befebd15ec67267646f5d7a9c34e4292f7bad51bb&",
                                                       "https://cdn.discordapp.com/attachments/890046187309248573/1164445575182290994/78615894_1718666258269187_1595713150852792320_n.jpg?ex=65433d73&is=6530c873&hm=44595ef86d46cdd87365d384e257fd931570e4338ba21d6f943282e239e1fd81&", 
                                                       "https://cdn.discordapp.com/attachments/890046187309248573/1164445673467420782/116153418_290444685510088_8504989495640037733_n.jpg?ex=65433d8a&is=6530c88a&hm=2d3ae23fd07af0fc9147728dc348f7c159a50f8eae7b20235b8a988cbaf3442a&",
                                                        "https://cdn.discordapp.com/attachments/890046187309248573/1164445686046134272/116089118_745250399621531_2266544947302625113_n.jpg?ex=65433d8d&is=6530c88d&hm=fc7c17e00cfbe88e73a35885e706f86d8730424a9f0b42306bc90f0c65cf4080&", "https://cdn.discordapp.com/attachments/890046187309248573/1164445736759459861/123719584_3966400710056368_6695370675034845661_n.jpg?ex=65433d99&is=6530c899&hm=9484ca28d93f3eb094f18bd55fa76530f7f8092bf44ec555f0b3fe3214a28adf&", "https://cdn.discordapp.com/attachments/890046187309248573/1164445700759765023/116117950_1263402510665818_643533139403776512_n.jpg?ex=65433d91&is=6530c891&hm=c9e6976b5a61c7c1a33646647b225727566ad674b8672079ff9709da5cef8f58&", "https://cdn.discordapp.com/attachments/890046187309248573/1164445756170706964/136127910_435256667607884_8124100793090589891_n.jpg?ex=65433d9e&is=6530c89e&hm=0e4ef6f673cda89622463b41690b7839fca71b0155aed2b81499186e48b757bc&", "https://cdn.discordapp.com/attachments/890046187309248573/1164445776341127188/136668163_435255844274633_7249058432132800676_n.jpg?ex=65433da3&is=6530c8a3&hm=598b9c1c7b3282ccdac602f81fcaace27f441a17f2e03ebb2ad9c5e8b934c318&", "https://cdn.discordapp.com/attachments/890046187309248573/1164445856636866630/line_1557885849766.jpg?ex=65433db6&is=6530c8b6&hm=94b950e442171421c37acfb65cedfa81d643ab5cfe978119a6f8bf20e23e25ed&", "https://cdn.discordapp.com/attachments/890046187309248573/1164446063336370186/30.jpg?ex=65433de7&is=6530c8e7&hm=1f2d8ce6148a50a7b7162bcfe583e2d37bb508b8589639cd1af066a65238b1ae&", "https://cdn.discordapp.com/attachments/890046187309248573/1164445967756574840/d1155e28d4d607bf.jpg?ex=65433dd1&is=6530c8d1&hm=8450d659bcecfed580d10decfb93094ffdcef144a101461d2698af72ff0b0f9f&", "https://cdn.discordapp.com/attachments/890046187309248573/1164446063604797481/27.jpg?ex=65433de7&is=6530c8e7&hm=f040b8bb05579189605cf442a2801c2319d4d718d899eff21252ae1c366ee4fd&", "https://cdn.discordapp.com/attachments/890046187309248573/1164446064183619654/29.jpg?ex=65433de8&is=6530c8e8&hm=c471c89cd7637f6032ef8479d45a701fb4606f57f4a089531145484c5fb07802&", "https://cdn.discordapp.com/attachments/890046187309248573/1164446063873245194/28.jpg?ex=65433de7&is=6530c8e7&hm=1f526f597e7a350301b03ed9b105172a7dfc5a414900e36439a2aa98d1a69495&"
]
    if(message.content === 'ขอรูปx10'){
        for(let i=0 ;i<10;i++){
            let photo = Math.floor(Math.random()*(a.length)) 
            
            message.channel.send(a[photo])
        }
    }
    if (message.content === 'ขอรูป'){
        let photo = Math.floor(Math.random()*(a.length)) 
        
        message.channel.send(a[photo])
    }
   if (message.content === 'เหี้ยเบิ้ม'){
       message.channel.send("ควยไรไอน้อง")
   }
   if (message.content === 'ขอรูปเบิ้ม'){
       message.channel.send("https://cdn.discordapp.com/attachments/729258758831865888/1034681765727576124/hackermanv2final.png")
   }
   if (message.content === 'เบิ้มตรวจโควิดยัง'){
       message.channel.send("ยังไม่เป็นไร กูเลือดพระเจ้าตาก")
   }
   if (message.content === 'บอยแบนเขมร'){
    message.channel.send("https://tenor.com/view/%E0%B9%80%E0%B8%AB%E0%B8%A1%E0%B8%99-%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B8%A1%E0%B9%82%E0%B8%9A%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2-%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87%E0%B9%80%E0%B8%82%E0%B8%A1%E0%B8%A3-%E0%B9%80%E0%B8%82%E0%B8%A1%E0%B8%A3-claimbodian-gif-15563924")
}
   
   
});  
client.login(key);
