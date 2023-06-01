let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
   let thumb = 'https://telegra.ph/file/1894de4cf24d14f2bef33.jpg'
 await conn.sendFile(m.chat, thumb, 'fitur.jpg', `Total Fitur saat ini: ${totalf}`, m)
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler