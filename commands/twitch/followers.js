const config = require('../../config.json')
const fetch = require('node-fetch');
const moment = require('moment')
const { MessageEmbed } = require("discord.js");

const getBasicChannelData = require('../../util/getBasicChannelData.js')
const getFollowers = require('../../util/getFollowers.js')
const log = require("../../bot.js");

module.exports = {
    name: "followers",
    description: 'Get follower count for a Twitch channel.',

    async execute(message, args) {
        if (args[0]){
        let x = await getBasicChannelData(args[0])
        if (x.data[0]){ // Data exists and there is information
            let y = await getFollowers(x.data[0].id)
            const displayName = x.data[0].display_name
            const profileImage = x.data[0].profile_image_url || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const totalFollowers = y.total
            if (totalFollowers < 5) {
                const embed = new MessageEmbed()
                .setAuthor(`${displayName}`, `${profileImage}`, `https://twitch.tv/${displayName}`)
                .setColor(`${config.COLOR}`)
                .setDescription(`**${displayName}** currently has **__${totalFollowers}__** followers.`)
                message.channel.send({ embeds: [embed] })   
            } else { 
            const follower1 = y.data[0].from_name 
            const follower2 = y.data[1].from_name 
            const follower3 = y.data[2].from_name 
            const follower4 = y.data[3].from_name
            const follower5 = y.data[4].from_name
            const embed = new MessageEmbed()
        .setAuthor(`${displayName}`, `${profileImage}`, `https://twitch.tv/${displayName}`)
        .setColor(`${config.COLOR}`)
        .setDescription(`**${displayName}** currently has **__${totalFollowers}__** followers.\n\n**Recent Followers:**\n- ${follower1}\n- ${follower2}\n- ${follower3}\n- ${follower4}\n- ${follower5}`)
         message.channel.send({ embeds: [embed] })   
            }
        } else { // Specified User does not exist since data comes back as []
            const embed = new MessageEmbed()
            .setColor('RED')
            .addField(`Error!`, `Sorry! I was unable to find the channel: \`${args[0]}\``)
            message.channel.send({ embeds: [embed] })  
            return;
        }
    } else {
        const embed = new MessageEmbed()
        .setColor('RED')
        .addField(`Error!`, `You must provide a channel name.`)
        message.channel.send({ embeds: [embed] })   
        return;
    }
        
        log('EXECUTION', `${message.author.tag} (${message.author.id}) ran command: [ ${message} ] in ${message.guild.name}.`)
    },
};