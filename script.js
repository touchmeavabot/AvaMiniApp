// Auto-login via Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// Get Telegram username
const username = tg.initDataUnsafe?.user?.first_name || "My Love";
document.getElementById("username").innerText = username;

// Mock stats (replace with real backend API later)
const userStats = {
  mood: "Flirty 😘",
  hearts: "92%",
  credits: 180,
};

// Show stats
document.getElementById("mood").innerText = userStats.mood;
document.getElementById("hearts").innerText = userStats.hearts;
document.getElementById("credits").innerText = userStats.credits;

// Navigation buttons (link to your real routes)
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
