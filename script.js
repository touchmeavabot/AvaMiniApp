// ✅ Auto-login via Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// ✅ Set Telegram username
const username = tg.initDataUnsafe?.user?.first_name || "My Love";
document.getElementById("telegram-username").innerText = username;

// ✅ Mock data for Ava's mood and stats (replace with real API later)
const userStats = {
  mood: "Flirty 😘",
  hearts: "92%",
  credits: 180,
};

// ✅ Display stats
document.getElementById("ava-mood").innerText = userStats.mood;
document.getElementById("heart-meter").innerText = userStats.hearts;
document.getElementById("nsfw-credits").innerText = userStats.credits;

// ✅ Button click handlers (use real links later)
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
