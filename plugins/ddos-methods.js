const { join } = require('path');
const fs = require('fs');

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    const m2 = `       ≡ *DDoS Method Layer 7 (A.X.I)*
┌─⊷
\`| -tls\`
\`| -mix\`
\`| -https\`
\`| -ninja\`
\`| -kill\`
\`| -rape\`
\`| -browsers\`
\`| -bypass\`
\`| -raw\`
\`| -strike\`
\`| -thunder\`
\`| -storm\`
\`| -slim\`
└───────────
      ≡ *DDoS Method Layer 4 (A.X.I)*
┌─⊷
\`-udp-raw\`
└───────────`;


conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: global.title,
body: `Full Powererd DDoS 2023-2024`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: global.banner,
sourceUrl: ``
}}, text: m2}, {quoted: m})
	  } catch (e) {
    conn.reply(m.chat, 'Menu Error Bejir', m);
    throw e;
  }
};

handler.help = ['methods'];
handler.tags = ['main'];
handler.command = /^(methods)$/i;

module.exports = handler
