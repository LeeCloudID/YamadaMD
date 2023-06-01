let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/1894de4cf24d14f2bef33.jpg'
let dann =
`
┏━━━ꕥ〔 *DONASI* 〕ꕥ━⬣ 
┃Dana: 082351108031
┃Ovo: 082351108031
┃Gopay: 085245759983
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Ig: instagram.com/iglee21
┃Wa: wa.me/6282351108031
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendFile(m.chat, qris, 'qris.jpg', `${dann}`, m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler