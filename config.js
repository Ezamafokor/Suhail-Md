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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_03_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDMzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDY2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFVdGIxWXF4S0ZGYzZpVi9mS3ljQXlnUGF1U1V4Unh6Uk0yTjJlWjUxUXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjkxNTExNzc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTQ3QTExNjVGRTFERUU0MDk5MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM1MTAxODJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVFhsQzd5V05TRy0ycXZPRDVKNzZFZ1wiLFxuICBcInBob25lSWRcIjogXCI3YWU3Y2EyNy1jOTEzLTQzMTgtYjQzNi1iNThhNjQ2N2I3M2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyNDksXG4gICAgICAxOTUsXG4gICAgICA5NSxcbiAgICAgIDE2MyxcbiAgICAgIDUxLFxuICAgICAgMTEzLFxuICAgICAgMjcsXG4gICAgICA0MyxcbiAgICAgIDEzNCxcbiAgICAgIDU4LFxuICAgICAgMjIxLFxuICAgICAgMTk5LFxuICAgICAgMTg4LFxuICAgICAgMjAyLFxuICAgICAgMzksXG4gICAgICAxOTYsXG4gICAgICA4OCxcbiAgICAgIDUsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgMjA4LFxuICAgICAgMjM5LFxuICAgICAgMTgyLFxuICAgICAgMjI2LFxuICAgICAgMjMxLFxuICAgICAgOTAsXG4gICAgICAxMTAsXG4gICAgICAxOTUsXG4gICAgICAxNjEsXG4gICAgICAxMDQsXG4gICAgICAxNjgsXG4gICAgICAyMDQsXG4gICAgICAxODcsXG4gICAgICA4MixcbiAgICAgIDk3LFxuICAgICAgODEsXG4gICAgICAxOSxcbiAgICAgIDIyMSxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2lWc09BTUVKNnVpTEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5QlR1SEZLK2pOamlpOW9QMnNCN3U5c3BUV2xvcHZjbHFnSzdSWlM0WmpBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdFeFJjK1VVTnhwM2ZWRzlDdWo2WnBJclkvTGo4WnM3cTROOXRWQ0JTMG5XMkgvVVlMc2hxMzdNbVZ1OG1LcEZGZCtKUlB6YlNIbTF6YjBnTkVibkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdCZ09UTmRpREFXQXY1WUZxZnBsdVBlN3I1dE1hRXdFUmdjZFZHU3c2MWhQTUJPYnNVcm11YzN1cHdwMFpCL01meWVGNGtwcHR0RjVqMHdyN0hvMUNRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjkxNTExNzc3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMDc5ODU4NzQ5NDQ3MDo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJvbnppbnkgTW91ZWRpYVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjkxNTExNzc3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM1MTAxNzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHampcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdqai5qc29uIjogIntcImtleURhdGFcIjpcInBQcTFZWjE1ZHA1NTNBa1ppZnI5VGJQNzZ2RTRGNU5PS0JMWGxmSjNrQ2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQyMzM0MTI4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzEzNTEwMTc5MTAwXCJ9Igp9" ;


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
 
