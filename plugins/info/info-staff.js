//plugin by Giuse
let handler = async (m, { conn }) => {

    // Newsletter globale ChatUnity
    const cuContext = {
        isForwarded: true,
        forwardingScore: 999,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363259442839354@newsletter',
            serverMessageId: 100,
            newsletterName: `𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮 ✦ Staff Ufficiale`
        }
    };

    // Schede di contatto (vCard)
    const vcards = [
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;モれ刀ﾘ | OWNER;;;\nFN:モれ刀ﾘ | CEO\nORG:𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮\nTITLE:CEO\nitem1.TEL;waid=393501989497:+39 350 198 9497\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;Medalis;;;\nFN:Diego\nORG:𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮\nTITLE:Staff\nitem1.TEL;waid=212693877842:+212 693-877842\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;Sgozzare;;;\nFN:Matte\nORG:𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮\nTITLE:Staff\nitem1.TEL;waid=77787623522:+7 778 762 3522\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;Alessia;;;\nFN:Giuse\nORG:𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮\nTITLE:Staff\nitem1.TEL;waid=393514593662:+39 351 459 3662\nitem1.X-ABLabel:Cellulare\nEND:VCARD` }
    ];

    // Testo elegante con i numeri in chiaro
    let testo = `
୧・︶ ✦ 𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮 ✦ ︶・୨
꒷꒦ ‧₊ 🛡️ 𝐒 𝐓 𝐀 𝐅 𝐅 🛡️ ₊‧ ꒷꒦
୧・︶ : ︶ : ︶ : ︶ : ︶ : ︶・୨

✦ 👑 +39 350 198 9497 ~ モれ刀ﾘ |OWNER|
✦ 👨‍💻 +212 693-877842 ~ Medalis |MOD|
✦ 👨‍💻 +7 778 762 3522 ~ Sgozzare |ADMIN|
✦ 👨‍💻 +39 351 459 3662 ~ Alessia |STAFF|

👑 _Il team dietro 𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮._
୧・︶ : ︶ ꒷꒦ ‧₊ ୧`.trim();

    // 1. Invia le schede contatto (rubrica)
    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: 'Staff 𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮',
            contacts: vcards
        },
        contextInfo: cuContext
    }, { quoted: m });

    // 2. Invia il testo stilizzato
    await conn.sendMessage(m.chat, {
        text: testo,
        contextInfo: cuContext
    });

};

handler.help = ['staff', 'owner', 'creatori'];
handler.tags = ['info'];
handler.command = /^(staff|owner|creatori|founder)$/i;

export default handler;