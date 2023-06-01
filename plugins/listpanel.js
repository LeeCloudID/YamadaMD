let handler = async (m, { conn, text, usedPrefix, command }) => {

var dann = `GA JUALAN🗿`
conn.relayMessage(m.chat, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: dann,
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {})
}

handler.help = ['listpanel']
handler.tags = ['main']
handler.command = /^(listpanel)$/i

module.exports = handler