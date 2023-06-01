let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/1894de4cf24d14f2bef33.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let dann = '6282351108031@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/1894de4cf24d14f2bef33.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/1894de4cf24d14f2bef33.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `Mau sewa bot? silahkan chat owner ${conn.user.name}

List Price: 
SEWA BOT
    ≻ Rp5.000 per Group (7Hari)
    ≻ Rp10.000 per Group (1Bulan)
    ≻ Rp20.000 per Group (Permanent)

UPRAGE USER

    ≻ Premium user 5.000 (14Hari)
    ≻ Premium user  7.000 (1Bulan)
    ≻ Premium user 15.000/ ( Permanen )

───「 SEWA BOT VIP 」───

    ≻ Rp7.000 per Group+Premium User (7Hari)
    ≻ Rp15.000 per Group+Premium User (1Bulan)
    ≻ Rp40.000 per Group+Premium User (permanen)

Note : Hanya Memberikan 1x Link Grub 
Bot Di kick = Hangus

Mau beli? ketik .payment dan tunggu orderan selesai. Jika ada kendala hubungi owner

Owner: https://wa.me/+${owner[0]}
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Click to Order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6282351108031@s.whatsapp.net`
  },
  footerText: '2023 © Yamada-MD',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }