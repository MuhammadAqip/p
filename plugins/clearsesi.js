const fs = require('fs');
let handler = async (m, { conn }) => {
  fs.readdir("./sessions", async function (err, files) {
    if (err) {
      console.log("Unable to scan directory: " + err);
      return m.reply("Unable to scan directory: " + err);
    }
    let filteredArray = await files.filter(
      (item) =>
        item.startsWith("pre-key") ||
        item.startsWith("sender-key") ||
        item.startsWith("session-")
    );
    console.log(filteredArray.length);
    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`;
    if (filteredArray.length == 0) return m.reply(teks);
    m.reply(teks);
   
    m.reply("Menghapus file sampah session");
    await filteredArray.forEach(function (file) {
      fs.unlinkSync(`./sessions/${file}`);
    });
    
    m.reply("Berhasil menghapus semua sampah di folder session");
  });
};
handler.help = ["clearsesi"];
handler.tags = ["owner"];
handler.command = /^(clearsesi)$/i;
handler.owner = true;

module.exports = handler;
