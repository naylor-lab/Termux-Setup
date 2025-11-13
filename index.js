/* =================================== \\
 * Direitos Autorais © [2023] Sabrina Conteúdos
 * Todos os direitos reservados do início a Nueva Generación - Aleatory Conteúdos, por motivo de desde sua primeira versão é usada a base do "Bot Aleatory", que nunca será ocultada, sempre está presente e sou grato por tudo ao desenvolvedor do Ale.
 * Ajuda no desenvolvimento: @jeova_alves7!
 * Leia o arquivo "LICENSE" para saber mais, sobre os termos de garantia e o que não pode ou pode fazer em sua construção.
// =================================== */

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore } = require('@whiskeysockets/baileys');

// ========[ MÓDULOS E FUNÇÕES ]======= \\

const { fs, Boom, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, writeExifImg, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, TimeCount, simih, botoff, colors, RSM_FUNC, infoSystem, os, arcloud, EmojiAPI, emoji, infoClima, insert, response, addFilter, isFiltered, mines, getMinesPositions, MinesHelp, ytdl, psycatgames, MultiDownload, AssemblyAI, level2, chaves, grupos, aluguel, obeso, countDays, timeDate, Limit_CMD, capitalizeFirstLetter } = require('./exports.js');

// ======[ JS-MENUS/INFORMAÇÕES ]====== \\

const { linguagem, mess, getInfo, destrava, destrava2, tabela, conselhob, fatos, randomCantadas, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, ftmenu, premium, rgtake, muted, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, votacao, antispam, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, sabrpg, autorpg, bcbet, minerar, cavalosrpg, elitepasse, coderpg, galosrpg, roubosrpg } = require('./exports.js');

//_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_--_-_-_-_-_-_-_-\\

var { antipv, antipv2, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = require("./settings/nescessario.json");

const music = JSON.parse(fs.readFileSync("./database/data/music.json"))

const { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb, thumbnail } = require("./settings/links_img.json");

const { NomeDoBot, NickDono, prefix, API_KEY_BRONXYS, channel } = require("./settings/settings.json");

const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require('./settings/media/audios.json')



const { mensagens, enviar, sortear } = require("./settings/message.js") // Mensagens do bot 

//====================≠≠===============\\
 
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

async function reiniciarSAB() {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];

// ABAIXO: INÍCIO DE CONEXÃO

async function iniciarSabrina() {

module.exports = sabrina = async(sabrina, folderUserAuth) => {
module.exports = upsert = async(upsert, sabrina) => {
async function msgupsrt() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(sabrina, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

const VRF_JSON_GRUPO = fs.existsSync(`./database/grupos/activation_gp/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}

if(VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
sabrina.sendMessage(info.key.remoteJid, {text: `*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) ao cargo de adminstrador do grupo por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
case 30:
await delay(1000);
sabrina.sendMessage(info.key.remoteJid, {text: `O(a) adminstrador(a) *@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) à membro comum por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
}}
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if(visualizarmsg) {
await sabrina.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');

//==============(BODY)================\\

var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.imageMessage?.caption || '';

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const cmd = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");


//======================================\\

try {var groupMetadata = isGroup ?  await sabrina.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await sabrina.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]

//=====================================\\

//=================> Funções de Grupo 🥋

const dirGroup = `./database/grupos/activation_gp/${from}.json`

const nescj = "./settings/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false, antiporn: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, 
listanegra: [], advertir: [], prefixos: [`${setting.prefix}`],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}], ausentes: [], forca_inc: false,  
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#"
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#"
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false,
aluguel: true
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//=====(ADMS/DONO/ETC..CONST)=======\\
const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';
const quoted = info.quoted ? info.quoted : info
const isBot = info.key.fromMe ? true : false
const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt
dfndofc = setting.numerodono+"@s.whatsapp.net"
const DonoOficial = dfndofc.includes(sender) 
const isPremium = premium.includes(sender) || SoDono
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial
const isBanned = ban.includes(sender)
const isVisualizar = nescessario.visualizarmsg
const isVerificado = nescessario.verificado
const isWelcomePrivate = nescessario.welcomepv
const isAudioMenu = nescessario.menu_audio
const isAntiPv = nescessario.antipv 
const isAntiPv2 = nescessario.antipv2
const isAntiPv3 = nescessario.antipv3
const isBotoff = nescessario.botoff
const listanegraG = nescessario.listanegraG
const isAnticall = nescessario.anticall
const TOKEN_GPT = nescessario.TOKEN_GPT
const isCmdPremium = nescessario.cmd_premium
const isBlockCmdG = nescessario.blockCmdG
//============(FUNÇÕES)============\\

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false
const isAntiImg = isGroup ? dataGp[0].antiimg : undefined
const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined
const isAntiVid = isGroup ? dataGp[0].antivideo : undefined
const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined
const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined
const Antidoc = isGroup ? dataGp[0].antidoc : undefined
const isAntiCtt = isGroup ? dataGp[0].antictt : undefined
const Antiloc = isGroup ? dataGp[0].antiloc : undefined
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined
const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined
const isAntifake = isGroup ? dataGp[0].antifake : undefined
const IS_DELETE = nescessario.Odelete
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined
const ADVT = isGroup ? dataGp[0].advertir: undefined
const ADVT2 = isGroup ? dataGp[0].advertir2: undefined
const isx9 = isGroup ? dataGp[0].x9 : undefined
const isMultiP = isGroup ? dataGp[0].multiprefix : undefined
const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined
const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined
const isSimi = isGroup ? dataGp[0].simi1 : undefined
const isSimi2 = isGroup ? dataGp[0].simi2 : undefined
const isAutofigu = isGroup ? dataGp[0].autosticker : undefined
const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined
const isModobn =  isGroup ? dataGp[0].jogos : undefined
const isLevelingOn = isGroup ? dataGp[0].level : undefined
const isBanchat = isGroup ? dataGp[0].bangp : undefined
const isNsfw = isGroup ? dataGp[0].nsfw : undefined
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined
const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined
const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined
const isModoAluguel =  isGroup ? dataGp[0].aluguel : undefined

const isSabCityOFF = !JSON.stringify(autorpg).includes(from) || autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == true

//============(VERIFICADOS)============\\

const sabLive = {key: {participant: '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: `Usuário: ${pushname}`}}} 
const sabPhoto = {key: {participant : '0@s.whatsapp.net'}, message: {imageMessage: {caption: pushname}}}
const sabVideo = {key: {participant : '0@s.whatsapp.net'},message: {videoMessage: {caption: pushname}}}
const sabContact = {key: {participant : '0@s.whatsapp.net'},message: {contactMessage: {displayName: `${pushname}`}}}
const sabDocument = {key: {participant : '0@s.whatsapp.net'}, message: {documentMessage: {caption: pushname}}} 

if(!isVerificado) {var sasah = sabLive} else {var sasah = info} 

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

////////////////////////////////////////////


var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//if(info.key.fromMe) return

const reply = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return sabrina.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

const identifyAtSign = (number) => {
return number.includes('@') ? txt.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : number.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
}

const detectTinder = (query) => {
return query.replace("#p#", prefix).replace("#p#", prefix).replace("#pc#", prefix+command).replace("#pc#", prefix+command)
}

const replyPeR = (texto) => {
  return new Promise((resolve) => {
setTimeout(() => {
sabrina.sendMessage(from, { text: texto }, { quoted: info }).then(() => resolve()).catch((error) => {
console.log(JSON.stringify(error, null, 2));
resolve();
});
}, 1000);
});
};

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return sabrina.sendMessage(from, options).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const sendSticker = (from, filename, info) => {
sabrina.sendMessage(from, {sticker: {url: fileName}}, {quoted: sasah})
}

const sendImage = (ytb) => {
sabrina.sendMessage(from, {image: {url: ytb}}, {quoted:info})
}


const sendMess = (idGroup, textINFO) => {
sabrina.sendMessage(idGroup, {text: textINFO})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sabrina.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sabrina.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: info})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
sabrina.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mentionSemQuoted = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
sabrina.sendMessage(from, {text: teks.trim(), mentions: memberr}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
sabrina.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
sabrina.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await sabrina.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
sabrina.sendMessage(from, {text: markingAllMember()})
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
sabrina.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
sabrina.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n↧ [☁️] Grupo:\n• ↳ ${groupName}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(sabrina, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmediaa)
}
if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)) {
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n↧ [☁️] Grupo:\n• ↳ ${groupName}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(sabrina, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./database/func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./database/func/afk/afk-@${nmrdnofc1}.json`));  
sabrina.sendMessage(from, {text: mess.absenceRecordOwner(NickDono, tabelin)}, {quoted: sasah})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}

mention(mess.absenceRecordAdmin(blak))
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-sab") || info.key.fromMe && budy.includes("reiniciar-sab")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

if(!isPremium && !SoDono && !info.key.fromMe && isCmdPremium.includes(command)) return reply(enviar.msg.premium)

//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('Enviando sticker..');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
sabrina.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: sasah}).catch(e => {
return reply(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command)) return reply('O comando foi bloqueado, entre em contato com a administração.')

///BLOCK CMD GLOBAL///
///(CRÉDITOS AO @VictorGabriel)///
if(isBlockCmdG.includes(command) && !SoDono) return reply('Olá, o comando está bloqueado para *uso global*, ou seja, todos os usuários estão impossibilitados de usar ele.\n–\n• Entre em contato com meu proprietário para saber o motivo.')

////FIMMMMMMMMM/////

///// SISTEMA DE DINHEIRO /////
const { AdicionarGold, RemoverGold } = require("./arquivos/js/dinheiro.js")

///// FIMMMMMMMMMMMMM /////

const { color, bgcolor } = require('./arquivos/js/color.js')
const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' ? 'Enquete' : 'pollCreationMessage' : 'Mensagem'

 if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"));  

if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));

if (!isCmd && isGroup && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));

if (!isGroup && !isCmd && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))

if(isGroup && info.message?.reactionMessage?.text) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m REAÇÃO \x1b[1;37m]', color(`Emoji: " ${info.message.reactionMessage.text} "`, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))

// ========= || Jogo da Velha || ======== \\
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./arquivos/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo da velha termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

O jogo da velha foi vencido pelo usuário: @${winnerJID}..`;

sabrina.sendMessage(from, {text: chatWon}, {quoted: sasah,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")) {
DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`Parabéns @${winnerJID} você ganhou o jogo da velha... 🥳\nParabéns aos ambos jogadores, vocês foram bem, perder não é o fim, perder faz parte da vida.. Não desista!`)   
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*『 🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️ 』*\n-\n❌ : @${moving.X}\n⭕ : @${moving.O}\n-\nAgora é a vez do jogador: @${moving.turn == "X" ? moving.X : moving.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
mention(chatMove);
}
} 
} 
}

// ==========[ NAMORO ]==========\\
const namoro1 = JSON.parse(fs.readFileSync("./database/func/namoro1.json"))

const namoro2 = JSON.parse(fs.readFileSync("./database/func/namoro2.json"))

//aceitar namoro
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net")
namoro1[C12].namorados = true
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hora, data: date})
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🥳 Felicitações @${namoro1[C12].usu1.split('@')[0]}! O (a) seu grande amor, @${sender.split('@')[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`)
}
}

//recusar namoro
if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`)
namoro1.splice(C12, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
}
}

//início do akinator

const akinator = JSON.parse(fs.readFileSync("./database/grupos/games/akinator.json"))

if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish > 0) {
  if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    reply(`Eu sabia cara, eu sou demais!`)
  } else if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    reply(`Poxa não foi dessa vez... Quem sabe na próxima!️`)
  }
}

if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish <= 0 && Number(akinator[akinator.map(i => i.id).indexOf(from)].dia) === Number(moment.tz('America/Sao_Paulo').format('DD')) && isGroup) {
  AB = akinator.map(i => i.id).indexOf(from)
  if(aki.progress <= 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[▒▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 20) per = `〔 *${aki.progress.toFixed(1)}%* 〕[██▒▒▒▒▒▒▒▒]`
  if(aki.progress > 30) per = `〔 *${aki.progress.toFixed(1)}%* 〕[███▒▒▒▒▒▒▒]`
  if(aki.progress > 40) per = `〔 *${aki.progress.toFixed(1)}%* 〕[████▒▒▒▒▒▒]`
  if(aki.progress > 50) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█████▒▒▒▒▒]`
  if(aki.progress > 60) per = `[██████▒▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 70) per = `[███████▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 80) per = `[████████▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 90) per = `[█████████▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress >= 90 || aki.currentStep >= 90) {
      await aki.win()
      jogo.now = true
      akinator[AB].finish += 1
      fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
      sabrina.sendMessage(from, {image: {url: aki.answers[0].absolute_picture_path }, caption: `〔 ${aki.answers[0].name}: ${aki.answers[0].description} 〕\n–\n🧙🏻‍♂️ Hmm, acho que o seu personagem é esse aqui... Acertei?\n• ${II}Observação:{II} _Responda com "sim" ou "não", sem as aspas._`}, {quoted: info})
    } else {
      if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
        await aki.step("0")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
        await aki.step("1")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao sei" || budy2.toLowerCase() === "nsei" || budy2.toLowerCase() === "n sei") {
        await aki.step("2")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente sim" || budy2.toLowerCase() === "provavelmente s") {
        await aki.step("3")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente nao" || budy2.toLowerCase() === "provavelmente n") {
        await aki.step("4")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
    }
}
// ==========[ ANAGRAMA ]==========\\

if(isGroup && fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagrama.original) { sabrina.sendMessage(from, {text: `🎉 Parabéns *${pushname}*, você acertou o anagrama apresentado.\nA palavra original era: *${dataAnagrama.original}*. Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/anagrama/${from}.json`)		
		setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
sabrina.sendMessage(from, {text:`Decifre a palavra embaralhada abaixo:\n• ${II}Anagrama:${II} ${dataAnagrama2.embaralhada}\n• ${II}Dica:${II} ${dataAnagrama2.dica}`}) 
}, 5000)
}}

if(isGroup && fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
sabrina.sendMessage(from,{text: `🎉 Parabéns *${pushname}*, você acertou! O animal era: *${dataAnagrama.original}*.\n• Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/quiz-animais/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
imagemtexto = `🤔 Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando esta mensagem.`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await sabrina.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: info})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/gartic/${from}.json`)){
let perg_gartic = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply('Está perto!')
if(budy.toUpperCase() == perg_gartic.resposta) { 
sabrina.sendMessage(from,{text: `*DESCOBERTO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
let dataGartic2 = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)
await sabrina.sendMessage(from, {image: wew, caption: garticText, thumbnail: wew}, {quoted: sasah})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/enigma/${from}.json`)){
let enigmaData = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply('Está perto!')
if(budy.toUpperCase() == enigmaData.respostaEne) { 
sabrina.sendMessage(from,{text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
let dataEnigmadataEnigma333 = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
enigmaTezt = `📜 - Resolva o seguinte enigma abaixo:
–
${dataEnigmadataEnigma333.charada}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)
await sabrina.sendMessage(from, {image: wew, caption: enigmaTezt, thumbnail: wew}, {quoted: sasah})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)){
whatMusic = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == whatMusic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != whatMusic.resposta) return reply('Tá perto hein! Tente novamente...')
if(budy.toUpperCase() == whatMusic.resposta) { 
sabrina.sendMessage(from,{text: `• Resposta Correta: *${whatMusic.resposta}*\nParabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/wmusic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`)
wmusic = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
textM = `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡
–
${wmusic.trechoMusic}
–
🤔😱 Qual música pertence o trecho apresentado acima?
• ${II}Dica:${II} ${wmusic.dica}`
await sabrina.sendMessage(from, {text: textM}, {quoted: sasah})
}, 5000)
}
}

//=================================\\

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()

var minesId = []
for(let obj of mines) minesId.push(obj.id)
const isPlayMines = (await mines.find(obj => obj.id == from)) ? true : false
var minecor = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await sabrina.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
setTimeout(async () => {
    //sabrina.groupParticipantsUpdate(from, [sender], 'remove')
    sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
return
}

/*if (isCmd && isFiltered(sender)) {return reply(mess.floodCommands())} else {addFilter(sender)}*/

//====(CONTADOR-DE-MENSAGENS)=======\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//=========(EVAL-EXECUÇÕES)=========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return sabrina.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return sabrina.sendMessage(from, {text: bang}, {quoted: sasah})
}

sabrina.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return sabrina.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_imagem != "0") {
sabrina.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return sabrina.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
sabrina.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return sabrina.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_documento != "0") {
sabrina.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: info}) 
}
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await sabrina.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
sabrina.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
sabrina.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}

// ANTI NOTAS FAKES ==================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}

//FINALZIN ===========================>


//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return sabrina.sendMessage(from,{text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_video == "0") {
sabrina.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
} else {
sabrina.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return sabrina.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
sabrina.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}

//========(ANTI_LIGAR)========\\

if(!isGroup && isAnticall) {
sabrina.ws.on('CB:call', async (B) => {
var msgcallblock = `./database/func/call-msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify(mess.antiCalls(), null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if(B.content[0].tag == 'offer') {
sabrina.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
sabrina.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblock)
})
}
}
})
}

//====================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
sabrina.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))}}}}

/* ANTIPV1 - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
var USUARIOS_BLOQ = []
if(isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if(!isGroup && !SoDono && !isnit && !isPremium){ 
await sleep(2500)
reply(msgantipv1.replace('#nome#', pushname))
setTimeout(async () => {
sabrina.updateBlockStatus(sender, 'block')
}, 2000)
}
USUARIOS_BLOQ.push(sender);
} 

/* ANTIPV2 - Vai floodar o privado do usuário que encaminhar a mensagem no privado.. */
var MSG_ANTPV2_ENC = []
if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2_ENC.includes(sender)) {
MSG_ANTPV2_ENC.push(sender);
return reply(msgantipv2)
}

/* ANTIPV3 - Ignora todos os que falam ou usam os comandos no privado, exceto user premium e o proprietário atual do bot. */
if(!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) {return}

//====================================\\
var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(body != undefined && !info.message?.reactionMessage?.text && !JSON.stringify(level2).includes(sender) && isGroup) {
level2.push({id: sender, nick: pushname, level: 1, contador: 0, block: false})
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
}

if(body != undefined && !info.message?.reactionMessage?.text && JSON.stringify(level2).includes(sender) && level2[level2.map(i => i.id).indexOf(sender)].block == false && isGroup && isLevelingOn) {
AB = level2.map(i => i.id).indexOf(sender)
level2[AB].contador += 1
level2[AB].nick = pushname
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
switch(level2[AB].contador) {
case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
var newlevel = level2[AB].contador + 1
if(newlevel < 100) newpatente = "Bronze I 🥉"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II 🥉"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III 🥉"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I 🥈"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II 🥈"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III 🥈"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I 🥇"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II 🥇"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III 🥇"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV 🥇"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I 🌀"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II 🌀"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III 🌀"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV 🌀"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I 💎"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II 💎"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III 💎"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV 💎"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I 🔮"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II 🔮"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III 🔮"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV 🔮"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I ❤️‍🔥"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II ❤️‍🔥"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III ❤️‍🔥"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV ❤️‍🔥"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V ❤️‍🔥"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I 👑"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II 👑"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III 👑"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV 👑"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V 👑"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I 🎓"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II 🎓"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I 🪄"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II 🪄"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III 🪄"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I ⚒️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II ⚒️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III ⚒️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I 🛰️"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II 🛰️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III 🛰️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I 🪩"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II 🪩"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III 🪩"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremacy X ⚜️"
if(newlevel >= 10000000) newpatente = "Veterano 🎩"
level2[AB].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
sabrina.sendMessage(from, {text: `*🎉 LEVEL UP! 🎖️*\nParabéns *@${sender.split("@")[0]}*, você acaba de subir de level.\n• O novo level foi alcançado por completar *${level2[AB].contador} XP.*\n• Sua nova patente foi desbloqueada, você agora é *${newpatente}*`, mentions: [sender]}, {quoted: sasah})
break
case 10000000:
BC = level2.map(i => i.id).indexOf(sender)
level2[BC].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`🎉 Parabéns ${pushname}, você completou com sucesso 10M de XP, possuindo assim o título de *Veterano 🎩*\n–\n• Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo}!`)
break
case 10000000: case 11000000: case 12000000: case 13000000: case 14000000: case 15000000: case 16000000: case 17000000: case 18000000: case 19000000: case 20000000: case 21000000: case 22000000: case 23000000: case 24000000: case 25000000: case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
CD = level2.map(i => i.id).indexOf(sender)
level2[CD].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
sabrina.sendMessage(from, {text: `*🎉 SUPREME LEVEL UP! 🎖️*\nMeus parabéns querido usuário veterano *@${sender.split("@")[0]}*.\n• Sua experiência acaba de levar a quantidade total de XP à triplicar. Agora você tem *${level2[CD].contador} XP*\n–\n*Obs:* Sua patente atual continua sendo a mesma, pois você chegou à maior.`, mentions: [sender]}, {quoted: sasah})
break
}
}

const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

const toUpdateDay = JSON.parse(fs.readFileSync("./database/usuarios/SystemRPG/attday.json"));
const datinhadodia = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')

if(body != undefined && isGroup && isSabCityOFF && VerificarJSON(sabrpg, sender)) {
var i8 = sabrpg.map(i => i.id).indexOf(sender)
if(!VerificarJSON(toUpdateDay, sender)) {
toUpdateDay.push({id: sender, data: datinhadodia})
fs.writeFileSync(`./database/usuarios/SystemRPG/attday.json`, JSON.stringify(toUpdateDay))
sabrpg[i8].money += 25
fs.writeFileSync(`./database/usuarios/SystemRPG/sabrpg.json`, JSON.stringify(sabrpg))
mention(`Olá *@${sender.split("@")[0]}*, você recebeu *R$ 25.00* pela sua primeira mensagem do dia. Além disso, diversos jogos para se entreter no grupo! 🌟🪙\n——\n• Use o comando *${prefix}menusabcity*, lhe desejo boa sorte e divirta-se!`)
} else {
var AB = toUpdateDay.map(i => i.id).indexOf(sender)
if(toUpdateDay[AB].data != datinhadodia) {
toUpdateDay[AB].data = datinhadodia
fs.writeFileSync(`./database/usuarios/SystemRPG/attday.json`, JSON.stringify(toUpdateDay))
sabrpg[i8].money += 25
fs.writeFileSync(`./database/usuarios/SystemRPG/sabrpg.json`, JSON.stringify(sabrpg))
mention(`Olá *@${sender.split("@")[0]}*, você recebeu *R$ 25.00* pela sua primeira mensagem do dia. Além disso, diversos jogos para se entreter no grupo! 🌟🪙\n——\n• Use o comando *${prefix}menusabcity*, lhe desejo boa sorte e divirta-se!`)
} 
}
}

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando o vídeo na visualização única enviada.."
sabrina.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando a imagem na visualização única enviada..."
sabrina.sendMessage(from,px)
}}}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

const isVotoDuelo = isGroup ? votacao.includes(from) : false

const AdicionarVoto = async(IDGRUPO, R1, R2, R3, R4, mention) => {
votacao.push(IDGRUPO)
fs.writeFileSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`, `[]`)
fs.writeFileSync(`./database/func/votacao/votos/${IDGRUPO}.json`, `[]`)
fs.writeFileSync('./database/func/votacao/voting.json', JSON.stringify(votacao))
await sleep(2000)
const otos = JSON.parse(fs.readFileSync(`./database/func/votacao/votos/${IDGRUPO}.json`))
otos.push({razao: R1 ? R1 : '-', votos: R2.trim() + '@s.whatsapp.net', votos2: R3.trim() + '@s.whatsapp.net', duracao: R4})
fs.writeFileSync(`./database/func/votacao/votos/${IDGRUPO}.json`, JSON.stringify(otos))
setTimeout(async function() {
let voto = JSON.parse(fs.readFileSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`))
let verdade = voto.filter(V1 => V1.votacao == '01')
let falso = voto.filter(V2 => V2.votacao == '02')
if(verdade.length == falso.length) return mention(`*😱🗳️ VOTAÇÃO EMPATADA! 🗳️😱*\n• Os 2 usuários terminaram em empate, com a mesma pontuação de votos.\nEntão a decisão está na mão dos adms, se vai refazer a votação, ou decidir o ganhador de alguma forma.\n—\n• [1] Total de Votos do Usuário da Cor Vermelha ( @${otos[0].votos.split('@')[0]} ): *${verdade.length}*\n• [2] Total de Votos do Usuário da Cor Azul ( @${otos[0].votos2.split('@')[0]} ): *${falso.length}*`)
mention(`*❌ VOTAÇÃO ENCERRADA! 🗳️*\n• Soma total de todos os membros que realizaram seus votos: *${verdade.length + falso.length}*\n—\n• Quantidade de Votos que Usuário Vermelho recebeu ( @${otos[0].votos.split('@')[0]} ): *${verdade.length}*\n• Quantidade de Votos que o Usuário Azul recebeu ( @${otos[0].votos2.split('@')[0]} ): *${falso.length}*\n—\n🎉🌟 *@${verdade.length > falso.length ? otos[0].votos.split('@')[0] : otos[0].votos2.split('@')[0]}* acaba de ganhar a votação! Parabéns ao ganhador e aos ambos participantes... Se você não ganhou, não fique com raiva um dia você ganha! Confie em si próprio!`)
fs.unlinkSync(`./database/func/votacao/votos/${IDGRUPO}.json`) /* Remover.. */
fs.unlinkSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`) /* Remover.. */
fs.writeFileSync("./database/func/votacao/voting.json", JSON.stringify(votacao)) /* Modificar.. */
}, R4*60*1000)
}

const DeletarVotos = (IDGRUPO) => {
processo = votacao.indexOf(IDGRUPO)
while(processo >= 0) {
votacao.splice(processo, 1)
processo = votacao.indexOf(IDGRUPO)
}
fs.writeFileSync(`./database/func/votacao/voting.json`, JSON.stringify(votacao)) /* Adicionar.. */
fs.unlinkSync(`./database/func/votacao/votos/${IDGRUPO}.json`) /* Remover.. */
fs.unlinkSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`) /* Remover.. */
}

if(fs.existsSync(`./database/func/votacao/p_votos/${from}.json`)) {
if (budy2 === '1'){
let voto = JSON.parse(fs.readFileSync(`./database/func/votacao/p_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./database/func/votacao/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions(`Olá @${sender.split('@')[0]}, não é possível votar duas vezes.`, filtro, true)
} else {
voto.push({participante: id_voto, votacao: '01'})
fs.writeFileSync(`./database/func/votacao/p_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `*🗳️ VOTAÇÃO 🌟* - Informações de usuário(s) que participaram:\n—\n*@${_votos[0].votos.split('@')[0]} VS @${_votos[0].votos2.split('@')[0]}*\n• Participante [1] : @${_votos[0].votos.split('@')[0]}\n• Participante [2] : @${_votos[0].votos2.split('@')[0]}\n—\n• Quant. de votos contabilizados: *${voto.length}*\n• Tempo definido pelo admin para o encerramento: *${_votos[0].duracao} min(s).*\n—\n• Voto(s) Contabilizado(s) do(s) Usuário(s):\n——\n`
for(let i = 0; i < voto.length; i++) {
_voto +=  `• O(a) participante *@${voto[i].participante.split('@')[0]}* votou no integrante *(${voto[i].votacao})*.\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
} else if (budy2 === '2'){
const voto = JSON.parse(fs.readFileSync(`./database/func/votacao/p_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./database/func/votacao/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions(`Olá @${sender.split('@')[0]}, não é possível votar duas vezes.`, filtro, true)
} else {
voto.push({participante: id_voto, votacao: '02'})
fs.writeFileSync(`./database/func/votacao/p_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `*🗳️ VOTAÇÃO 🌟* - Informações de usuário(s) que participaram:\n–\n*@${_votos[0].votos.split('@')[0]} VS @${_votos[0].votos2.split('@')[0]}*\n• Participante [1] : @${_votos[0].votos.split('@')[0]}\n• Participante [2] : @${_votos[0].votos2.split('@')[0]}\n–\n• Quant. de votos contabilizados: *${voto.length}*\n• Tempo definido pelo admin para o encerramento: *${_votos[0].duracao} min(s).*\n—\n• Voto(s) Contabilizado(s) do(s) Usuário(s):\n——\n`
for(let i = 0; i < voto.length; i++) {
_voto += `• O(a) participante *@${voto[i].participante.split('@')[0]}* votou no integrante *(${voto[i].votacao})*.\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
}
}	

let isCmdKey = Array('aluguel', 'alugueis', 'alugar', 'alugarbot', 'loja', 'dono').some(item => item === command)

if(isModoAluguel && isCmd && !SoDono && !isCmdKey) {
if(!JSON.stringify(grupos).includes("matheuzinho")) {
grupos.push({id: "matheuzinho", gps: []})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))}
if(!JSON.stringify(grupos).includes(from)) {
grupos.push({id: from, limite: 5, validado: false})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
AB = grupos.map(i => i.id).indexOf(from)
if(grupos[AB].validado == false) {
if(grupos[AB].limite <= 1) {
grupos.splice(AB, 1)
fs.writeFileSync("./database/grupos/grupos.json", JSON.stringify(grupos, null, 2))
reply(`⏰️🌟 *O tempo de espera acabou!* Visto que o(s) senhor(es) não desejam comprar uma chave, estou saindo do grupo...`)
await sleep(3000)
return sabrina.groupLeave(from)
} else {
grupos[AB].limite -= 1
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
return mention(`💫🗣️ Não encontrei o grupo em meus registros! Por favor, caso esteja alugado ou deseja adquirir uma chave de ativação, entre em contato com o meu dono: *@${nmrdn.split('@')[0]}*`)
}}}

if (isx9 && type === "pinInChatMessage") {
duration = info.message?.messageContextInfo?.messageAddOnDurationInSecs;
fixedTime = (duration) => (duration === 0) ? "0" : (duration >= 30 * 24 * 60 * 60) ? "30d" : (duration >= 7 * 24 * 60 * 60) ? "7d" : (duration >= 24 * 60 * 60) ? "24h" : duration;
action = fixedTime(duration) === "0" ? 'desfixar uma mensagem' : `fixar uma mensagem por *${fixedTime(duration)}*`;
await sabrina.sendMessage(from, {text: `O admin *@${sender.split("@")[0]}* acabou de ${action}.`, mentions: [sender]})
}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

if(isCmd && isBanned) return reply(mess.bannedUser())

const totalhit = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./database/data/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) CmdUsedBOT()

const reqcmd = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))

var palavrasfr = JSON.parse(fs.readFileSync("./database/grupos/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var ALT_FR = palavrasfrc.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

function reactMessage(emoji) {
sabrina.sendMessage(from, {react: {text: emoji, key: info.key}})
}

if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isPremium && dataGp[0]?.Limitar_CMD) {
  
var TEMPO_A = Math.floor(Date.now() / 1000) 
 
var ID_G = Limit_CMD.findIndex(i => i.idgp === from)
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender)

if(!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({idgp: from, ids: [{id: sender, tempo: TEMPO_A}]})
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
} else if(ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({id: sender, tempo: TEMPO_A})
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}

if(ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;

var TEMPO_M = TEMPO_A - TEMPO_D

var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60

if(TEMPO_M < TEMPO_D2) {
return reply(nescessario.TEMPO_DE_CMD.replaceAll("#tempocmd#", TimeCount(TEMPO_M)).replaceAll("#tempo#", TEMPO_D2))
} else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
}
}

sabrina.sendImageAsSticker = async (jid, path, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
        if (options && (options.packname || options.author)) {
         buffer = await writeExifImg(buff, options)
            } else {
         buffer = await imageToWebp(buff)
        }
    await sabrina.sendMessage(jid, { sticker: { url: buffer }, ...options})
    return buffer
}

sabrina.sendImageMentions = (photo, text, mem, ids) => {
(ids == null || ids == undefined || ids == false) ? sabrina.sendMessage(from, {image: photo, caption: text.trim(), contextInfo: { "mentionedJid": mem}}) : sabrina.sendMessage(from, {image: photo, caption: text.trim(), contextInfo: {"mentionedJid": mem}})
}

if(chaves.length > 0) {caixa = []
for(k of chaves) {
if(budy2.toUpperCase() === k.key) {
caixa.push(k.key)
}
}
if(VerificarJSON(chaves, caixa[0])) {
AD = chaves.map(i => i.key).indexOf(caixa[0])
timeday = chaves[AD].dias
pessoa = chaves[AD].cliente
infinity = chaves[AD].dias > 0 ? false : true
if(!VerificarJSON(grupos, "matheuzinho")) {
grupos.push({id: "matheuzinho", gps: []})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!VerificarJSON(grupos, from)) {
grupos.push({id: from, limite: 5, validado: true})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} else {
GP = grupos.map(i => i.id).indexOf(from)
grupos[GP].validado = true
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(infinity == false) {
if(chaves[AD].tipo == 1 && isGroup) {
if(!VerificarJSON(aluguel, from)) {
aluguel.push({id: from, nome: groupName, tempo: timeday, totalRent: timeday, cliente: pessoa, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`🌟🛒 O grupo foi registrado com sucesso ao aluguel! *Qualquer dúvida entre em contato com meu dono.*`)
await sleep(2000)
sabrina.sendMessage(nmrdn, {text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split('@')[0]}*\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else {
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + timeday
aluguel[AB].tempo += timeday
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`+${timeday} dia${Number(timeday) > 1 ? 's' : ''} adicionado${Number(timeday) > 1 ? 's' : ''} para o grupo em meu banco de dados.`)
await sleep(2000)
sabrina.sendMessage(nmrdn, {text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split('@')[0]}*\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
}
}
        
if(chaves[AD].tipo == 2 && isGroup) {
CD = grupos.map(i => i.id).indexOf("matheuzinho")
if(!VerificarJSON(grupos[CD].gps, from)) {
if(!VerificarJSON(aluguel, from)) {
grupos[CD].gps.push({id: from})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: sender, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`✅️🌟 Código Card Cortesia validado com sucesso! 24h liberadas neste grupo contando a partir de agora.`)
await sleep(2000)              
sabrina.sendMessage(nmrdn, {text: `⚠️🌟️ Código *Card Cortesia* foi validado no grupo, registrado no nome de *@${pessoa.split('@')[0]}*.\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else reply("[!] Este grupo já está registrado em meu banco de dados.")
} else reply("[!] Já foi validado neste mês uma cortesia neste grupo.")
}
} else {
if(chaves[AD].tipo == 1 && isGroup) {
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`[!] O grupo foi salvo no meu banco de dados com sucesso!`)
}}}}

// ÍNICIO: CASES / COMANDOS COM PREFIXO:
switch(command){

case 'addrent': case 'rgrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!JSON.stringify(aluguel).includes(from)) {
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, dias] = barra.split('/')
if(!Number(dias)) return reply(`Apenas números pfvr`)
matheuzinho = nmr.includes('@') ? nmr.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkwpp] = await sabrina.onWhatsApp(matheuzinho.split('@')[0])
if(checkwpp == undefined) {
return reply(`O número ${matheuzinho.split('@')[0]} não é válido no whatsapp`)
}
if(Number(dias) <= 0) return reply(`É necessário ao menos 1 dia de aluguel né.`)
if(dias.includes('.')) return reply("Não use números decimais.")
aluguel.push({id: from, nome: groupName, tempo: Number(dias) + 1, totalRent: Number(dias) + 1, cliente: matheuzinho, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Grupo adicionado ao aluguel com sucesso.`)
} else {
if(!Number(args[0])) return reply(`Coloque quantos dias mais serão adicionados ao aluguel deste grupo!`)
hehe = Number(args[0])
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + hehe
aluguel[AB].tempo += hehe
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`+${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} adicionado${Number(args[0]) > 1 ? 's' : ''} para este grupo.`)
}
break

case 'tirarrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!Number(args[0])) return reply(`Apenas números pfvr`)
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].tempo -= Number(args[0])
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} fo${Number(args[0]) > 1 ? 'ram' : 'i'} retirado${Number(args[0]) > 1 ? 's' : ''} deste grupo.`)
break

case 'delrent': case 'rmrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) {
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
GP = grupos.map(i => i.id).indexOf(from)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
AB = aluguel.map(i => i.id).indexOf(from)
aluguel.splice(AB, 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`O registro desse grupo foi deletado com sucesso do meu banco de dados.`)
} else {
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > Number(aluguel.length + 1)) return reply(`Retorne um número válido... Olhe na ${prefix}listrent e veja o número`)
BC = Number(args[0]) - 1
GP = grupos.map(i => i.id).indexOf(aluguel[BC].id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(BC, 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`O registro desse grupo foi deletado com sucesso do meu banco de dados.`)
}
break

case 'cortesia24':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(JSON.stringify(aluguel).includes(from)) return reply(`Grupo já registrado...`)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: nmrdn, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`💳 Cartão verde validado! 24h liberadas neste grupo contando a partir de agora.`)
break

case 'listrent': case 'lista-aluguel':
if(!SoDono) return reply(enviar.msg.grupo)
if(aluguel.length > 0) {
var getGroups = await sabrina.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
for (g = 0; g < ingfoo.length; g++){
if(JSON.stringify(aluguel).includes(ingfoo[g].id)) {
matheuzinho = aluguel.map(m => m.id).indexOf(ingfoo[g].id)
aluguel[matheuzinho].nome = ingfoo[g].subject
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
}
}
txt = `[Total: *${aluguel.length}*] - Lista dos grupos alugados:\n—\n`
for(i = 0; i < aluguel.length; i++) {
hmm = aluguel[i].tempo
txt += `*[${i + 1}]* Grupo: *${aluguel[i].nome}*\n`
if(aluguel[i].cortesia == false) {
txt += `• Tempo Restante: *${hmm} dia${hmm > 1 ? 's' : ''}*\n• Cliente: *wa.me/${aluguel[i].cliente.split('@')[0]}*\n—\n`
} else {
txt += `_O grupo está usando o cartão cortesia, ou seja, 24h de uso foram liberadas._\n—\n`
}
}
reply(txt)
} else {
reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`)
}
break

case 'lastrent':
if(!SoDono) return reply(Res_SoDono)
if(aluguel.length > 0) {
matheuzinho = aluguel.map(i => i)
rank = matheuzinho.sort((a, b) => (a.tempo < b.tempo) ? -1 : 0)
txt = "• Top 3 grupos com o aluguel mais próximo de acabar:\n—\n"
for(i = 0; i < 3; i++) {
if(rank[i].cortesia == false) {
hmm = rank[i].tempo
txt += `*[${i + 1}]* Grupo: *${rank[i].nome}*\n• Tempo Restante: ${hmm} dia${hmm > 1 ? 's' : ''}\n• Cliente: *wa.me/${rank[i].cliente.split('@')[0]}*\n—\n`
}
}
reply(txt)
} else {
reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`)
}
break

case 'calendario':
case 'dados':
setTimeout(() => {reagir(from, "📅")}, 300)
var getGroups = await sabrina.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:MM:SS')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
day = `${tempo}, ${pushname}!\n• Grupo: *${isGroup ? groupName : "Privado"}*\n• Data & Hora: *${date16} ${hora16}*\n• Nome do Bot: *${NomeDoBot}*\n• Proprietário: *${NickDono}*\n• Estou operando atualmente em *${ingfoo.length}* grupos.`
if(JSON.stringify(aluguel).includes(from)) {
AB = aluguel.map(i => i.id).indexOf(from)
numsei = aluguel[AB].tempo / aluguel[AB].totalRent * 100
if(numsei < 10) matheuzinho = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 10) matheuzinho = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 20) matheuzinho = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`
if(numsei >= 30) matheuzinho = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`
if(numsei >= 40) matheuzinho = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`
if(numsei >= 50) matheuzinho = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`
if(numsei >= 60) matheuzinho = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`
if(numsei >= 70) matheuzinho = `${numsei.toFixed(0)}%〘███████▒▒▒〙`
if(numsei >= 80) matheuzinho = `${numsei.toFixed(0)}%〘████████▒▒〙`
if(numsei >= 90) matheuzinho = `${numsei.toFixed(0)}%〘█████████▒〙`
if(numsei >= 95) matheuzinho = `${numsei.toFixed(0)}%〘██████████〙`
hmm = aluguel[AB].tempo
if(aluguel[AB].cliente == sender || SoDono) {
  matheusSabe = `• `
  if(aluguel[AB].cortesia == false) {
matheusSabe += `${hmm} dia${hmm > 1 ? 's' : ''} restantes`} else {matheusSabe += hmm > 1 ? `${hmm} horas` : `Alguns minutos`}
matheusSabe += ` até o fim do contrato.`
} else {matheusSabe = ``}
day += `\n——\n🔋 *Bateria restante para uso:*\n${matheuzinho} ${matheusSabe}`}
reply(`${day}`)
break

case 'aluguel': case 'alugueis': case 'alugar': case 'alugarbot': case 'loja':
reagir(from, "🛒")
reply(`Digite *${prefix}dono* para entrar em contato com meu proprietário e liberar o acesso em seu grupo.\n• Os valores são passados por ele, não tenho nenhuma informação registrada sobre isso.`)
break

case 'mycoderent': //by matheuzinho
txt = `🔑 Suas chaves de ativação:\n—\n`
nmr = 0
for(i of chaves) {if(i.cliente == sender) {txt += `\n• ${i.key}`; nmr += 1}}
if(nmr <= 0) return reply("Você não possui nenhuma chave de ativação.")
reply(isGroup ? "Por segurança lhe enviei em seu privado o que foi solicitado." : "Aguarde, estou enviando o que foi solicitado...")
sendMess(sender, txt)
break

case 'codelistrent'://by matheuzinho
if(!SoDono) return reply(enviar.msg.donosmt)
txt = `[Total: *${i.chaves}*] - Lista de Códigos registrado(s) para aluguel:`
caixa = []
for(i of chaves) {
txt += `\n—\n• Chave: *${i.key}*\n• Cliente que realizou a solicitação: *@${i.cliente.split('@')[0]}*\n• Expiração: ${nmr > 0 ? `${i.dias} dia${i.dias > 1 ? 's' : ''}` : `Não contém dias para a expiração, é infinito.`}`
caixa.push(i.cliente)
}
if(caixa <= 0) return reply("Não existe nenhuma chave registrada em meu banco de dados.")
reply(isGroup ? "Por motivos de segurança, enviei em seu privado..." : "Aguarde, estou enviando o que foi solicitado!")
sabrina.sendMessage(sender, {text: txt, mentions: caixa})
break

case 'gerarcoderent':
if(!SoDono) return reply(enviar.msg.donosmt)
barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/')
var [v1, v2] = barra.split('/')
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo.\n• Exemplo: *${prefix+command} ${nmrdn.split('@')[0]}/30*`)
matheuzinho = v1.toLowerCase() == "me" ? sender : v1.includes('@') ? v1.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : v1.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkkeygp] = await sabrina.onWhatsApp(matheuzinho.split('@')[0])
if(checkkeygp == undefined) {
return reply(`O número *${matheuzinho.split('@')[0]}* não é válido no whatsapp.`)
}
nmr = Number(v2) > 0 ? Number(v2) : 0
idks = `G${v2}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(matheuzinho.slice(2, 8))}`
idks += `M${nmr}H-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}B`
chaves.push({key: idks, tipo: 1, dias: nmr, cliente: matheuzinho, valor: 0})//tipo 1 = aluguel de grupo
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
mention(`🔑🌟 Código de ativação do serviço gerado com sucesso! Segue abaixo a chave:\n-> *${idks}*\n——\n• Quantidade de dias: *${nmr > 0 ? `${nmr} dia${nmr > 1 ? 's' : ''}` : `∞ INFINITO`}*\n• Usuário(a) que alugou: *@${matheuzinho.split('@')[0]}*`)
break

case 'gerarcodecort'://by matheuzinho
if(!SoDono) return reply(enviar.msg.donosmt)
reagir(from, "😀")
cort = 24 
idks = `G${cort}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`
idks += `E${Number(cort/2).toFixed(0)}R-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}A`
chaves.push({key: idks, tipo: 2, dias: 24, cliente: sender, valor: 0})//tipo 3 = cortesia
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`🛒🌟 O código cortesia foi gerado com sucesso! Segue abaixo a chave de ativação do mesmo:\n-> *${idks}*`)
break

case 'delcoderent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(chaves).includes("matheuzinho")) return reply(`Não há keys registradas`)
if(!q) return reply(`Cadê o código de aluguel que você deseja apagar?`)
if(!JSON.stringify(chaves).includes(q)) return reply("O código não foi encontrado em nosso banco de dados, é inexistente!")
AD = chaves.map(i => i.key).indexOf(q)
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`[!] O código *${q}* foi deletado do sistema com sucesso.`)
break
 
case 'duelo': case 'votacao': case 'voting':
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isGroup) return reply('O comando só pode ser utilizado em grupo(s).')
if (args.length === 0) return reply(`Siga a exemplificação abaixo do comando para obter uma execução positiva!\n• ${prefix+command} @tag1/@tag2/1\n\t- *Lembre-se* que o 1 apresentado no exemplo é o tempo de ocorrência da votação, ou seja, após 1 minuto passado os votos não seram mais aceitos.`)
txt = args.join(' ')
nmr = txt.split('/')[0].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
nmr2 = txt.split('/')[1].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
tempo = txt.split('/')[2]
if(!Number(tempo)) return reply('Ops, insira o tempo o qual você deseja encerrar a votação.')
try {ppimg = await sabrina.profilePictureUrl(`${nmr}@s.whatsapp.net`)} catch(erro) {ppimg = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'}
try {ppimg2 = await sabrina.profilePictureUrl(`${nmr2}@s.whatsapp.net`)} catch(erro) {ppimg2 = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'}
bl = await getBuffer(ppimg); bl_up = await upload(bl)
bl2 = await getBuffer(ppimg2); bl_up2 = await upload(bl2)
BLAP = await getBuffer(`https://eruakorl.sirv.com/josival-aleatory/vs.jpg?text.0.text=1- ${nmr}&text.0.position.gravity=southwest&text.0.position.x=6%25&text.0.position.y=-2%25&text.0.size=32&text.0.color=ff0000&text.0.font.family=Source%20Serif%20Pro&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=100&text.1.text=2- ${nmr2}&text.1.position.x=-7%25&text.1.position.y=-2%25&text.1.size=32&text.1.color=0022ff&text.1.font.family=Source%20Serif%20Pro&text.1.font.weight=700&text.1.font.style=italic`); bl_upd = await upload(BLAP)
blup = await getBuffer(`http://api-expr.sabapi.tech:6060/api/canvas/duelo?foto1=${bl_up}&foto2=${bl_up2}&fundo=${bl_upd}`)
sabrina.sendMessage(from, {image: blup, caption: `*🗳️ VOTAÇÃO INICIADA! 🌟*\n—\n*@${nmr}* VS *@${nmr2}*\n—\n• Para realizar seu voto use os seguintes números *1 ou 2*, _exemplo abaixo:_\n• Caso você deseja votar na opção *1*, _você envia 1 no grupo_, caso seja o *2*, é só você mudar os algarismos!\n*É fácil né?* Agora é só seguir o exemplo acima! Vote com consciência.\n–\n⚠️ Só é permitido votar uma única vez, portanto preste atenção em quem vai votar, pois não é possível alterar o voto.\n- Nenhum usuário deve atrapalhar a votação, quem enviar mensagem sem esta participando do mesmo, estará descumprindo as regras e poderá ser banido do grupo.\n—\n• Não vote por afinidade ao integrante, vote pela qualidade das respostas.`, mentions: [nmr+'@s.whatsapp.net', nmr2+'@s.whatsapp.net']}, {quoted: sasah})
AdicionarVoto(from, "-", nmr, nmr2, tempo, mention)
break

case 'zerar_votacao': case 'cancel_voting':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply("Apenas o administrador do grupo pode realizar a ação..")
if(!fs.existsSync(`./database/func/votacao/p_votos/${from}.json`)) return reply(`Não existe nenhuma arquivo de votação com id do grupo.`)
DeletarVotos(from) /* Deletar os arquivos */
reply("• Votação resetada / cancelada com sucesso, como foi solicitado!")
break

case 'rm_aviso':
case 'rm_avisos':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isGroupAdmins) return reply(enviar.msg.adm)
for ( i of black_) {var RDFA = i}
if(!JSON.stringify(RDFA.PUXAR).includes(from)) return reply(mess.noWarning(prefix))
RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.warningRemoved())
break

case 'rg_aviso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return reply(mess.warningSyntax(prefix))
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
reply(mess.sucessDeleteWarning(prefix))
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
}
break

case 'iddogrupo':
if(!SoDono) return reply(enviar.msg.donosmt)
reply(from)
break

//=========== [ ÍNICIO JOGOS ] ========= //

case 'addpalavras_forca':
case 'addpalavras_f':  
if(!SoDono) return reply(enviar.msg.donosmt)
var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
if(!q.includes("|")) return reply(mess.FormWrong_AddWordsForca1(prefix))
if(q.lastIndexOf("|") < 0) return reply(mess.FormWrong_AddWordsForca2(prefix))
kir = []
for (i of palavrasfr) {kir.push(i.plvr)}
if(kir.indexOf(ttl.toLowerCase().trim()) >= 0) return reply(mess.inUseWords_Forca())
palavrasfr.push({plvr: ttl, tema: tema, dica: dc})
fs.writeFileSync("./database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply(mess.sucessAddWord_Forca())
break 

case 'rmpalavra_f':
case 'rmpalavra_forca':  
if(!SoDono) return reply(enviar.msg.donosmt) 
var i5 = palavrasfr.map( i => i.plvr).indexOf(q.trim().toLowerCase())
palavrasfr.splice(i5, 1)
fs.writeFileSync("./database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply(mess.sucessRemWord_Forca())
break

case 'rv-forca': case 'resetforca': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(dataGp[0].forca_inc == false) return reply(mess.gameForcaNotStarted(prefix))
rv_forca()
reply(mess.sucessResetForca(prefix))
break
  
case 'mostrar_forca':
case 'ver_forca':  
case 'iniciar_forca':  
case 'jogodaforca':  
if(!isGroup) return reply(enviar.msg.grupo)
try {
if(dataGp[0].forca_inc) return reply(mess.forcaInProgress(prefix))
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for (i of DM_FR.palavra){linha_fr += ` ${i}`}
reply(mess.forcaStarted(DM_FR, linha_fr, prefix)) 
}
} catch (e) {
console.log(e)
}
break

case 'r-forca':
case 'r-f':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!dataGp[0].forca_inc) return reply(mess.gameForcaNotStarted(prefix))
if(!q.toLowerCase().trim()) return reply("Digite a letra que deseja responder..")
var q2 = q_2.trim().toLowerCase()
if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("Não pode letras modificadas, nem emoji, nem números..")
if(q.trim().length == 2) return reply("Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte...")
DM_FR = dataGp[0].forca_ofc[0]
if(DM_FR.escreveu.indexOf(q2) >= 0) return reply("Esta letra já foi utilizada..")
var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
var ERROS = dataGp[0].forca_ofc[0].erros
DM_FR.escreveu.push(q2); setGp(dataGp)
PSC = [] 
if(DM_FR.palavra_ofc.indexOf(q2) >= 0) {
for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
if(DM_FR.palavra_ofc[i] == q2) {
PSC.push(i)
DM_FR.acertos += 1
}}
setGp(dataGp)
for ( i of PSC){
DM_FR.palavra[i] = q2; setGp(dataGp)}
}
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
letra_ut = " "
for ( i of DM_FR.escreveu){letra_ut += `${i}, `}
if(q.length > 2) {reply("Humm, espertinho quer acertar a palavra toda")}
await sleep(500)
if(DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
reply(`${q2.length > 2 ? `Você acertou a palavra toda e ganhou bom menino(a), irei resetar o jogo...` : DM_FR.acertos == DM_FR.palavra_ofc.length ? `Parabéns, toda palavra foi concluída : < ${DM_FR.palavra_ofc} > irei resetar o jogo..`:`Você acertou uma letra e ganhou continue assim..`}`)
if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){return rv_forca()}
await sleep(200)
reply(mess.forcaStartedRespond(DM_FR, ERROS, ERRQ, linha_fr, letra_ut))
} else {
reply(`${q2.length > 2 ? `Infelizmente você perdeu, errou a palavra toda, deveria ter tentado letra por letra né, irei resetar o jogo..` :ERROS+ERRQ == 6 ? `Aa, você completou 6 Erros, e perdeu irei resetar o jogo..` : `Você Errou, e perdeu 😥..`}`)
dataGp[0].forca_ofc[0].erros += 1
setGp(dataGp)
if(q2.length > 2 || ERROS+ERRQ == 6){return rv_forca()}
await sleep(200)
reply(RST_T)
}
break

case 'rgtinder':
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/s/tinder/login?usu=${sender}&${q && !isQuotedImage ? `rg=${q}&` : ``}apikey=`+API_KEY_BRONXYS)
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/s/tinder/perfil?usu=${sender}&apikey=`+API_KEY_BRONXYS)
} catch { return reply("Erro ao tentar acessar o seu registro em meu banco!") }
fini = data.nome != 0 && data.idade != 0 && data.gene != 0 && data.sexualidade != 0 && data.filtro != 0 && data.bio != 0 && data.foto == 0
if(fini && isQuotedImage) {try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
img = await upload(owgi)
BCD = await fetchJson(`http://api-expr.sabapi.tech:6060/s/tinder/login?usu=${sender}&rg=${img}&apikey=`+API_KEY_BRONXYS)
return reply(detectTinder(BCD.message))
} catch {return reply("Não foi possível salvar a imagem. Tente novamente!")}
} reply(detectTinder(ABC.message)) } catch(e) { console.log(e); reply("Erro.")}
break

case 'tinder': case 'rolar':
reagir(from, "🔥")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/s/tinder/find?usu=${sender}&apikey=`+API_KEY_BRONXYS)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/s/tinder/perfil?usu=${sender}&apikey=`+API_KEY_BRONXYS)
txt = `*Sab's Tinder 👫🌟* - Seu bot e também seu cupido agora hahaha!\n—\n• [👤] Nome do Usuário: ${ABC.dados[0].nome}\n• WhatsApp: wa.me/${ABC.dados[0].nmr}\n• [⏳] Idade: ${ABC.dados[0].idade} anos.\n• [🏳‍🌈] Sexualidade: ${ABC.dados[0].sexualidade}\n• [🚻] Gênero: ${ABC.dados[0].gene}\n• [📍] Filtro: ${ABC.dados[0].filtro == 3 ? `O usuário não contém nenhum tipo de preferência, será que ele é bissexual?` : `O usuário busca por ${ABC.dados[0].filtro == 1 ? `homens` : `mulheres`}`}\n—\n• [💌] *Biografia:* ${ABC.dados[0].bio}\n—\nExibindo perfil Nº${ABC.dados[0].id} de ${ABC.dados[0].total} usuário${ABC.dados[0].total > 1 ? 's' : ''} registrado${ABC.dados[0].total > 1 ? 's' : ''}.`
sabrina.sendMessage(from, {image: {url: `http://api-expr.sabapi.tech:6060/api/canvas/ship?foto1=${data.dados[0].foto}&foto2=${ABC.dados[0].foto}&mat=${Math.floor(Math.random() * 100)}&fundo=https://telegra.ph/file/b41f8e7f2ca966c8a6667.jpg`}, caption: txt}, {quoted: sasah})
} catch(e) { console.log(e)
reply(detectTinder(ABC.message || "Erro."))
}
break

case 'tindernome': case 'tinderidade': case 'tinderbio': case 'setgene': case 'setsex': case 'setfiltro': case 'tinderfoto':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/s/tinder/config?usu=${sender}&mod=${command}&${q && !isQuotedImage ? `q=${q}&` : ``}apikey=`+API_KEY_BRONXYS)
if(command == "tinderfoto" && isQuotedImage) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
img = await upload(owgi)
BCD = await fetchJson(`http://api-expr.sabapi.tech:6060/s/tinder/config?usu=${sender}&mod=${command}&q=${img}&apikey=`+API_KEY_BRONXYS)
return reply(detectTinder(BCD.message))
} catch { return reply("Não foi possível salvar a imagem. Tente novamente!") }
}
reply(detectTinder(ABC.message))
} catch { reply("Erro.") }
break

case 'meutinder':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/s/tinder/perfil?usu=${sender}&apikey=`+API_KEY_BRONXYS)
envMyTinder = `• ${ABC.dados[0].gene.replace("ã", "a") == "nao declarar" ? `• [👤] Nome` : `• [👤] Usuári${ABC.dados[0].gene == "masculino" ? "o" : "a"}`}: ${ABC.dados[0].nome}\n• [⏳] Idade: ${ABC.dados[0].idade} anos.\n• [📞] WhatsApp: wa.me/${ABC.dados[0].nmr}\n• [🏳️‍🌈] Sexualidade: ${ABC.dados[0].sexualidade}\n• [🚻] Gênero: ${ABC.dados[0].gene}\n• [📍] Filtro: ${ABC.dados[0].filtro == 3 ? `O usuário não contém nenhum tipo de preferência.` : `O usuário busca por ${ABC.dados[0].filtro == 1 ? `homens` : `mulheres`}`}\n—\n• [😺] Biografia: ${ABC.dados[0].bio}\n—\n${ABC.dados[0].gene.replace("ã", "a") == "nao declarar" ? `Deu entrada no tinder` : `Registrad${ABC.dados[0].gene == "masculino" ? "o" : "a"}`} em ${ABC.dados[0].registro[0]}, às ${ABC.dados[0].registro[1]}.`
sabrina.sendMessage(from, {text: envMyTinder, contextInfo: {externalAdReply: {title: `Página de Registro | Sab's Tinder! 💘👫`, body: `😌🌟 Não sou o Tinder verdadeiro, mas já arrumei tanto(a) namorado(a) para vocês que hoje eu tô encalhada!`, thumbnail: await getBuffer(`${ABC.dados[0].foto}`), mediaType: 1, showAdAttribution: true, sourceUrl: `http://api-expr.sabapi.tech:6060/`}}}, {quoted: sasah})
} catch { reply(detectTinder(ABC.message || "Erro.")) }
break

case 'sairtinder':
case 'rmtinder':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(command == 'rmtinder') {
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q && !menc_os2) return reply("Retorne após o comando o número ou @ do usuário que você quer deletar do tinder.")
deletar = identifyAtSign(q)} else {deletar = sender}
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/s/tinder/delete?usu=${deletar}&apikey=`+API_KEY_BRONXYS)
reply(detectTinder(ABC.message))
} catch {reply("Erro.")}
break

case 'quando':  
if (args.length < 1) return reply('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:  1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(texto)
break

//=========== [ FINAL JOGOS ] ========= //

case 'listaddi': case 'ddilist':
if(!isGroup) return reply(enviar.msg.grupo);
if(!isGroupAdmins) return reply(enviar.msg.adm);
if(q.length < 1) return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
if(isNaN(q))return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
teks = `• Número com código de país +${args[0]} registrados no grupo:\n–\n`
men = []
for(let mem of groupMembers) {
if(mem.id.startsWith(q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
}
}
if(teks.indexOf('⇒') < 0) return reply(`Nenhum número com o ddi *+${args[0]}* foi encontrado.`)
sabrina.sendMessage(from, {text: teks, mentions: men}, {quoted: sasah}).catch((error) => {
   reply(mess.error())
})
break

case 'listabr': case 'brlist':
if(!isGroup) return reply(enviar.msg.grupo);
if(!isGroupAdmins) return reply(enviar.msg.adm);
teks = `[Total: *${groupMembers.length}*] Lista de números brasileiros presentes neste grupo:\n–\n`
men = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id);
}
}
if(teks.indexOf('⇒') < 0) return reply('Nenhum número brasileiro foi encontrado no grupo.')
sabrina.sendMessage(from, {text: teks, mentions: men}, {quoted: sasah}).catch((error) => {
   reply(mess.error())
})
break

case 'listaddd': case 'dddlist':
if(!isGroup) return reply(enviar.msg.grupo);
if(!isGroupAdmins) return reply(enviar.msg.adm);
if(q.length < 1) return reply(`Fale o código do estado, por exemplo: *${prefix}listaddd 82*`)
if(isNaN(q))return reply(`Fale o código de um estado(ddd), por exemplo: *${prefix}listaddd 82*`)
teks = `• Lista de números brasileiros com o DDD *${q}* presentes neste grupo:\n–\n`
men = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55+q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id);
}
}
if(teks.indexOf('⇒') < 0) return reply('Nenhum *número brasileiro* com ddd fornecido foi encontrado no grupo.')
sabrina.sendMessage(from, {text: teks, mentions: men}, {quoted: sasah}).catch((error) => {
   reply(mess.error())
})
break

case 'limpar_mortos-cnt':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.donosmt)
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
break

case 'tirar_docnt':
if(!SoDono) return
if(!isGroup) return reply(enviar.msg.donosmt)
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuário tirado do contador de mensagens com sucesso...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
sabrina.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: sasah}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
sabrina.sendMessage(from, {image: {url: q}}, {quoted: sasah}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} Virgem`);
signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes", "aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"]
if(!signos.includes(q_2)) return reply("Este signo não existe...")
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/horoscopo/v2?signo=${q}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: {url: ABC.resultado.imagem}, caption: mess.horoscopo(q, ABC)}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break

case 'menudownload':
case 'menuDownload':
case 'Download':
case 'download':
sabrina.sendMessage(from,{video: fs.readFileSync('./video/video.mp4'), mimetype: 'video/mp4', gifPlayback: true, caption:

    `
        _*Prontinho ✓*_
┃│> 𓊈🏷️𓊉⥲ 𝙉𝙞𝙘𝙠: ${pushname} 
┃│> 𓊈📶𓊉⥲𝐍ú𝐦𝐞𝐫𝐨: ${sender.split('@')[0]}
┃│> 𓊈📲𓊉⥲𝐂𝐞𝐥𝐮𝐥𝐚𝐫: ${info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IOS' : 'WhatsApp web'}
┃│> 𓊈⏱️𓊉⥲hora: ${time2}
┃│> 𓊈📅𓊉⥲Data: ${date}
┃│
┃│     _*Prontinho ✓*_
┃│> 𓊈🏷️𓊉⥲ 𝙉𝙞𝙘𝙠: ${pushname} 
┃│> 𓊈📶𓊉⥲𝐍ú𝐦𝐞𝐫𝐨: ${sender.split('@')[0]}
┃│> 𓊈📲𓊉⥲𝐂𝐞𝐥𝐮𝐥𝐚𝐫: ${info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IOS' : 'WhatsApp web'}
┃│> 𓊈⏱️𓊉⥲hora: ${time2}
┃│> 𓊈📅𓊉⥲Data: ${date}
╰╦══════════════════ ⪨
╭┤き⃟✰𝐃𝐈𝐕𝐄𝐑𝐒𝐎𝐒-𝐌𝐄𝐍𝐔𝐒✰⃟⃟き
┃│✰ ⋟ ${prefix}gruposwhatsapp
┃│✰ ⋟ ${prefix}twitter_audio
┃│✰ ⋟ ${prefix}twitter_video
┃│✰ ⋟ ${prefix}face_video
┃│✰ ⋟ ${prefix}face_audio
┃│✰ ⋟ ${prefix}attp
┃│✰ ⋟ ${prefix}insta_audio
┃│✰ ⋟ ${prefix}instagram
┃│✰ ⋟ ${prefix}soundcloud
┃│✰ ⋟ ${prefix}play
┃│✰ ⋟ ${prefix}playmp4
┃│✰ ⋟ ${prefix}esportenoticias
┃│✰ ⋟ ${prefix}threads
┃│✰ ⋟ ${prefix}tiktok_video
┃│✰ ⋟ ${prefix}tiktok_audio
┃╰══ ⪨
╰╦══════════════════ ⪨`,contextInfo: {
externalAdReply: {
            title:"YouTube",
            body: "🤺",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/116ecb2e3c50b997f0401.jpg`,
            sourceUrl: `https://www.youtube.com/@Ted_bot`, 
            mediaType: 2
            }}})
             
            
            break


case 'menu':
if(isAudioMenu) {
audiomenu = await fetch(audio_menu).then(v => v.buffer())
sabrina.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}
const packname = JSON.parse(fs.readFileSync('./package.json'));
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.menu(prefix, NomeDoBot, sender, NickDono, packname), mentions: [sender]}, {quoted: sasah})
break 

case 'verificado-global': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*")
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
}
break

case 'audio-menu': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAudioMenu) {
nescessario.menu_audio = true
setNes(nescessario)
reply(`O áudio foi ativado para o menu com sucesso, se quiser desativar é só digitar o comando novamente...`)
} else if(isAudioMenu) {
nescessario.menu_audio = false
setNes(nescessario)
reply(`O áudio foi desativado para o menu com sucesso, se quiser ativar é só digitar o comando novamente...`)
}
break

case 'logos':
case 'menulogo':
case 'menulogos':  
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.menulogos(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'menuadm':
case 'menuadms':
case 'adm':  
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.adms(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'menudono':
case 'donomenu':  
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.menudono(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':  
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.efeitos(prefix, sender), mentions: [sender]}, {quoted: sasah})
break

case 'owner':
case 'odono':
case 'dono': 
case 'infodono':  
numerodn = numerodono_ofc
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: getInfo.infoOwner(prefix, NickDono, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'tutorial': case 'infobot':
sabrina.sendMessage(from, {text: getInfo.tutorialBasic(prefix), contextInfo: {externalAdReply: {title: `Bot: ${NomeDoBot}`, body: `Olá ${pushname}, aqui está o tutorial de como usar o bot.`, thumbnail: await getBuffer(thumbnail), mediaType: 1, sourceUrl: `https://sabapis.tech`}}, mentions: [sender]}, {quoted: info}) 
break 

case 'criador': case 'suporte-dono': {
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:;Victor Gabriel;;;\n' + 'FN:Victor Gabriel\n' + 'item1.TEL;waid=558288279194:+55 82 8827-9194\n' + 'item1.X-ABLabel:Celular\n' + 'END:VCARD'
await sabrina.sendMessage(from, { contacts: { displayName: 'Victor Gabriel', contacts: [{vcard}]}
})
await msgSemQuoted(`O contato dele caso você use imune: https://wa.me/559992241471`)
}
break

case 'alteradores':
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.alteradores(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(mess.warningMB(prefix))  
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.brincadeiras(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'menupremium':
case 'menuprem': 
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.menuprem(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'animes':
case 'menuanimes':
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.animes(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'configurar-bot':
sabrina.sendMessage(from, {text: getInfo.configbot(prefix)}, {quoted: sasah})
break

case 'infotinder':
sabrina.sendMessage(from, {text: getInfo.infoTinderSabs(prefix)}, {quoted: sasah})
break

case 'destrava':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
sabrina.sendMessage(from, {text: destrava(prefix)}, {quoted: sasah})
break 

case 'perfil':
try {
ppimg = await sabrina.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
}
try {
var status = (await sabrina.fetchStatus(sender)).status
} catch {
var status = "Privado ou inexistente."
}
try {
var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
sabrina.sendMessage(from, {image: {url: ppimg}, caption: mess.profileInformation(pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, conselho, status), mentions: [sender]}, {quoted: sasah})
} catch (e) {
console.log(e)
}
break

case 'tabela':
sabrina.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: sasah})
break 

case 'destrava2':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
sabrina.sendMessage(from, {text: destrava2 (prefix)}, {quoted: sasah})
break 

case 'tradutor': case 'traduzir':
try {
if(!q) return reply(`Exemplo: ${prefix}tradutor pt|Dog`)
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [idioma, texto] = txt.split("|")
if(!q.includes("|")) return reply(`Está faltando a |, *use como exemplo:* ${prefix}tradutor pt|Dog`)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/info/translate?texto=${encodeURI(texto)}&ling=${encodeURI(idioma)}&apikey=`+API_KEY_BRONXYS)
reply(mess.translator(bla)).catch(e => {
reply("Ocorreu um erro ao realizar a tradução do texto.")
})
} catch (e) {
if(String(e).includes(API_KEY_BRONXYS)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar.")   
}
}
break

case 'idiomas':
case 'idioma':
sabrina.sendMessage(from, {text: getInfo.listLanguages(prefix)}, {quoted: sasah})
break

case 'infobv':
case 'infowelcome':
case 'infobemvindo':
sabrina.sendMessage(from, {text: getInfo.bemvindo(prefix)}, {quoted: sasah})
break

case 'getquoted':
case 'getinfo':  
case 'get':  
case 'mek':
reply(JSON.stringify(info, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
sabrina.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: sasah})
break

case 'ddd':
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
sabrina.sendMessage(from, {text: dddlist}, {quoted: sasah})	
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
sabrina.groupUpdateSubject(from, `${blat}`)
sabrina.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: sasah})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
sabrina.groupUpdateDescription(from, `${blabla}`)
sabrina.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: sasah})
break

case 'requestgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply(mess.syntaxRequestProhibited(prefix))
const req = await sabrina.groupRequestParticipantsList(from)
if (args[0] === '-r') {
await sabrina.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "reject")
} else if (args[0] === '-a') {
mentionSemQuoted(`Seja bem-vindo(a) ao grupo @${args[1].split(' ')[0]}, sua aprovação foi aceita pelo administrador(a).`)
await sabrina.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "approve")
} else if (args[0] === '-list') {
let totalRequest = req.length
if (req == 0) return reply(`Não encontrei nenhuma solicitação pendente no grupo.`)
ABC = `( Total: ${totalRequest} ) - Lista de pessoas que desejam entrar no grupo:\n-\n`
for (var i of req) {
ABC += `Sujeito: @${i.jid.replace("@s.whatsapp.net", "")}\n• Número solicitante: ${i.jid.replace("@s.whatsapp.net", "")}\n`;
ABC += `–\n`
}
mention(ABC)
}
break;

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
sabrina.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await sabrina.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply("Cadê o número do usuário que você deseja convidar.")
try {
photoG = await sabrina.profilePictureUrl(from, 'image') // Pegar a foto do grupo aonde foi solicitado o comando de recrutamento.
} catch {
photoG = thumbnail // Vai colocar a img que está na definição, caso esteja sem foto.
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await sabrina.groupInviteCode(from)
sabrina.sendMessage(rcrt, {text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break

case 'listatm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário já está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp))
reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fazertm':
if(!SoDono) return reply(enviar.msg.donosmt)
var rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão do Proprietário: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão do Proprietário: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
sabrina.sendMessage(rgp[i].id, DFC)}
break

case 'grupo': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args[0] === 'a') {
reply(`- Como pedido senhor(a), o grupo foi aberto com sucesso..`)
sabrina.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
reply(`- Como pedido senhor(a), o grupo foi fechado com sucesso..`)
sabrina.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
try {
var ppUrl = await sabrina.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
var puxarInfo = await sabrina.groupMetadata(from)
var ANC_INFO = puxarInfo.announce
var returnAnnounce = ANC_INFO === false ? "Não." : ANC_INFO === true ? "Sim." : undefined
var RST_INFO = puxarInfo.restrict 
var returnRestrict = RST_INFO === false ? "Sim." : RST_INFO === true ? "Não." : undefined
var infoCreator = puxarInfo.subjectOwner || "Não Encontrado"
infoGroup = `• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Este grupo foi criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Data/hora de criação do grupo: *${moment(`${puxarInfo.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}*\n• Horário e data da última alteração no grupo: *${moment(`${puxarInfo.subjectTime}` * 1000).format('DD/MM/YYYY HH:mm:ss')}*\n-\n• Quantidade de adminstradores: *${groupAdmins.length}*\n• Quantidade de membros: *${somembros.length}*\n• Soma total de membros e admins do grupo: *${puxarInfo.participants.length} participantes*\n-\n• Este grupo está fechado no momento? *${returnAnnounce}*\n• As informações do grupo podem ser alteradas por membros? *${returnRestrict}*\n-\n• Para ver as atividades dos participantes, use: *${prefix}atividade*\n• Para ver os membros inativos no grupo, use: *${prefix}inativos [quantidade de mensagens]*, ex: ${prefix}inativos 10`
sabrina.sendMessage(from, {image: {url: ppUrl}, caption: infoGroup, mentions: [infoCreator]}, {quoted: sasah})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação do(a) Adm: "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${NickDono}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
sabrina.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case 'marcar2':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando.")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('Erro ao mencionar.')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
sabrina.sendMessage(from, {text: teks}, {quoted: sasah})
} catch {
reply('Erro ao mencionar.')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return 
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) {
return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.')}
sabrina.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'reviver':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await sabrina.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario adicionado de volta ao grupo.')
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
sabrina.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
sabrina.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
sabrina.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(menc_os2 == botNumber) return reply("Não pode advertir o próprio bot.");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return reply("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {sabrina.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]})
await sleep(1500)
sabrina.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'rmadv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!marc_tds) return reply("Você esqueceu de mencionar o alvo após o comando.")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return reply("Este usuário não contém nenhuma advertência no grupo.")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
reply("A advertência do usuário neste grupo foi retirada com sucesso!")
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairdogp':
if(!SoDono)return reply(enviar.msg.donosmt)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await sabrina.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
sabrina.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
sabrina.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await sabrina.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `LISTA DE GRUPOS / COMUNIDADES\n*Total de Grupos:* ${ingfoo.length}\n-\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await sabrina.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await sabrina.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link."
}
teks1 += `( ${i} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nTotal de Participantes: ${ingfoo[i].participants.length}\n-\n`
}
reply(teks1)
break

case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `*Atividade dos membros do grupo:*\n–\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `• Participante: *@${uscnt.id.split('@')[0]}*\n• Quantidade de omandos usados pelo(a) participante no grupo: *${uscnt.cmd_messages}*\n• Quantidade de mensagens enviadas pelo(a) participante: *${uscnt.messages}*\n• O participante no momento está conectado em: *${uscnt.aparelho}*\n• Quantidade de figurinhas enviadas no grupo: *${uscnt.figus}*\n–\n`
}
mention(teks)
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q} mensagens..`)
bli = `Usuários com *${q.trim()}* mensagem(ns) pra baixo estão listados abaixo, verifique:\n–\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `*${ac+1}.* @${blue[ac].split("@")[0]}\n`
}
mention(bli)
break

case 'banghost':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono) return reply(enviar.msg.donosmt)
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
sabrina.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correio':
txt = args.join(" ")
if(!txt) return reply(mess.syntaxAnonymousMail(prefix))
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('*Cadê o número do destinatário?*')
if(!txt2) return reply('*Cadê a mensagem para ser enviada ao destinatário?*')
let [result] = await sabrina.onWhatsApp(txt1)
if(!result) return reply(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`)
setTimeout(() => {reagir(from, "💌️")}, 50)
reply(mess.sucessAnonymousMail())
sabrina.sendMessage(result.jid, {text: mess.anonymousMail(txt2)}).catch((error) => {
return reply("Error ao encaminhar a mensagem, tente novamente mais tarde!")
})
break

case 'nome-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O nome do bot foi alterado com sucesso para: ${q}`)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O nick do dono foi configurado para: ${q}`)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
if(q.match(/[a-z]/i)) return reply("É apenas números..")
reply(`O número dono foi configurado com sucesso para: ${q}`)
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
numerodono = setting.numerodono
numerodn = setting.numerodono
numerodono_ofc = setting.numerodono
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
setting.prefix = q
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if(!SoDono) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`- Calma ae amigo(a), já estou trocando a foto do menu para você..`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
ftmenu.logo.splice([])
fs.writeFileSync('./settings/logos.json', JSON.stringify(ftmenu, null, 2))
setTimeout(() => {
ftmenu.logo.push(res)
fs.writeFileSync('./settings/logos.json', JSON.stringify(ftmenu, null, 2))
reply(`A foto do menu foi alterada com sucesso para: ${ftmenu.logo}`)
}, 1200)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`)
}
break

case 'privphotobot': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivatePhotoBot(prefix))
if (args[0] === 'all') {
reply(`- A minha foto do perfil agora está visível à todos.`)
await sabrina.updateProfilePicturePrivacy('all')
} else if (args[0] === 'cntt') {
reply(`- A minha foto do perfil agora está visível somente aos meus contatos.`)
await sabrina.updateProfilePicturePrivacy('contacts')
} else if (args[0] === 'ngm') {
reply(`- A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`)
await sabrina.updateProfilePicturePrivacy('none')
}
}
break

case 'privaddgroup': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivAddGroup(prefix))
if (args[0] === 'all') {
reply(`- Pronto, agora todos pode me adicionar em grupo normalmente.`)
await sabrina.updateGroupsAddPrivacy(`all`)
} else if (args[0] === 'cntt') {
reply(`- Agora somente meus contatos, pode me adicionar em grupo.`)
await sabrina.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === 'ngm') {
reply(`- Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await sabrina.updateGroupsAddPrivacy('none')
}
}
break

case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
sabrina.groupUpdateSubject(from, `${body.slice(9)}`)
sabrina.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: sasah})
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
sabrina.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply('Cade o texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
sabrina.sendMessage(groupMembers[i].id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n-\nGrupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`})
}
reply('A transmissão foi enviada com êxito.')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `*「 TRANSMISSÃO 」*\n-\n• Grupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido.')
} 
break

case 'dono1':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono1 = q.trim()
dono1 = nescessario.numero_dono1
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono2 = q.trim()
dono2 = nescessario.numero_dono2
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono3 = q.trim()
dono3 = nescessario.numero_dono3
setNes(nescessario)
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono4 = q.trim()
dono4 = nescessario.numero_dono4
setNes(nescessario)
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono5 = q.trim()
dono5 = nescessario.numero_dono5
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono6 = q.trim()
dono6 = nescessario.numero_dono6
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
reply(mess.ownersList(NomeDoBot, numerodono_ofc, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6))
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'ativo': case 'on': case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
if(fs.existsSync("./database/func/afk/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./database/func/afk/afk-@" + numerodono_ofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("Não há nenhum registro de ausência sua..")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Registro de ausência tirada com sucesso...")
}
break

case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./database/func/afk/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Mensagem de ausência criada com sucesso...`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix+command} Estou tomando banho`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Mensagem de ausência criada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Mensagem de ausência alterada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo")
}
} else {
return reply("Comando apenas para administradores e dono do bot..")
}
break

case 'addpremium': 
if(!SoDono) return reply(enviar.msg.donosmt)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, tempo50] = barra.split('/')
if(!nmr || !tempo50) return mention(`Você esqueceu de colocar o número do indivíduo e a quantidade de dias que o(a) usuário(a) como premium.\n• Segue o exemplo de uso correto do comando: *${prefix+command} @${nmrdn.split('@')[0]}/30*\n–––\n• Para colocar o usuário sem duração de expiração do premium, você usa o *0* como quantidade de dias.`)
usur = nmr.includes('@') ? nmr.split('@')[1] + "@s.whatsapp.net" : nmr + "@s.whatsapp.net"
mega = Number(tempo50) > 0 ? false : true
dvip = moment.tz('America/Sao_Paulo').format('DD')
bla = JSON.stringify(premium).includes(usur)
if(bla) {
AB = premium.map(i => i.id).indexOf(usur)
if(premium[AB].infinito == true) return reply(`Não é possível adicionar + dias ao usuário, por motivos que ele contém o premium infinito.`)
premium[AB].dias += Number(tempo50)
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
sabrina.sendMessage(from, {text: `${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} fo${Number(tempo50) > 1 ? `ram` : `i`} adicionado${Number(tempo50) > 1 ? `s` : ``} ao usuário @${usur.split("@")[0]}`, mentions: [usur]}, {quoted: info})
} else {
premium.push({id: usur, dias: Number(tempo50), save: Number(dvip), infinito: mega})
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
sabrina.sendMessage(from, {text: `${Number(tempo50) > 0 ? `@${usur.split("@")[0]} foi adicionado à lista premium com sucesso!` : `@${usur.split("@")[0]} foi agraciado com o benefício do premium infinito!`}`, mentions: [usur]}, {quoted: info})
}
break

case 'delpremium':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply(`Marque o usuário que deseja remover da lista premium.️`)
if(!JSON.stringify(premium).includes(marc_tds)) return reply("Este número não está incluso atualmente na lista de usuários premium(ns)..")
AB = premium.map(i => i.id).indexOf(marc_tds)
premium.splice(AB, 1)
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
sabrina.sendMessage(from, {text: `@${marc_tds.split("@")[0]} foi removido da lista premium com sucesso!`, mentions: [marc_tds]}, {quoted: info})
break

case 'premiumlist':
if(premium.length == 0) return reply(`Existe *0* user(s) premium(ns), ou seja, não existe ninguém.`)
tkks = `[Total: *${premium.length}*] - Lista de usuário(s) premium temporário(s)/infinito(s):\n–\n`
tkks += premium.map((v, index) =>  `*[${index+1}]* - Usuário: @${v.id.split('@')[0]}\n• Expiração: ${v.infinito == false ? `*O premium do usuário expira em ${v.dias} dia${v.dias > 1 ? `s` : ``}.*` : `*Não existe um dia(s) de expiração do premium do usuário.*`}`).join('\n––\n')
mention(tkks)
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
sabrina.sendMessage(from, {text: clear}, {quoted: sasah, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'd_':
if(!isPremium) return reply("Apenas premium..")
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./database/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
sabrina.sendMessage(from, Messagemdoc, {quoted: sasah})
} catch (err) {
console.log(err)
reply(`Ops ocorreu um erro`)
}
break

case 'deletar': case 'delete': case 'del':  case 'd':
if(!isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fundobemvindo':
case 'fundobv':  
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
logoslink.fundo1 = res
fs.writeFileSync("./settings/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
logoslink.fundo2 = res
fs.writeFileSync("./settings/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('O anti ligação foi desativado com sucesso.')
}
break

case 'antipv':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('A função antipv foi desabilitada com sucesso, agora todos podem me usar no pv.')
}
break

case 'antipv2':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv2) {
nescessario.antipv2 = true
setNes(nescessario)
reply("Antipv2 ativado com sucesso, o pv pode ser usado, mas não bloquearei, só irei flodar a cada mensagem que ele enviar avisando..")
} else if(isAntiPv2) {
nescessario.antipv2 = false
setNes(nescessario)
reply("Antipv2 desativado com sucesso, agora o meu pv está totalmente liberado.")
}
break

case 'antipv3':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv, exceto: donos e usuários premium..")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply("Antipv3 desativado com sucesso, agora responderei todos sem preferência!")
}
break

case 'limitarcmd': case 'limitarcomando': case 'limitecmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD
setGp(dataGp);
reply(dataGp[0]?.Limitar_CMD ? "Limitador de comandos ativado com sucesso no grupo: "+groupName : "Limitador de comandos desativado no grupo: "+groupName)
break;

case 'tempocmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q.trim()) return reply(`Exemplo: ${prefix+command} 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`)
dataGp[0].Limit_tempo = q.trim()
setGp(dataGp)
reply(`Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`)
break;

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse número já esta incluso na lista de bloqueio.*')
ban.push(blcp)
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
sabrina.sendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso na lista de bloqueados.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
sabrina.sendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break


case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if(err) return sabrina.sendMessage(from, {text: `root@SabOficial:~ ${err}`}, {quoted: sasah})
if(stdout) {
sabrina.sendMessage(from, {text: stdout})
}
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
sabrina.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'ping': {
sabrina.sendMessage(from, { react: { text: `🏃🏻‍♀️`, key: info.key }})
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
await sabrina.sendMessage(from, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: mess.speedSabrina(tempo, sender, r, kyun, uptime, infoSystem, reqcmd), mentions: [sender]}, {quoted: sasah}) 
}
break                 
                  
case 'gtts':
try {
if (args.length < 1) return sabrina.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: sasah})
const gtts = require('./arquivos/funcoes/gtts')(args[0])
if (args.length < 2) return sabrina.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: sasah})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
sabrina.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply(mess.error())
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'modoaluguel': case 'aluguel': case 'modorent':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donomt)
if(args.length < 1) return reply('1 para ativar, 0 para desativar este recurso.')
if(Number(args[0]) === 1) {
if(isModoAluguel) return reply('O modo aluguel já está ativado neste grupo.')
dataGp[0].aluguel = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de modo aluguel no grupo...')
} else if(Number(args[0]) === 0) {
if(!isModoAluguel) return reply('O modo aluguel não está ativo no grupo atualmente.')
dataGp[0].aluguel = false
setGp(dataGp)
reply('Modo aluguel desativado, _agora o grupo pode usar meus comandos sem restrições._')
} else {
reply('1 para ativar, 0 para desativar este recurso.')
}
break

case 'addcmdprem':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("addcmdprem addcmdprem") || (tp.includes("addcmdprem  addcmdprem"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isCmdPremium.includes(args[0]))return reply('Este comando já está incluso na lista de comandos premium, verifique.')
isCmdPremium.push(args[0])
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos premium.`)
break

case 'delcmdprem':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("delcmdprem delcmdprem") || (tp.includes("delcmdprem  delcmdprem"))) return reply(`Tá louco maluco? Não tem como deletar o mesmo comando.`)  
if(!isCmdPremium.includes(args[0]))return reply('Este comando já está excluído da lista de comandos premium.')
var i = isCmdPremium.indexOf(args[0])
isCmdPremium.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de comandos premium.`)
break

case 'listacmdprem':
tkks = `[Total: *${isCmdPremium.length}*] - Comandos que foram adicionados para uso Premium:\n–\n`
tkks += isCmdPremium.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
sabrina.sendMessage(from, {text: tkks.trim()}, {quoted: sasah})
break

case 'blocklist':
if(ban.length == 0) return reply(`Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`)
tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados pelo julgamento do(s) donos(as):\n–\n`
tkks += ban.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Usuário: @${v.split('@')[0]}`).join('\n–\n')
sabrina.sendMessage(from, {text: tkks.trim(), mentions: ban}, {quoted: sasah})
break

case 'blockcmdgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está bloqueado.')
addComandos(from, args[0])
reply(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`)
break

case 'unblockcmdgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está desbloqueado.')
deleteComandos(from, args[0])
reply(`O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`)
break

case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return reply(enviar.msg.grupo);
if(getComandoBlock(from).length == 0) return reply("Não existe ainda nenhum *comando bloqueado* neste grupo.");
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
sabrina.sendMessage(from, {text: tkks.trim()}, {quoted: sasah})
break

case 'blockcmdg':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmdg blockcmdg") || (tp.includes("blockcmdg  blockcmdg"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isBlockCmdG.includes(args[0]))return reply('Este comando já está incluso na lista de *comandos bloqueados global*.')
isBlockCmdG.push(args[0])
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`)
break

case 'unblockcmdg':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdg  unblockcmdg"))) return reply(`Tá louco maluco? Não tem como desbloquear o mesmo comando.`)  
if(!isBlockCmdG.includes(args[0]))return reply('Este comando não está incluso na lista de *cmds bloqueados global*.')
var ab = isBlockCmdG.indexOf(args[0])
isBlockCmdG.splice(ab, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`)
break

case 'listbcmdglobal':
if(isBlockCmdG.length == 0) return reply("Não existe nenhum *comando bloqueado* na lista")
tkks = `[Total: *${isBlockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`
tkks += isBlockCmdG.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
sabrina.sendMessage(from, {text: tkks.trim()}, {quoted: sasah})
break

case 'avalie':
const avalie = body.slice(8)
if(args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if(args.length >= 400) return sabrina.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: sasah})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
sabrina.sendMessage(nmrdn, {text: tdptls}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if(args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return sabrina.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: sasah})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
sabrina.sendMessage(nmrdn, {text: teks1}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if(args.length >= 800) return sabrina.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: sasah})
sug = `[ Sugestões de Novos Comandos ]\n@${sender.split("@s.whatsapp.net")[0]}\n${sugestao}`
sabrina.sendMessage(nmrdn, {text: sug, mentions: sender}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'gimage':
try {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/googlesrc?query=${q}&apikey=`+API_KEY_BRONXYS);
sabrina.sendMessage(from, {image: {url: ABC.result[Math.floor(Math.random() * 5)].url}}, {quoted: sasah}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'google': case 'googlesrc': 
if(!q) return reply(`Exemplo: ${prefix+command} Mc Pipoquinha`)
reply(enviar.espere);
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/googlesrc?query=${q}&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.result.map(v =>  `• Título: *${v.title}*\n• Foto: *${v.url}*\n• Link: *${v.originalUrl}*`).join('\n–\n')}`
reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'screenshotweb': case 'printsite': case 'ssweb':
reply('Aguarde um pouco, entrando no site solicitado...')
if(!q) return reply(`Cadê o link do site o qual você deseja visualizar?`)
try {
img = await getBuffer(`http://api-expr.sabapi.tech:6060/api/ssweb?link=${q}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: img, caption: `• *Site:* ${q}`}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('❌️️ Erro ao entrar no site desejado. Tente novamente mais tarde!')
}
}
break

case 'memes': case 'memedroid':
try {
reply(enviar.espere)
res = await axios.get(`http://api-expr.sabapi.tech:6060/api/memes?apikey=`+API_KEY_BRONXYS);
teks = pickRandom(res.data.pesquisa.resultado)
await sabrina.sendMessage(from, {image: await getBuffer(teks.imagem), caption: mess.memesImages(teks)}, {quoted: sasah}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'memesvid': case 'ifunnyvideo':
try {
reply(enviar.espere)
res = await axios.get(`http://api-expr.sabapi.tech:6060/api/memesvid?apikey=`+API_KEY_BRONXYS);
teks = pickRandom(res.data.videos)
await sabrina.sendMessage(from, {video: await getBuffer(teks.video), caption: mess.iFunnyVideo(teks)}, {quoted: sasah}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'noticias': case 'getnoticias':
try {
if (!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
reply(theNews.data.articles.map(d => `${d.publishedAt.split('T').join(' - ').split('Z')[0]}\n\n${d.title} - ${d.author} [${d.source.name}]\n\n${d.description}\n\n${d.url}\n\n${d.content}`).join('\n\n--------------------------- * ---------------------------\n\n'))
} catch (e) {
return reply(mess.error())
}
break

case 'bbbnews': case 'bbb24news': case 'bbb24': case 'bbb': case 'bigbrother':
if(args[0] === "-fhouse") { /* Notícias fora da casa, o que estão comentando fora da casa? */
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/bbb24/fora-da-casa?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: {url: data.resultado[0].image}, caption: data.resultado.map((v, index) => `*${index+1}.* ${v.title}\n- _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`).join("\n———\n")}, {quoted: sasah})
} catch(error) {
return reply(mess.error())
}
} else if(args[0] === "-dhouse") { /* Noticias dentro da casa, ou seja, no local. */
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/bbb24/news?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: {url: data.resultado[0].image}, caption: data.resultado.map((v, index) => `*${index+1}.* ${v.title}\n- _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`).join("\n———\n")}, {quoted: sasah})
} catch(error) {
return reply(mess.error())
}
} else if(args[0] === "-bigdays") { /* BigDays - Dias de ocorrências do Big Days. */
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/bbb24/bigdays?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: {url: data.resultado[0].image}, caption: data.resultado.map((v, index) => `*${index+1}.* ${v.title}\n- _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`).join("\n———\n")}, {quoted: sasah})
} catch(error) {
return reply(mess.error())
}
}
break;  

case 'cases':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
sabrina.sendMessage(from, { text: listCases() }, { quoted: sasah });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

case 'pinterest': 
try {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
blap = await getBuffer(`http://api-expr.sabapi.tech:6060/api/pinterest?text=${q}&apikey=`+API_KEY_BRONXYS)
await sabrina.sendMessage(from, {image: blap, thumbnail: null}, {quoted: sasah}).catch(e => {
reply('❌️ *Erro ao fornecer o resultado da sua pesquisa.* Tente novamente mais tarde!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('❌️ *Erro ao fornecer o resultado da sua pesquisa.* Tente novamente mais tarde!')
}
}
break;

case 'akinator':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) === Number(moment.tz('America/Sao_Paulo').format('DD'))) return reply("Volte mais tarde...")
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) {
jogo.now = true
akinator.splice(0, 1)
fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
}
if(!JSON.stringify(akinator).includes(from)) {
reply(`Atenção ${pushname}, irei iniciar o jogo do akinator, _siga as instruções abaixo:_\n• Responda os questionamentos com: _"Sim", "Não", "Não sei", "Provavelmente sim" ou "Provavelmente não"_...\n• ${II}Observação:${II} Não use as aspas, utilize sem as aspas por favor.`)
dateAKI = moment.tz('America/Sao_Paulo').format('DD')
var region = 'pt'
var childMode = false;
var proxy = undefined;
let startAki = async () => {
aki = new Aki({region, childMode, proxy});
await aki.start()
}
await startAki()
jogo.now = false
jogo.jogador = sender
akinator.push({id: from, jogador: sender, finish: 0, dia: dateAKI})
fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: *${aki.question}*`)
} else return mention(`@${akinator[akinator.map(i => i.id).indexOf(from)].jogador.split('@')[0]} já iniciou uma partida, espere ele(a) finalizar a atual para iniciar outra...`)
break

case 'resetaki':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(akinator).includes(from) && !SoDono) return reply("Não existe nenhuma sessão ainda em andamento no grupo.")
nosei = SoDono ? 0 : akinator.map(i => i.id).indexOf(from)
if(akinator[nosei].jogador == sender || isGroupAdmins || SoDono) {
jogo.now = true
akinator.splice(nosei, 1)
  fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
reply(`O akinator foi resetado com sucesso, a sessão foi deletada.`)
} else {
reply("Somente o(s) adm(s) ou a pessoa que iniciou o jogo podem resetar.")
}
break

case 'take':
if(!isQuotedSticker) return reply('Você usou de forma errada... Marque uma figurinha.')
try {
i8 = rgtake.map(i => i.usuario).indexOf(sender)
if(i8 < 0) return reply(`Você ainda não definiu a sua marca ďágua personalizada para o uso desse comando.\n• Por favor, use o comando *${prefix}rgtake sb|bot* para registrar sua marca ďagua personalizada de seus stickers.`)
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${rgtake[i8].mcdagua2}`, `${rgtake[i8].mcdagua1}`)
var sti = new Buffer.from(mantap, 'base64');
sabrina.sendMessage(from, {sticker: sti, contextInfo: {externalAdReply:{title: `Renomeado com sucesso para: ${rgtake[i8].mcdagua1}|${rgtake[i8].mcdagua2}`,body:"", previewType:"PHOTO",thumbnail: sti}}})
} catch(e) {
reply("Erro ao renomear a figurinha, tente novamente mais tarde.")
}
break

case 'rgtake':
var [TP, TP2] = q.split("|")
rgtakergtake = []
for (i of rgtake) {rgtakergtake.push(i.usuario)}
if(rgtakergtake.indexOf(sender) >= 0) return reply("Você já registrou sua marca ďagua, não é possível usar esse comando novamente.")
if(!q.includes("|")) return reply(`Você usou de forma errada, siga o exemplo: *${prefix + command} sb|bot*`)
if(!TP) return reply(`Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sb|bot*`)
if(!TP2) return reply(`Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sb|bot*`)
rgtake.push({usuario: sender, mcdagua1: TP, mcdagua2: TP2})
fs.writeFileSync("./database/usuarios/take.json", JSON.stringify(rgtake, null, 2))
reply(`Sucesso ao concluir o registro... Agora você pode usar o comando: *${prefix}take*`)
break

case 'rntake':
i8 = rgtake.map(i => i.usuario).indexOf(sender)
if(i8 < 0) return reply(`Como você quer renomear algo que você não tem registro?`)
if(!q.includes("|")) return reply(`Você usou de forma errada, siga o exemplo: *${prefix + command} sb|bot*`)
var [MARCAD1, MARCAD2] = q.split("|")
if(!MARCAD1) return reply(`Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sb|bot*`)
if(!MARCAD2) return reply(`Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sb|bot*`)
rgtake[i8].mcdagua1 = MARCAD1
rgtake[i8].mcdagua2 = MARCAD2
fs.writeFileSync("./database/usuarios/take.json", JSON.stringify(rgtake, null, 2) + '\n')
reply(`Sua marca ďágua foi alterada para *"${MARCAD1}|${MARCAD2}"* com sucesso.`)
break

case 'gerarlink':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res) 
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
}
} catch {
reply(mess.errorUploadImage())
}
break

// LOGOS 

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'narutologo':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
case 'starballons':
case 'frozen':
case '3dsilver':
case 'goldtext':
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/${command}?texto=${textin}&apikey=`+API_KEY_BRONXYS)
blabla = await getBuffer(bla.resultado.imageUrl)
sabrina.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break  

case 'gameplay':
case 'ffbanner':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply(mess.syntaxLogos())
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=`+API_KEY_BRONXYS)
blabla = await getBuffer(bla.resultado.imageUrl)
sabrina.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'cria': 
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'anime1':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'ff1':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
sabrina.sendMessage(from, { image: venomk }, {quoted: sasah })
break	

case 'game':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'ff2':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'anime2':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'entardecer':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'indian':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break 

case 'ffrose':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'ffgren':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break		

case 'chufuyu':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'wolf':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'dragonred':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
sabrina.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'purple':              
if (args.length < 1) return reply(mess.syntaxLogos())
teks = `${body.slice(8)}`
if (teks.length > 10) return sabrina.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: sasah})
reply(enviar.espere)
venomk = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
sabrina.sendMessage(from, { image: venomk }, {quoted: sasah, caption: `${teks}`})			     	
break


case 'avatar':  
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply(mess.syntaxLogos())
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/mascoteavatar?texto=${txt1}&texto2=${txt2}&apikey=`+API_KEY_BRONXYS)
blabla = await getBuffer(bla.resultado.imageUrl)
sabrina.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'googlesg':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply(mess.syntaxLogos())
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=`+API_KEY_BRONXYS)
blabla = await getBuffer(bla.resultado.imageUrl)
sabrina.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break  

case 'marvel': 
case 'glitch':   
case 'stone':   
case 'space':
case 'pornhub':
case 'america':   
case 'steel':  
case 'grafity':  
case 'glitch3':
case 'thorstyle':  
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/${command}?texto=${texto1}&texto2=${texto2}&apikey=`+API_KEY_BRONXYS)
blabla = await getBuffer(bla.resultado)
sabrina.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'videogame':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/textpro/video-game-classic?texto=${texto1}&texto2=${texto2}&apikey=`+API_KEY_BRONXYS)
dllink = await getBuffer(bla.resultado)
sabrina.sendMessage(from, {image: dllink}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case 'pubg':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await getBuffer(`http://api-expr.sabapi.tech:6060/api/photooxy/pubg?texto=${texto1}&texto2=${texto2}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: bla}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case 'glitchtiktok':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/textpro/glitchtiktok?texto=${texto1}&texto2=${texto2}`+API_KEY_BRONXYS)
dllink = await getBuffer(bla.resultado)
sabrina.sendMessage(from, {image: dllink}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case 'lava':
case 'toxic':  
case 'thunder': 
case 'thunderv2':  
case 'neongreen':	
case 'neon':  
case 'neon1':  
case 'neon3d':  
case 'demongreen':   
case 'metalfire':  
case 'rainbow':	  
case 'gelo':
case 'halloween':  
case 'lapis':  
case 'glitch':  
case 'glitch2':   
case '3dgold': 
case 'neon3d':   
case 'transformer':  
case '3dstone':
case 'fiction':
case 'cattxt':
case 'neondevil':
case 'demonfire':
case 'colaq':
case 'luxury':
case 'berry':
case 'matrix':
case 'horror':
case 'nuvem':
case 'neon3':
case 'neve':
case 'areia':
case 'vidro':
case 'style':
case 'blood':
case 'pink':
case 'carbon':
case 'metalblue': 
case 'jeans':  
case 'jokerlogo':   
case 'natal': 
case 'ossos':  
case 'asfalto':	
case '3ddragon':
case 'esmeralda':
case 'break':  
case 'hologram':  
case 'deepsea':
case 'narutologo2':
try {
reply(enviar.espere)
texto = args.join(" ")
if(!texto) return reply(mess.syntaxLogos())
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/${command}?texto=${texto}&apikey=`+API_KEY_BRONXYS)
blabla = await getBuffer(bla.resultado)
sabrina.sendMessage(from, {image: blabla}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case "watercolor":
case "1917":
case "multicolor":
case "generator":
case "naturalleaves":
case "candycane":
case "christmas":
case "merrychristmas":
case "3ddeep":
case "drug":
case "americanflag":
case "scifi":
case "wonderful":
case "holiday":
case "technology":
case "winter":
case "sandsummer":
case "sandwriting":
case "sandengraved":
case "summerysand":
case "glue":
case "dark":
case "galaxystyle":
case "minion":
case "horrorgift":
case "holographic":
case "deluxe":
case "glossyblue":
case "deluxegold":
case "glossycarbon":
case "fabric":
case "neontext":
case "halloweenfire":
case "metaldark":
case "darkgold":
case "joker":
case "wicker":
case "firework":
case "steeltext":
case "goldfoil":
case "ultragloss":
case "denimtext":
case "stargreen":
case "captain":
case "toxic":
case "ninjalogo":
case "rainbowequalizer":
case "peridot":
case "rock":
case "purpleshiny":
case "robotr2":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/textpro/${command}?texto=${textin}&apikey=`+API_KEY_BRONXYS)
dllink = await getBuffer(bla.resultado)
sabrina.sendMessage(from, {image: dllink}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "logoneon":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/textpro/neon?texto=${textin}&apikey=`+API_KEY_BRONXYS)
dllink = await getBuffer(bla.resultado)
sabrina.sendMessage(from, {image: dllink}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "green-horror":
case "chocolate-cake":
case "3dboxtext":
case "strawberry":
case "sweet-candy":
case "flower-typography":
case "berry":
case "shadow-sky":
case "magma":
case "logobear":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/textpro/${command}?texto=${textin}`+API_KEY_BRONXYS)
dllink = await getBuffer(bla.resultado)
sabrina.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "illuminated-metallic":
case "metallic":
case "harry-potter":
case "butterfly":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`http://api-expr.sabapi.tech:6060/api/photooxy/${command}?texto=${textin}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "carved-wood":
case "flaming":
case "night-sky":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`http://api-expr.sabapi.tech:6060/api/photooxy/${command}?texto=${textin}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e => {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "orangejuice":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/textpro/3d-orange-juice?texto=${textin}&apikey=`+API_KEY_BRONXYS)
dllink = await getBuffer(bla.resultado)
sabrina.sendMessage(from, {image: dllink}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")   
})
break

case "neonlight":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/textpro/3d-neon-light?texto=${textin}&apikey=`+API_KEY_BRONXYS)
dllink = await getBuffer(bla.resultado)
sabrina.sendMessage(from, {image: dllink}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "brilhante":
case "vietnam":
case "seta":
case "grafite":
case "goldt":
case "tela":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`http://api-expr.sabapi.tech:6060/api/ephoto/${command}?texto=${textin}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "desfocado":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`http://api-expr.sabapi.tech:6060/api/ephoto/blur?texto=${textin}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'pubgv': case 'natalmsg': case 'anonovo': case 'trigrev':
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`http://api-expr.sabapi.tech:6060/api/ephoto/${command}?texto=${textin}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {video: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo em vídeo! Tente novamente mais tarde.")  
})
break

case 'qc':
if(!q) return reply(`Para usar este comando é nescessário adicionar algo após o comando.`)
reply(enviar.espere)
try {
ppimg = await sabrina.profilePictureUrl(sender, 'image')} catch {ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'}
const json = {"type": "quote", "format": "png", "backgroundColor": "#FFFFFF", "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": pushname, "photo": {"url": ppimg}}, "text": q, "replyMessage": {}}]};
axios.post('https://quote.btch.bz/generate', json, {headers: {'Content-Type': 'application/json'}}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
sabrina.sendImageAsSticker(from, buffer, {author: `📌 Criado(a) por: ${NomeDoBot}`})
}).catch((e) => {
return reply(mess.error())
})
break

case 'figuweb':
verificartext = args.join(" ")
if(!verificartext) return reply(mess.syntaxWebSticker(prefix));
let text, colorNumber;
if (q.includes('/')) {[text, colorNumber] = q.split('/')} else {text = q; colorNumber = '1'}
reply("• Aguarde, estou gerando a figurinha de acordo o que você solicitou!");
setTimeout(() => { reagir(from, "💬"); }, 500);
const colorC = {'1': '#000000', '2': '#FFFFFF','3': '#FF0000', '4': '#0000FF'};
const backgroundColor = colorC[colorNumber] || '#000000';
try {ppimg = await sabrina.profilePictureUrl(sender, 'image')} catch {ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'}
const avatar = `${ppimg}`
const jsonNew = {"type": "quote", "format": "png", "backgroundColor": backgroundColor, "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": pushname, "photo": {"url": avatar}}, "text": text, "replyMessage": {}}]};
axios.post('https://bot.lyo.su/quote/generate', jsonNew, {headers: {'Content-Type': 'application/json'}}).then((reesult) => {
const bufferE = Buffer.from(reesult.data.result.image, 'base64')
sabrina.sendImageAsSticker(from, bufferE, {author: `📌 Criado(a) por: ${NomeDoBot}`})
}).catch((e) => {
return reply(mess.error())
})
break

case 'amazon': case 'amazonsearch':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} fone redmi airdots 2`)
reply(enviar.espere);
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/amazon?nome=${q}&apikey=`+API_KEY_BRONXYS);
RST = "🛒 *𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 - 𝐀𝐌𝐀𝐙𝐎𝐍 𝐒𝐓𝐎𝐑𝐄:*\n–\n"
RST += ABC.resultado.map((v, index) => `*${index+1}.* Produto: *${v.titulo}*\n• Valor do Produto: *${v.valor}*\n• Link: *${v.link}*`).join('\n–\n')
return reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'brasileirao':
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/brasileirao?apikey=`+API_KEY_BRONXYS);
RST = "⚽️📊 *Tabela Brasileirão:*\n–\n"
RST += ABC.resultado.map((v, index) => `${index+1}°) Time: *${v.equipe}*\n• Pontos alcançados pelo time: *${v.pontos}*\n• Jogos jogados pelo time: *${v.jogosJogados}*`).join("\n–\n")
return reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'grupos': case 'sgrupos':
if(q.trim().length < 4) return reply(`Por favor, coloque algum texto após o comando.`)
reply(enviar.espere);
try {
b = await fetchJson(`http://api-expr.sabapi.tech:6060/api/grupos?text=${q}&apikey=`+API_KEY_BRONXYS);
RST = b.map((v, index) => `❯❯ *${index+1}.* Link do Grupo: *${v.link}*\n• Descrição: ${v.desc}`).join('\n–––––\n')
return reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'receita': case 'revenue': 
if (!q) return reply(`NaN, você esqueceu de digitar após o comando.`)
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/search/cybercook?query=${q}&apikey=`+API_KEY_BRONXYS)
if (data.resultado.length == 0) return reply(mess.noresult())
RST = "© • *𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 𝐃𝐄 𝐑𝐄𝐂𝐄𝐈𝐓𝐀𝐒*\n  • Fonte: https://cybercook.com.br/\n—\n"
RST += data.resultado.map((v, index) => `*${index+1}.* Título: *Receita de ${v.title}*\n• Avaliação: *${v.assessment.starEmoji} (${v.assessment.star})*\n• Enviada por: *${v.by}*\n• Foto: *${v.image}*\n• Acesse o link para saber mais sobre a receita: *${v.url}*`).join('\n—\n')
sabrina.sendMessage(from, {text: RST, contextInfo: {externalAdReply: {title: `[Total: ${data.resultado.length}] • 👩🏼‍🍳 Encontre as melhores receitas culinárias no CyberCook!`, thumbnail: await getBuffer(data.resultado[0].image), mediaType: 2, sourceUrl: "https://cybercook.com.br/"}}}) 
} catch(error) {
return reply(mess.error())
}
break

case 'a':
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/consulta/feriados?ano=${moment.tz('America/Sao_Paulo').format('YYYY')}&apikey=`+API_KEY_BRONXYS);
mapIF = data.resultado.map((v, index) => `*${index+1}.* `).join('\n—\n')
break

case 'playstore':
if (!q) return reply(`NaN, você esqueceu de digitar após o comando.`)
try {
AB = await fetchJson(`http://api-expr.sabapi.tech:6060/api/playstore?nome=${q}&apikey=`+API_KEY_BRONXYS)
if (AB.pesquisa.resultado.length == 0) return reply(mess.noresult())
ABC = `© • *𝐏𝐋𝐀𝐘𝐒𝐓𝐎𝐑𝐄 - 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀*\n  • Total de resultado(s): *${AB.pesquisa.resultado.length}*\n—\n`
ABC += `${AB.pesquisa.resultado.map((v, index) =>  `*${index+1}.* Nome: *${v.nome}*\n• Desenvolvedor: *${v.desenvolvedor}*\n• Avaliação dos usuários do aplicativo: *${v.estrelas} Estrelas*\n• Url: *${v.link}*`).join('\n–\n')}`
sabrina.sendMessage(from, {text: ABC, contextInfo: {externalAdReply: {title: AB.pesquisa.resultado[0].nome, body: `Avaliação: ${AB.pesquisa.resultado[0].estrelas} • Desenvolvedor: ${AB.pesquisa.resultado[0].desenvolvedor}`, thumbnail: await getBuffer(AB.pesquisa.resultado[0].imagem), mediaType: 2, sourceUrl: AB.pesquisa.resultado[0].link}}}) 
} catch(error) {
return reply(mess.error())
}
break;

case 'rastrear':
if (!q) return reply(mess.syntaxTrackParcels(prefix))
if (q.length < 13 || q.length > 13) return reply(mess.invalidCodeRastrear())
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/rastreio?code=${q}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {text: mess.rastrearEncomenda(data, q)}, {quoted:info}).catch(e => {
return reply(mess.error())
})
break

case 'e-sportnews': case 'gamesnews': case 'gamenews':
if(!q) return reply(mess.syntaxNewsGame(prefix))
if (args[0] === '-cod') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=cod&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-csgo') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=csgo&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-fifa') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=fifa&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-fortnite') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=fortnite&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-gamexp') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=gamexp&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-pes') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=pes&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-lol') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=lol&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-pokemon') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=pokemon&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-rainbow-6') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=rainbow-6&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-valorant') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=valorant&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-tcg') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/e-sports_noticias?query=tcg&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
}
break



case 'esporte_news': case 'esportenoticias': case 'esportenews':
if(!q) return reply(mess.syntaxNewsEsportes(prefix))
if (args[0] === '-all') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-futebol') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=futebol&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-futsal') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=futsal&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-skate') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=skate&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-surfe') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=surfe&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-basquete') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=basquete&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-volei') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=volei&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-tenis') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=tenis&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-atletismo') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=atletismo&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-natacao') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=natacao&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-ciclismo') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=ciclismo&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-boxe') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=boxe&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-beisebol') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=beisebol&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-futebol-eua') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=futebol-americano&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
} else if (args[0] === '-judo') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=judo&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-ginastica') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=ginastica-artistica&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
} else if (args[0] === '-golfe') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=golfe&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
} else if (args[0] === '-formula-1') {
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/esporte_noticias?esporte=formula-1&apikey=`+API_KEY_BRONXYS);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sabrina.sendMessage(from,{image: {url: "https://telegra.ph/file/a96770494a3959f166ae3.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
}
break

case 'prox_jogo':
case 'proximojogo':
if (!q) return reply("Você esqueceu de colocar o nome do time, o qual você deseja saber informações sobre os próximos jogos!")
timeMap = {"São Paulo": "sao-paulo", "América-MG": "america-mg", "Atlético-MG": "atletico-mg"};
qModified = Object.keys(timeMap).reduce((acc, word) => acc.replace(new RegExp(word, "ig"), timeMap[word]), q.toLowerCase());
encModified = encodeURIComponent(qModified);
try {
setTimeout(() => {reagir(from, "⚽")}, 50)
data = await fetchJson(`http://api.baddeveloper.space:25572/api/prox_jogo?time=${encModified}`);
if(data.jogos.length == 0) return reply("Não tem nenhuma *resposta do servidor*, ou seja, _não existe nenhum jogo confirmado ainda pelo time._")
reply(`• Dia(s) do(s) jogo(s) confirmado(s) a serem jogados:\n\t• Time: *${q}*\n–\n${data.jogos.map((v, index) => `*${index+1}.* ${v.liga} › *${v.data}* | ${v.timeCasa} x ${v.timeVisitante}`).join("\n––\n")}`)
} catch(error) {
setTimeout(() => {reagir(from, "❌️")}, 50)
reply(mess.error())
}
break

case 'meutime':
if (!q) return reply('Informe o nome do time.');
try {
setTimeout(() => {reagir(from, "⚽")}, 50)
data = await fetchJson(`http://api.baddeveloper.space:25572/api/meutime?q=${q}`);
if (data.resultado.length === 0) return reply('Nenhum time encontrado.');
reply(`⚽ | 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 𝐓𝐈𝐌𝐄:\n–\n› Time informado: *${q}*\n› Colocação/posição atual do time: *${data.resultado[0].position}°*\n› Quantidade de Pontos no time: *${data.resultado[0].points}*\n› Quantidade de jogo(s) disputado(s) pelo time: *${data.resultado[0].gamesPlayed}*\n› Quantidade de jogo(s) empatado(s) pelo time: *${data.resultado[0].draws}*\n› Quantidade de jogo(s) de perdidos/derrota do time: *${data.resultado[0].losses}*\n—\n› Quantidade de gols sofridos pelos time(s) adversário(s): *${data.resultado[0].goalsFor}*\n› Quantidade de gols feitos: *${data.resultado[0].goalsAgainst}*\n› Quantidade total de saldo de gols feito pelo time: *${data.resultado[0].goalDifference}*\n—\n› Aproveitamento (%): *${data.resultado[0].approval}%*`);
} catch(error) {
setTimeout(() => {reagir(from, "❌️")}, 50)
reply(mess.error());
}
break;

case 'imdb':
if (!q) return reply(`• Para realizar a pesquisa do filme no *IMDb* é necessário conter pelo menos um gênero ou nome do filme.\n      • Exemplo: *${prefix}imdb Ação*\n–\n🔍 Saber mais informações sobre o filme pesquisado? Use: *${prefix}imdbinfo [link]*\n      • Lembrando que o *link do filme* para ser usado ele é apresentado na pesquisa, *se obter sucesso.*\n          • Exemplo: *https://m.imdb.com/title/tt6495770/?ref_=fn_al_tt_5*`)
AB = await fetchJson(`http://api-expr.sabapi.tech:6060/api/search/imdb?query=${q}&apikey=`+API_KEY_BRONXYS)
ABC = `• 𝐈𝐌𝐃𝐛 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 - *( ${date} ${hora} )*\n     • *Nota:* Para ver as informações do filme de uma forma detalhada, use o comando: *${prefix}imdbinfo [link do filme]*\n         Exemplo: *${prefix}imdbinfo ${AB.resultado[0].url}*\n–\n`
ABC += AB.resultado.map((v, index) => `*1.* Título: *${v.title}*\n• Ano de Lançamento: *${v.release}*\n• Créditos principais: *${v.topCredits[0]} e ${v.topCredits[1]}*\n• Link: *${v.url}*`).join('\n–\n')
reply(ABC).catch(e => {
return reply(mess.error())
})
break;

case 'imdbinfo':
if(!q.includes("m.imdb.com")) return reply("Coloque o link do filme que você deseja puxar informações.")
try {
RST = await fetchJson(`http://api-expr.sabapi.tech:6060/api/search/imdb_info?url=${q}&apikey=`+API_KEY_BRONXYS)
ABC = `• 𝐈𝐌𝐃𝐛 𝐈𝐍𝐅𝐎 - *( ${date} ${hora} )*\n–\n• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Trama/Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Números de certificados: *${RST.resultado.certificado}*\n–\n• Avaliação total de usuários: *${RST.resultado.avaliacaoTotalUsers}*\n• Total de críticas: *${RST.resultado.criticaTotal}*\n–\n• Valor orçamentário: *$ ${RST.resultado.dinheiro.orcamento.valor}*\n• Valor bruto por países: *$ ${RST.resultado.dinheiro.brutoPaises.valor}*\n• Valor semanal: *$ ${RST.resultado.dinheiro.semana.valor}*\n• Valor bruto pelo mundo: *$ ${RST.resultado.dinheiro.brutoMundial.valor}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`
ABC += `\n• Mixagens: *${RST.resultado.mixagens.map(v => `${v}`).join(', ')}*\n`
ABC += `• Produção: *${RST.resultado.producao.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• Gênero(s): *${RST.resultado.genero.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map(v => `     • Nome: ${v.nome} - ( ${v.categoria} )\n     • Personagem(ns): *${v.personagem}*`).join('\n–\n')}\n–\n`
ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map(v => `     • ${v.categoria}: *${v.creditos}*`).join('\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'movie2':
if(!q) return reply("Coloque o nome do filme que você deseja puxar informações.")
try {
AB = await fetchJson(`http://api-expr.sabapi.tech:6060/api/search/imdb?query=${q}&apikey=`+API_KEY_BRONXYS)
RST = await fetchJson(`http://api-expr.sabapi.tech:6060/api/search/imdb_info?url=${AB.resultado[0].url}&apikey=`+API_KEY_BRONXYS)
ABC = `• 𝐈𝐌𝐃𝐛 𝐈𝐍𝐅𝐎 - *( ${date} ${hora} )*\n–\n• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Trama/Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Números de certificados: *${RST.resultado.certificado}*\n–\n• Avaliação total de usuários: *${RST.resultado.avaliacaoTotalUsers}*\n• Total de críticas: *${RST.resultado.criticaTotal}*\n–\n• Valor orçamentário: *$ ${RST.resultado.dinheiro.orcamento.valor}*\n• Valor bruto por países: *$ ${RST.resultado.dinheiro.brutoPaises.valor}*\n• Valor semanal: *$ ${RST.resultado.dinheiro.semana.valor}*\n• Valor bruto pelo mundo: *$ ${RST.resultado.dinheiro.brutoMundial.valor}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`
ABC += `\n• Mixagens: *${RST.resultado.mixagens.map(v => `${v}`).join(', ')}*\n`
ABC += `• Produção: *${RST.resultado.producao.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• Gênero(s): *${RST.resultado.genero.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map(v => `     • Nome: ${v.nome} - ( ${v.categoria} )\n     • Personagem(ns): *${v.personagem}*`).join('\n–\n')}\n–\n`
ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map(v => `     • ${v.categoria}: *${v.creditos}*`).join('\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'sanime': case 'animetv':
if(!q) return reply("Você não digitou nenhuma palavra ao lado do comando.")
try {
RST = await fetchJson(`http://api-expr.sabapi.tech:6060/api/animetv_search?query=${q}&apikey=`+API_KEY_BRONXYS)
ABC = `${RST.resultado.map(v => `• Título: *${v.title}* | *${v.type}*\n• Foto: *${v.thumb}*\n• Link: *${v.url}*`).join('\n–\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'frases': case 'pensador':
if(!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} Amor`);
AB = await fetchJson(`http://api-expr.sabapi.tech:6060/search/pensador?query=${q}&apikey=`+API_KEY_BRONXYS)
ABC = ""
ABC += `${AB.resultado.map(v => `“${v.frase}”`).join('\n–\n')}`
reply(ABC).catch(e => {
return reply(mess.error())
})
break;

case 'negativo':
if(!q) return reply("Você esqueceu de colocar o nome do aplicativo após o comando.")
data = await fetch()
break;

case 'megadl':
if (!q.includes("mega.nz")) return reply(`Você esqueceu de colocar um link do *mega.nz* após o comando.`);
try {
const { File } = require("megajs");
const fileListINFO = File.fromURL(q);
await fileListINFO.loadAttributes(); // Rodar a função para executar o resultado.
if (fileListINFO.size >= 300000000) return reply(`😿 Infelizmente, não foi possível concluir a ação, *pois o tamanho do arquivo excede o limite máximo de 300MB.*`);
function formatSize(bytes){if(bytes >= 1073741824) {bytes = (bytes / 1073741824).toFixed(2) + " GB"} else if (bytes >= 1048576) {bytes = (bytes / 1048576).toFixed(2) + " MB"} else if(bytes >= 1024) {bytes = (bytes / 1024).toFixed(2) + " KB"} else if(bytes > 1) {bytes = bytes + " bytes"} else if(bytes == 1) {bytes = bytes + " byte"} else {bytes = "0 bytes"} return bytes};
sabrina.sendMessage(from, {text: `🤖💫 Por favor, aguarde alguns minutos! O arquivo está sendo baixado!\n• Arquivo: *${fileListINFO.name}* - [${formatSize(fileListINFO.size)}]`, contextInfo: {forwardingScore: 1000000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: channel}}}, {quoted: info});
const dataFileBuffer = await fileListINFO.downloadBuffer();
// Adicionadas extensões suportadas (zip, rar, 7z, jpg, png, zip) à lista.
if (/mp4/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, {document: dataFileBuffer, caption: fileListINFO.name, mimetype: "video/mp4", fileName: `Download Completo! Obrigado por esperar *${pushname}*...`}, {quoted: sasah});
} else if (/mp3|mpeg/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, {document: dataFileBuffer, caption: fileListINFO.name, mimetype: "audio/mpeg", fileName: `Download Completo! Obrigado por esperar *${pushname}*...`}, {quoted: sasah});
} else if (/pdf/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo: *100%* - ${fileListINFO.name}`, mimetype: "application/pdf", fileName: fileListINFO.name}, {quoted: sasah});
} else if (/txt/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "text/plain", fileName: fileListINFO.name}, {quoted: sasah});
} else if (/zip/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, { document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/zip", fileName: fileListINFO.name}, {quoted: sasah});
} else if (/rar/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, { document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/x-rar-compressed", fileName: fileListINFO.name }, {quoted: sasah});
} else if (/7z/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/x-7z-compressed", fileName: `${fileListINFO.name}` }, {quoted: sasah});
} else if (/jpg|jpeg/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "image/jpeg", fileName: fileListINFO.name}, {quoted: sasah});
} else if (/png/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "image/png", fileName: fileListINFO.name}, {quoted: sasah});
} else if (/apk/.test(fileListINFO.name)) {
await sabrina.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/vnd.android.package-archive", fileName: fileListINFO.name}, {quoted: sasah});
} else {
return reply('- Desculpe-me, ocorreu um erro ao encaminhar o arquivo!😿 O formato de arquivo apresentado não é suportado.');
}
} catch (error) {
  return console.log(`Error: ${error.message}`);
}
break;

case 'dicionario': 
if (!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} [palavra]*`)
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/dicionario?q=${q}&apikey=`+API_KEY_BRONXYS)
reply(`${ABC.significado}`).catch(e => {
reply(mess.error());
})
break;

case 'encurtalink': case 'tinyurl':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/sabrinabot.wpp`)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data}`).catch(e => {
reply(mess.error())
})
break

case 'encurtarlink2': case 'cuttly':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/sabrinabot.wpp`)
anu = await axios.get(`http://api-expr.sabapi.tech:6060/api/linkshort/cuttly?link=${q}&apikey=`+API_KEY_BRONXYS)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data.result}`).catch(e => {
emror = String(e)
reply(mess.error())
})
break

case 'encurtarlink3': case 'bitly':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/sabrinabot.wpp`)
anu = await axios.get(`http://api-expr.sabapi.tech:6060/api/linkshort/bitly?link=${q}&apikey=`+API_KEY_BRONXYS)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data.result}`).catch(e => {
reply(mess.error())
})
break

case 'jogo': case 'jogos': case 'game': case 'games': 
// @Darkzy7
if (!q) return reply(`Você esqueceu de colocar o nome do jogo após o comando.`)
const gamesearch = await axios.get(`https://api.rawg.io/api/games?key=34e936a681924c8cba8711d2dacb999e&search=${q}&page_size=1`)
let searchapi = gamesearch.data.results[0]
if (gamesearch.data.results.length == 0) return await reply("Sem resultados para sua pesquisa, tente novamente mais tarde...");
titulo = searchapi.name
let genero = '';
for (let i = 0; i < searchapi.genres.length; i++) {
genero += `${searchapi.genres[i].name}, `;}
genero += `${searchapi.genres[searchapi.genres.length - 1].name}`;
let plataforma = '';
for (let i = 0; i < searchapi.platforms.length; i++) {
plataforma += `${searchapi.platforms[i].platform.name}, `;}
plataforma += `${searchapi.platforms[searchapi.platforms.length - 1].platform.name}`;
let compreaqui = '';
if (searchapi.stores !== null) {
for (let i = 0; i < searchapi.stores.length; i++) {
compreaqui += `${searchapi.stores[i].store.name}, `;}
compreaqui += `${searchapi.stores[searchapi.stores.length - 1].store.name}`;
let tempodejogatina = searchapi.playtime
let datadelancamento = searchapi.released
let avaliacaodojogo = searchapi.rating
let rating_top = searchapi.rating_top
let esrb = gamesearch.data.results[0].esrb_rating === null ? '' : gamesearch.data.results[0].esrb_rating.name;
sabrina.sendMessage(from, {image: await getBuffer(searchapi.background_image), caption: mess.gamesResult(titulo, genero, plataforma, compreaqui, tempodejogatina, datadelancamento, avaliacaodojogo, rating_top, esrb)}, {quoted: info})
}
break;

case 'celular': 
if (!q) return reply(`Qual celular você deseja pesquisar as informações sobre?`)
smartInfo = await fetchJson(`http://api-expr.sabapi.tech:6060/api/info_celular?celular=${q}&apikey=`+API_KEY_BRONXYS)
msgSemQuoted(mess.smartphoneInfo(smartInfo)).catch(e => {
reply(mess.error());
})
break;

case "threads": case "thr":
if(!q.includes("threads.net")) return reply(`Cade o link do threads? Exemplo: ${prefix+command} https://www.threads.net/@tali_mito22/post/C_3_FbKyHtm/?xmt=AQGzOjjOpgW7PRhCZRcda0GvAqfvYqPWDwHgzn_v6_FVLQ`)
reply("Aguarde, estou enviando..")
try {
sabrina.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/threads?url=${q}&apikey=${API_KEY_BRONXYS}`}})
} catch (e) {
return reply("Erro, tente falar com o suporte...")
}
break;

case 'twitter_video':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("Realizando ação..")
sabrina.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "video/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'twitter_audio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("Realizando ação..")
sabrina.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'spotify':
if(!q) return reply("Você esqueceu de colocar após o comando, o nome da música.")
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/spotifysearch?query=${q}&apikey=`+API_KEY_BRONXYS)
dataUrl = await fetchJson(`http://api-expr.sabapi.tech:6060/api/dl/spotify?url=${data.resultado.tracksArray[0].url}&apikey=`+API_KEY_BRONXYS)
getPreview = await axios.get(`https://tinyurl.com/api-create.php?url=https://open.spotify.com/embed/track/${data.resultado.tracksArray[0].id}?utm_source=generator&theme=0`)
sabrina.sendMessage(from, {text: mess.spotifyResult(data, dataUrl, getPreview), contextInfo: {externalAdReply: {title: `Escute ${data.resultado.tracksArray[0].title} em seu aplicativo do Spotify.`, body: `Song • Duração: ${dataUrl.resultado.duration}`, thumbnail: await getBuffer(data.resultado.tracksArray[0].thumb), mediaType: 1, sourceUrl: data.resultado.tracksArray[0].url}}}, {quoted: sasah}) 
sabrina.sendMessage(from, {audio: {url: dataUrl.resultado.url}, fileName: data.resultado.tracksArray[0].title+'.mp3', mimetype: "audio/mpeg"}, {quoted: info})
} catch(e) {
return reply(mess.error())
}
break

case 'ytsearch': case 'pesquisa-ytb':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} Mc Cabelinho`)
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_BRONXYS);
RST = `🎥 [Total: ${ABC.resultado.length}] – *Pesquisa YouTube:*\n    • Deseja realizar o download do áudio? Use o comando: *${prefix}ytmp3 [link]*\n    • Fazer download do vídeo? É fácil! Só usar o comando: *${prefix}ytmp4 [link]*\n–\n`
RST += `${ABC.resultado.map((v, index) => `*${index+1}.* Link: *${v.url}*\n• Título: *${v.title}*\n• Duração: *${v.duration.timestamp} | ${v.duration.seconds} segundos.*`).join('\n–\n')}`
reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'face_video':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("Realizando ação..")
sabrina.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "video/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'face_audio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("Realizando ação..")
sabrina.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'mediafire':
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/mediafire?url=${q}&apikey=${API_KEY_BRONXYS}`)
reply(`Enviando: ${ABC.resultado[0].nama}\n\nPeso: ${ABC.resultado[0].size}`)
sabrina.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply("Erro..");
})
} catch (e) {
console.log(String(e))
return reply("Erro..")
}
break;

case 'playlist': case 'ytplaylist':
if(!q.includes("youtube.com/playlist")) return reply("Faltando o link da playlist para realizar a busca...");
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytplaylist?url=${q}&apikey=`+API_KEY_BRONXYS);
RST = `📂 [Total: ${ABC.resultado.length}] – *Playlist YouTube:*\n    • Deseja realizar o download do áudio? Use o comando: *${prefix}ytmp3 [link]*\n    • Fazer download do vídeo? É fácil! Só usar o comando: *${prefix}ytmp4 [link]*\n–\n`
RST += `${ABC.resultado.map((v, index) => `*${index+1}.* Link: *${v.url}*\n• Título: *${v.title}*\n• Tempo | Duração: *${v.duration}*\n• Nome do Canal: *${v.channelName}*`).join('\n–\n')}*`
reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'play': {
try {
if(!q.trim()) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_KEY_BRONXYS}`)
if(data[0]?.tempo?.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
var N_E = " Não encontrado."
var bla = `
๖ۣ• Titulo: ${data[0]?.titulo||N_E}
๖ۣ• Tempo: ${data[0]?.tempo||N_E}
๖ۣ• Postado: ${data[0]?.postado||N_E}
๖ۣ• Descrição: ${data[0]?.desc||N_E}

■■■■■ 100% 

E᥉ᥴ᥆ᥣhᥲ ᥙ꧑ᥲ ᥆ρᥴᥲ᥆...

Se desejar baixar o video, use ${prefix}play_video ${q.trim()}
`
sabrina.sendMessage(from, {image: {url: data[0]?.thumb || logoslink?.logo}, caption: bla}, {quoted: info})
sabrina.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg", fileName: data[0]?.titulo || "play.mp3"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply("Seja mais específico, não deu pra encontrar com apenas isto... / Erro");
}
}
break;

case 'tiktok_audio':
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
reply("Realizando ação..");
sabrina.sendMessage(from, {audio: {url:`https://api.bronxyshost.com.br/api-bronxys/tiktok?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
console.log(e)
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply("Erro...");
}
break;

case 'tiktok_video':
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
reply("Realizando ação..");
sabrina.sendMessage(from, {video: {url:`https://api.bronxyshost.com.br/api-bronxys/tiktok?url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
console.log(e)
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply("Erro...");
}
break;

case 'playmp4':  case "p4": {
try {
if(!q.trim()) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_KEY_BRONXYS}`)
if(data[0]?.tempo?.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
var N_E = " Não encontrado."
var bla = `
๖ۣ• Titulo: ${data[0]?.titulo||N_E}
๖ۣ• Tempo: ${data[0]?.tempo||N_E}
๖ۣ• Postado: ${data[0]?.postado||N_E}
๖ۣ• Descrição: ${data[0]?.desc||N_E}

■■■■■ 100% 

E᥉ᥴ᥆ᥣhᥲ ᥙ꧑ᥲ ᥆ρᥴᥲ᥆...

Se desejar baixar o áudio, use ${prefix}play ${q.trim()}
`
sabrina.sendMessage(from, {image: {url: data[0]?.thumb || logoslink?.logo}, caption: bla}, {quoted: info})
sabrina.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "video/mp4", fileName: data[0]?.titulo || "play.mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply("Seja mais específico, não deu pra encontrar com apenas isto... / Erro");
}
}
break;

case 'esportenoticias': case 'esportenoticia': case 'espnoticia': case 'espnoticias':
case 'noticiasesporte': case 'noticiaesporte': case 'noticiaesp': case 'noticiasesp':
case 'esporte_noticias': case 'esporte_noticia': case 'esporte-noticias': case 'esporte-noticia':
reply("Aguarde, realizando ação..")
try {
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/esporte_noticias?apikey=${API_KEY_BRONXYS}`)
AB =""
for ( i = 1; i < ABC.length; i++) {
AB += `${ABC[i].titulo}\n\n`
}
sabrina.sendMessage(from, {image: {url: ABC[0].img}, caption: AB}, {quoted: info})
} catch {
return reply("Erro, tente novamente ou aguarde até voltar ao normal.")
}
break;

case 'play2': case 'p2':
if(!q) return reply(mess.syntaxDownloadMusic())
reply(enviar.espere)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio2?url=${data.resultado[0].url}&apikey=`+API_KEY_BRONXYS}, fileName: data.resultado[0].title+'.mp3', mimetype: "audio/mpeg", headerType: 4, contextInfo: { externalAdReply: { title: data.resultado[0].title, body: data.resultado[0].description, showAdAttribution: true, thumbnail: await getBuffer(data.resultado[0].image), mediaType: 2, mediaUrl: data.resultado[0].url, sourceUrl: data.resultado[0].url}}}).catch(e => {
return reply(mess.error())
})
break;

case 'play3': case 'p3': // @matheuzinho<3
if(!isGroup) return reply(`Este play está disponível apenas para uso em grupo...`)
reagir(from, "🌟") /* Reagir a mensagem do solicitante do comando. */
if(!q) return reply(mess.syntaxDownloadMusic())
if(!JSON.stringify(music).includes(from)) {
music.push({groupId: from, usus: []})
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))}
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
AC = music[AB].usus.map(i => i.id).indexOf(sender)
music[AB].usus.splice(AC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))}
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_BRONXYS);
play_mp3 = await fetchJson(`http://api-expr.sabapi.tech:6060/api/dl/yt2bs?url=${data.resultado[0].url}&type=mp3&apikey=`+API_KEY_BRONXYS);
play_mp4 = await fetchJson(`http://api-expr.sabapi.tech:6060/api/dl/yt2bs?url=${data.resultado[0].url}&type=mp4&apikey=`+API_KEY_BRONXYS);
music[AB].usus.push({id: sender, urlAudio: play_mp3.resultado.dl_link, urlVideo: play_mp4.resultado.dl_link, title: data.resultado[0].title})
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2));
sabrina.sendMessage(from,{image: {url: `${data.resultado[0].image}`}, caption: mess.playResult(data)+`\n–\nDigite *"áudio", "vídeo"* ou *"doc"* para escolher a forma de envio.\n• Observação: _Enviar a mensagem sem as aspas._`}, {quoted:info})
} catch (e) {
return reply(mess.error());
}
break;

case 'shazam':
if (!isQuotedAudio) return reply('Envie o áudio para eu detectar o nome da música!')
dataMedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let mime = (quoted.info || quoted).mimetype || ""
let m = mime.split('/')[1]
fs.writeFileSync(`./database/data/media/audios/shazam/shazam-${sender}.mp3`, dataMedia)
let aud_ = fs.readFileSync(`./database/data/media/audios/shazam/shazam-${sender}.mp3`, {encoding: "base64" })
try {
let hasil = await arcloud(aud_)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc/videos?q=${hasil[0].titulo}&apikey=`+API_KEY_BRONXYS)
} catch (e) {
reply ('Desculpe, não consegui identificar a música. Por favor, tente novamente!️')
}
shzi = await getBuffer(data.resultado[0].image)
sabrina.sendMessage(from, {image: shzi, caption: mess.shazamResult(data)}, {quoted: sasah})
audioShz = await getBuffer(`http://api-expr.sabapi.tech:6060/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {audio: audioShz, mimetype: 'audio/mpeg'}).catch((e) => {
reply(mess.error())
})
DLT_FL(`./database/data/media/audios/shazam/shazam-${sender}.mp3`)
break

case 'playdoc': case 'pdoc':
if(!q) return reply(mess.syntaxDownloadMusic())
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from,{image: {url: `${data.resultado[0].image}`}, caption: mess.playDocumentResult(data)},{quoted:info})
sabrina.sendMessage(from, {document: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=`+API_KEY_BRONXYS}, fileName: data.resultado[0].title+'.mp3', mimetype: "audio/mpeg"}, {quoted: info}).catch((e) => {
return reply(mess.error())
})
} catch(error) {
reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break

case 'playdoc2': case 'pdoc2':
if(!q) return reply(mess.syntaxDownloadMusic())
reply(enviar.espere)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {document: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio2?url=${data.resultado[0].url}&apikey=`+API_KEY_BRONXYS}, fileName: data.resultado[0].title+'.mp3', mimetype: "audio/mpeg", headerType: 4, contextInfo: { externalAdReply: { title: data.resultado[0].title, body: data.resultado[0].description, showAdAttribution: true, thumbnail: await getBuffer(data.resultado[0].image), mediaType: 2, mediaUrl: data.resultado[0].url, sourceUrl: data.resultado[0].url}}}).catch(e => {
return reply(mess.error())
})
break

case 'playmix': case 'pmix':
if(!q) return reply(mess.syntaxPlayMix())
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_BRONXYS)
// Enviar a thumbnail + nomes das músicas. 
sabrina.sendMessage(from,{image: {url: `${data.resultado[0].image}`}, caption: mess.playMixResult(data)})
// Enviar os áudios. 
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio2?url=${data.resultado[0].url}&apikey=`+API_KEY_BRONXYS}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio2?url=${data.resultado[1].url}&apikey=`+API_KEY_BRONXYS}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio2?url=${data.resultado[2].url}&apikey=`+API_KEY_BRONXYS}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio2?url=${data.resultado[3].url}&apikey=`+API_KEY_BRONXYS}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio2?url=${data.resultado[4].url}&apikey=`+API_KEY_BRONXYS}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
break

case 'playvid': case 'pvid':
if(!q) return reply(mess.syntaxDownloadMusic())
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {video: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytvideo?url=${data.resultado[0].url}&apikey=`+API_KEY_BRONXYS}, caption: mess.playVideo(data)}, {quoted: info})
} catch(error) {
reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break

case 'playvid2': case 'pvid2':
if(!q) return reply(mess.syntaxDownloadMusic())
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {video: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytvideo2?url=${data.resultado[0].url}&apikey=`+API_KEY_BRONXYS}, caption: mess.playVideo2(data)}, {quoted: info})
} catch(error) {
reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break

case 'ytmp3': case 'ytaudio': case 'ytmp4': case 'ytvideo': case 'ytdoc':
if(!q) return reply("Você esqueceu de adicionar um link de um vídeo, após o comando.")
reply(enviar.espere)
if(cmd == "ytmp3" || cmd == "ytaudio") {
try {
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio?url=${q}&apikey=`+API_KEY_BRONXYS}}, {quoted: info})
.catch((error) => {return reply(mess.error())})
} catch(error) {return console.error(error)}
} else if(cmd == "ytmp4" || cmd == "ytvideo") {
try {
sabrina.sendMessage(from, {video: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytvideo?url=${q}&apikey=`+API_KEY_BRONXYS}}, {quoted: info})
.catch((error) => {return reply(mess.error())})
} catch(error) {return console.error(error)}
} else if(cmd == "ytdoc") {
try {
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio?url=${q}&apikey=`+API_KEY_BRONXYS}}, {quoted: info})
.catch((error) => {return reply(mess.error())})
} catch(error) {return console.error(error)}
}
break

case 'audiomeme': case 'playmeme':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} Lula*`);
reagir(from, "😸")
try {
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/audiomeme?query=${q}&apikey=`+API_KEY_BRONXYS)
teks = pickRandom(bla.resultado)
sabrina.sendMessage(from, {audio: {url: teks}, mimetype: "audio/mpeg", ptt:true}, {quoted: sasah})
} catch(e) {
reagir(from, "😿")
reply("Sem Resultados.");
}
break;

case 'audiomeme2': case 'playmeme2':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} Lula*`);
reagir(from, "😸")
try {
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/audiomeme?query=${q}&apikey=`+API_KEY_BRONXYS)
teks = pickRandom(bla.resultado)
sabrina.sendMessage(from, {audio: {url: teks}, mimetype: "audio/mpeg", ptt:true}, {quoted: sasah})
} catch(e) {
reagir(from, "😿")
reply("Sem Resultados.");
}
break;

case 'ringtone': case 'meloboom': case 'toque':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} iPhone*`);
setTimeout(() => {reagir(from, "🫨")}, 100)
try {
bla = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ringtone?query=${q}&apikey=`+API_KEY_BRONXYS)
teks = pickRandom(bla.resultado.resultado);
mention(`Olá @${sender.split("@")[0]}, o toque está intitulado como: *${teks.titulo}*.\n• Deseja mais? É só pedir, que eu tô enviando! Você manda e eu obedeço.`)
sabrina.sendMessage(from, {audio: {url: teks.audio}, mimetype: "audio/mpeg", ptt:true})
} catch(e) {
return reply(mess.error())
}
break;

case 'imgpraanime': case 'animeia': case 'toanime':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ia/toanime?link=${link}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: {url: data.resultado.imagem}}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'tohd': case 'hd':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Alterando a qualidade da foto para *HD*, aguarde um pouco!`)
link = await upload(base64)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ia/remini?link=${link}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: {url: data.resultado.imagem}}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'zombieia': case 'tozombie':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Transformando, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ia/tozombie?link=${link}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: {url: data.resultado.imagem}}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'ler': case 'ocr': case 'lerfoto':  
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/leitura/ocr?image=${link}&apikey=`+API_KEY_BRONXYS)
reply(data.resultado).catch(e => {
return reply(mess.error())
})
} else {
reply("Mencione uma imagem, por favor!")
}
break

case 'deezer':
if(!q) return reply(`Exemplo: ${prefix+command} Ela não é santa`)
musicData = (await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`)).data;
if (musicData.length == 0) return reply(mess.noresult())
sabrina.sendMessage(from, { text: `╭━━━━━ •𝐃𝐄𝐄𝐙𝐄𝐑_• ━━━━━╮
  ━ 「𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜 𝚍𝚊 𝚖𝚞́𝚜𝚒𝚌𝚊_」
  ┃⫸ *𝚃𝚒́𝚝𝚚𝚕𝚘:* ${musicData.title}
  ┃⫸ *𝙻𝚒𝚗𝚔 - 𝙼𝚞́𝚜𝚒𝚌𝚊:* ${musicData.link}
  ┃⫸ *𝙳𝚞𝚛𝚊𝚌̧𝚊̃𝚘:* ${musicData.duration}s
  ╰════ ◍
  ┃⫸ *𝙰𝚛𝚝𝚒𝚜𝚝𝚊:* ${musicData.artist.name}
  ┃⫸ *𝙽𝚘𝚖𝚎 𝚍𝚘 𝚊́𝚕𝚋𝚞𝚖:* ${musicData.album.title}
  ┃⫸ *𝙻𝚒𝚗𝚔 -  𝚊́𝚕𝚋𝚞𝚖:* ${musicData.album.link}
  ╰════ ◍
  ┃⫸ *𝙴𝚜𝚝𝚊́ 𝚖𝚞́𝚜𝚒𝚌𝚊 𝚎́ 𝚎𝚡𝚙𝚕𝚒́𝚌𝚒𝚝𝚊?* ${musicData.explicit_lyrics ? '𝗦𝗜𝗠' : '𝗡𝗔̃𝗢'}
  ┃⫸ *𝙻𝚒𝚗𝚔 - 𝙿𝚊́𝚐𝚒𝚗𝚊:* ${musicData.artist.link}
  ╰════ ◍

  • _Abaixo será encaminhado uma preview da música informada._

  • _Para obter a música completa use o comando *${prefix}play*._

  ${tempo}
  ılı.lıllılı.ıllı..ılı.lıllılı.ıllı
  ━━━━━━━━━━━━━━`})
sabrina.sendMessage(from, {audio: {url: musicData.data[0].preview}, mimetype: 'audio/mpeg'}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
break


case 'movie':
if (args.length == 0) return await reply(`Cadê o nome do filme o qual você deseja ver informações?`)
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (movieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink)
sabrina.sendMessage(from, {image: fotoFilme, caption: mess.movies(movieInfo)}, {quoted: sasah})
.catch(e => {
return reply(mess.error())
})
break

case 'fakechat': case 'fakemsg':
if(!isGroup) return reply(enviar.msg.grupo);
var [repplace, tarrget, bott] = q.split("|")
var m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null
if (m_ && tarrget && bott) {
sabrina.sendMessage(from, {text: bott}, {quoted: {key: {fromMe: false, participant: m_}, message: {conversation: tarrget}}});
} else {
reply(`Crie mensagens fakes com qualquer uma pessoa! Explicando abaixo:\n—\n• Você precisaria mencionar a pessoa e adicionar a mensagem que ele supostamente iria enviar e que você responderia a seguinte mensagem, todos usando a *|* para separar o que foi pedido dito nesse textinho...\n• *Ex:* ${prefix+command} @vitima|msg1|msg2`);
}
break;

case 'spoiler': case 'morechat':
var [text1_a, text2_b] = q.split("/"); // Separador
if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
break;

case 'obesidade': case 'obeso': // @Crap </>
if(!q.includes("/")) return reply(`Ex.: *${prefix+command} peso/altura*`)
var [peso, altura] = q.split("/");
const resultado = obeso(peso, altura)
if (resultado <= 17 || resultado <= 18.4) {
await sabrina.sendMessage(from, {react: {text: `😸`, key: info.key}})
reply(`• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`)
} else if (resultado <= 18.5 || resultado <= 24.9) {
await sabrina.sendMessage(from, {react: {text: `👍`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`)
} else if (resultado <= 25 || resultado <= 29.9) {
await sabrina.sendMessage(from, {react: {text: `🫤`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`);
} else if (resultado <= 30 || resultado <= 39.9) {
await sabrina.sendMessage(from, {react: {text: `🤨`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade.`);
} else if (resultado > 40) {
await sabrina.sendMessage(from, {react: {text: `😵`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`);
}
break;

case 'contardias': case 'countdays': // @Crap</>
if(!q.includes("/")) return reply(`Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`)
if(q.length < 10) return reply(`Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix+command} 31/03/2024*`)
try {
const tempo = timeDate('DD/MM/YYYY')
countDay = countDays(q.split("/"), tempo.split("/"))
reply(`Falta *${countDay}* dia(s).`)
} catch(e) {
return reply(mess.error())
}
break;

case 'serie':
if (args.length == 0) return await reply(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageSerieLink = `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`;
var fotoSerie = await getBuffer(ImageSerieLink)
sabrina.sendMessage(from, {image: fotoSerie, caption: mess.series(serieInfo)}, {quoted: sasah})
.catch(e => {
return reply(mess.error())
})
break

case 'instagram':
try {
if(q.length < 5) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`)
reply("Realizando ação..")
let DM_T = ABC.msg[0].type
var A_T = DM_T === "mp4" ? "video/mp4" : DM_T === "webp" ? "image/webp" : DM_T === "jpg" ? "image/jpeg" : DM_T === "mp3" ? "audio/mpeg" : "video/mp4"
sabrina.sendMessage(from, {[A_T.split("/")[0]]: {url: ABC.msg[0].url}, mimetype: A_T}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case "gruposwhatsapp":
reply("Enviando lista de grupos..")

var abcd = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/gruposwhatsapp?apikey=${API_KEY_BRONXYS}`)

let gps = "Lista de Grupos:\n\n"

for ( i = 0; i < abcd.length; i++) {

gps += `${abcd[i].titulo}\n\nRegras: ${abcd[i].regras}\nLink: ${abcd[i].link}\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
}
reply(gps)
break

case "soundcloud":
if(!q.trim().includes("soundcloud")) return reply("Cadê o link do soundcloud?")
try {
sabrina.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/soundcloud?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg"}, {quoted: info})
} catch (e) {
console.log(e)
reply("Erro...")
}
break;

case 'insta_audio':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`)
reply("AGUARDE, REALIZANDO AÇÃO.")
let DM_T = ABC.msg[0].type
var A_T = DM_T === "webp" ? "image/webp" : DM_T === "jpg" ? "image/jpeg" : DM_T === "mp3" ? "audio/mpeg" : "audio/mpeg"
sabrina.sendMessage(from, {[A_T.split("/")[0]]: {url: ABC.msg[0].url}, mimetype: A_T}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'soundcloud': case 'scdl':
if(!q) return reply(`Tá faltando aí! Cadê o link da música no SoundCloud hein?`)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/soundcloud?url=${q}&apikey=`+API_KEY_BRONXYS) 
tinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${data.resultado.link_dl}`)
sabrina.sendMessage(from, {image: {url: data.resultado.capa}, caption: mess.soundcloud(data, tinyUrl)}, {quoted: sasah})
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/scdl?url=${q}&apikey=`+API_KEY_BRONXYS }, mimetype: 'audio/mpeg'}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
break 

case 'tiktok': case 'tiktokvideo':
if(!q) return reply('Por favor, forneça o link do vídeo do Tiktok.')
data = await fetchJson(`http://api-expr.sabapi.tech:6060/download/tiktok?url=${q}&apikey=`+API_KEY_BRONXYS) 
tkID = await getBuffer(data.resultado.video)
sabrina.sendMessage(from, {video: tkID, caption: mess.tiktokDownload(data)}, {quoted: sasah}).catch(e => { 
reply(mess.error())
})
break

case 'tiktokaudio':
if(!q) return reply('Por favor, adicione um link do tiktok (vídeo).')
reagir(from, "😉")
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/download/tiktok?url=${q}&apikey=`+API_KEY_BRONXYS) 
audioDl = await getBuffer(data.resultado.video)
sabrina.sendMessage(from, {audio: audioDl, mimetype: 'audio/mpeg'}, {quoted: sasah})
} catch(e) {
reply(mess.error())
}
break

case 'tiktokimg': case 'tiktokimage':
if(!q) return reply('Por favor, adicione um link do tiktok (imagens).')
reagir(from, "😉")
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/download/tiktok?url=${q}&apikey=`+API_KEY_BRONXYS) 
if(data.resultado.photo.length === 0) return reply(`Ocorreu um erro ao abrir o link, por favor tente novamente mais tarde.`)
audioDl = await getBuffer(data.resultado.audio)
sabrina.sendMessage(from, {audio: audioDl, mimetype: 'audio/mpeg'}, {quoted: sasah})
for (let i = 0; i < data.resultado.photo.length; i++) {
photos = await fetch(data.resultado.photo[i].url).then(v => v.buffer())
sabrina.sendMessage(from, {image: photos})
} 
} catch(e) {
reagir(from, "❌️")
reply(mess.error()+`\n–\n*Erro:* Isso não é uma sequência de fotos, para baixar vídeos use: *${prefix}tiktok*`)
}
break

case 'capcut': case 'capcutmodel':
if(!q) return reply('Por favor, adicione um link de um modelo do CapCut.')
reagir(from, "😼")
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/dl/capcut?url=${q}&apikey=`+API_KEY_BRONXYS) 
c = await getBuffer(data.resultado.videoOriginal)
sabrina.sendMessage(from, {video: c, caption: `• *${data.resultado.title} | ${data.resultado.fullUse}*\n• *Desc:* ${data.resultado.description}`}, {quoted: sasah})
} catch(e) {
reply(mess.error())
}
break

case 'igstory':
case 'instastorys':
case 'instastory':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja baixar os storys?\n     • Exemplo: *${prefix+command} @jaoferreira*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n     • *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.\n     • Este comando só baixa storys, *para baixar reels ou entre outras variedades*, use: *${prefix}igdl [link do post/reels]*`);
await reagir(from, "😸");
try {
reply(`Buscando stories do usuário: *${q}*, aguarde o retorno...`)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/dl/igstory?usuario=${q.replace("@", "")}&apikey=`+API_KEY_BRONXYS)
for (let i = 0; i < data.resultado.length; i++) {
let dmt = data.resultado[i].extension
mimety = dmt === ".mp4" ? "video/mp4" : dmt === ".webp" ? "image/webp" : dmt === ".jpg" ? "image/jpeg" : dmt === ".mp3" ? "audio/mpeg" : "video/mp4"
sabrina.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado[i].url}, mimetype: mimety}, {quoted: info})
}
} catch (e) {
return reply(mess.error())
}
break

case 'twitter': case 'twtdl':
if(!q.includes("twitter.com")) return reply(`Faltando o link válido do twitter para download do(a) video ou foto.`);
await reagir(from, "😸");
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/dl/twitter2?url=${q}&apikey=`+API_KEY_BRONXYS);
if (data.status !== true) throw new Error(data.message);
for (let i = 0; i < data.resultado.media.length; i++) {
await sleep(1000) // Pausa de 1 segundo(s).
let mytype;
if (data.resultado.media[i].url.includes("https://video.twimg.com/ext_tw_video/")) {
mytype = "video/mp4";
} else if (data.resultado.media[i].url.includes("https://pbs.twimg.com/media/")) {
mytype = "image/jpeg";
} else {
mytype = "video/mp4";
}
sabrina.sendMessage(from, {[mytype.split("/")[0]]: {url: data.resultado.media[i].url}, mimetype: mytype}, {quoted: info}).catch(e => {
return reply(`Falha ao encaminhar uma da(s) mídia(s). Error: *${e.toString()}*`);
});
}
} catch (e) {
console.log(e)
reply(mess.error());
}
break

case 'igstalk': case 'instastalk': case 'igsh':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja stalkear?\n     • Exemplo: *${prefix+command} @jaoferreira*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n     • *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`)
try {
reagir(from, "😸")
reply(`Buscando informações sobre o usuário: *${q}* no Instagram.`)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/igstalk?usuario=${q.replace("@", "")}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {text: mess.igstalk(data), contextInfo: {externalAdReply: {title: "Dê um clique aqui e visualize o perfil stalkeado.", thumbnail: await getBuffer(data.resultado.profile_photo), mediaType: 1, sourceUrl: "http://instagram.com/"+data.resultado.username}}}) 
} catch(e) {
return console.log(e)
}
break


case 'igstalk2': case 'instastalk2': case 'igsh2':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja stalkear?\n     • Exemplo: *${prefix+command} @jaoferreira*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n     • *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`)
try {
reagir(from, "😸")
reply(`Buscando informações sobre o usuário: *${q}* no Instagram.`)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/consulta/igstalker?usuario=${q}&apikey=`+API_KEY_BRONXYS)
gg = ""
gg += `• Quantidade total de Seguidores no perfil: *${data.resultado.data.user.edge_followed_by.count}*\n• Quantidade de pessoas sendo seguida pelo perfil: *${data.resultado.data.user.edge_follow.count}*\n–\n• Biografia do Usuário:\n${data.resultado.data.user.biography || "*O usuário não adicionou ainda uma biografia em seu perfil.*"}\n–\n`
gg += `🔗 *Links Externos da Biografia:*\n`+ data.resultado.data.user.bio_links.map((v, index) => `*${index+1}.* Título: *${v.title || "Sem informação do título."}*\n• URL: ${v.url || "Nenhum link declarado no parâmetro."}`).join("\n––\n")
reply(gg)
} catch(e) {
return console.log(e)
}
break

case 'instaaudio': case 'igaudio':
if(q.length < 5) return reply('Por favor, forneça o link de um *reels/video* do Instagram.')
reply(enviar.espere)
try {
setTimeout(() => {reagir(from, "😉")}, 100)
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/instagram?url=${q}&apikey=`+API_KEY_BRONXYS) 
audioInsta = await fetch(data.resultado[0]).then(v => v.buffer())
sabrina.sendMessage(from, {audio: audioInsta, mimetype: 'audio/mpeg'}, {quoted: sasah})
} catch(e) {
reply(mess.error())
}
break

case 'igreels': case 'instareels':
if (!q) return reply('Por favor, forneça o link do vídeo de um *reels do Instagram*.');
reply(enviar.espere);
try {
setTimeout(() => {reagir(from, "😸")}, 100)
result = await fetchJson(`http://api-expr.sabapi.tech:6060/api/instareels?url=${q}&apikey=`+API_KEY_BRONXYS);
sabrina.sendMessage(from, {video: {url: result.url}}, {quoted: sasah})
} catch(e) {
reply(mess.error())
}
break;

case 'operadora':
if(!q) return reply(mess.syntaxOperadora(prefix))
reagir(from, "🔍")
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/operadora?numero=55${q}&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {text: mess.qualOperadora(data), contextInfo: {externalAdReply: {title: "Qual Operadora - Descubra qual é a operadora antes de ligar.", thumbnail: await getBuffer("https://telegra.ph/file/d22b8f916d880564f26ed.jpg"), mediaType: 1, sourceUrl: `https://www.qualoperadora.net`}}}) 
} catch(e) {
return console.log(e)
}
break

case 'mediafire':
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/mediafire?url=${q}&apikey=`+API_KEY_BRONXYS)
encurt = await axios.get(`https://tinyurl.com/api-create.php?url=${ABC.resultado[0].link}`)
reply(mess.mediafireDownload(ABC, encurt))
sabrina.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply(mess.error())  
})
break;

case 'gdrive': case 'googledrive':
if(!q.includes("drive.google.com")) return reply("Faltando o link do google drive para download do arquivo, cade?");
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/dl/gdrive?url=${q}&apikey=`+API_KEY_BRONXYS)
reply("Aguarde, estou encaminhando o arquivo. Pode demorar até *2min* para enviar!")
sabrina.sendMessage(from, {document: {url: ABC.resultado.downloadUrl}, mimetype: ABC.resultado.mimetype, fileName: ABC.resultado.fileName}).catch(e => {
return reply(mess.error())  
})
break;

case 'letra': case 'lyrics': case 'letramusic':
if (!q) return reply(`É o nome da música? Exemplo: ${prefix + command} the perfect girl`)
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/letramusic2?query=${q}&apikey=`+API_KEY_BRONXYS)
reply(`${data.resultado.letraDaMusica}`)
} catch(e) {
return reply(mess.error())  
}
break

case 'letra2': case 'lyrics2': case 'letramusic2':
if (!q) return reply(`É o nome da música? Exemplo: ${prefix + command} the perfect girl`)
try {
data = await fetchJson(`http://api-expr.sabapi.tech:6060/api/letramusic?query=${q}&apikey=`+API_KEY_BRONXYS)
reply(`• Música: *${data.resultado.name}*\n• Artista: *${data.resultado.artist}*\n–\n🎙️ Letra da Música:\n–\n${data.resultado.lyrics}`)
} catch(e) {
return reply(mess.error())  
}
break

case 'gitclone':
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
if (!args[0]) reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
reply(enviar.espere)
if (!regex1.test(args[0])) return reply('Aguarde...')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
sabrina.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: sasah }).catch(e => {
return reply(mess.error())  
})
break

case 'editanime':
if(!q) return reply(mess.exeAnimeEdit(prefix))
if (args[0] === '-random') {
reply(enviar.aguarde)
sabrina.sendMessage(from, {video: {url:`http://api-expr.sabapi.tech:6060/api/editsvideo?categoria=aleatorios&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-bleach') {
reply(enviar.aguarde)
sabrina.sendMessage(from, {video: {url:`http://api-expr.sabapi.tech:6060/api/editsvideo?categoria=bleach&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-chainsaw') {
reply(enviar.aguarde)
sabrina.sendMessage(from, {video: {url:`http://api-expr.sabapi.tech:6060/api/editsvideo?categoria=chainsaw&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kimetsu') {
reply(enviar.aguarde)
sabrina.sendMessage(from, {video: {url:`http://api-expr.sabapi.tech:6060/api/editsvideo?categoria=demon_slayer&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-dragonball') {
reply(enviar.aguarde)
sabrina.sendMessage(from, {video: {url:`http://api-expr.sabapi.tech:6060/api/editsvideo?categoria=dragonball&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-jujutsu') {
reply(enviar.aguarde)
sabrina.sendMessage(from, {video: {url:`http://api-expr.sabapi.tech:6060/api/editsvideo?categoria=jujutsu_kaisen&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-naruto') {
reply(enviar.aguarde)
sabrina.sendMessage(from, {video: {url:`http://api-expr.sabapi.tech:6060/api/editsvideo?categoria=naruto&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
}
break

case 'animesimg': case 'animeimg': case 'animeimage':
if(!q) return reply(mess.exeAnimeImage(prefix))
if (args[0] === '-cosplay') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/cosplay?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-waifu') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/waifu?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-loli') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/loli?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shota') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/shota?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-yotsuba') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/yotsuba?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shinomiya') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/shinomiya?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-yumeko') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/yumeko?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-tejina') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/tejina?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-chiho') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/chiho?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-boruto') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/boruto?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kaori') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/kaori?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shizuka') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/shizuka?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kaga') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/kaga?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kotori') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/kotori?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-mikasa') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/mikasa?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-akiyama') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/akiyama?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-gremory') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/gremory?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-izuku') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/izuku?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shina') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/shina?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kagura') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/kagura?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shinka') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/shinka?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-eba') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/eba?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-yuri') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/yuri?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-erza') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/erza?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-elaina') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/elaina?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-hinata') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/hinata?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-naruto') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/naruto?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-minato') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/minato?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-sagari') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/sagari?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-nezuko') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/nezuko?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-rize') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/rize?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-anna') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/anna?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-deidara') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/deidara?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-asuna') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/asuna?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-ayuzawa') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/ayuzawa?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-emilia') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/emilia?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-chitoge') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/chitoge?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-hestia') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/hestia?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-inori') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/inori?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-itachi') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/itachi?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-madara') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/madara?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-sakura') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/sakura?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-sasuke') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/sasuke?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-tsunade') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/tsunade?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-onepiece') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/onepiece?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-mobil') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/mobil?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-montor') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/montor?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-keneki') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/keneki?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-megumin') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/megumin?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-toukachan') {
reply(enviar.aguarde)
photos = await getBuffer(`http://api-expr.sabapi.tech:6060/random/toukachan?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
}
break

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q) return reply( `Texto onde? Exemplo : ${prefix + command} Hasta la vista baby`)
let getGroups = await sabrina.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
sabrina.sendMessage(anu[i], {text: txt})
}
reply(`Enviado com sucesso...`)
}
break

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
sabrina.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('O recurso de anti imagem já está ativado.')
dataGp[0].antiimg = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('O recurso de anti imagem já está desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('O recurso de anti vídeo já está ativado.')
dataGp[0].antivideo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti video neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('O recurso de anti vídeo já está desativado.')
dataGp[0].antivideo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti video neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('O recurso de anti áudio já está ativado.')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti audio neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('O recurso de anti áudio já está desativado.')  
dataGp[0].antiaudio = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti audio neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('O recurso de anti sticker já está ativado.')
dataGp[0].antisticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti sticker neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('O recurso de anti sticker já está desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti sticker neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('O recurso de anti documento já está ativado.')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti documento neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('O recurso de anti documento já está desativado.')
dataGp[0].antidoc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti documento neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('O recurso de anti contato já está ativado.')
dataGp[0].antictt = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti contato neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('O recurso de anti contato já está desativado.')
dataGp[0].antictt = false
setGp(dataGp)
reply('️Desativou com sucesso o recurso de anticontato neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {									
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('O recurso de anti loc já está ativado.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti loc neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('O recurso de anti loc já está desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti loc neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('O recurso de antilink de grupo já está ativado.')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink de grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('O recurso de antilink de grupo já está desativado.')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink de grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return reply('O recurso de x9 já está ativado.')
dataGp[0].x9 = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado/promovido a adm e também quando ouver fixação/desafixação de mensagem do(s) adminstrador(es).')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('O recurso de x9 já está desativado.')
dataGp[0].x9 = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento ou fixação/desafixação de mensagem do(s) adminstrador(es).')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'visualizarmsg':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9visuunica':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('O recurso de revelar visu única já está ativado.')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de revelar visu única neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('O recurso de revelar visu única já está desativado.')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de revelar visu única neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'so_adm':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'odelete':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply('O recurso de delete já está ativado.')
nescessario.Odelete = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de delete nos grupos.')
} else if(Number(args[0]) === 0) {
if(!IS_DELETE) return reply('O recurso de delete já está desativado.')
nescessario.Odelete = false
setNes(nescessario)
reply('️Desativou com sucesso o recurso de delete nos grupos.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('O recurso de antifake neste grupo já está ativado.')
dataGp[0].antifake = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antifake neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('O recurso de antifake neste grupo já está desativado.')
dataGp[0].antifake = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antifake neste grupo!')
} else {
reply('1 para ativar, 0 para desativar.')
}
break;

case 'prefixos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a mais adicionado neste grupo.")
reply(`Lista de prefixos para uso do bot, no Grupo: *${groupName}*:\n• *[Total: ${dataGp[0].prefixos.length}]* - ${dataGp[0].prefixos.map((v, index) => `( ${v} )`).join(", ")}`)
break

case 'figurinhas':
try {
if(!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
if(q >= 100) return reply("Coloque abaixo de 100...")
if (isGroup) reply(`As figurinhas estão sendo enviadas no pv, por motivo de segurança e flood em grupos, aguarde um pouco.`)
reply(enviar.espere)
async function figus() {
bala = await getBuffer(`http://api-expr.sabapi.tech:6060/api/stickera?apikey=`+API_KEY_BRONXYS)
bass64 = `data:image/jpeg;base64,${bala.toString('base64')}`
var mantap = await convertSticker(bas64, `↳ [🌟] Feito pelo(a) usuário(a): ${pushname}`, `${NomeDoBot}`)
imageBuffer = new Buffer.from(mantap, 'base64');
sabrina.sendMessage(sender, {sticker: imageBuffer})
}
for ( i = 0; i < q; i++) {
await sleep(2000)
figus()
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar") 
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("Erro ao enviar as figurinhas!")  
}
}
break

case 'figaleatoria':
reply("Estou gerando sua figurinha, aguarde um pouco amigo(a)...")
try {
bla = await getBuffer(`http://api-expr.sabapi.tech:6060/api/stickera?apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {sticker: bla}, {quoted: sasah})
} catch(e) {
reply(mess.error())
}
break

case 'add_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)  
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de multi prefixos neste grupo.')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de multi prefixos neste grupo.')
}
break

case 'ephemeral': case 'msgtemp':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
getInfoG = await sabrina.groupMetadata(from); /* Pegar as informações total do grupo! */
if (getInfoG.ephemeralDuration == undefined) {
reply(`As mensagens temporárias no grupo foram ativadas com sucesso.`)
await sabrina.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL})
} else if (getInfoG.ephemeralDuration > 1) {
reply(`As mensagens temporárias no grupo foram desativadas com sucesso.`)
await sabrina.sendMessage(from, { disappearingMessagesInChat: false})
}
break

case 'changegroup': case 'config_gp': case 'config-group': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm! `)
if (args[0] === 'adms') {
reply(`🔐 Sucesso! - Agora somente os adm poderá editar os dados do grupo.`)
await sabrina.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
reply(`🔓 Sucesso! - Agora todos os participantes pode alterar os dados do grupo.`)
await sabrina.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`A foto do grupo foi removida com sucesso.`)
await sabrina.removeProfilePicture(from)
}
break

case 'antinotas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anticatalogo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Já está desativado.')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anticatalogo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de bem vindo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de bemvindo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply(enviar.msg.donosmt)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('O recurso foi ativado.')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('O recurso foi desativado.')
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'infocmd': 
case 'info': 
if(!q) return reply(`Coloque um comando para conhecer o uso do comando que você almeja usar, por exemplo: ${prefix+command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return reply("A explicação do comando ainda não está disponível..")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g, prefix)
reply(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt)
const CMD_S = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
dirInfoCmd = "./settings/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return reply(`Faltando a primeira |\nExemplo: ${prefix+command} comando|info`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return reply("A informação sobre este comando já foi adicionada, ou seja, já é existente...")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
reply(`Informação sobre o comando ${y} foi atribuida a ele com sucesso...`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt) 
const CMD_D = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./settings/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
reply(`A informação sobre o comando ${q} foi removida com sucesso...`)
break

case 'legendabv':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendabv2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply("Escreva a mensagem de saída ou para desativar, use: 0")
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply('Mensagem de saída definida com sucesso!')
} else {
reply(`Ative o ${prefix}bemvindo 1 para o recurso de edição de mensagem.`)
}
break;
case 'legendasaiu2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(q.length < 1) return reply('Escreva a mensagem de saída ou para desativar, use: 0')
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : q
setGp(dataGp)
reply('Mensagem de saída [2] definida com sucesso!')
} else {
reply(`Ative o ${prefix}bemvindo2 1 para o recurso de edição de mensagem.`)
}
break;

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda_imagem': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda_documento': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*Mensagem de remoção de documento definida com sucesso!*')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm')
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban.*'
reply(teks)
break

case 'mute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja mutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2))
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
}
break

case 'desmute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja desmutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário *@${_.split('@')[0]}* você acaba de ser desmutado pelo(a) adm *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário @${_.split('@')[0]} você acaba de ser desmutado pelo(a) adm @${sender.split('@')[0]}.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
}
break

case 'roletarussa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return reply("Não existe *membros comuns* no grupo, somente admins.")
if(C2 === sender || C2 === botNumber) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
if(C2 === sender || C2 === numerodono[0]) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)		
reply(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
setTimeout(() => { 
mentions(`Que pena... você não sobreviveu ao meu jogo *@${C2.split('@')[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]}`, [C2], true) 
}, 5000)	 
setTimeout(() => {
sabrina.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break

case 'imagine': 
try {
if (!q) return reply("O que você deseja criar amiguinho?")
reply("Criando uma imagem a partir de seu questionamento, aguarde...");
data = await fetchJson(`https://vihangayt.me/tools/aiimg?q=${q}`)
sabrina.sendMessage(from, {image: {url: data.data.aiImageData[0].images[0].url}}, {quoted: sasah}).catch(() => {
return reply(mess.error())
})
} catch {
reply(mess.error())
}
break

case 'photoleap': 
try {
if (!q) return reply("O que você deseja criar através de seu questionamento?")
reply("Criando uma imagem a partir de seu questionamento, aguarde...");
data = await fetchJson(`https://vihangayt.me/tools/photoleap?q=${q}`)
sabrina.sendMessage(from, {image: {url: data.data}}, {quoted: sasah}).catch(() => {
return reply(mess.error())
})
} catch {
reply(mess.error())
}
break

case 'dinextenso': // Invertexto-API com 3.000 requisições mensais, fique atento! [📍]
if(!q.includes(".")) return reply(`❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso.\nPor exemplo: *${prefix}dinextenso 500.00 ou 756.50*, tudo que você colocar os valores deve colocar um ponto(.) para converter os valores.`)
try {
data = await fetchJson(`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`);
reply(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
} catch(e) {
reply(mess.error())
}
break;

case 'validarcpf': case 'validarcnpj':
if(command === "validarcpf") {
if(!q) return reply("Digite um CPF para realizar a verificação se é válido ou inválido...")
if(q.length < 11) return reply("Você digitou um cpf que não tem 11 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(e) {
reply(mess.error())
}
} else if(command === "validarcnpj") {
if(!q) return reply("Digite um CNPJ para realizar a verificação se é válido ou inválido!")
if(q.length < 14) return reply("Você digitou um CNPJ que não tem 14 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(e) {
reply(mess.error())
}
}
break;

case 'pergunta': case 'openai': case 'gpt': case 'chatgpt':
try {
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
let { key } = await sabrina.sendMessage(from, {text: `Estou processando sua pergunta, isso pode levar alguns segundos...`}, {quoted: info})
anu1 = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ia/gpt?query=${q}&apikey=`+API_KEY_BRONXYS)
await sabrina.sendMessage(from, {text: mess.respostaChatGPT(anu1), edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply(mess.error())
} else {
reply(mess.error())
}
}
break

case 'gpt-4': case 'gpt4':
try {
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
let { key } = await sabrina.sendMessage(from, {text: `Estou processando sua pergunta, isso pode levar alguns segundos...`}, {quoted: info})
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${q}`)
await sabrina.sendMessage(from, {text: anu1.result, edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply(mess.error())
} else {
reply(mess.error())
}
}
break

case 'totext': 
// @VictorGabriel
if (!isQuotedAudio) return reply("Por favor, mencione um áudio para realizar a leitura do áudio.")
if(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength > 2100000) return reply("Só realizo a transcrição de áudio de até *2MB*, envie um arquivo menor.")
try {
let getBufferAudio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let { key } = await sabrina.sendMessage(from, {text: `Estou realizando a transcrição do áudio para texto, aguarde...`}, {quoted: info})
fs.writeFileSync(`./database/data/media/audios/totext/totext-${sender}.mp3`, getBufferAudio)
client = new AssemblyAI({apiKey: "11d7fb1a4e8f4e4fac85d3b9be844b4a"})
data = await client.transcripts.create({audio_url: `./database/data//media/audios/totext/totext-${sender}.mp3`, language_code: "pt"})
if (data.status === 'error') return reply("Ocorreu um erro ao transcrever o áudio! Por favor, tente novamente.")
if (data.words.length == 0) return reply("Não foi possível transcrever o áudio enviado.")
await sabrina.sendMessage(from, {text: `• *Transcrição* - Quantidade de palavra(s) detectada(s) no texto: *${data.words.length}*\n—\n• ${data.text}`, edit: key});
DLT_FL(`./database/data/media/audios/totext/totext-${sender}.mp3`)
} catch(e) {
reply(mess.error())
console.error(e)
}
break

case 'bard':
try {
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
let { key } = await sabrina.sendMessage(from, {text: `Estou processando sua pergunta, isso pode levar alguns segundos...`}, {quoted: info})
r = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ia/gbard?query=${q}&apikey=`+API_KEY_BRONXYS)
await sabrina.sendMessage(from, {text: mess.respostaBard(r), edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply(mess.error())
} else {
reply(mess.error())
}
}
break

case 'wikipedia': case 'wiki':
try {
  if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
reply(`Aguarde, pesquisando sobre o que está perguntando..`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
msgSemQuoted(mess.wikiResposta(wikis))
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
} else {
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
}
}
break

case 'gptvoz':
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
reply(`Estou processando sua pergunta. Isso pode levar alguns segundos...`)
nznk = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ia/gpt?query=${q}&apikey=`+API_KEY_BRONXYS)
const gpts = require('./arquivos/funcoes/gtts')('pt')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gpts.save(ranm, `${nznk.resultado}`, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
sabrina.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: sasah})
DLT_FL(ranm)
DLT_FL(rano)
})
})
break

case 'corretor':
if(!q) return reply(`Parece que você esqueceu de adicionar sua frase, *use-o de forma correta*, siga o exemplo:\n— ${prefix+command} `+"```Eu te mamo```")
try {
let { key } = await sabrina.sendMessage(from, {text: `Verificando os erros ortográficos em seu texto ou palavra... *Aguarde!*`}, {quoted: info})
promptUser = `Corrija gramaticalmente uma frase para o português brasileiro tradicional: ${q}`
anu1 = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ia/gpt?query=${promptUser}&apikey=`+API_KEY_BRONXYS)
await sabrina.sendMessage(from, {text: mess.corretorOrtografico(anu1), edit: key});
} catch(e) {
return reply(mess.error())
}
break

case 'redacao':
if(!q) return reply(`Você esqueceu de colocar o tema de sua redação ao lado do comando.`)
try {
let { key } = await sabrina.sendMessage(from, {text: `Estou processando sua solicitação. Isso pode levar alguns segundos...`}, {quoted: info})
promptUser = `Crie um texto dissertativo-argumentativo com o tema: ${q}`
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`)
await sabrina.sendMessage(from, {text: mess.respostaRedacao(anu1), edit: key});
} catch(e) {
return reply(mess.error())
}
break

case 'summerize':
if(!q) return reply(`Você esqueceu de colocar o que você deseja resumir ao lado do comando.`)
try {
let { key } = await sabrina.sendMessage(from, {text: `Estou resumindo o texto solicitado. Isso pode levar alguns segundos...`}, {quoted: info})
promptUser = `Faça um resumo básico do texto apresentado: ${q}`
anu1 = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ia/gpt?query=${promptUser}&apikey=`+API_KEY_BRONXYS)
await sabrina.sendMessage(from, {text: mess.respostaResumida(anu1), edit: key})
} catch(e) {
return reply(mess.error())
}
break

case 'nasa':
try {
if (!q) return reply(`*Exemplo:* ${prefix}${command} 19-10-2007`)
dataSab = await fetchJson(`http://api-expr.sabapi.tech:6060/api/nasaphoto?data=${q}&apikey=`+API_KEY_BRONXYS)
resultExp = await fetchJson(`http://api-expr.sabapi.tech:6060/api/info/translate?texto=${dataSab.nasa.explanation}&ling=pt&apikey=`+API_KEY_BRONXYS)
sabrina.sendMessage(from, {image: {url: dataSab.nasa.hdurl }, caption: mess.result_APOD(dataSab, resultExp)})
} catch (e) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error());
}
break;

case 'book':
if (args.length == 0) return reply(`*Exemplo:* ${prefix+command} Nome do Livro`)
try {
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)
sabrina.sendMessage(from, {image: bookImage, caption: mess.searchBooks(getBook)}).catch(e => {
reply(mess.error())
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error())
}
}
break

case 'cotacao': {
if (!isPremium) return reply(enviar.msg.premium)
moedas = ["dolar", "euro", "bitcoin", "libra", "ethereum"]
if(!moedas.includes(q_2)) return reply("A moeda está inexistente em meu banco de dados!\n*Disponíveis:* dolar, euro, bitcoin, libra, ethereum\n*Observação:* Use letras minúsculas para não ocorrer erros!")
if (encodeURIComponent(q) == "dolar") {
var money = "USD-BRL";
} else if (encodeURIComponent(q) == "euro") {
var money = "EUR-BRL";
} else if (encodeURIComponent(q) == "bitcoin") {
var money = "BTC-BRL";
} else if (encodeURIComponent(q) == "libra") {
var money = "GBP-BRL";
} else if (encodeURIComponent(q) == "ethereum") {
var money = "ETH-BRL";
}
axios.get(`https://economia.awesomeapi.com.br/last/${money}`)
.then((response) => {
if (encodeURIComponent(q) == "dolar") {
var resposta = response.data.USDBRL;
} else if (encodeURIComponent(q) == "euro") {
var resposta = response.data.EURBRL;
} else if (encodeURIComponent(q) == "bitcoin") {
var resposta = response.data.BTCBRL;
} else if (encodeURIComponent(q) == "ethereum") {
var resposta = response.data.ETHBRL;
} else if (encodeURIComponent(q) == "libra") {
var resposta = response.data.GBPBRL;
}
reply(mess.quoteCurrencies(resposta));
}).catch((response) => {
reply("Erro ao obter informações!️");
});
}
break;

case 'clima':
if (args.length == 0) return reply(`*Exemplo:* ${prefix}Clima Maceió`)
try {
const wttrin = (await axios.get(`https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`)).data;
var wttrImage = await getBuffer(`https://wttr.in/${encodeURIComponent(q)}.png`)
sabrina.sendMessage(from, {image: wttrImage, caption: mess.clima(wttrin)}).catch(e => {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error())
}
}
break

case 'simi':
if(!isGroup) return reply(enviar.msg.grupo)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST', headers: {'content-type': "application/x-www-form-urlencoded"}, body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'simih':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo simi está ativo')
dataGp[0].simi1 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
dataGp[0].simi1 = false
setGp(dataGp)
reply('Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'simih2':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo Simi está ativo')
dataGp[0].simi2 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
dataGp[0].simi2 = false
setGp(dataGp)
reply('Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Ja esta ativo')
dataGp[0].autosticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de auto figurinhas neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Ja esta Desativado')
dataGp[0].autosticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de auto figurinhas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autorepo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('Ja esta ativo')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de auto resposta neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Ja esta Desativado')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de auto resposta neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'modobrincadeira':
case 'modobrincadeiras':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isModobn) return reply('O modo brincadeira já está ativo.')
dataGp[0].jogos = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('O modo brincadeira já está desativado.')
dataGp[0].jogos = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'leveling':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Ative pressione 1, desativar pressione 0')
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('O recurso de nível já estava ativo antes nesse grupo.')
dataGp[0].level = true
setGp(dataGp)
reply(enviar.levelon) 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está desativado neste grupo.`)
dataGp[0].level = false
setGp(dataGp)
reply(enviar.leveloff)
} else {
reply('Adicionar parâmetro 1 ou 0.')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo.')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`✓ Ativado com sucesso o modo nsfw +18 no grupo: *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está desativado.')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`✓ Modo Nsfw +18 desativado com sucesso no grupo: *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`1/0, Exemplo: ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti palavras hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti palavra harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break

case 'delpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Exemplo: ${prefix + command} Rapariga`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`O recurso limite de caracteres já está ativo no grupo.`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`O recurso limite de caracteres foi ativado nesse grupo.`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('O recurso limite de caracteres não está ativado no grupo.')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('O recurso limite de caracteres foi desativado nesse grupo.️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./database/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
reply(mess.statusBot(isAnticall, isAntiPv, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isNsfw, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn))
break

case 'reiniciar':
if(!SoDono) return reply(enviar.msg.donosmt)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'novoqr':
if(!SoDono) return reply(enviar.msg.donosmt);
reply("Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente..");
setTimeout(() => {
fs.rmdirSync(folderUserAuth, { recursive: true}); }, 1500)
break;

//==========(Sticker-Stickers)===========\\

case 'emoji': case 'semoji':
if(!q) return reply(`*Exemplo:* ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){ idemot = 0 }
else if(jemot == 'google'){ idemot = 1 }
else if(jemot == 'samsung'){ idemot = 2 }
else if(jemot == 'microsoft'){ idemot = 3 }
else if(jemot == 'whatsapp'){ idemot = 4 }
else if(jemot == 'twitter'){ idemot = 5 }
else if(jemot == 'facebook'){ idemot = 6 }
else if(jemot == 'joypixels'){ idemot = 7 }
else if(jemot == 'openmoji'){ idemot = 8 }
else if(jemot == 'emojidex'){ idemot = 9 }
else if(jemot == 'lg'){ idemot = 10 }
else if(jemot == 'htc'){ idemot = 11 }
else if(!jemot){ idemot = 4 }
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
sendStickerFromUrl(from, emoji.images[idemot].url)
}).catch(e => {
reply("Emoji não encontrado.. Tente com outro emoji para ver está funcionando..")
})
break

case 'emoji-mix':
case 'emojimix':
txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+")
var [emj1, emj2] = txt.split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefix+command} 😪+🤣`)
try {
mention(`*@${sender.split("@")[0]}, estou gerando um mix entre os emojis solicitados...`)
sendStickerFromUrl(from, `http://api-expr.sabapi.tech:6060/api/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=`+API_KEY_BRONXYS)
} catch (e) {
if(String(e).includes(API_KEY_BRONXYS)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('Ops não foi possivel fazer esse mix de emoji ou pode ter ocorrido algum problema no sistema..')
}
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${NomeDoBot}`
sd = `↳ [🌟] Feito pelo(a) usuário(a): ${pushname}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
sabrina.sendMessage(from, {sticker: sti}, {quoted: sasah})
} else {
return reply(`So imagem amigo(a)!`)
}
break

case 'rbale':  
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `↳ [🌟] Feito pelo(a) usuário(a): ${pushname}`, `${NomeDoBot}`)
var sti = new Buffer.from(mantap, 'base64');
sabrina.sendMessage(from, {sticker: sti}, {quoted: sasah})
.catch((err) => {
reply(mess.error()); 
})
break

case 'rename':
case 'roubar':  
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if(!q) return reply('*E o autor e o nome do pacote?*')
if(!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if(!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
sabrina.sendMessage(from, { sticker: sti }, {quoted: sasah})
.catch((err) => {
reply(mess.error()); 
})
break

case 'fstiker':
case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n• [😻🌟] A melhor bot do WhatsApp!`
reply(enviar.espere)
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(sabrina, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n• [😻🌟] A melhor bot do WhatsApp!`
reply(enviar.espere)
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(sabrina, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`)
}
break

case 'st':
case 'stk':
case 'sticker':
case 's':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n• [😻🌟] A melhor bot do WhatsApp!`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(sabrina, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n• [😻🌟] A melhor bot do WhatsApp!`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(sabrina, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix+command}`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
sabrina.sendMessage(from, {image: buff}, {quoted: sasah}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply(mess.error())
}
break

//=====================================\\

case 'metadinha': {
reagir(from, "💑️") /* Reagir a mensagem! */
anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
sabrina.sendMessage(from, {image: {url: random.male}, caption: "• Perfil Masculino"}, {quoted: sasah})
sabrina.sendMessage(from, {image: {url: random.female}, caption: `• Perfil Feminino`}, {quoted: sasah})
}
break

case 'comunismo':
case 'bolsonaro':
case 'bnw':
case 'beautiful':
case 'blur':
case 'affect':
case 'del':
case 'circle':
case 'dither':
case 'facepalm':
case 'invert':
case 'magik':
case 'rotate':
case 'rip':
case 'jail':
case 'trash':
case 'pixelate':
case 'sepia':
case 'wanted':
case 'wasted':
case 'lgbt':
case 'karaba':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
sabrina.sendMessage(from, {image: {url:`http://api-expr.sabapi.tech:6060/api/canvas/${command}?link=${link}&apikey=`+API_KEY_BRONXYS}}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_BRONXYS)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Ocorreu um erro ao adicionar o *efeito na imagem. Tente novamente!")  
}
}
break

case 'br':
try {
ppimg = await sabrina.profilePictureUrl(sender, 'image')} catch {ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'}
data = await getBuffer(`https://some-random-api.com/canvas/misc/youtube-comment?avatar=${ppimg}&comment=${comment}&username=${user}`)

break 
//========(SORTEIO-VOTAR-CASES)=========\\

case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
sabrina.sendMessage(from, {text:'O arquivo foi substituído para outro local com sucesso.'},{quoted: sasah})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
if(!SoDono)return reply(enviar.msg.donosmt)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
sabrina.sendMessage(from, {text: "O arquivo './index.js' foi atualizado com sucesso."},{quoted: sasah})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'getcase':
case 'puxarcase':
try{
if (!SoDono) return reply(enviar.msg.donosmt)
reply('Seu perdido é uma ordem! Aguarde um pouco mestre! <3')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
reply('A case não foi encontrada, você deve ter escrito errado...')
}
break

case 'figuemoji':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function figufigun() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_emoji?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
figufigun()
}
break

case 'figuflork':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function figsupup() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_flork?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
figsupup()
}
break

case 'figumemes':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function nometoque() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_memes?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
nometoque()
}
break

case 'figubebe':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidolovepartido() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_bebe?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidolovepartido()
}
break

case 'figucoreana':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidoee() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_coreana?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidoee()
}
break

case 'figuanime':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidoeelovepartidoeeu() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_anime?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidoeelovepartidoeeu()
}
break

case 'figufunny':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundobom() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_engracada?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundobom()
}
break

case 'figuanimais':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundoruim() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_animais?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundoruim()
}
break

case 'figudesenho':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundoruimeitamundoruim() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_desenho?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundoruimeitamundoruim()
}
break

case 'figuraiva':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundorm() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_raiva?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundorm()
}
break

case 'figuroblox':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundom() {
sabrina.sendMessage(from, { sticker: { url: `http://api-expr.sabapi.tech:6060/sticker/figu_roblox?apikey=`+API_KEY_BRONXYS } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundom()
}
break

case 'bann':
if(!isPremium && !SoDono) return reply("Só usuário premium pode utilizar este comando..") 
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido ou saiu do grupo.")
if(premium.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(groupAdmins.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
sabrina.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [menc_os2]})
sabrina.groupParticipantsUpdate(from, [menc_os2], "remove")  
break

case 'band':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify().includes(menc_os2)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
sabrina.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
sabrina.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'add': case 'unkick':
if(!SoDono) return reply(`Somente meu proprietário pode utilizar esse comando!`);
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo.')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido.`)
let [result] = await sabrina.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp.`)
let response = await sabrina.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
sabrina.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
sabrina.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta.`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
sabrina.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
sabrina.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
sabrina.sendMessage(from, {text: `Prontinho fiz o que você pediu.`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch(e) {
console.log("[ERROR]:"+ e)
}
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não posso remover meu dono 🤧')
sabrina.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
sabrina.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'promover': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
sabrina.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2]})
sabrina.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
sabrina.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_os2]})
sabrina.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'sorteio':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉 Meus parabéns ao vencedor do sorteio: ${q}\n-\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `• *Mencionando o vencedor:*  @${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("Só dono pode utilizar este comando...")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.key.fromMe) return 
blup = []
for ( i of groupMembers) {
if(!numerodono.includes(i.id)) blup.push(i.id)
}
blup.splice(blup.indexOf(botNumber), 1)
for ( i = 0; i < blup.length; i++) {
await sleep(500)
sabrina.groupParticipantsUpdate(from, [blup[i]], 'remove')
} 
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉 Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n-\n`
for(i = 0; i < 1; i++) {
teks += `• O número sorteado foi: ${numerossrt}`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

//==========(TTPS/ATTP)============\\


case 'attp': case 'attp2':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} bronxys`);
reply("AGUARDE, REALIZANDO AÇÃO.")
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
sabrina.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=${API_KEY_BRONXYS}`}}, {quoted: info}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;


//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'nick': case 'gerarnick': case 'fazernick': case 'estilizar':
try {
nick = args.join(' ')
if(ANT_LTR_MD_EMJ(q)) return reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
if(!q) return reply(`Escreva um texto para eu enviar ele com letras modificadas.\n• *Exemplo:* ${prefix+command} Sabrina`);
axios.get(`http://api-expr.sabapi.tech:6060/api/fazernick?nome=${nick}&apikey=`+API_KEY_BRONXYS).then(dados => {
nicks = dados.data
txt = `• Estilos aplicados ao texto: ${q}\n–\n`
for (let i = 0; i < nicks.length; i++) {
txt += `*${i+1}.* ${nicks[i]}\n–\n`
}
reply(`${txt.trim()}`)
}).catch(e => {
reply("Erro ao gerar as fontes modificadas ou estilizar seu texto...") 
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao gerar as fontes modificadas ou estilizar seu texto...") 
}
}
break

case 'chance':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))  
var avb = body.slice(7)
if(args.length < 1) return sabrina.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: sasah})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)} é de... ${random}%`
sabrina.sendMessage(from, {text: hasil, mentions: [sender]}, {quoted: sasah})
break

case 'namorar': case 'pediremnamoro': 
// @Matheus
setTimeout(() => {reagir(from, "💍")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2) return reply('Marque a mensagem ou o @ que queira pedir ela em namoro. Se você tomar um fora, juízo!')
if(botNumber.includes(menc_os2)) return reply("Não é possível pedir o bot em namoro, seu baitola.🙄")
if(JSON.stringify(namoro2).includes(menc_os2)) return reply(`Este usuário já foi pedido em namoro...`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false) return reply(`Essa pessoa já pediu alguém em namoro... Sinto muito ${pushname} 😕`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true) return reply(`Não será possível pedir essa pessoa em namoro, pois a mesma já está com outro(a). 🌚`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false) return mention(`Você já pediu para namorar com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}. Não brinque com os sentimentos dos outros! Se decida logo ou digite: ${prefix}cancelarpedido`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return mention(`Você já está namorando com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}...`)
namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hora, data: date})
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from})
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🌟🥳 Psiu *@${menc_os2.split('@')[0]}*! Você acaba de ser pedido em namoro por *@${sender.split('@')[0]}*.\nEai você aceita o pedido, *sim ou não?*`);
break

case 'cancelarpedido':
// @Matheus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return reply("Não há pedido de namoro para cancelar.")
C13 = namoro1.map(i => i.usu1).indexOf(sender)
C15 = namoro2.map(i => i.id).indexOf(namoro1[C13].usu2 + "@s.whatsapp.net")
if(namoro1[C13].namorados == true) return reply("Não é possível cancelar o pedido de namoro depois de aceito.")
namoro1.splice(C13, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C15, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
reply("Pedido de namoro cancelado com sucesso.")
break

case 'terminar_namoro':
// @Matheus
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
D1 = namoro1.map(i => i.usu1).indexOf(sender)
D2 = namoro1.map(a => a.usu1).indexOf(`${namoro1[D1].usu2}@s.whatsapp.net`)
namoro1[D2].namorados = false
reply(`Agora você está totalmente solteiro, notifiquei a(o) sua/seu parceiro sobre o término.`)
sabrina.sendMessage(`${namoro1[D1].usu2}@s.whatsapp.net`, {text: `Tenho uma notícia ruim sobre seu namoro, ele(a) acaba de terminar.\n–\n• Seja feliz e lembre dos todos os bons momentos que vocês tiveram juntos.`}, {quoted: info})
namoro1.splice(D2, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.splice(D1, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
break

case 'minhadupla': case 'dupla':
// @Matheus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
reagir(from, "❤️‍🩹")
D1 = namoro1.map(i => i.usu1).indexOf(sender)
if(namoro1[D1].namorados == false) return reply(`A pessoa que você pediu em namoro não aceitou o pedido ainda. Portanto, não é possível consultar os dados da dupla.️`)
txt = `@${namoro1[D1].usu1.split('@')[0]} namora com @${namoro1[D1].usu2}\n–\n• O pedido de namoro ocorreu às ${namoro1[D1].hora} do dia ${namoro1[D1].data}.\n–\n• Para realizar o término do namoro é fácil, use o comando: *${prefix}terminar_namoro*`
mention(txt)
break

case 'nazista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sabrina.sendMessage(from, {text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sabrina.sendMessage(from, {image: {url: imgnazista}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%.* `, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'gay':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sabrina.sendMessage(from, {text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero...'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 41 ) {var bo = 'você é né?'} else if(boiola == 42 ) {var bo = 'você é né?'} else if(boiola == 43 ) {var bo = 'você é né?'} else if(boiola == 44 ) {var bo = 'você é né?'} else if(boiola == 45 ) {var bo = 'você é né?'} else if(boiola == 46 ) {var bo = 'você é né?'} else if(boiola == 47 ) {var bo = 'você é né?'} else if(boiola == 4 ) {var bo = 'você é né?'} else if(boiola == 49 ) {var bo = 'você é né?'} else if(boiola == 50 ) {var bo = 'você é ou não?'} else if(boiola > 51) {var bo = 'você é gay...'
}
sabrina.sendMessage(from, {image: {url: imggay}, caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: sasah})
}, 7000)
break

case 'feio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sabrina.sendMessage(from, {text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'ainda tá na média'} else if(feio == 32 ) {var bo = 'dá pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'é fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'feio, mas um banho e se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'fein,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva.'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'é feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'feiooo dms vey.'} else if(feio == 50 ) {var bo = 'você é feio, mas não se encherga.'} else if(feio > 51) {var bo = 'você é feio demais bixo.'}
sabrina.sendMessage(from, {image: {url: imgfeio}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: sasah})
}, 7000)
break 

case 'corno':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sabrina.sendMessage(from, {text:`Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sabrina.sendMessage(from, {image: {url: imgcorno}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sabrina.sendMessage(from, {text:`Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sabrina.sendMessage(from, {image: {url: imgvesgo}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sabrina.sendMessage(from, {text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sabrina.sendMessage(from, {image: {url: imgbebado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sabrina.sendMessage(from, {text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sabrina.sendMessage(from, {image: {url: imggado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sabrina.sendMessage(from, {text:`Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sabrina.sendMessage(from, {image: {url: imggostoso}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 


case 'gostosa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sabrina.sendMessage(from, {text:`Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sabrina.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'morte': case 'death':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if (args.length == 0) return await reply(`Está faltando o nome da pessoa! Por exemplo: ${prefix+command} Victor`)
const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return await reply(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
death = `@${sender.split('@')[0]} — Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos de idade.`;
sabrina.sendMessage(from, {video: {url: deathcmd}, gifPlayback: true, caption: death, mentions: [sender]}, {quoted: sasah})
break;				
				
case 'matar': case 'mata':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
sabrina.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você Acabou de matar o(a) @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2]}, {quoted: sasah})
break 

case 'beijo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
sabrina.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Você deu um beijo gostoso na(o) @${menc_os2.split('@')[0]} 😁👉👈❤` , mentions: [menc_os2]}, {quoted: sasah})
break

case 'vab':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
psycatgames().then(async (array) => {
const { nsfw, questions } = array[Math.floor(Math.random() * array.length)]
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)]
sendPoll(sabrina, from, "Você prefere..", [pergunta1, pergunta2])
}).catch(console.error);
break

case 'eununca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
setTimeout(() => {reagir(from, "🙈")}, 100)
const pergunta_ = JSON.parse(fs.readFileSync('./arquivos/json/eununca.json'));
const getRandomINever = pergunta_[Math.floor(Math.random() * pergunta_.length)]
sendPoll(sabrina, from, getRandomINever, ["Eu nunca", "Eu já"]).catch(console.error);
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
reagir(from, "⛪️")
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]
sabrina.sendMessage(from, {text: mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}, {quoted: sasah, contextInfo: {"mentionedJid": mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}})
break

case 'cantadas': case 'cantada':  
reagir(from, "😼️")
cantadasbb = randomCantadas[Math.floor(Math.random() * randomCantadas.length)]   
let cantadasText = `*${cantadasbb}*`
sabrina.sendMessage(from, {text: cantadasText}, {quoted: sasah})
break

case 'fatos': case 'curiosidades':  
fatoskk = fatos[Math.floor(Math.random() * fatos.length)]   
let fatosText = `*${fatoskk}*`
sabrina.sendMessage(from, {text: fatosText}, {quoted: sasah})
break

case 'tapa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer da um tapa, a mensagem ou o @')
sabrina.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você acabou de da um tapa na raba da *@${menc_os2.split('@')[0]}*. 😼`, mentions: [menc_os2]}, {quoted: sasah})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
sabrina.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você acabou de dar um chute em *@${menc_os2.split('@')[0]}*.`, mentions: [menc_os2]}, {quoted: sasah})
break 

case 'dogolpe':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque a mensagem com o comando ou marque o @ do usuário..')
randomF = ["em iludir pessoas", "em ferir os sentimentos", "em dar chifre"]
sabrina.sendMessage(from, {text: `🌟☠️ *@${menc_os2.split("@")[0]}* é especialista *${randomF[Math.floor(Math.random() * randomF.length)]}*.`, mentions: [menc_os2]}, {quoted: sasah})
break

case 'shipo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2) return reply('Marque uma pessoa do grupo para encontrar o par dela.')
mention(`🌟 Eu shipo *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${menc_os2.split("@")[0]}* com uma porcentagem de *${Math.floor(Math.random() * 100)+"%"}*.`)
break

case 'casal':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
mention(`🌟👩🏼‍❤️‍💋‍👨🏻 - Sinto uma química muito forte entre *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}*, com uma chance de dar certo: *${Math.floor(Math.random() * 100)+"%"}*.`)
break

case 'rank':
case 'ranklevel':
case 'rankpatente':
if(!isGroup) return reply(enviar.msg.admin)
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(level2.length > 4) {
cortGG = level2.map(i => i)
rank = cortGG.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level2.length > 10) {var totalR = 10} else {var totalR = level2.length}
tc = `🎖️ Rank Level - [Type: *Global*]\n–`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
var newlevel = rank[i].contador
if(newlevel < 100){var newpatente = "Bronze I 🥉"}; if(newlevel >= 100 && newlevel < 200){var newpatente = "Bronze II 🥉"}; if(newlevel >= 200 && newlevel < 300){var newpatente = "Bronze III 🥉"}; if(newlevel >= 300 && newlevel < 400){var newpatente = "Prata I 🥈"}; if(newlevel >= 400 && newlevel < 500){var newpatente = "Prata II 🥈"}; if(newlevel >= 500 && newlevel < 600){var newpatente = "Prata III 🥈"}; if(newlevel >= 600 && newlevel < 700){var newpatente = "Ouro I 🥇"}; if(newlevel >= 700 && newlevel < 800){var newpatente = "Ouro II 🥇"}; if(newlevel >= 800 && newlevel < 900){var newpatente = "Ouro III 🥇"}; if(newlevel >= 900 && newlevel < 1200){var newpatente = "Ouro IV 🥇"}; if(newlevel >= 1200 && newlevel < 1500){var newpatente = "Platina I 🌀"}; if(newlevel >= 1500 && newlevel < 1800){var newpatente = "Platina II 🌀"}; if(newlevel >= 1800 && newlevel < 2100){var newpatente = "Platina III 🌀"}; if(newlevel >= 2100 && newlevel < 2700){var newpatente = "Platina IV 🌀"}; if(newlevel >= 2700 && newlevel < 3300){var newpatente = "Diamante I 💎"}; if(newlevel >= 3300 && newlevel < 3900){var newpatente = "Diamante II 💎"}; if(newlevel >= 3900 && newlevel < 4500){var newpatente = "Diamante III 💎"}; if(newlevel >= 4500 && newlevel < 5000){var newpatente = "Diamante IV 💎"}; if(newlevel >= 5000 && newlevel < 5500){var newpatente = "Paladino I 🔮"}; if(newlevel >= 5500 && newlevel < 6500){var newpatente = "Paladino II 🔮"}; if(newlevel >= 6500 && newlevel < 7500){var newpatente = "Paladino III 🔮"}; if(newlevel >= 7500 && newlevel < 9000){var newpatente = "Paladino IV 🔮"}; if(newlevel >= 9000 && newlevel < 10500){var newpatente = "Mestre I ❤️‍🔥"}; if(newlevel >= 10500 && newlevel < 12000){var newpatente = "Mestre II ❤️‍🔥"}; if(newlevel >= 12000 && newlevel < 13500){var newpatente = "Mestre III ❤️‍🔥"}; if(newlevel >= 13500 && newlevel < 15000){var newpatente = "Mestre IV ❤️‍🔥"}; if(newlevel >= 15000 && newlevel < 20000){var newpatente = "Mestre V ❤️‍🔥"}; if(newlevel >= 20000 && newlevel < 25000){var newpatente = "Desafiante I 👑"}; if(newlevel >= 25000 && newlevel < 30000){var newpatente = "Desafiante II 👑"}; if(newlevel >= 30000 && newlevel < 35000){var newpatente = "Desafiante III 👑"}; if(newlevel >= 35000 && newlevel < 40000){var newpatente = "Desafiante IV 👑"}; if(newlevel >= 40000 && newlevel < 50000){var newpatente = "Desafiante V 👑"}; if(newlevel >= 50000 && newlevel < 60000){var newpatente = "Usuário Superior I 🎓"}; if(newlevel >= 60000 && newlevel < 70000){var newpatente = "Usuário Superior II 🎓"}; if(newlevel >= 70000 && newlevel < 80000){var newpatente = "Mestre Supremo I 🪄"}; if(newlevel >= 80000 && newlevel < 90000){var newpatente = "Mestre Supremo II 🪄"}; if(newlevel >= 90000 && newlevel < 100000){var newpatente = "Mestre Supremo III 🪄"}; if(newlevel >= 100000 && newlevel < 150000){var newpatente = "Conquistador I ⚒️"}; if(newlevel >= 150000 && newlevel < 200000){var newpatente = "Conquistador II ⚒️"}; if(newlevel >= 200000 && newlevel < 300000){var newpatente = "Conquistador III ⚒️"}; if(newlevel >= 300000 && newlevel < 400000){var newpatente = "Desbravador I 🛰️"}; if(newlevel >= 400000 && newlevel < 500000){var newpatente = "Desbravador II 🛰️"}; if(newlevel >= 500000 && newlevel < 1000000){var newpatente = "Desbravador III 🛰️"}; if(newlevel >= 1000000 && newlevel < 1500000){var newpatente = "Grande Mestre I 🪩"}; if(newlevel >= 1500000 && newlevel < 2000000){var newpatente = "Grande Mestre II 🪩"}; if(newlevel >= 2000000 && newlevel < 5000000){var newpatente = "Grande Mestre III 🪩"}; if(newlevel >= 5000000 && newlevel < 10000000){var newpatente = "Supremacy X ⚜️"}; if(newlevel >= 10000000){var newpatente = "Veterano 🎩🏼‍♂️"}
tc += `\n*${i+1}°.* • Usuário(a): *${rank[i].nick}*\n• Usuário ID: *wa.me/${rank[i].id.split('@')[0]}*\n• Quantidade Total de XP: *${rank[i].contador}*\n• Atualmente a pessoa está no patente *${newpatente}*, no level: *${rank[i].level}*\n————`
}
}
reply(tc)
} else { 
reply(`Nenhum dado(s) foi retornado, tente novamente mais tarde️!`)
}
break

case 'patente':
case 'level':
if(!isGroup) return reply(enviar.msg.admin)
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(JSON.stringify(level2).includes(sender)) {
levelstts = level2.map(i => i.id).indexOf(sender)
var newlevel = level2[levelstts].contador
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I️‍"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II️‍"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV️‍"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V️‍"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremacy X"
if(newlevel >= 10000000) newpatente = "Veterano"
// É usado na barra apresentada na msg, que vai ser encaminhada pelo bot quando Usuário executar o cmd 'level' ou 'patente'.
if(newpatente == "Bronze I") {newcont = 100; newtt = 0}
if(newpatente == "Bronze II") {newcont = 200; newtt = 100}
if(newpatente == "Bronze III") {newcont = 300; newtt = 200}
if(newpatente == "Prata I") {newcont = 400; newtt = 300}
if(newpatente == "Prata II") {newcont = 500; newtt = 400}
if(newpatente == "Prata III") {newcont = 600; newtt = 500}
if(newpatente == "Ouro I") {newcont = 700; newtt = 600}
if(newpatente == "Ouro II") {newcont = 800; newtt = 700}
if(newpatente == "Ouro III") {newcont = 900; newtt = 800}
if(newpatente == "Ouro IV") {newcont = 1200; newtt = 900}
if(newpatente == "Platina I") {newcont = 1500; newtt = 1200}
if(newpatente == "Platina II") {newcont = 1800; newtt = 1500}
if(newpatente == "Platina III") {newcont = 2100; newtt = 1800}
if(newpatente == "Platina IV") {newcont = 2700; newtt = 2100}
if(newpatente == "Diamante I") {newcont = 3300; newtt = 2700}
if(newpatente == "Diamante II") {newcont = 3900; newtt = 3300}
if(newpatente == "Diamante III") {newcont = 4500; newtt = 3900}
if(newpatente == "Diamante IV") {newcont = 5000; newtt = 4500}
if(newpatente == "Paladino I") {newcont = 5500; newtt = 5000}
if(newpatente == "Paladino II") {newcont = 6500; newtt = 5500}
if(newpatente == "Paladino III") {newcont = 7500; newtt = 6500}
if(newpatente == "Paladino IV") {newcont = 9000; newtt = 7500}
if(newpatente == "Mestre I️‍") {newcont = 10500; newtt = 9000}
if(newpatente == "Mestre II") {newcont = 12000; newtt = 10500}
if(newpatente == "Mestre III️‍") {newcont = 13500; newtt = 12000}
if(newpatente == "Mestre IV️‍") {newcont = 15000; newtt = 13500}
if(newpatente == "Mestre V️‍") {newcont = 20000; newtt = 15000}
if(newpatente == "Desafiante I") {newcont = 25000; newtt = 20000}
if(newpatente == "Desafiante II") {newcont = 30000; newtt = 25000}
if(newpatente == "Desafiante III") {newcont = 35000; newtt = 30000}
if(newpatente == "Desafiante IV") {newcont = 40000; newtt = 35000}
if(newpatente == "Desafiante V") {newcont = 50000; newtt = 40000}
if(newpatente == "Usuário Superior I") {newcont = 60000; newtt = 50000}
if(newpatente == "Usuário Superior II") {newcont = 70000; newtt = 60000}
if(newpatente == "Mestre Supremo I") {newcont = 80000; newtt = 70000}
if(newpatente == "Mestre Supremo II") {newcont = 90000; newtt = 80000}
if(newpatente == "Mestre Supremo III") {newcont = 100000; newtt = 90000}
if(newpatente == "Conquistador I️") {newcont = 150000; newtt = 100000}
if(newpatente == "Conquistador II") {newcont = 200000; newtt = 150000}
if(newpatente == "Conquistador III️") {newcont = 300000; newtt = 200000}
if(newpatente == "Desbravador I️") {newcont = 400000; newtt = 300000}
if(newpatente == "Desbravador II️") {newcont = 500000; newtt = 400000}
if(newpatente == "Desbravador III️") {newcont = 1000000; newtt = 500000}
if(newpatente == "Grande Mestre I") {newcont = 1500000; newtt = 1000000}
if(newpatente == "Grande Mestre II") {newcont = 2000000; newtt = 1500000}
if(newpatente == "Grande Mestre III") {newcont = 5000000; newtt = 2000000}
if(newpatente == "Supremacy X️") {newcont = 10000000; newtt = 5000000}
// Barra de quanto falta para alcançar o próximo nível.
if(newlevel < 10000000) {
  sabPor = Number(Number(newlevel - newtt) / Number(newcont - newtt) * 100).toFixed(1)
  sabibis = newcont - newlevel
if(sabPor == 100) sabPor = `〘██████████〙${sabPor}%`
if(sabPor < 100) returnP = `〘█████████▒〙${sabPor}%`
if(sabPor < 90) returnP = `〘████████▒▒〙${sabPor}%`
if(sabPor < 80) returnP = `〘███████▒▒▒〙${sabPor}%`
if(sabPor < 70) returnP = `〘██████▒▒▒▒〙${sabPor}%`
if(sabPor < 60) returnP = `〘█████▒▒▒▒▒〙${sabPor}%`
if(sabPor < 50) returnP = `〘████▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 40) returnP = `〘███▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 30) returnP = `〘██▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 20) returnP = `〘█▒▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 10) returnP = `〘▒▒▒▒▒▒▒▒▒▒〙${sabPor}%`
} else {
returnP = ``
}
leveltxt = `*LEVELING* - Aqui está a sua situação sobre o mesmo.\n• Usuário: *@${sender.split("@")[0]}*\n• Você está atualmente no level *${level2[levelstts].level}* e no patente *${newpatente}*\n• Sua quantidade atual de XP é: *${level2[levelstts].contador}* ${newlevel < 10000000 ? `para alcançar o próximo falta *${newcont}*.` : ``}\n\t🔋 ${newlevel < 10000000 ? `*${returnP}*` : ``}\n–\n${newlevel < 10000000 ? `• Falta${Number(sabibis) > 1 ? `m` : ``} apenas *${sabibis} XP* para você upar para o próximo level.` : `Você já alcançou a patente máxima, ou seja, está muito a frente de todos.`}`
mention(`${leveltxt}`)
} else {
reply(`Nenhuma informação foi obtida sobre seu level/patente atual em sua solicitação.\n• *Tente novamente mais tarde!* Caso seja uma falha técnica entre em contato com o(a) dono(a) do bot.`)
}
break

case 'addlevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de level que deseja adicionar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que adicionar ao menos 1 level.")
if(q.includes(".")) return reply("Não pode número decimal.")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level += Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} adicionado${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarlevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de level que deseja remover")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que tirar ao menos 1 level")
if(q.includes(".")) return reply("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level -= Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} retirado${Number(args[0]) > 1 ? `s` : ``} deste usuário...`)
break

case 'addxp':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de XP que deseja adicionar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que add ao menos 1 de XP")
if(q.includes(".")) return reply("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador += Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} adicionada${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarxp':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de XP que deseja retirar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que tirar ao menos 1 de XP")
if(q.includes(".")) return reply("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador -= Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} retirada${Number(args[0]) > 1 ? `s` : ``} deste usuário...`)
break

case 'blocklevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!menc_os2) return reply("Marque o @ ou a mensagem da pessoa que deseja bloquear do contador.")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("O usuário mencionado não está presente no contador de mensagens.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == true) return reply("O usuário mencionado já está bloqueado no contador.")
level2[AB].block = true
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply("Usuário bloqueado do contador com sucesso... As interações do mesmo não serão mais contabilizadas!")
break

case 'unblocklevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!menc_os2) return reply("Marque o @ ou a mensagem da pessoa que deseja bloquear do contador.")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("O usuário mencionado não está presente no contador de mensagens.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == false) return reply("O usuário mencionado não está bloqueado atualmente!")
level2[AB].block = false
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply("Usuário desbloqueado do contador com sucesso! As interações do usuário mencionado voltarão a ser contabilizadas.")
break

case 'blocklevel-list': case 'blocklevellist':
if(!SoDono) return reply(enviar.msg.donosmt)
txt = `[Total: *${level2.length}*] - Lista de usuários bloqueados do contador de XP:\n`
let blocklevellist = 0
for(i = 0; i < level2.length; i++) {
  if(level2[i].block == true) {
txt += `*${i+1}.* @${level2[i].id.split('@')[0]}\n`
blocklevellist += 1
}
}
txt += `\n–\n• Total de Bloqueados: *${blocklevellist}*`
if(blocklevellist > 0) {
mention(txt)
} else {
reply("Não existe nenhum *usuário bloqueado* do contador XP.")
}
break

case 'rmlevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q && !menc_os2) return reply("Marque a pessoa que deseja apagar do contador.")
var qp = menc_os2 ? menc_os2 : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(!JSON.stringify(level2).includes(qp)) return reply("O usuário mencionado não está registrado no contador.")
AB = level2.map(i => i.id).indexOf(qp)
level2.splice(AB, 1)
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply("Usuário apagado foi contador com sucesso como o(a) senhor(a) pediu...")
break

case 'rankativos': 
case 'rankativo':   
if(!isGroup) return reply(enviar.msg.grupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `\n*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}\n• Quantidade de mensagens encaminhadas: *${blue[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${blue[i].cmd_messages}*\n• Usuário está conectado em um dispositivo: *${blue[i].aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${blue[i].figus}*\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n-\n`
if(bule.length == 0)boardi += '❌ Nenhum usuário inativo foi encontrado neste grupo.️'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split('@')[0]}\n• Quantidade de mensagens enviadas pelo usuário(a): *${bule[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${bule[i].cmd_messages}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${bule[i].aparelho}*\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
mentions(`Consulta individual da atividade do usuário @${menc_os2.split('@')[0]}\n–\n• Quantidade de mensagens enviadas pelo usuário(a): *${RSM_CN.messages}*\n• Quantidade de comandos executados pelo usuário(a): *${RSM_CN.cmd_messages}*\n• Usuário está conectado em um dispositivo: *${RSM_CN.aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${RSM_CN.figus}*\n–\n〘 *${groupName}* 〙`, [menc_os2], true)
} else {
mentions(`Não tenho nenhuma informação no grupo sobre o *@${menc_os2.split('@')[0]}*.`, [menc_os2], true)
}
break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `🏳️‍🌈 *RANK DOS 5 MAIS GAYS DO GRUPO!*\n—\n`
TMGAYS = ["Esse aí gosta de cheirar banana até umas horas kakak", "Gosta de ser dominado e chicoteado.", "Viadinho gente boa, nada contra os veados.","Esse aí roda mais que roda de caminhão.", "Mapoa é você meu amor?", "Esse aí ainda tá no armário, a franga tá presa!", "Profissional na garganta profunda!", "Essa bicha é finíssima!", "Essa aí precisa sair do closet ainda!", "Vixi esse aí e vitaminado!", "Vixi um gay vulgo irene!", "Poc fechosa, amo tu mona!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`
}
mencionarIMG(ABC, rnkgay)
break;

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `RANK DOS 5 MAIS GADO DO GRUPO 🐂🐃\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgado);
break;

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `🐂 *RANK DOS 5 MAIS CORNOS DO GRUPO!*\n—\n`
TMCRN = ["Familiar, leva até chifre com os parentes!", "Masoquista, leva chifre mas não larga a mulher!", "Atéu, leva chifre e não acredita!", "Político, só faz promessa e não cumpre o que fala!", "Esse é que leva chifres, vai embora e volta por causa das crianças.", "Xuxa, o que não larga a mulher por causa dos baixinhos.", "Famoso, aquele que por onde passa é reconhecido como tal.", "Inflação, a cada dia que passa o chifre aumenta."]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`
}
mencionarIMG(ABC, rnkcorno);
break;

case 'surubao': case 'suruba':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if (!q) return reply(`Eita, coloque o número de pessoas após o comando.`)
if (Number(q) > 5) return reply("Coloque um número menor, ou seja, abaixo de *5*.")
emojiskk = ["🥵", "😈", "🫣", "😏"]
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)]  
frasekk = [`tá querendo relações sexuais a ${q}, topa?`, `quer que *${q}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${emojis} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < q; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `*RANK DOS 5 MAIS GOSTOSOS DO GRUPO* 😏🔥\n—\n`
TMGSTS = ["Você tá olhando para um semi Deus!", "Mds, me apaixonei! Passa o insta gatinho?", "Ei ei gatinhas, o gostosão do grupo chegou!", "Gostoso? É, pena que é homem galinha!", "Não sei se comparo esse gostoso com o Ares Ridalgo!", "Cruz credo, porque tu tá aqui? Tu é feio desgraça!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
mencionarIMG(ABC, rnkgostoso);
break;

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`
TMNZTS = ["Soldado nazista, marcha com estilo.‍", "Comandante implacável, lidera com rigor.️", "Nazista estrategista, conquista territórios.️", "Mestre da ordem, disciplina em primeiro lugar.", "Soldado de elite, Nazista hardcore.", "General invencível, domina as batalhas.", "Nazista disciplinado, fiel à causa.", "Líder autoritário, impõe respeito.️", "Soldado feroz, nazismo no coração.", "Mestre da propaganda, convence com palavras.️", "Nazista moderno, tecnologia na guerra.", "Máquina de guerra, implacável e eficiente.️","Comandante supremo, nazismo eterno.", "Soldado leal, marcha em nome da ideologia.", "Nazista clássico, revive o passado.", "General poderoso, Nazista do século XXI.", "Comandante inabalável, Nazista de honra.", "Soldado devoto, nazismo no sangue.", "Mestre da retórica nazista, convence a todos.", "Nazista visionário, futuro sob a suástica."];
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`
}
mencionarIMG(ABC, rnknazista);
break;

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`
TMPAU = ["Pequeno pra cact, se mata maluco", `Pequenininho chega ser até fofo`, `Menor que meu dedo mindinho pequeno demais`, `Até que dá sentir, tá na média`, `Até que é grandinho`, `Grande até!`, `Gigantesco igual meu braço`, `Enorme quase chega no útero`, `Grandão demais em, e uii`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal"]
for (var i = 0; i < 5; i++) {
ABC += `• *${i+1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`
}
mencionarIMG(ABC, rnkpau);
break;

case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`)
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`)
if(!isModobn) return reply(mess.warningMB(prefix))
d = []
teks = `Estou mencionando o *${q}* do grupo: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(teks, d, true)
break;

case 'jogodavelha':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `『 *🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️* 』\n—\n💢 Alguém está jogando o *jogo da velha* no momento! Por favor, aguarde o término da partida para iniciar a próxima.\n-\n• @${boardnow.X} VS @${boardnow.O}\n—\n• Sua vez: @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
sabrina.sendMessage(from, {text: chatMove}, {quoted: sasah,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`Jogue com alguém, para inicar a partida : ${prefix + command} @membro.`);
const boardnow = setGame(`${from}`);
console.log(colors.red(time, "red"), colors.magenta("[ JOGO DA VELHA ]"), colors.white(`Iniciado - Sessão: ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./arquivos/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `『 *📌 ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ ⚔️* 』\n—\n@${sender.replace("@s.whatsapp.net", "")} _está te desafiando para uma partida de jogo da velha..._\n_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n—\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")) {
DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "Vitória do jogador"
}
if(vit == "derrota") {
var tes = "A vitória é do BOT"
}
if(vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n-\n${tes}`)
break

case 'anagrama':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(args.length == 0) return reply('Use 1 para ativar o jogo do anagrama, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
reply(`${II}O jogo já foi iniciado neste grupo!${II}\n• Anagrama: ${dataAnagrama2.embaralhada}\n• Dica: ${dataAnagrama2.dica}`)} else {
fs.writeFileSync(`./database/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
sabrina.sendMessage(from, {text: `Decifre a palavra embaralhada abaixo:\n• ${II}Anagrama:${II} ${dataAnagrama2.embaralhada}\n• ${II}Dica:${II} ${dataAnagrama2.dica}`}, {quoted: sasah})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)) return reply('Não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./database/grupos/games/anagrama/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'quizanimais':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(args.length == 0) return reply('Use 1 para ativar o quiz animais, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)) {
superrttrr = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
imagemtexto = `🤔 Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando esta mensagem.`
wew = await getBuffer(`${superrttrr.foto}`)   
await sabrina.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
} else {
fs.writeFileSync(`./database/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto = `🤔 Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando esta mensagem.`
wew = await getBuffer(`${quizanimais[animaisquiz].foto}`)  
await sabrina.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./database/grupos/games/quiz-animais/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'whatmusic':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const whatMAle = Math.floor(Math.random() * whatMusicAr.length)
if(args.length == 0) return reply('Use 1 para ativar o jogo, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)) {
dataW = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
reply(`Já existe uma partida iniciada aqui no grupo, confira:\n–\n${dataW.trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${dataW.dica}`)} else {
fs.writeFileSync(`./database/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[whatMAle])}`)
textW = `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${whatMusicAr[whatMAle].trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${whatMusicAr[whatMAle].dica}`
sabrina.sendMessage(from, {text: textW}, {quoted: sasah})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)) return reply('Não tem como desativar o jogo, pois ele não foi ativado')
fs.unlinkSync(`./database/grupos/games/wmusic/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'gartic':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const garticquiz = Math.floor(Math.random() * garticArchives.length)
if(args.length == 0) return reply('Use 1 para ativar o gartic, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) {
dataGartic2 = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)  
await sabrina.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
} else {
fs.writeFileSync(`./database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[garticquiz])}`)
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"
🤔 - Hmmm, contém traços? ${garticArchives[garticquiz].contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${garticArchives[garticquiz].imagem}`)  
await sabrina.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) return reply('Não tem como desativar o gartic pôs ele não foi ativado.')
fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'enigma':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length)
if(args.length == 0) return reply('Use 1 para ativar o enigma, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) {
SAB_SAB_ENI = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${SAB_SAB_ENI.charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)  
await sabrina.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
} else {
fs.writeFileSync(`./database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[engimaSolu])}`)
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${enigmaArchive[engimaSolu].charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)  
await sabrina.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) return reply('Não tem como desativar o enigma pôs ele não foi ativado.')
fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`)
reply("Desativado com sucesso.")
}
break



case 'revelargartic':  
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!')
if(fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) return ("Não existe nenhuma partida atual do jogo neste grupo.")
let dataAnagramaa = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta da afirmação era: ${II}${dataAnagramaa.resposta}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'revelarenigma':
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!')
if(fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) return ("Não existe nenhuma partida atual do jogo neste grupo.")
let eni1 = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta do enigma era: ${II}${eni1.respostaEne}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'icms':
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [result1, result2] = txt.split("|")
if(!q.includes("|")) return reply(mess.syntaxIcms(prefix))
await fetchJson(`http://api-expr.sabapi.tech:6060/api/icms?valor=${encodeURIComponent(result1)}&ddd=${encodeURIComponent(result2)}&apikey=`+API_KEY_BRONXYS).then(data => {
sabrina.sendMessage(from, {text: mess.icmsResult(data)}, {quoted: sasah})
}).catch(e => {
return reply(mess.error())
})
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = await fetch(qviado).then(v => v.buffer())
sabrina.sendMessage(from, {audio: soundft, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
break

//=======================================\\

//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
sabrina.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
sabrina.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: sasah })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
sabrina.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: sasah })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
buffer = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sabrina.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break



//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('Marque a figurinha animada!')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('Aguarde, estou convertendo a figurinha para o formato gif.')
a = await webp_mp4(buff)
sabrina.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: sasah}).catch(e => {
reply("Erro ao realizar o envio do sticker!") 
})
DLT_FL(buff)
}
} catch {
reply(mess.error())
}
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sabrina.sendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: info})
break

case 'recusar':
if(!SoDono) return reply(enviar.msg.donosmt)
sabrina.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`})
break;

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
sabrina.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'sip': case 'ip': 
if (!q) return reply(`Informe o ip que você deseja! *Exemplo:* ${prefix+command} 8.8.8.8`)
try {
ip = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(q)}`);
sabrina.sendMessage(from, {image: {url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`}, caption: mess.searchIpAdress(ip)})
sabrina.sendMessage(from, {location: {degreesLatitude: ip.data.latitude,degreesLongitude: ip.data.longitude, addrees: ''}})
} catch {
reply(mess.error())
}
break

case 'cep': case 'scep': 
var query = args.join(" ")
if (!query) return reply(`Cadê o cep?`)
try {
res = await fetchJson(`http://api-expr.sabapi.tech:6060/api/cep?code=${query}&apikey=`+API_KEY_BRONXYS)
reply(mess.searchCep(res))
} catch {
reply(mess.error())
}
break

// RPG //

case 'menurpg': case 'menusabcity':
if(!isGroup) return (enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.rpgmenu(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'modosabrpg': case 'modosabcity': case 'modosc': case 'sabrpg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.admin)
if(!q) return reply(`Você está usando o comando de forma errada, verifique:\n• Ex: *${prefix+command} 1/0* _(1 para ativar, 0 para desativar)_`)
if(Number(args[0]) === 1) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == true) return reply("Sistema *#Sab'City* - O sistema já está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: true})
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = true
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
}
reply("Sistema *#Sab'City* - Foi efetuado a ativação no grupo com sucesso...")
} else if(Number(args[0]) === 0) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == false) return reply("Sistema *#Sab'City* - O sistema não está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: false})
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = false
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
}
reply("Sistema *#Sab'City* - Foi desabilitado com sucesso no grupo.")
}
break

case 'rgsc':
case 'rgsabcity':
if(!isGroup) return (enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(JSON.stringify(sabrpg).includes(sender)) return reply(`Seu registro foi encontrado em meu banco de dados! Use *${prefix}meusc* e consulte seu registro/dados`)
if(!q) return reply(`Digite seu nome após o comando, para seu registro ser feito com êxito.`)
if(q.includes('@')) return reply(`O registro foi cancelado na Sab's City! Foi detectado um *@* no campo, retire-o e realize o registro novamente.`)
bancos = ["Inter", "NuBank", "PagBank️", "Bradesco", "Next", "Caixa", "Santander️", "Banco do Brasil", "PicPay", "PayPal", "Itaú"]
bank = bancos[Math.floor(Math.random() * bancos.length)]
horarg = moment.tz('America/Sao_Paulo').format('HH:mm');
hora10 = moment.tz('America/Sao_Paulo').format('HH');
datarg = moment.tz('America/Sao_Paulo').format('DD/MM');
dia10 = moment.tz('America/Sao_Paulo').format('DD');
m10 = moment.tz('America/Sao_Paulo').format('MM');
sabrpg.push({id: sender, gpid: from, hrg: horarg, drg: datarg, nome: q, namebank: bank, money: 0, pixD: 5, pixL: 100, limiteC: 15, horaC: hora10, diaC: dia10, mC: m10, limiteTh: 3, hrT: hora10, limiteTd: 24, diaT: dia10, mT: m10, bcbet: true})
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Registro efetuado e concluído com êxito! Seja bem vindo(a) à Sab's City, ${q}`)
setTimeout(() => {
sabrina.sendMessage(from, {text: `Agora você pode trabalhar e ganhar muito dinheiro jogando e apostando em nossos jogos. Para consultar seu saldo atual, use: *${prefix}minhacarteira*`})
}, 1100)
break

case 'dados_sc':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`ID do usuário não encontrado ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
reply(`• ID do usuário: ${sabrpg[AB].id}\n• ID do grupo: ${sabrpg[AB].gpid}\n• Hora de registro: ${sabrpg[AB].hrg}\n• Data de registro: ${sabrpg[AB].drg}\n• Nome de usuário: ${sabrpg[AB].nome}\n• Nome do banco: ${sabrpg[AB].namebank}\n• Dinheiro: ${sabrpg[AB].money}\n• Quantidade de pix diário: ${sabrpg[AB].pixD}\n• Limite de pix: ${sabrpg[AB].pixL}\n• Limite do cassino: ${sabrpg[AB].limiteC}\n• Hora do cassino: ${sabrpg[AB].horaC}\n• Dia do cassino: ${sabrpg[AB].diaC}\n• Mês do cassino: ${sabrpg[AB].mC}\n• Limite de trabalho por hora: ${sabrpg[AB].limiteTh}\n• Hora do trabalho: ${sabrpg[AB].hrT}\n• Limite de trabalho diário: ${sabrpg[AB].limiteTd}\n• Dia de trabalho: ${sabrpg[AB].diaT}\n• Mês de trabalho: ${sabrpg[AB].mT}`)
break

case 'sairsbcity':
case 'sairsc':
case 'sairsabcity':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`ID do usuário não encontrado ou inexistente...`)
if(Number(args[0]) === 1) {
if(JSON.stringify(cavalosrpg).includes(sender)) {
AC = cavalosrpg.map(i => i.id).indexOf(sender)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
}
if(JSON.stringify(galosrpg).includes(sender)) {
AD = galosrpg.map(i => i.id).indexOf(sender)
galosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
if(JSON.stringify(roubosrpg).includes(sender)) {
AE = roubosrpg.map(i => i.id).indexOf(sender)
roubosrpg.splice(AE, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
AB = sabrpg.map(i => i.id).indexOf(sender)
sabrpg.splice(AB, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(sabrpg))
reply(`Seu registro na Sab's City foi deletado com sucesso... Volte sempre!`)
} else {
reply(`Ao sair da Sab's City, você concorda em apagar o seu registro completamente, isto é, todo o seu histórico de jogo.\n• Caso você esteja de acordo com isso, use: *${prefix+command} 1*`)
}
break

case 'delsabcity':
case 'delsc':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Digite o número do usuário que deseja remover da Sab's City.`)
qp = q + `@s.whatsapp.net`
AB = sabrpg.map(i => i.id).indexOf(qp)
if(AB < 0) return reply(`O ID do usuário não foi localizado, *certifique-se se ele já tem registro.*`)
if(JSON.stringify(cavalosrpg).includes(qp)) {
AC = cavalosrpg.map(i => i.id).indexOf(qp)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
}
if(JSON.stringify(galosrpg).includes(qp)) {
AD = galosrpg.map(i => i.id).indexOf(qp)
galosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
sabrpg.splice(AB, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`O usuário acaba de ser removido da *Sab's City*, por mandato da soberania.`)
break

case 'rpglistgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.admin)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
membros = `Lista de participantes do *grupo* que estão registrados no *RPG Sab's City*:\n–\n`
rpglistgp = 0
for(i = 0; i < groupMembers.length; i++) {
if(JSON.stringify(sabrpg).includes(groupMembers[i].id)) {
membros += `Membro ID ${i+1}. ❪▧⃯⃟ฺ࣭࣪͘ꕸ▸ @${groupMembers[i].id.split('@')[0]}\n`
rpglistgp += 1
}
}
membros += `–\n• Quantidade: *${rpglistgp} participante(s).*`
mention(membros)
break

case 'meusc':
case 'meusabcity':
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
myid = sabrpg[AB].id.split('@')[0].slice(5)
if(JSON.stringify(cavalosrpg).includes(sender)){
AC = cavalosrpg.map(a => a.id).indexOf(sender)
percentualcavalo = Number(cavalosrpg[AC].countVc)/Number(Number(cavalosrpg[AC].countVc)+Number(cavalosrpg[AC].countDc))*100
if(Number(percentualcavalo) > 0) {
porcemnmr = percentualcavalo
} else {
porcemnmr = 0
}
runcav = `• Quantidade de Cavalos que você possuí atualmente: *${cavalosrpg[AC].cavalos.length}*\n• Quantidade de Vitórias: *${cavalosrpg[AC].countVc}*\n• Porcentagem de Ganhos: *${Number(porcemnmr).toFixed(1)}%*\n• Dinheiro investido: *R$ ${Number(Number(cavalosrpg[AC].capitalVc)+Number(cavalosrpg[AC].capitalDc)).toFixed(2)}*\n• Dinheiro lucrado: (R$): *R$ ${Number(cavalosrpg[AC].capitalVc).toFixed(2)}*`
} else {
runcav = `️Você atualmente não está registrado na *corrida de cavalos*.`
}
if(JSON.stringify(galosrpg).includes(sender)){
AE = galosrpg.map(b => b.id).indexOf(sender)
percentualgalos = Number(galosrpg[AE].countVg)/Number(Number(galosrpg[AE].countVg)+Number(galosrpg[AE].countDg))*100
if(Number(percentualgalos) > 0) {
porcegalos = percentualgalos
} else {
porcegalos = 0
}
brigadegalo = `• Quantidade de Galos que você possuí atualmente: *${galosrpg[AE].galos.length}*\n• Quantidade de Vitórias: *${galosrpg[AE].countVg}*\n• Porcentagem de Ganhos: ${Number(porcegalos).toFixed(1)}%\n• Dinheiro investido: *R$ ${Number(galosrpg[AE].dinVg).toFixed(2)}*\n• Dinheiro lucrado: (R$): ${Number(galosrpg[AE].luckVg). toFixed(2)}`
} else {
brigadegalo = `Você atualmente não está registrado na *briga de galos*...`
}
if(JSON.stringify(roubosrpg).includes(sender)) {
SC = roubosrpg.map(b => b.id).indexOf(sender)
if(roubosrpg[SC].segurança > 20) {
tlvz = roubosrpg[SC].segurança
tlvz -= 20
tlvz /= 20
segurança = `Lv. ${tlvz}`
} else {
segurança = `*Você não possui nenhum level de segurança.*`
}
} else {
segurança = `*Você não possui nenhum level de segurança.*`
}
txt = `Olá *${sabrpg[AB].nome}*, tudo bem? Aqui está a sua solicitação:\n–\n• User ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n• Saldo disponível: *R$ ${bctxt}*\n•️ Proteção: ${segurança}\n–\n• [🐴] *Corrida de Cavalo(s):*\n${runcav}\n–\n• [🐓] *Briga de Galo(s):*\n${brigadegalo}`
reply(txt)
break

case 'minhacarteira':
case 'carteira':
case 'meubanco':
case 'saldo':
if(!isSabCityOFF) return reply(`Olá, o modo RPG não esta a`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
caixa = []
for(i = 0; i < sabrpg.length; i++){
caixa.push({idnmr: sabrpg[i].id, nmr: i+1})
}
enc = caixa.map(b => b.idnmr).indexOf(sender)
if(Number(caixa[enc].nmr) < 100) {
if(Number(caixa[enc].nmr) < 10) {
page = `00` + caixa[enc].nmr
} else {
page = `0` + caixa[enc].nmr
}
} else {
page = caixa[enc].nmr
}
myid = sabrpg[AB].id.split('@')[0].slice(5)
txt = `Olá *${sabrpg[AB].nome}*, tudo bem? Aqui está a sua solicitação:\n—\n• [💵] *Informações Bancárias*\n• Seu banco atual: *${sabrpg[AB].namebank}*\n• Você está atualmente com *R$ ${bctxt}* em sua carteira para uso.\n–\n• [🧾] *Informações de Registro*\n• Seu ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n• Você realizou o registro na _Sab's City_ às *${sabrpg[AB].hrg} hora(s)* no dia *${sabrpg[AB].drg}*.\n–\n• [📖] *Livro de Registro*\n_Com base em meu livro de registros_, você foi registrado na página: *${page}*`
reply(txt)
break

case 'ranksc':
case 'ranksabcity':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
setTimeout(() => {reagir(from, "🤑")}, 300)
matheuzinho = sabrpg.map(i => i)
rank = matheuzinho.sort((a, b) => (a.money < b.money) ? 0 : -1)
if(sabrpg.length > 5) {
var totalR = 5
} else {
var totalR = sabrpg.length
}
txt = `🌟🧾 *Rank Sab's City:*\n–\n`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
txt += `${i + 1}º Lugar - Usuário: *${rank[i].nome}*
• Saldo do Usuário: R$ ${Number(rank[i].money).toFixed(2)}\n–\n`
}
}
reply(txt)
break

case 'buscarsc':
case 'buscarsabcity':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(sabrpg).includes(`${q}@s.whatsapp.net`)) return reply(`ID não encontrado ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(`${q}@s.whatsapp.net`)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
bcid = sabrpg[AB].id.split('@')[0]
cort = bcid.slice(5)
reply(`© *Sab's City:* | Carteira e informações do Usuário:\n–\n• Nome do Usuário: *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n• Saldo disponível: *R$ ${bctxt}*\n—–\n• [🧾] *Informações de Registro:*\n• ID do Usuário: *R${bcid.split(cort)[0]}GP${cort}BC*\n• Registrou-se às *${sabrpg[AB].hrg}* hora(s) do dia *${sabrpg[AB].drg}*.`)
break

case 'addpix':
if(!SoDono) return reply(enviar.msg.donosmt)
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Falta a chave pix`)
if(!pix) return reply(`Falta o PIX`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(pix)) return reply(`${pix} não é um número...`)
MD = sabrpg[AB].money
addpix = Number(MD) + Number(pix)
sabrpg[AB].money = addpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`R$ ${Number(pix).toFixed(2)} foram adicionados a conta ${sabrpg[AB].nome}`)
break

case 'setpix':
if(!SoDono) return reply(enviar.msg.donosmt)
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Falta a chave pix`)
if(!pix) return reply(`Falta o PIX`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(pix)) return reply(`${pix} não é um número...`)
sabrpg[AB].money = pix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`O saldo da conta ${sabrpg[AB].nome} foi setado em R$ ${Number(pix).toFixed(2)}`)
break

case 'delpix':
if(!SoDono) return reply(enviar.msg.donosmt)
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Falta a chave pix`)
if(!pix) return reply(`Falta o PIX`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(pix)) return reply(`${pix} não é um número...`)
MD = sabrpg[AB].money
addpix = Number(MD) - Number(pix)
sabrpg[AB].money = addpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`R$ ${Number(pix).toFixed(2)} foram retirados da conta ${sabrpg[AB].nome}`)
break

case 'zerarsc':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Falta a chave pix`)
AB = sabrpg.map(i => i.id).indexOf(`${q}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${q}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(q)) return reply(`${q} não é um número...`)
sabrpg[AB].money = 0
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`A conta ${sabrpg[AB].nome} foi zerada... Seu saldo agora é R$ 00.00`)
break

case 'gerargf':
if(!SoDono) return reply(enviar.msg.donosmt)
var [value, quant] = q.split('/')
if(!value) return reply(`Defina o valor que você desejar adicionar ao giftCard.`)
if(!quant) return reply(`Defina a quantidade de usuários que poderam usar o *código-resgate*.`)
if(!Number(value)) return reply(`${value} não é número!`)
if(!Number(quant)) return reply(`${quant} não é número!`)
dategf = moment.tz('America/Sao_Paulo').format('DDMMYY')
horagf = moment.tz('America/Sao_Paulo').format('HHmmss')
codegf = `P${value}M${quant}BC${dategf+horagf}QC${Number(Number(Number(dategf)+Number(horagf))/Number(quant)).toFixed(0)}RPG`
coderpg.push({codeid: codegf, valor: value,quantmax: Number(quant).toFixed(0), usus: []})
fs.writeFileSync("./database/usuarios/SystemRPG/coderpg.json", JSON.stringify(coderpg))
reply(`Código de *R$ ${Number(value).toFixed(2)}* gerado, válido para ${Number(quant) <= 1 ? `um usuário apenas...` : `os ${quant} primeiros...`}\n• Para resgatar o benefício, use o comando: *${prefix}resgatargf*`)
setTimeout(() => {
sabrina.sendMessage(from, {text: codegf})
}, 1000)
break

case 'delgf':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Digite o código que deseja remover do RPG`)
AB = coderpg.map(i => i.codeid).indexOf(q)
if(AB < 0) return reply(`Código não encontrado ou inexistente...`)
coderpg.splice(AB, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/coderpg.json", JSON.stringify(coderpg))
reply(`O código *${q}* foi desabilitado com sucesso, ou seja, o código a partir de agora está inválido.`)
break

case 'resgatargf':
case 'resgatar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
AB = coderpg.map(i => i.codeid).indexOf(q)
BD = sabrpg.map(b => b.id).indexOf(sender)
if(!q) return reply(`Você esqueceu de digitar o código junto ao comando! _Ex: ${prefix+command} ABCD1234_`)
if(!JSON.stringify(coderpg).includes(q)) return reply(`Error *500*: Código Inexistente! ✋🏼`)
if(JSON.stringify(coderpg[AB].usus).includes(sender)) return reply(`Você já usou, ou seja, _o código só pode ser resgatado 1 vez por usuário._`)
if(Number(coderpg[AB].usus.length) < Number(coderpg[AB].quantmax)) {
coderpg[AB].usus.push({id: sender})
fs.writeFileSync("./database/usuarios/SystemRPG/coderpg.json", JSON.stringify(coderpg))
MD = sabrpg[BD].money
sabrpg[BD].money = Number(MD) + Number(coderpg[AB].valor)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Estou verificando se o código é real, para atribuir o benefício a você!`)
setTimeout(() => {
mention(`✅️💰 *O código informado é válido!* Parabéns *@${sender.split("@")[0]}*, você acaba de resgatar o seu benefício.\n• Foi adicionado à sua carteira, um valor de: *R$ ${Number(coderpg[AB].valor).toFixed(2)}*`)
}, 3000)
} else {
reply(`Sinto muito!😿 O código informado está inválido.\n• Por favor, entre em contato com meu dono, caso seja um engano!`)
}
break

case 'codelist':
case 'listacodigo':
case 'listacodigos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(coderpg.length < 0) return reply(`Sinto muito!😿 Não existe nenhum código disponível no momento.`)
txt = `[Total: *${coderpg.length}*] - Códigos de resgate disponíveis.\n• Para resgatar o benefício, use o comando: *${prefix}resgatargf <code>*`
for(i =0; i < coderpg.length; i++) {
txt += `\n—\n*[${i+1}]* » • Código: *${coderpg[i].codeid}*\n• Valor do Gift Card: *R$ ${Number(coderpg[i].valor).toFixed(2)}*\n• Número de usuário(s) que podem resgatar o mesmo: *${Number(coderpg[i].quantmax) - Number(coderpg[i].usus.length)}*`
}
reply(txt)
break

case 'fazerpix': case 'transferir':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
datepix = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
dateid = moment.tz('America/Sao_Paulo').format('DDMMYY')
horaid = moment.tz('America/Sao_Paulo').format('HHmmss')
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Coloque a chave PIX (número do indivíduo) para fazer a transferência bancária...`)
if(sender.includes(nmr)) return reply(`Não é possível enviar um pix para você mesmo...`)
if(!pix) return reply(`Coloque uma barra ( / ) após a chave, e defina o valor a ser enviado, ex:
${prefix+command} 559181695945/100`)
if(Number(pix) < 0.01) return reply(`Não é possível transferir menos que 1 centavo...`)
if(!Number(pix)) return reply(`${pix} não é número... 😿`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
BC = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(Number(pix) > Number(sabrpg[AB].money)) return reply(`Você não tem saldo suficiente para efetuar essa transferência...`)
if(sabrpg[AB].namebank == "Inter"){tpb = 0.1}
if(sabrpg[AB].namebank == "NuBank"){tpb = 0.2}
if(sabrpg[AB].namebank == "PagBank"){tpb = 0.3}
if(sabrpg[AB].namebank == "Bradesco"){tpb = 0.4}
if(sabrpg[AB].namebank == "Itaú"){tpb = 0.5}
if(sabrpg[AB].namebank == "Next"){tpb = 0.6}
if(sabrpg[AB].namebank == "Caixa"){tpb = 0.7}
if(sabrpg[AB].namebank == "Santander️"){tpb = 0.8}
if(sabrpg[AB].namebank == "Banco do Brasil"){tpb = 0.9}
if(sabrpg[AB].namebank == "PicPay"){tpb = 1}
if(sabrpg[AB].namebank == "PayPal"){tpb = 1.1}
if(sabrpg[AB].namebank == sabrpg[BC].namebank) {
taxabanco = 0
} else {
taxabanco = tpb
}
taxageral = Number(pix)*Number(taxabanco)/100
addpix = Number(sabrpg[BC].money) + Number(Number(pix) - Number(taxageral))
delpix = Number(sabrpg[AB].money) - Number(pix)
sabrpg[BC].money = addpix
sabrpg[AB].money = delpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
myid = sabrpg[AB].id.split('@')[0].slice(5)
suid = sabrpg[BC].id.split('@')[0].slice(5)
imn = sabrpg[AB].nome.slice(1)
isn = sabrpg[BC].nome.slice(1)
mimn = sabrpg[AB].nome.split(imn)[0]
misn = sabrpg[BC].nome.split(isn)[0]
comprovante = `🧾 *Comprovante:*\n—\n• Pix: *R$ ${Number(Number(pix) - Number(taxageral)).toFixed(2)}*\n• Código ID: *${mimn.toUpperCase()+myid+misn.toUpperCase()+suid}P${dateid}X${horaid}RPG*\n•️ Taxa do Banco: *${taxabanco}%*\n—–\n• A transferência foi realizada às *${hora120}* do dia: *${datepix}*\n——\n• *Envio:* *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n• ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n——\n• Recebimento: *${sabrpg[BC].nome}*\n• Banco: *${sabrpg[BC].namebank}*\n• ID: *R${sabrpg[BC].id.split(suid)[0]}GP${suid}BC*`
if(JSON.stringify(sabrpg).includes(nmrdn)) {
setTimeout(() => {
BD = sabrpg.map(d => d.id).indexOf(nmrdn)
pixdono = sabrpg[BD].money
sabrpg[BD].money = Number(pixdono) + Number(taxageral)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}, 1000)
}
reply(comprovante)
break

case 'chavepix':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(sabrpg).includes(menc_os2)) return sabrina.sendMessage(from, {text: `Usuário (a) @${menc_os2.split('@')[0]} não consta em nosso banco...`, mentions: [menc_os2]}, {quoted: sasah})
AB = sabrpg.map(i => i.id).indexOf(sender_ou_n)
reply(`Chave encontrada/localizada! 🌟🧾\n• Nome: *${sabrpg[AB].nome}*\n• Chave: *${sabrpg[AB].id.split('@')[0]}*`)
break

case 'meupix':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
reply(`Aqui está sua numeração da chave pix: *${sabrpg[AB].id.split('@')[0]}*`)
break

case 'sopk':
if (isGroup) return reply("Só caminha")
break 
case 'trocarbanco':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!q) return reply(`Escolha um número correspondente ao banco...\nEx: ${prefix+command} 2 _(Serão necessários R$ 2500.00 para realizar essa ação)_\n––\nBancos disponíveis:\n• Opção - Número: [1] => Inter\n• Opção - Número: [2] => NuBank\n• Opção - Número: [3] => PagBank\n• Opção - Número: [4] => Bradesco\n• Opção - Número: [5] => Itaú\n• Opção - Número: [6] => Next\n• Opção - Número: [7] =>Caixa\n• Opção - Número: [8] => Santander\n• Opção - Número: [9] => Banco do Brasil\n• Opção - Número: [10] => PicPay\n• Opção - Número: [11] => PayPal️`)
if(Number(args[0]) === 1){ var bankDD = `Inter`}; if(Number(args[0]) === 2){ var bankDD = `NuBank`}; if(Number(args[0]) === 3){ var bankDD = `PagBank`}; if(Number(args[0]) === 4){ var bankDD = `Bradesco`}; if(Number(args[0]) === 5){ var bankDD = `Itaú`}; if(Number(args[0]) === 6){ var bankDD = `Next`}; if(Number(args[0]) === 7){ var bankDD = `Caixa`}; if(Number(args[0]) === 8){ var bankDD = `Santander️`}; if(Number(args[0]) === 9){ var bankDD = `Banco do Brasil`}; if(Number(args[0]) === 10){ var bankDD = `PicPay`}; if(Number(args[0]) === 11){ var bankDD = `PayPal️`}
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 2500) return reply(` Você não tem saldo suficiente pra realizar esta ação... São necessários R$ 2500.00 para alterar seu banco`)
MD = Number(sabrpg[AB].money) - Number(2500)
sabrpg[AB].money = MD
sabrpg[AB].namebank = bankDD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
sabrina.sendMessage(from, {text: `Troca efetuada com sucesso *@${sender.split('@')[0]}*, seu banco agora é o(a) ${bankDD}.`, mentions: [sender]})
break

case 'trocarnome':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!q) return reply(`Digite o novo nome junto ao comando... Lembre-se que essa ação custará R$ 1200.00\nEx: ${prefix+command} matheuzinho`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 1200) return reply(` Você não tem saldo suficiente pra realizar esta ação... São necessários R$ 1200.00 para alterar seu nome`)
MD = Number(sabrpg[AB].money) - Number(1200)
sabrpg[AB].money = MD
sabrpg[AB].nome = q
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
sabrina.sendMessage(from, {text: `Troca efetuada com sucesso @${sender.split('@')[0]}, seu nome foi alterado para ${q}.`, mentions: [sender]})
break

case 'trabalhar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
horaT = moment.tz('America/Sao_Paulo').format('HH')
dataT = moment.tz('America/Sao_Paulo').format('DD')
data2T = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].limiteTh) === 0 && Number(sabrpg[AB].limiteTd) > 0 && Number(sabrpg[AB].hrT) === Number(horaT)) return reply(`Você já trabalhou agora... Volte na próxima hora.`)
//trabalho normal...
if(Number(sabrpg[AB].limiteTh) > 0 && Number(sabrpg[AB].hrT) === Number(horaT) && Number(sabrpg[AB].diaT) === Number(dataT) && Number(sabrpg[AB].mT) === Number(data2T)) {
TBALE = Math.floor(Math.random() * 50) + 40
TBLH = Number(sabrpg[AB].money) + Number(TBALE)
HT = sabrpg[AB].limiteTh - 1
TD = sabrpg[AB].limiteTd - 1
sabrpg[AB].money = TBLH
sabrpg[AB].money = TBLH
sabrpg[AB].money = TBLH
sabrpg[AB].limiteTh = HT
sabrpg[AB].limiteTd = TD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns ${sabrpg[AB].nome}, você trabalhou e ganhou *R$ ${Number(TBALE).toFixed(2)}* até depois!🫡`)
}
HTR = sabrpg[AB].hrT + 1
//passar para a próxima hora...
if(Number(horaT) > Number(sabrpg[AB].hrT) && Number(sabrpg[AB].limiteTd) > 0 && Number(sabrpg[AB].diaT) === Number(dataT) && Number(sabrpg[AB].mT) == Number(data2T)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].hrT = horaT
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Já tá pronto pra trabalhar dnv? Digite o comando novamente enquanto eu preparo suas coisas...`)
}
if(Number(sabrpg[AB].limiteTd) < 1 && Number(sabrpg[AB].diaT) === Number(dataT)) return reply(`Você já trabalhou muito por hoje... Volte amanhã!`)
//passar para o outro dia...
if(Number(dataT) > Number(sabrpg[AB].diaT) && Number(sabrpg[AB].mT) == Number(data2T)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].limiteTd = 24
sabrpg[AB].hrT = horaT
sabrpg[AB].diaT = dataT
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} usuário (a), está pronto para trabalhar?`)
}
//passar para o próximo mês...
if(Number(data2T) > Number(sabrpg[AB].mT)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].limiteTd = 24
sabrpg[AB].hrT = horaT
sabrpg[AB].diaT = dataT
sabrpg[AB].mT = data2T
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} usuário (a), está pronto para iniciar o mês?`)
}
break

case 'minado': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if (isPlayMines) return reply('Uma partida já foi iniciada, espere acabar para iniciar uma nova...')
if (args.length < 1) return reply('*Diga a dificuldade: easy, normal, hard*')
teks = args[0].toLowerCase()
if (teks == 'easy') q_mines = 5
else if (teks == 'normal') q_mines = 8 
else if (teks == 'hard') q_mines = 12 
else return reply('Dificuldade inválida...')
p_mines = await getMinesPositions(minecor, q_mines)
atp = (q_mines == 5) ? 3 : (q_mines == 8) ? 5 : (q_mines == 12) ? 8 : 5
ctw = minecor.filter(function(el) {
return !p_mines.includes(el)
})
var minframes = JSON.parse(fs.readFileSync('./database/grupos/games/minesframe.json'))
mines.push({id: from, jogador: sender, pos_mines: p_mines, qnt_mines: q_mines, selected_cord: [], cord_to_win: ctw, attempts: atp, tips_d: 0, hits: 0, minesp: minframes})
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sabrina.sendMessage(from, {image: {url: minado_bomb}, caption: `💣 *Campo Minado:*\n\t• Não sabe como jogar? Use o comando: *${prefix}mineshelp*\n\t• Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n-\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna B:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna C:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna D:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna E:* 🟦 🟦 🟦 🟦 🟦\n—\n• Mina(s): *${q_mines}*\n• Dificuldade: *${teks}*\n• Tentativa(s): *${atp}*`})
break

case 'mina': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if (!isPlayMines) return reply('Nehuma partida foi iniciada no grupo atualmente!');
if (args.length < 1) return reply('Diga a dificuldade: easy, normal, hard')
if(JSON.stringify(mines[mines.map(i => i.id).indexOf(from)]).includes(sender)) {
teks = args[0].toLowerCase()
play_i = minesId.indexOf(from)
const RAN_VALOR = Math.floor(Math.random() * 10000)
for(let obj of args) {
teks = obj.toLowerCase()
if (!minecor.includes(teks)) return reply('Escolha uma coordenada')
if (mines[play_i].selected_cord.includes(teks)) return reply('Coordenada já selecionada!')
if (mines[play_i].pos_mines.includes(teks)) {
mines[play_i].minesp[teks] = '💣'; mines[play_i].attempts -= 1; mines[play_i].tips_d = 0
} else {
mines[play_i].minesp[teks] = '⭐'; mines[play_i].hits += 1; mines[play_i].tips_d += 1
} mines[play_i].selected_cord.push(teks)
}
e = mines[play_i].minesp
res_teks = `💣 *Campo Minado:*\n\t• Não sabe como jogar? Use o comando: *${prefix}mineshelp*\n\t• Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n—\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* ${e.a1} ${e.a2} ${e.a3} ${e.a4} ${e.a5}\n• *Coluna B:* ${e.b1} ${e.b2} ${e.b3} ${e.b4} ${e.b5}\n• *Coluna C:* ${e.c1} ${e.c2} ${e.c3} ${e.c4} ${e.c5}\n• *Coluna D:* ${e.d1} ${e.d2} ${e.d3} ${e.d4} ${e.d5}\n• *Coluna E:* ${e.e1} ${e.e2} ${e.e3} ${e.e4} ${e.e5}\n—\n• Mina(s): *${mines[play_i].qnt_mines}*\n• Tentativa(s): *${mines[play_i].attempts}*\n• Acerto(s): *${mines[play_i].hits}*`
if (mines[play_i].attempts <= 0) {
res_teks += `\n——\n😿💔 Nossa que pena, suas chances esgotaram! Você acaba de perder e a chance de receber *R$ ${Number(RAN_VALOR).toFixed(2)}* em sua carteira.`
await mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sabrina.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
} else {
if (mines[play_i].selected_cord.length >= mines[play_i].cord_to_win.length) {
containAll = mines[play_i].cord_to_win.every(e => {
return mines[play_i].selected_cord.includes(e)
})
if (containAll) {
res_teks += `\n——\n🥳🌟 Meus parabéns e como recompensa da vitória, você acaba de ganhar *R$ ${Number(RAN_VALOR).toFixed(2)}* em sua carteira.`
USER = sabrpg.map(i => i.id).indexOf(sender)
MONEYATUAL = sabrpg[AB].money
sabrpg[USER].money = Number(MONEYATUAL) + Number(RAN_VALOR);
await mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sabrina.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
}
} else {
if (mines[play_i].tips_d >= 3) {
res_teks += `\n—\nVocê tem direito a *${parseInt(mines[play_i].tips_d/3)}* Dica(s).`
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sabrina.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
} else {
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sabrina.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
}
}
}
} else return reply("Já existe uma partida ocorrendo no grupo, não é possível iniciar outra! Aguarde acabar a atual, para iniciar a sua partida senhor(a) :(")
break

case 'minareset': 
if(!isGroup) return reply(enviar.msg.grupo);
if(!JSON.stringify(mines).includes(from) && !SoDono) return reply("Não existe nenhuma partida ainda em andamento no grupo.");
nosei = SoDono ? 0 : mines.map(i => i.id).indexOf(from)
if(mines[nosei].jogador == sender || isGroupAdmins || SoDono) {
mines.splice(nosei, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`O campo minado foi resetado com sucesso, a partida foi deletada.`)
} else {
reply("Somente o(s) adm(s) ou a pessoa que iniciou o jogo podem resetar.")
}
break

case 'mineshelp': 
reply(MinesHelp(prefix))
break

case 'minatips': 
if (!isPlayMines) return reply('- Nenhuma partida foi iniciada no grupo atualmente!');
if(JSON.stringify(mines[mines.map(i => i.id).indexOf(from)]).includes(sender)) {
play_i = minesId.indexOf(from)
if (mines[play_i].tips_d >= 3) {
is_columns = Math.random() < 0.5
if (!is_columns) {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
row = mines[play_i].pos_mines[m_sorted].charAt(0)
mines_row = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.startsWith(row)) mines_row += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`💡 Há *${mines_row}* bomba(s) na fileira *${row}*`)
} else {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
column = mines[play_i].pos_mines[m_sorted].charAt(1)
mines_column = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.endsWith(column)) mines_column += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`💡 Há *${mines_column}* bomba(s) na coluna *${column}*`)
}
} else return reply('*Acerte 3 ou mais vezes para ter direito a uma dica...*')
} else return reply("Você não pode usar este comando agora, por motivo que está ocorrendo uma partida e você não é o jogador atuante das respostas. :(")
break

case 'comprarvara':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(JSON.stringify(pescaria).includes(sender)) return reply(`Olá *pescador(a)*, você já tem uma vara de pesca! 🎣🌟 Não é possível comprar outra, pois você já possui uma.`)
if(Number(sabrpg[AB].money) < Number(50)) return reply(`😿💧 Você não possuí saldo suficiente para realizar a compra de uma vara!`)
sabrpg[AB].money -= Number(50) // Diminuir o saldo quando executar a compra!
pescaria.push(sender) // Adicionar ao json o user do id que realizou a compra do mesmo.
fs.writeFileSync("./database/usuarios/SystemRPG/pescaria.json", JSON.stringify(pescaria))
reply("🌟😍 Você acaba de adquirir uma vara de pescar, agora você está hábito.")
break

case 'minerar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
minu = moment.tz('America/Sao_Paulo').format('mm')
if(!JSON.stringify(minerar).includes(sender)) {
minerar.push({id: sender, minuto: minu})
fs.writeFileSync("./database/usuarios/SystemRPG/minerar.json", JSON.stringify(minerar))
}
AC = minerar.map(i => i.id).indexOf(sender)
if(Number(minerar[AC].minuto) !== Number(minu)) {
minerar[AC].minuto = minu
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
MINERAR_G = Math.floor(Math.random() * 100)
reply(`- Iniciando mineração! Aguarde *5s* para obter o resultado...`)
if(Number(MINERAR_G) > 15) {
PD = ["nenhum mineral valioso", "nenhuma joia valiosa em sua busca", "nenhum diamante em sua caçada", "nenhum minério validoso", "nenhum cobre em sua caçada", "nada de redstone em sua caçada"]
txt = `😭 Em sua tentativa de mineração, não foi possível evidenciar ${PD[Math.floor(Math.random()*PD.length)]}...`
} else {
MT = Math.floor(Math.random() * 2000)
AB = sabrpg.map(i => i.id).indexOf(sender)
MA = sabrpg[AB].money
sabrpg[AB].money = Number(MA) + Number(MT);
mineMessage = [`Você estava minerando nas ilhas savitas e encontrou em seu caminho *R$ ${Number(MT).toFixed(2)}* em minerais preciosos! 💰`, `🗣💰 Você invadiu uma mina proibida e quando estava fazendo a mineração achou *R$ ${Number(MT).toFixed(2)}* em troca de ouro!`, `💎👷🏻‍♀️ Você invadiu uma mina de diamantes proibida, enquanto você estava fazendo a mineração, encontrou 2 diamantes equivalentes à *R$ ${Number(MT).toFixed(2)}*.`, `⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou *R$ ${Number(MT).toFixed(2)}*!`, `🛫 Em uma de suas viagens para o interior da Flórida, você embarcou uma busca ao tesouro perdido e encontrou em seu caminho um cordão de ouro perdido avaliado em *R$ ${Number(MT).toFixed(2)}*.`, `😱🌟 Você invadiu a casa do vizinho e encontrou *R$ ${Number(MT).toFixed(2)}* escavando o quintal dele.`, `⛏️👷🏻‍♀️✨️ Você acaba de invadir em uma mina de esmeraldas desconhecida e encontrou *R$ ${Number(MT).toFixed(2)}*`, `🛥️💰 Você encontrou nas profundezas do oceanos, um tesouro em um navio antigo equivalente à *R$ ${Number(MT).toFixed(2)}*.`, `🌟 Você foi chamado para trabalhar na mina e encontrou milhares de resíduos! Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*. 😸`, `Você foi chamado para trabalhar na mina e encontrou muitos tesouros perdidos!👷🏼🌟 Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*.`]
txt = mineMessage[Math.floor(Math.random() * mineMessage.length)]
}
setTimeout(() => {sabrina.sendMessage(from, {text: txt}, {quoted: info})}, 5000)
} else {
reply(`Por favor, aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))}s* para realizar uma nova mineração...`)
}
break;

case 'comprarseguranca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!q) return reply("Escolha na loja um segurança de 1-3 para proteger o seu dinheiro e evitar assaltos")
if(!JSON.stringify(roubosrpg).includes(sender)) {
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(Number(args[0]) > 0 && Number(args[0]) <= 3) {
value = Number(args[0]) * 20 + 20
BC = sabrpg.map(i => i.id).indexOf(sender)
AB = roubosrpg.map(i => i.id).indexOf(sender)
if(Number(Number(args[0]) * 600) > sabrpg[BC].money) return reply(`Você não tem dinheiro suficiente para comprar esse segurança...`)
if(roubosrpg[AB].segurança == value) return reply(`Você já possui esse segurança...`)
comp = value > roubosrpg[AB].segurança ? `diminuída em ${value - roubosrpg[AB].segurança}%` : `aumentada em ${value - roubosrpg[AB].segurança}%`
roubosrpg[AB].segurança = value
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
rmSaldo(sender, Number(args[0]) * 600)
reply(`Segurança Lv.${args[0]} comprado com sucesso 👨🏻‍✈️
Taxa de drop ${comp}`)
} else {
reply(`Escolha um número correspondente a um dos seguranças presentes na loja...`)
}
break

case 'treinar': case 'treino':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
treinamento = ["Cê já treinou lek", "Hmm", "Tá bão", "Chega lek, cê já treinou", "Te acalma desgrama"]
if(JSON.stringify(roubosrpg).includes(sender)) return reply(`${treinamento[Math.floor(Math.random()*treinamento.length)]}`)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
reply("Treinamento efetuado com sucesso... Pronto para assaltar outros usuários")
break

case 'assaltar': case 'furtar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você precisa treinar primeiro... Use ${prefix}treinar`)
if(!menc_os2) return reply("Marque a pessoa quem você quer assaltar...")
if(sender.includes(menc_os2)) return reply(`Não é possível assaltar você mesmo...`)
if(!JSON.stringify(sabrpg).includes(menc_os2)) return reply(`ID do usuário não encontrado ou inexistente...`)
matheuzinho = Math.floor(Math.random()*100)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(roubosrpg[AD].preso == true) return reply("Você está preso, portanto, não é possível roubar...")
if(Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) < 10) return reply("Esse ser não tem nem onde cair morto, pobre desgramado... Vai assaltar alguém mais rico 🤡")
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].hora) === Number(hora3) && Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Hmm... Agora não ${sabrpg[AB].nome}, aguarde ${Number(Number(Number(hora3) + 1) * 60) - Number(Number(roubosrpg[AD].hora) * 60 + Number(minuto3))} minutos para fazer o próximo assalto 🥷🏻`)
if(roubosrpg[AD].limite <= 0 && Number(hora3) > Number(roubosrpg[AD].hora) && Number(roubosrpg[AD].dia) === Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].dia) !== Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  roubosrpg[AD].dia = data3
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite > 0 && roubosrpg[AD].preso == false) {
  roubosrpg[AD].limite -= 1
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
  if(matheuzinho > 5) {
    matheuzinho2 = Math.floor(Math.random()*100)
    lvx = Number(Math.floor(Math.random()*39)+1)
    totalM = lvx * 100
    totalU = sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money - 1
    ganho = totalM > Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) ? Math.floor(Math.random()*totalU) + 1 : Math.floor(Math.random()*100) * lvx
    algo = JSON.stringify(roubosrpg).includes(menc_os2) ? roubosrpg[roubosrpg.map(b => b.id).indexOf(menc_os2)].segurança : 20
    if(matheuzinho2 > algo) {
      sabrpg[AB].money += ganho
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money -= ganho
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Assalto efetuado com sucesso ${sabrpg[AB].nome}, você roubou R$ ${Number(ganho).toFixed(2)} da conta ${sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].nome}`)
    } else {
      perda1 = Number(ganho) / 2
      perda2 = perda1 >= sabrpg[AB].money ? sabrpg[AB].money : perda1
      sabrpg[AB].money -= perda2
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`🚓 Ops, você foi pego pela polícia e pagou ${perda1 >= sabrpg[AB].money ? `todo o seu dinheiro` : `R$ ${Number(perda2).toFixed(2)}`} para sair da cadeia... Kkkk sinto muito 😔🤙🏽`)
    }
  } else {
    matheuzinho3 = Math.floor(Math.random()*100)
    if(matheuzinho3 > 10) {
      roubosrpg[AD].dinheiro += sabrpg[AB].money
      roubosrpg[AD].preso = true
      fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Putz, cê deu muito azar... Seu caso foi passado para o governo federal, e toda a sua grana foi apreendida 😮‍💨\nFelizmente, cê pode pegar o dinheiro de volta amanhã usando ${prefix}retirar`)
    } else {
      if(JSON.stringify(cavalosrpg).includes(sender)) {
        R1 = cavalosrpg.map(i => i.id).indexOf(sender)
        cavalosrpg.splice(R1, 1)
        fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
      }
      if(JSON.stringify(galosrpg).includes(sender)) {
        R2 = galosrpg.map(i => i.id).indexOf(sender)
        galosrpg.splice(R2, 1)
        fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
      }
      roubosrpg[AD].preso = false
      fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Vix mlk, deu ruim demais... Seu assalto virou caso da INTERPOL, e ela confiscou todos os seu bens junto com seu dinheiro 👨🏻‍✈️`)
    }
  }
}
break

case 'soltar':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!q && !menc_os2) return
usu = menc_os2 ? menc_os2 : q + `@s.whatsapp.net`
if(!JSON.stringify(roubosrpg).includes(usu)) return reply(`❌ ID não encontrado ou inexistente!`)
AD = roubosrpg.map(i => i.id).indexOf(menc_os2)
roubosrpg[AD].preso = false
roubosrpg[AD].dinheiro = 0
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
reply(`Usuário solto.`)
break

case 'revogar': case 'reivindicar': case 'retirar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você não foi preso lek, aquieta o facho 😂`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
data3 = moment.tz('America/Sao_Paulo').format('DD')
if(roubosrpg[AD].dinheiro <= 0) return reply(`Não há dinheiro apreendido...`)
if(Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Você só pode retirar o dinheiro apreendido amanhã...`)
reply(`Pronto, aqui estão os R$ ${Number(roubosrpg[AD].dinheiro).toFixed(2)} que foram apreendidos pela polícia... Vê se anda na linha mlk 👨🏻‍✈️`)
sabrpg[AB].money += roubosrpg[AD].dinheiro
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
roubosrpg[AD].preso = false
roubosrpg[AD].dinheiro = 0
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
break

case 'comprarestabulo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você já tem um estábulo em seu nome ${sabrpg[AB].nome}... 🐎`)
if(Number(sabrpg[AB].money) < 500) return reply(`Você não saldo suficiente para efetuar essa compra...`)
cavH = moment.tz('America/Sao_Paulo').format('HH')
cavD = moment.tz('America/Sao_Paulo').format('DD')
cavM = moment.tz('America/Sao_Paulo').format('MM')
cavalosrpg.push({id: sender,
level: 1,
quant_cavalos: 0,
setcav: `nenhum`,
countVc: 0,
capitalVc: 0,
countDc: 0,
capitalDc: 0,
corridaL: 10,
corridaH: cavH,
corridaD: cavD,
corridaM: cavM,
cavalos: []
})
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 500
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do estábulo... Agora você pode comprar cavalos para correr com eles 🐴`)
break

case 'venderestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(TT4)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu estábulo ficou avaliado em R$ ${Number(TT4).toFixed(2)}
📈 Parabéns pela venda...`)
break

case 'avaliarestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
txt = `ㅤㅤㅤ〘 *AVALIANDO* 〙
🐴 *Preço Por Cavalos:* R$ ${Number(TT1).toFixed(2)}
📈 *Preço Por Upgrade:* R$ ${Number(TT2).toFixed(2)}
🏆 *Preço Por Vitórias:* R$ ${Number(TT3).toFixed(2)}

🤑 *Total:* R$ ${Number(TT4).toFixed(2)}

-> Use ${prefix}venderestabulo caso queira se desfazer do mesmo.`
reply(txt)
break

case 'estabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) {
countcav = `\n『 Você não possui cavalos... 』\n`
} else {
countcav = `\n🐎 *Cavalos ↴*`
for(c = 0; c < cavalosrpg[AC].cavalos.length; c++) {
if(cavalosrpg[AC].cavalos[c].sela == true){
selasasah = `✅`
} else { selasasah = `❌` }
if(cavalosrpg[AC].cavalos[c].dor == true){
dorsasah = `✅`
} else { dorsasah = `❌` }
if(cavalosrpg[AC].cavalos[c].fratura == true){
fratsasah = `✅`
} else { fratsasah = `❌` }
TTCV = Number(cavalosrpg[AC].cavalos[c].viccav)/Number(Number(cavalosrpg[AC].cavalos[c].viccav)+Number(cavalosrpg[AC].cavalos[c].dercav))*100
if(Number(TTCV) > 0) {
PVCV = TTCV
} else {
PVCV = 0
}
countcav += `\n» ${Number(c)+1} « Nome Do Cavalo: *${cavalosrpg[AC].cavalos[c].nomedocavalo}*\n• Velocidade: *${Number(cavalosrpg[AC].cavalos[c].tipo)+1}x*\n• Sela: *${selasasah}*\n• Doente *${dorsasah}*\n• Fraturado: *${fratsasah}*\n• Vitórias: *${cavalosrpg[AC].cavalos[c].viccav}*\n• Percentual de Ganhos: *${Number(PVCV).toFixed(1)}%*\n• Apostas: *R$ ${Number(cavalosrpg[AC].cavalos[c].contdin).toFixed(2)}*\n• Ganhos: *R$ ${Number(cavalosrpg[AC].cavalos[c].lucdin).toFixed(2)}*\n`
}
}
txt = `👤 Nome: *${sabrpg[AB].nome}*\n💯 Level do Estábulo: *${cavalosrpg[AC].level}*\n📐 Tamanho Do Estábulo: ${Number(cavalosrpg[AC].level)*5} m²*\n🧮 Quantidade De Cavalos: *${cavalosrpg[AC].cavalos.length}*\n🔔 Cavalo Selecionado: *${cavalosrpg[AC].setcav}*\n${countcav}`
sabrina.sendMessage(from, {image: {url: `https://telegra.ph/file/c8656d473c9ea2b784efb.jpg`}, caption: txt}, {quoted: sasah})
break

case 'setcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(!q) return reply(`Diga o nome de um dos cavalos presentes no seu estábulo...
Ex: ${prefix+command} Patolino`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(q.toLowerCase())) return reply(`Este cavalo não consta eu seus registros... Use o comando ${prefix}estabulo, e verifique quais cavalos você tem 🐴`)
cavalosrpg[AC].setcav = q.toLowerCase()
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Cavalo definido com sucesso...`)
break

case 'upcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
AT = Number(cavalosrpg[AC].level) * 200
if(Number(sabrpg[AB].money) < Number(AT)) return reply(`Você não saldo suficiente para upar seu estábulo...`)
LC = cavalosrpg[AC].level
cavalosrpg[AC].level = Number(LC) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(AT)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(` Agrademos a confiança na *Black Construction...* R$ ${Number(AT).toFixed(2)} foram investidos, e seu estábulo está no level ${cavalosrpg[AC].level} 🐴`)
} else { reply(`Seu estábulo já alcançou o tamanho máximo...`) }
break

case 'comprarcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
var [cavnmr, cavnome] = q.split(`/`)
if(!cavnmr) return reply(`Escolha um cavalo...`)
if(!cavnome) return reply(`Agora dê um nome para seu cavalo... Ex: ${prefix+command} ${q}/Michael`)
if(Number(cavnome.length) > 20) return reply(`Este nome é muito grande...`)
if(Number(cavnmr) === 1 || Number(cavnmr) === 2 || Number(cavnmr) === 3 || Number(cavnmr) === 4) {
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
MCV1 = Number(cavnmr) - 1
MCV2 = Number(MCV1) * 500
MCV3 = Number(MCV2) + 500
if(Number(sabrpg[AB].money) < Number(MCV3)) return reply(`Você não saldo suficiente para comprar este cavalo...`)
if(JSON.stringify(cavalosrpg[AC].cavalos).includes(cavnome)) return reply(`Você já tem um cavalo com esse nome... Pfvr, escolha outro nome 🐴`)
if(Number(cavalosrpg[AC].cavalos.length) == Number(cavalosrpg[AC].level)) return reply(`Você atingiu o número máximo de cavalos no estábulo... Caso queira aumentar o tamanho do estábulo, use ${prefix}upcavalo`)
cavalosrpg[AC].cavalos.push({nomedocavalo: cavnome.toLowerCase(),
tipo: Number(cavnmr)-1,
sela: false,
dor: false,
fratura: false,
viccav: 0,
dercav: 0,
contdin: 0,
lucdin: 0
})
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
sabrpg[AB].money -= Number(MCV3)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do cavalo... Espero que faça bom proveito com ele 🐴`)
} else {
reply(`Esse cavalo não está disponível para compra...`)
}
break

case 'vendercavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá vender... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) {
HCS = 100
} else {
HCS = 0
}
if(cavalosrpg[AC].cavalos[AD].dor == true) {
HCD = 50
} else {
HCD = 0
}
if(cavalosrpg[AC].cavalos[AD].fratura == true) {
HCF = 125
} else {
HCF = 0
}
HCV = Number(Number(Number(cavalosrpg[AC].cavalos[AD].tipo)+1)*250) + Number(HCS) - Number(HCD) - Number(HCF) + Number(cavalosrpg[AC].cavalos[AD].viccav)
MB = sabrpg[AB].money
sabrpg[AB].money = Number(MB) + Number(HCV)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
cavalosrpg[AC].cavalos.splice(AD, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo ficou avaliado em R$ ${Number(HCV).toFixed(2)} 🐴📈 - Parabéns pela venda...`)
break

case 'comprarsela':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um cavalo!🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) return reply(`Você já possui uma sela neste cavalo...`)
if(Number(sabrpg[AB].money) < 200) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].sela = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 200
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Uma sela foi comprada para o seu alazão com sucesso... 🐴`)
break

case 'cdcv3':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].dor == false) return reply(`Seu cavalo não está doente...`)
if(Number(sabrpg[AB].money) < 100) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].dor = false
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 100
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Seu cavalo recebeu uma injeção poderosa, e está pronto para correr dnv... 🐴`)
break

case 'atadura':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].fratura == false) return reply(`Seu cavalo não está fraturado...`)
if(Number(sabrpg[AB].money) < 250) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].fratura = false
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 250
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Atadura colocada com sucesso... Agora deixe seu bichinho descansar 🐴`)
break

case 'cavalo':
case 'cavalos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
horacav = moment.tz('America/Sao_Paulo').format('HH')
diacav = moment.tz('America/Sao_Paulo').format('DD')
mmcav = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == false) return reply(`Você precisa comprar uma sela para seu alazão...`)
if(cavalosrpg[AC].cavalos[AD].dor == true) return reply(`Seu cavalo está doente... Compre uma _"cdcv3"_ na loja de CAVALOS para ele voltar a correr 💉`)
if(cavalosrpg[AC].cavalos[AD].fratura == true) return reply(`Seu cavalo está com a pata torcida... Vá comprar uma atadura para tratar isso 🐴`)
//passar eo limite por hora...
if(Number(cavalosrpg[AC].corridaL) === 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) return reply(`Seu cavalo parece cansado... Pfvr, volte mais tarde 🐴`)
//passar de uma hora pra outra...
if(Number(horacav) > Number(cavalosrpg[AC].corridaH) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo parece ótimo... Você já pode correr dnv 🐴`)
}
//passar de um dia pro outro...
if(Number(diacav) > Number(cavalosrpg[AC].corridaD) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu cavalo está pronto para correr ?`)
}
//passar de um mês pro outro...
if(Number(mmcav) > Number(cavalosrpg[AC].corridaM)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Um novo mês de vitórias se inicia...`)
}
//aposta liberada...
if(Number(cavalosrpg[AC].corridaL) > 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav)) {
if(!q) return reply(`A corrida já vai começar... Faça logo a sua aposta`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 100) return reply(`Nossas apostas são de alto nível aqui... Você não pode apostar menos de R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossas apostas são de alto nível aqui... Mas você não pode apostar mais do que R$ 10000.00`)
MT = Math.floor(Math.random()*40)
if(Number(MT) === 0) {
GB = cavalosrpg.map(m => m.id).indexOf(sender)
GF = cavalosrpg[GB].cavalos.map(n => n.nomedocavalo).indexOf(cavalosrpg[GB].setcav)
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
cavalosrpg[GB].cavalos.splice(GF, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
acidente = [`Seu cavalo se acidentou na pista e morreu... Meus sentimentos ao alazão 🖤`, `Seu cavalo adoeceu gravemente antes da corrida, e morreu... Meus pêsames pelo seu amigo 🖤`]
reply(acidente[Math.floor(Math.random()*acidente.length)])
}
if(Number(MT) === 1) {
cavalosrpg[AC].cavalos[AD].dor = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo adoeceu, mas felizmente, essa doença não é para a morte... Vá comprar a _"cdcv3",_ uma vacina poderosa que vai levantar o seu alazão na hora 💉`)
}
if(Number(MT) === 2) {
cavalosrpg[AC].cavalos[AD].fratura = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🥹 Seu alazão fraturou a patinha enquanto corria... Vá comprar uma atadura na ${prefix}lojadecavalos`)
}
if(Number(MT) > 2) {
cavt1 = SoDono ? 1 : Math.floor(Math.random()*19)+1
cavt2 = Number(cavt1) - Number(cavalosrpg[AC].cavalos[AD].tipo)
if(Number(cavt2) < 1){
var cav = 1
} else {
var cav = cavt2
}
//primeiro lugar...
if(Number(cav) === 1){
cav2 = Number(args[0]) + Number(args[0]) / 2
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L1 = 1
} else {
L1 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC1 = 1
} else {
LC1 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L1)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC1)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//segundo lugar...
if(Number(cav) === 2){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = args[0]
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L2 = 1
} else {
L2 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC2 = 1
} else {
LC2 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L2)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC2)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//terceiro lugar...
if(Number(cav) === 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = Number(args[0]) / 2
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L3 = 1
} else {
L3 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC3 = 1
} else {
LC3 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L3)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC3)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//outros lugares...
if(Number(cav) > 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
LM = cavalosrpg[AC].corridaL
CCD = cavalosrpg[AC].countDc
CDC = cavalosrpg[AC].capitalDc
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countDc = Number(CCD) + 1
cavalosrpg[AC].capitalDc = Number(CDC) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS)+1
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você perdeu R$ ${Number(args[0]).toFixed(2)}`)
}
}
}
break

case '1xbcbet':
case '1xbcbets':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!q) return reply(`🛒 *Sab's City Bets* é o novo sistema de apostas... Invista uma quantia entre R$ 100.00 e R$ 10000.00, e veja seu dinheiro rodar.`)
if(!Number(args[0])) return reply(`${args[0]} não é número... 😿`)
AB = sabrpg.map(i => i.id).indexOf(sender)
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui dinheiro suficiente para investir`)
if(Number(args[0]) < 100) return reply(`Você deve investir no mínimo R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossa plataforma não paga mais que R$ 10000.00`)
if(!JSON.stringify(bcbet).includes(sender)) {
bcbet.push({id: sender, minuto: minuto3})
fs.writeFileSync("./database/usuarios/SystemRPG/1xbcbet.json", JSON.stringify(bcbet))
}
AC = bcbet.map(i => i.id).indexOf(sender)
if(Number(bcbet[AC].minuto) !== Number(minuto3)) {
bcbet[AC].minuto = minuto3
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
MN = Math.floor(Math.random()*100)
reply(`📊 Analisando os gráficos...`)
if(Number(MN) > 15) {
PG = ["na construção de um estádio de futebol, mas a construção desabou...", "na bolsa de valores, mas a Bovespa caiu drasticamente...", "num leilão de carros, mas os carros não foram leiloados...", "num leilão de carros, mas você sofreu um golpe...", "no seu time de futebol, mas o seu time perdeu o jogo...", "numa corrida, mas o carro bateu...", "em uma luta de UFC, e seu lutador sofreu um nocaute..."]
txt = `${II}Sab Black's Bet${II} > A sua casa de apostas online!\n—\n[🔴] - As estatísticas não são muito favoráveis! Você investiu ${PG[Math.floor(Math.random()*PG.length)]}\n• Você perdeu, então sofreu uma perda de *R$ ${Number(args[0]).toFixed(2)}* em dinheiro.`
img = `https://telegra.ph/file/747133ed87f267ca8d35f.jpg`
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
} else {
GG = ["na construção de um estádio de futebol, e a construção foi bem sucedida...", "na bolsa de valores, e a Bovespa subiu exponencialmente...", "num leilão de carros, e obteve grande lucro na venda dos mesmos...", "no seu time de futebol, e o seu time venceu o jogo...", "numa corrida, e o seu carro chegou em primeiro lugar...", "em uma luta de UFC, e seu lutador derrubou o oponente facilmente..."]
VL1 = Math.floor(Math.random()*9)+1
VL2 = Number(args[0]) * Number(VL1)
txt = `${II}Sab Black's Bet${II} > A sua casa de apostas online!\n—\n[🟢] - As estatísticas são positivas e muito boas por sinal! Você investiu ${GG[Math.floor(Math.random()*GG.length)]}\n• Você ganhou e recebeu como saldo: *R$ ${Number(VL2).toFixed(2)}*`
img = `https://telegra.ph/file/f600b52a9963c58900e5b.jpg`
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(VL2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
setTimeout(() => {
sabrina.sendMessage(from, {image: {url: img}, caption: txt}, {quoted: sasah})
}, 2000)
} else {
reply(`Aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))} seg.* para fazer novas apostas novamente.`)
}
break

case 'resetscbet':
if(!SoDono) return reply(enviar.msg.donosmt)
for(i = 0; i < sabrpg.length; i++) {
sabrpg[i].bcbet = true
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
reply(`Gráficos restaurados para todos os ${sabrpg.length} usuários do RPG`)
break

case 'comprargalinheiro':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(JSON.stringify(galosrpg).includes(sender)) return reply(`Você já possui um galinheiro... Consulte a ${prefix}lojadegalos para comprar galos e brigar com eles 🐔`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 500) return reply(`Vc não possui dinheiro suficiente para efetuar essa compra...`)
gaH = moment.tz('America/Sao_Paulo').format('HH')
gaD = moment.tz('America/Sao_Paulo').format('DD')
gaM = moment.tz('America/Sao_Paulo').format('MM')
galosrpg.push({id: sender,level: 1,galinhas: 0,durabilidade: 5,ovos: 0,countVg: 0,countDg: 0,dinVg: 0,luckVg: 0,brigaL: 15,brigaH: gaH,brigaD: gaD,brigaM: gaM,galos: []})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 500
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`🐔 Galinheiro comprado com sucesso... Consulte ${prefix}galinheiro`)
break

case 'comprargalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja comprar...`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) === 1 || Number(args[0]) === 6 || Number(args[0]) === 12) {
if(Number(Number(galosrpg[AD].galos.length) + Number(args[0])) > Number(Number(galosrpg[AD].level)*5)) return reply(`Não é possível comprar +${args[0]} ${Number(args[0]) < 2 ? 'galo' : 'galos'}, pois excede o limite de ${Number(galosrpg[AD].level)*5} galos...\n• Caso queira aumentar o tamanho do galinheiro, use ${prefix}upgalo`)
if(Number(args[0]) === 1) {
if(Number(sabrpg[AB].money) < 100) return reply(`Vc não possui saldo suficiente para efetuar essa compra!`)
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 100
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`1 galo comprado com sucesso!`)
}
if(Number(args[0]) === 6) {
if(Number(sabrpg[AB].money) < 550) return reply(`Vc não possui saldo suficiente para efetuar essa compra...`)
for(i = 0; i < 6; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 550
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`6 galos comprado com sucesso.`)
}
if(Number(args[0]) === 12) {
if(Number(sabrpg[AB].money) < 1000) return reply("Vc não possui saldo suficiente para efetuar essa compra...")
for(i = 0; i < 12; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`12 galos comprado com sucesso`)
}
} else {
reply(`Não é possível comprar essa quantidade de galos...`)
}
break

case 'vendergalo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que um galo...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galos.length)) return reply(`Não é possível vender um número maior do que a quantidade de galos em seu galinheiro...`)
if(Number(galosrpg[AD].galos.length) === 0) return reply(`Você precisa comprar um galo antes...`)
for(i = 0; i < Number(args[0]); i++) {
galosrpg[AD].galos.splice(i, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galo${Number(args[0]) > 1 ? 's' : ''} vendido${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliado${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'comprargalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(!q) return reply("Coloque a quantidade de galinhas que deseja comprar...")
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível comprar menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
if(Number(args[0]) > Number(Number(galosrpg[AD].level) * 2)) return reply(`Não é possível comprar +${args[0]} galinhas, pois excede o limite de ${Number(galosrpg[AD].level) * 2} galinhas em seu galinheiro...\nCaso queira aumentar o tamanho do seu galinheiro, use o comando ${prefix}upgalo`)
if(Number(sabrpg[AB].money) < Number(Number(args[0]) * 100)) return reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} ${Number(args[0]) > 1 ? "irão" : "irá"} custar R$ ${Number(Number(args[0]) * 100).toFixed(2)}, e este valor excede o saldo monetário em sua conta...`)
GG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(GG) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(Number(args[0]) * 100)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} comprada${Number(args[0]) > 1 ? 's' : ''} com sucesso...`)
break

case 'vendergalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar uma galinha antes...`)
if(!q) return reply(`Defina a quantidade de galinhas que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galinhas)) return reply(`Não é possível vender um número maior do que a quantidade de galinhas em seu galinheiro...`)
if(Number(galosrpg[AD].galinhas) === 0) return reply(`Você precisa comprar uma galinha antes...`)
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} vendida${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliada${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'cruzargg':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].galos.length) === 0) return reply("Você não possui galos...🐓 É necessário ao menos 1 galo para cruzar.")
if(Number(galosrpg[AD].galinhas) === 0) return reply("Você não possui galinhas...🐔 É necessário ao menos 1 galinha para cruzar.")
if(Number(galosrpg[AD].ovos) < Number(Number(galosrpg[AD].level * 2))) {
alecruz = Math.floor(Math.random() * 100)
if(alecruz > 50) {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
galosrpg[AD].durabilidade = Number(QD) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = "Não houve sucesso no cruzamento das aves"
} else {
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sua galinha não estava pronta para o cruzamento, e acabou morrendo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} galinha${Number(galosrpg[AD].galinhas) > 1 ? `s` : ``} 🐔` : ``}`
}
} else {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
QO = galosrpg[AD].ovos
galosrpg[AD].durabilidade = Number(QD) - 1
galosrpg[AD].ovos = Number(QO) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo...
Use ${prefix}chocarovo para tentar a sorte`
} else {
QG = galosrpg[AD].galinhas
QO = galosrpg[AD].ovos
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].ovos = Number(QO) + 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo, mas a sua galinha morreu no processo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} ${Number(galosrpg[AD].galinhas) > 1 ? `${galosrpg[AD].galinhas} galinhas` : `1 galinha`}` : ``}`
}
}
reply(`${resp}`)
} else {
reply(`Você atingiu a quantidade máxima de ovos em seu galinheiro... Use ${prefix}chocarovo para choca-los`)
}
break

case 'chocarovo': case 'chocar': case 'ovo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].ovos) <= 0) return reply("Você não possui ovos para chocar...")
if(Number(galosrpg[AD].galos.length) >= Number(Number(galosrpg[AD].level) * 5)) return reply("Todos os seus slots já estão na quantidade máxima..")
aleovo = Math.floor(Math.random() * 100)
if(aleovo > 40) {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sem sucesso ao tentar chocar o ovo!😿")
} else {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sucesso, ovo chocado deu origem a +1 galo para o seu galinheiro 😸☝🏽")
}
break

case 'galinheiro':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
setTimeout(() => {reagir(from, "🐔")}, 300)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
totalG = galosrpg[AD].galos
let medvida = 0
let medvic = 0
let medder = 0
for(i = 0; i < totalG.length; i++) {medvida += totalG[i].vida
if(Number(totalG[i].vigalo) > 0) {medvic += totalG[i].vigalo}
if(Number(totalG[i].degalo) > 0) {medder += totalG[i].degalo}
}
if(Number(galosrpg[AD].galos.length) > 0) {
TT1 = `${Number(Number(`${medvida}`) / Number(galosrpg[AD].galos.length)).toFixed(0)}`
TT2 = `${Number(Number(`${medvic}`) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}/${Number(Number(Number(`${medvic}`) + Number(`${medder}`)) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}`
TT3 = `${Number(Number(`${medvic}`) / Number(Number(`${medvic}`) + Number(`${medder}`)) * 100).toFixed(1)}%`
} else {
TT1 = `0`
TT2 = `0/0`
TT3 = `0.0%`
}
txt = `Olá *${sender.split("@")[0]}*, aqui está as informações sobre seu galinheiro!\n• Seu galinheiro está atualmente no level: *${galosrpg[AD].level}*\n——\n• [🚧] Área total do Galinheiro: *${Number(galosrpg[AD].level) * Number(galosrpg[AD].level)}m²*\n——\n• [🏡] *Habitantes do seu Galinheiro:*\n• Quantidade de Galo(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galos.length}/${Number(galosrpg[AD].level) * 5}*\n• Quantidade de Galinha(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galinhas}/${Number(galosrpg[AD].level) * 2}*\n• Quantidade de Ovo(s) que as suas galinhas colocaram: *${galosrpg[AD].ovos}/${Number(galosrpg[AD].level) * 2}*\n• Expectativa média de vida de seus bichinhos: *${TT1}*\n——\n• [🏆] *Médias e Porcentagens:*\n• Sua média de vitórias conquistadas por seu(s) bichinho(s): *${TT2}*\n• Sua média percentual atualmente em seu galinheiro: *${TT3}*`
mention(txt);
break

case 'upgalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(Number(galosrpg[AD].level) * 100)) return reply(`Você não possui saldo suficiente para efetuar essa compra...`)
if(Number(galosrpg[AD].level) < 6) {
quant = galosrpg[AD].level
galosrpg[AD].level = Number(quant) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Seu galinheiro foi upado para o level ${galosrpg[AD].level} com sucesso...`)
} else {
reply(`Seu galinheiro está no level máximo!😿 Não é possível aumentar!`)
}
break

case 'galo':
case 'galos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes!`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
galosH = moment.tz('America/Sao_Paulo').format('HH')
galosD = moment.tz('America/Sao_Paulo').format('DD')
galosM = moment.tz('America/Sao_Paulo').format('MM')
if(Number(galosrpg[AD].galos.length) > 0) {
if(!q) return reply(`Vix lek, cê caiu em uma briga ilegal de galos...🐔 Faça logo a sua aposta, e venha dançar!`)
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não tem saldo suficiente para efetuar essa aposta...`)
if(Number(args[0]) > 100) return reply("Não é possível apostar mais que R$ 100.00 em uma briga ilegal e clandestina...")
if(Number(args[0]) < 1) return reply("Deixa de ser pobre lek")
if(Number(galosrpg[AD].brigaL) <= 0) return reply("Chega de brigas por agora... Volte mais tarde")
if(Number(galosH) > Number(galosrpg[AD].brigaH) && Number(galosrpg[AD].brigaD) === Number(galosD) && Number(galosrpg[AD].brigaM) === Number(galosM) && Number(galosrpg[AD].brigaL) <= 0) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Bem vindo (a) de volta, hora de brigar...")
}
if(Number(galosD) > Number(galosrpg[AD].brigaD) && Number(galosrpg[AD].brigaM) === Number(galosM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar ?`)
}
if(Number(galosM) > Number(galosrpg[AD].brigaM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
galosrpg[AD].brigaM = galosM
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar?`)
}
if(Number(galosrpg[AD].brigaD) == Number(galosD) && Number(galosrpg[AD].brigaM) == Number(galosM) && Number(galosrpg[AD].brigaL) > 0) {
galosgeral = galosrpg[AD].galos
alegalo = galosgeral[Math.floor(Math.random()*galosgeral.length)]
matheuzinho = Math.floor(Math.random()*100)
if(Number(matheuzinho) > 30) {
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CD = alegalo.degalo
alegalo.vida = Number(VD) - 1
alegalo.degalo = Number(CD) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `Seu galo perdeu a briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)}`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `O galo inimigo matou o seu galo na briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)} ${Number(galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length) > 1 ? `\nFelizmente, você ainda possui ${galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length}` : ``}`
}
JH = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg
JH2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
JH3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg = Number(JH) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(JH2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(JH3) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigatxt)
//ganhar
} else {
//vida > 0
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CV = alegalo.vigalo
alegalo.vida = Number(VD) - 1
alegalo.vigalo = Number(CV) + 1
if(Number(alegalo.degalo) > 0) {
NN = alegalo.degalo
alegalo.degalo = Number(NN) + 1
}
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = `Seu galo venceu a briga!🐓 Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = ` Seu galo venceu a briga!🐓 Mas foi sequestrado e morto no caminho... Felizmente, você levou o dinheiro.\n• Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
}
KL = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg
KL2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
KL3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg
KL4 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg = Number(KL) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(KL2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg = Number(KL3) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(KL4) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigawin)
}
}
} else {
reply(`Você não possui galos! 🐓😿`)
}
break

case 'cassino':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
horacass = moment.tz('America/Sao_Paulo').format('HH')
diacass = moment.tz('America/Sao_Paulo').format('DD')
mmcass = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(sabrpg[AB].limiteC) === 0 && Number(sabrpg[AB].horaC) === Number(horacass)) return reply(`*Você já apostou muito hoje...* Suas chances estão esgotadas! Por favor, volte mais tarde! 😔😭`)
HC = Number(sabrpg[AB].horaC) + 1
//acabou o limite...
if(Number(horacass) > Number(sabrpg[AB].horaC) && Number(sabrpg[AB].diaC) === Number(diacass) && Number(sabrpg[AB].mC) === Number(mmcass)) {
sabrpg[AB].limiteC = 20
sabrpg[AB].horaC = horacass
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`😝🤪 Mas já mlk? Bora apostar então, eu ainda vou sugar muito teu dinheiro!`)
}
//passar do dia pro outro...
if(Number(sabrpg[AB].limiteC) === 0 && Number(diacass) > Number(sabrpg[AB].diaC)) {
sabrpg[AB].limiteC = 20
sabrpg[AB].horaC = horacass
sabrpg[AB].diaC = diacass
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`💰🌟 ${tempo} caro jogador, como está a sua sorte hj?`)
}
//passar do mês pro outro...
if(Number(sabrpg[AB].limiteC) === 0 && Number(mmcass) > Number(sabrpg[AB].mC)) {
sabrpg[AB].limiteC = 30
sabrpg[AB].horaC = horacass
sabrpg[AB].diaC = diacass
sabrpg[AB].mC = mmcass
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`📆🗣 Primeira aposta do mês? Eu ainda vou sugar muito teu dinheiro todo...`)
}
if(Number(sabrpg[AB].limiteC) > 0) {
if(!q) {
return reply(`Você deve escolher uma quantia para apostar... Ex: ${prefix+command} 100 _(você estará apostando R$ 100.00)_`)
}
if(Number(args[0]) < 10) return reply(`Não é possível apostar menos que R$ 10.00`)
if(Number(args[0]) > 20000) return reply(`Não é possível apostar mais que R$ 20000.00! 😿`)
if(!Number(args[0])) return reply(`*${args[0]}* não é número! 😿`)
frutasC = JSON.parse(fs.readFileSync("./arquivos/json/slots.json"));
resulC = `${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]}`
if(resulC == `🦴 : 🦴 : 🦴`) {
CC = Number(sabrpg[AB].limiteC) - 1
sabrpg[AB].money = 50
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`• *[${resulC}]* - Óia a bruxa passando... Todo o dinheiro da sua conta agora é dela!`)
}
if(resulC == `🍫 : 🍫 : 🍫`){cmrpg = 1000};
if(resulC == `🍔 : 🍔 : 🍔`){cmrpg = 600};
if(resulC == `🥩 : 🥩 : 🥩`){cmrpg = 400};
if(resulC == `🍕 : 🍕 : 🍕`){cmrpg = 250};
if(resulC == `🌶️ : 🌶️ : 🌶️`){cmrpg = 200};
if(resulC == `🍪 : 🍪 : 🍪`){cmrpg = 100};
if(resulC == `🍗 : 🍗 : 🍗`){cmrpg = 80};
if(resulC == `🌭 : 🌭 : 🌭`){cmrpg = 70};
if(resulC == `🥞 : 🥞 : 🥞`){cmrpg = 60};
if(resulC == `🥓 : 🥓 : 🥓`){cmrpg = 50};
if((resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`)){cmrpg = 40};
if((resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)){cmrpg = 30}
if((resulC == `🍫 : 🍫 : 🍫`) || (resulC == `🍔 : 🍔 : 🍔`) || (resulC == `🥩 : 🥩 : 🥩`) || (resulC == `🍕 : 🍕 : 🍕`) || (resulC == `🌶️ : 🌶️ : 🌶️`) || (resulC == `🍪 : 🍪 : 🍪`) || (resulC == `🍗 : 🍗 : 🍗`) || (resulC == `🌭 : 🌭 : 🌭`) || (resulC == `🥞 : 🥞 : 🥞`) || (resulC == `🥓 : 🥓 : 🥓`) || (resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`) || (resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)) {
var Vitória = "Você acaba de ganhar"
var CC = Number(sabrpg[AB].limiteC) - 1
var MR = sabrpg[AB].money
var TT = Number(args[0]) * Number(cmrpg)
var TC = Number(TT) + Number(args[0])
var VT = Number(MR) + Number(TC) * 5
var Ctxt = `R$ ${Number(TC).toFixed(2)}`
sabrpg[AB].money = VT
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
} else {
var Vitória = "Você perdeu! Como punição, você perderá"
var CC = Number(sabrpg[AB].limiteC) - 1
var MR = sabrpg[AB].money
var VT = Number(MR) - Number(args[0])
var Ctxt = `R$ ${Number(args[0]).toFixed(2)}`
sabrpg[AB].money = VT
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
const cassino = `• *[${resulC}]* - ${Vitória} ${Ctxt}` 
reply(cassino)
}
break

case 'dadoapostado':
setTimeout(() => {reagir(from, "🎲")}, 300)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
var [d1, d2] = q.split('/')
if(!d1) return reply(`Digite o valor do dado que você acha que irá cair... Após isso, coloque uma (/) ao lado e coloque uma quantia a ser apostada.\n–\nEx: ${prefix+command} 5/25 _(você estará apostando R$ 25.00 no dado 5)_`)
if(!d2) return reply(`Você não disse quanto irá apostar...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(d2)) return reply(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d1)) return reply(`${d1} não é número!`)
if(!Number(d2)) return reply(`${d2} não é número!`)
if(Number(d2) > 100) return reply(`Não é possível apostar mais do que R$ 100.00`)
if(Number(d1) < 1 || Number(d1) > 6) return reply(`Este número no dado não existe...`)
reply(`Sorteando dado(s)!`)
dadoale = Math.floor(Math.random() * 5) + 1
enviarfigu(`./database/data/media/sticker/dados/${dadoale}.webp`)
if(Number(dadoale) === Number(d1)) {
DD = Number(sabrpg[AB].money) + Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BC = sabrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *@${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a previsão do dado.`)
}, 5000)
} else {
DD = Number(sabrpg[AB].money) - Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BD = sabrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *@${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a previsão do dado.`)
}, 5000)
}
break

case 'caracoroa': //by vitinho
setTimeout(() => {reagir(from, "🪙")}, 300)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`)
var [d1, d2] = q.split('/')
if(Number(d2) > 1000) return reply("Tbm não pode passar de 1000 né meu camarada kkk")
if(d1.length == 0) return reply(`Digite o lado que a moeda que você acha que irá cair, ou seja, cara ou coroa... Após isso, coloque uma (/) ao lado e coloque a quantia que você deseja apostar, por exemplo: 1.\n–\n• Ex: ${prefix+command} cara/25 _(você estará apostando R$25.00 na posição do lado da cara da moeda)_`);
if(d1.toLowerCase() != "cara" && d1.toLowerCase() != "coroa") return reply("Só pode cara ou coroa.")
if(!d2) return reply(`Você não disse quanto irá apostar...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(d2)) return reply(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d2)) return reply(`${d2} não é um número!`)
if(Number(d2) > 100) return reply(`Não é possível apostar mais do que R$ 100.00`)
reply(`Sorteando... Aguarde, daqui a pouco o resultado sai!`)
ladosDaMoeda = ["coroa", "cara"];
pegarInfo = ladosDaMoeda[Math.floor(Math.random() * ladosDaMoeda.length)];
enviarfigu(`./database/data/media/sticker/caracoroa/${pegarInfo}.webp`)
if(pegarInfo === d1) {
DD = Number(sabrpg[AB].money) + Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BC = sabrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *@${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
} else {
DD = Number(sabrpg[AB].money) - Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BD = sabrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *@${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
}
break

case 'lojas_sc':
case 'lojas':
mention(`${tempo} *@${sender.split("@")[0]}*, bem vindo a minha loja de RPG!\n—–\n❱❱ Lojas de Cavalos: *${prefix}lojadecavalos*\n❱❱ Lojas de Galos: *${prefix}lojadegalos*\n—–\n🛍️ *Produtos:*\n*1.* Comprar Segurança *[R$ 600.00]*\n❑→ ${prefix}comprarsegurança 1 | Você consegue *40% de proteção*!\n*2.* Comprar Segurança *[R$ 1200.00]*\n❑→ ${prefix}comprarsegurança 2 | Você consegue *60% de proteção*!\n*3.* Comprar Segurança *[R$ 1800.00]*\n❑→ ${prefix}comprarsegurança 3 | Você consegue *80% de proteção*!`)
break

case 'lojadecavalos':
setTimeout(() => {reagir(from, "🐎")}, 300)
if(JSON.stringify(cavalosrpg).includes(sender)) {
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
uparcavalo = `R$ ${Number(Number(cavalosrpg[AC].level)*200).toFixed(2)}`
} else {
uparcavalo = `Lv. Máx`
}
} else {
uparcavalo = `R$ 200.00`
}
txt = `${tempo} *@${sender.split("@")[0]}*, Seja bem vindo(a) à loja de cavalos:\n—\n❱❱ ${prefix}comprarestabulo *[R$ 500.00]* - De início é necessário você comprar.\n❱❱ ${prefix}upcavalo - Faça um upload em seu(s) cavalo(s). *[${uparcavalo}]*\n—\n🐎 *Comprar Cavalos:*\n❱❱ ${prefix}comprarcavalo 1 *[R$ 500.00]*\n❱❱ ${prefix}comprarcavalo 2 *[R$ 1000.00]*\n❱❱ ${prefix}comprarcavalo 3 *[R$ 1500.00]*\n❱❱ ${prefix}comprarcavalo 4 *[R$ 2000.00]*\n—\n🌾 *Equipamentos:*\n❱❱ ${prefix}comprarsela *[R$ 200.00]* - Compre uma sela para o seu cavalo.\n❱❱ ${prefix}cdcv3 *[R$ 200.00]* - Verifique o status atual de seu alazão.\n❱❱ ${prefix}atadura *[R$ 250.00]* - Caso tenha alguma fratura em alazão.\n—\n🏪 *Vendas:*\n❱❱ Para vender seu alazão, use o comando ao lado: *${prefix}vendercavalo*\n❱❱ Para vender seu estábulo, use o comando ao lado: *${prefix}venderestabulo*`
mention(txt)
break

case 'lojadegalos':
setTimeout(() => {reagir(from, "🐔")}, 300)
if(JSON.stringify(galosrpg).includes(sender)) {
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].level) < 6) {
LV = `R$ ${Number(galosrpg[AD].level) * 100}.00`
} else {
LV = `Lv. Máx`
}
PC = LV
} else {
PC = `R$ 100.00`
}
txt = `*${tempo}* @${sender.split('@')[0]}, Seja bem vindo(a) à loja de galos:\n🐓🏷 *Loja de Galos:*\n❱❱ ${prefix}comprargalinheiro *[R$ 500.00]*\n❱❱ ${prefix}comprargalo 1 *[R$ 100.00]*\n❱❱ ${prefix}comprargalo 6 *[R$ 550.00]*\n❱❱ ${prefix}comprargalo 12 *R$ 1000.00]*\n❱❱ ${prefix}comprargalinha *[R$ 100.00]*\n❱❱ ${prefix}upgalo *[${PC}]*\n––\n🐓🏷 *Vendas:*\n❱❱ Venda de Galos: *${prefix}vendergalo (quantidade)*\n❱❱ Venda de Galinhas: *${prefix}vendergalinha (quantidade)*`
mention(txt)
break

case 'image_viewonce':
sabrina.sendMessage(from, {image: {url: ftmenu.logo}, viewOnce: true}, {quoted: info});
break;

case 'audio_viewonce':
sabrina.sendMessage(from, {audio: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytaudio?url=https://youtu.be/o4lB81AnDSM?si=9zXDqAWwDNPDPkTU&apikey=${API_KEY_BRONXYS}`}, mimetype: "audio/mpeg", viewOnce: true}, {quoted: info});
break;

case 'video_viewonce':
sabrina.sendMessage(from, {video: {url: `http://api-expr.sabapi.tech:6060/api/dl/ytvideo?url=https://youtu.be/o4lB81AnDSM?si=9zXDqAWwDNPDPkTU&apikey=${API_KEY_BRONXYS}`}, viewOnce: true}, {quoted: info});
break;

case 'text_newsletter':
sabrina.sendMessage(from, {text: "Testando mensagem...", contextInfo: {forwardingScore: 1000000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: "120363173003902460@newsletter"}}}, {quoted: info});
break;

//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : SABRINA CONTEÚDOS)==\\

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return sabrina.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪᴅᴀ* ✅`
sabrina.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
sabrina.sendMessage(from, {text: 'Reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply(mess.charactersAnti())
console.log(colors.red('Deram spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
sabrina.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
sabrina.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
sabrina.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./arquivos/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
sabrina.sendMessage(from, {audio: buffer, ptt:true}, {quoted: sasah})
DLT_FL(rano)
})
})
}}}

if(JSON.stringify(music).includes(from)) {
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
BC = music[AB].usus.map(i => i.id).indexOf(sender)
if(budy2.toLowerCase().replace("á", "a") === `audio` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlAudio.replace("#SabrinaKey#", API_KEY_BRONXYS)
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
sabrina.sendMessage(from, {audio: {url: link}, mimetype: "audio/mpeg"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {reply(mess.error())})
} catch (e) {
reply(mess.error())
}
}
if(budy2.toLowerCase().replace("í", "i") === `video` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlVideo.replace("#SabrinaKey#", API_KEY_BRONXYS)
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
sabrina.sendMessage(from, {video: {url: link}, mimetype: "video/mp4"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {
reply(mess.error())})
} catch (e) {
reply(mess.error())
}}
if(budy2.toLowerCase() === `doc` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlAudio.replace("#SabrinaKey#", API_KEY_BRONXYS)
nome = music[AB].usus[BC].title
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
sabrina.sendMessage(from, {document: {url: link}, fileName: nome+'.mp3', mimetype: "audio/mpeg"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {
reply(mess.error())})
} catch (e) {
reply(mess.error())
}}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

/*
if(budy2.includes("prefixo")) {
reply(mess.thinkingPrefix(pushname, prefix))  
}
*/

if(isAutorepo) {
if(budy2 === "bot") {
reply(mess.chamandoBot(pushname, tempo))  
}
 
if(budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Corno é você, seu animal!")
}

if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
sabrina.sendMessage(from, {text: adivinha}, {quoted: sasah})
}

if(budy2.includes("boa noite")){
tujuh = await fetch(boa_noite).then(v => v.buffer())
await sabrina.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}

if(budy2.includes("boa tarde")){
tujuh = await fetch(boa_tarde).then(v => v.buffer())
await sabrina.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}

if(budy2.includes("bom dia")){
tujuh = await fetch(bom_dia).then(v => v.buffer())
await sabrina.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}

if(budy2.includes("corno")){
tujuh = await fetch(corno).then(v => v.buffer())
await sabrina.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}
}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//=========[--ANTI PALAVRÃO --]==========\\

if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
 if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
setTimeout(() => {
sabrina.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}, 2000)
sabrina.sendMessage(from, {text: mess.permissionDenied_rUser()})
}
}

 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
muehe = await simih(budy)
sabrina.sendMessage(from, {text: muehe}, {quoted: info}).catch(e => {
reply("Não entendi! Por favor, me explique!") 
})
}


if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
if (sami) sabrina.sendMessage(from, {text: sami}, {quoted: info})
}
}

//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if(isCmd) {
uptime = process.uptime() 
sabrina.sendMessage(from, {text: mess.commandNotFound(tempo, prefix), contextInfo: {externalAdReply: {title: `Bot: ${NomeDoBot}`, body: `Olá ${pushname}, comando não existente no sistema.`, thumbnail: await getBuffer(thumbnail), mediaType: 1, sourceUrl: `https://sabapis.tech`}}, mentions: [sender]}, {quoted: info})
}

}
}
}

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

async function vipFunctionTempo() {
if(premium.length > 0) {
for (y of premium) {
if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
y.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
fs.writeFileSync("./database/usuarios/premium.json", JSON.stringify(premium))
if(y.infinito == false) {
if(y.dias > 1) {y.dias -= 1
fs.writeFileSync("./database/usuarios/premium.json", JSON.stringify(premium))
} else {
sabrina.sendMessage(y.id, {text: `⚠️ *ATENÇÃO!* Seus dias como usuário premium acabam de terminar, para realizar a renovação entre em contato com o número abaixo:\n• Contato: *http://wa.me/${numerodono}*\n––\n• Desde já muito obrigado pela atenção, desculpe-me o incômodo.\n• *Essa mensagem é automática*, caso seja um engano entre em contato com número acima e saiba mais!`})
AB = premium.map(b => b.id).indexOf(y.id)
premium.splice(AB, 1)
fs.writeFileSync("./database/usuarios/premium.json", JSON.stringify(premium))
}}}}}}

async function tmpCardAluguelFunction() {
if(aluguel.length > 0) {
for(x of aluguel) {if(x.save != Number(moment.tz('America/Sao_Paulo').format('DD')) && x.cortesia == false) {
if(x.tempo > 1) {
if(Number(x.tempo) === 8 || Number(x.tempo) === 4 || Number(x.tempo) === 3 || Number(x.tempo) === 2) {
sabrina.sendMessage(x.cliente, {text: `😿⚠️ Olá, acabo de verificar que nosso contrato no grupo *${aluguel[aluguel.map(m => m.id).indexOf(x.id)].nome}* termina em ${Number(x.tempo) === 8 ? `1 semana (7 dias)` : Number(x.tempo) !== 2 ? `${x.tempo - 1} dias` : `24 horas (amanhã)`}...\n• Não deixe de fechar contrato novamente com nossa equipe! *Qualquer dúvida, entre em contato com meu proprietário.*`})
}
x.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
x.tempo -= 1
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
} else {
sabrina.sendMessage(x.id, {text: `*O tempo limite deste grupo acabou!😿💔* Para a renovação do contrato entre em contato com o meu dono: *wa.me/${nmrdn.split('@')[0]}*`})
sabrina.sendMessage(nmrdn, {text: `🤓🗑️ Só passando pra avisar que o tempo limite do grupo *${x.nome}* expirou agora... Visto que o(a) *@${x.cliente.split('@')[0]}* não renovou o contrato, eu saí do grupo dele(a) e apaguei os registros! 🌟`, mentions: [x.cliente]})
GP = grupos.map(i => i.id).indexOf(x.id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
RT = aluguel.map(i => i.id).indexOf(x.id)
grupo = x.id
aluguel.splice(RT, 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
await sleep(4000)
sabrina.groupLeave(grupo)
}}}}}

async function tmpCardCortesiaAluguel() {
if(aluguel.length > 0) {
for( x of aluguel ) {
if(x.save != Number(moment.tz('America/Sao_Paulo').format('HH')) && x.cortesia == true) {
if(x.tempo > 0) {
x.save = Number(moment.tz('America/Sao_Paulo').format('HH'))
x.tempo -= 1
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
} else {
sabrina.sendMessage(x.id, {text: `🌟💳 *O cartão cortesia 24h deste grupo expirou!* Caso se veja interessado em nossos serviços, favor entrar em contato com meu dono: *wa.me/${nmrdn.split('@')[0]}*`})
sabrina.sendMessage(nmrdn, {text: `🤓🗑️Só passando pra avisar que o cartão cortesia do grupo *${x.nome}* expirou agora... Visto que não houve alteração em meus registros, eu saí do grupo e apaguei os dados! 🌟`})
GP = grupos.map(i => i.id).indexOf(x.id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(aluguel.map(i => i.id).indexOf(x.id), 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
await sleep(4000)
sabrina.groupLeave(x.id)
}}}}}

async function FunctionEnvMsg() {
sabrina.sendMessage(nmrdn, {text: `O que é buceta, que tu me chama?`})
}

vipFunctionTempo(); // Executar a função do premium temporário, quando os dias zerar.
tmpCardAluguelFunction(); // Quando o aluguel oficial do grupo (assinado), sem ser o teste.
tmpCardCortesiaAluguel(); // Quando o cartão cortesia do grupo acabar, ele irá notificar.

msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(API_KEY_BRONXYS)) {
return console.log("A api caiu ou não foi possivel executar esta ação.")
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e)
}
})

}
}
}

//===== [Início - Área de Atualizações] =====\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(colors.red(`Alterações salvas - '${__filename}'`));
delete require.cache[file]
require(file)
})

//===== [Fim - Área de Atualizações] =====\\

iniciarSabrina().catch(async(e) => {return console.log(colors.red(`• ERROR: `+e))})