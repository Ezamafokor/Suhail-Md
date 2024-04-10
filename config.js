const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_12_03_21_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkxvRXVVTWxtRitsblNCM1REQ2IzREVuRkpNQlJwU1JFTjNpVldnUVBYTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInlQbURLVXBzTVJnU3VNc3pkanVlSlBVbWRxbEZoRkxDelNQS1A5ak95WG89XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUd2dm5HeFpMMlRaV1JSRHIvby80b1lxQnRQemF6cXMvYWhiWTA4Z2xYOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIklOK1NFRjJ4VVAvempRcm5DVDQ0Yjgva1Z6Z1BGSjI1WElIeTluNFd0alk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUhzL0M3U04wYSs4ZlBoUDJSVjV4cmhvTkFHWkdSODhZeE5pWVByV25GZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImhBUHNDUGVDbTZqUWZPMWJMRTFtZDQxYnExY3g1WWh5SUttRXV0M3NaRVE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJFQUJkOXZzdC82bjEzS2xwUkVUQWNFZFZiYlBMc0xFaWZyTkNaQW1WYTNFPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiazdHaXNucTJLcG83cUkrQXNmUmdSeFF5UWlycldZcmJ2ZHJzdDNXOVdIUT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5aDJaamZ4dmFERlFVQWlOSWY0QXh0V1h4NENOUHZQaURVSEFYQmxqa1dmQmY0cGNkV1RYMUJGRkc0T3VuQ2dUbnEwdEx3dW8yTllmeUZaWEpPbjhCdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjE1LFwiYWR2U2VjcmV0S2V5XCI6XCJLaCtWdUo1eVljQmRkUDRNcHFKTFhPWUxaZkx3cVFERFQzT3VUVldGVlVZPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwieDFkWG9LRVVSV0N4MU5mSEFtbU42UVwiLFwicGhvbmVJZFwiOlwiZDM3NjYzNTMtYmY4Yy00Yzk5LTg5OTItZWU4OGZmMjg3NGFhXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIyMWxSaklVbkpNZFlFT0RGZS81SnlLQUcxdEE9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInFNbXpuWDBBM1UwY20yVDRqTWMrcjM5KzRPND1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDS1dMMDRBS0VQNjQ4YThHR0FRZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkhkUy9seVpseXduamJWbHAzbVJ6VXlTL3RYcm1KQ2c4L2pQczJhTWZnQ2c9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJ4RG9yT2xmWCtmWDNBSURKTzJUNThlYW82bWZFa0ZpU0RqVjFadmhuMGpLWUhCM1B3UmZXcWcxRUU1c0tGc2sydFpzWUhUN01tOEZ3YW5zcEZTQW5EUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImRlTURUZlRHUlozTVozY3VpVGpJOGlHQzV3ZXhXUkV6WGNaVXlJdWFuaWFZWm9mSVgwa0l6UExLVFBleGg3M3Rkd0lSaUJDY2Q3cUdQOGhLaDZrTEJnPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzc2OTE3NDg3NTE6MzVAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIkV6ZWNoaWVsIExlIE1pZWxcIixcImxpZFwiOlwiMTQxMDEyMzk5ODQ5Njk4OjM1QGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNzY5MTc0ODc1MTozNUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJSM1V2NWNtWmNzSjQyMVphZDVrYzFNa3Y3VjY1aVFvUFA0ejdObWpINEFvXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iaVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTAzNzU3MCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFIR29cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIR24uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyam9ta0x3bTQxeGJXZWhCOTBieGN4MWIyZytNZ2M4bEpOSEdQV240eis0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2ODU3MTU4NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNzkwNzA1NTAyMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhHby5qc29uIjogIntcImtleURhdGFcIjpcImMwRC9Vd1dYWFVkOUZIa1hkSmtPaVFQTitZcGZLeUprSlBsVTdWbzhDZ2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjY4NTcxNTg3NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTA1MDg4MjMwODZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIR3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHRU1rNUxPN0ZMaFozOHMwZzNpSUZWSVYvU0hGQXhDV3RwQy91eU9EMzdjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2ODU3MTU4NzcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEwMzc0Njg4NzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIR3IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvNzJySnQ1OXZvMTQ3ajh1TG5GLzNZejQ1VUdZd0Jrak1RbmRDbVBPSThFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2ODU3MTU4NzcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsyLDEsMF19LFwidGltZXN0YW1wXCI6XCIxNzExMDM3NDcwNzA3XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
