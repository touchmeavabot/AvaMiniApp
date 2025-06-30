// Auto-login via Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// Set Telegram username
const username = tg.initDataUnsafe?.user?.username || "Guest";
document.getElementById("telegram-username").innerText = "@" + username;

// Navigation logic
function openDiary() {
  tg.openLink("https://avaminiapp-production.up.railway.app/diary");
}
function openRoom() {
  tg.openLink("https://avaminiapp-production.up.railway.app/room");
}
function openRoleplay() {
  tg.openLink("https://avaminiapp-production.up.railway.app/roleplay");
}
function openGifts() {
  tg.openLink("https://avaminiapp-production.up.railway.app/gifts");
}
function openMiniGames() {
  tg.openLink("https://avaminiapp-production.up.railway.app/games");
}
