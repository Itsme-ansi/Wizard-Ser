let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://github.com/Nihad-Kaztro/Medusa-Max/blob/master/Nihad-Kaztro.jpg")).buffer(), devil, 'ᴍᴇᴅᴜsᴀ-ᴍᴀx ʙʏ ɴɪʜᴀᴅ-ᴋᴀᴢᴛʀᴏ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://github.com/Nihad-Kaztro/Medusa-Max \n\n\ © ī.am ꪶᴍᴇᴅᴜsᴀ ᴍᴀxꫂ⁩⁴⁰⁴⁩' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
