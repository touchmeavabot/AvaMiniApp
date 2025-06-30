// 🔄 Auto-login via Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// 🧠 User Info from Telegram
const username = tg.initDataUnsafe?.user?.username || "Guest";
document.getElementById("telegram-username").innerText = "@" + username;

// ❤️ Ava’s dynamic mock data (replace with real backend API later)
const avaData = {
  mood: "Needy and Naughty 🥵",
  heart: 92, // percent
  credits: 180,
};

// 🎯 Inject into HTML
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ava-mood").innerText = avaData.mood;
  document.getElementById("heart-meter").innerText = `${avaData.heart}%`;
  document.getElementById("nsfw-credits").innerText = avaData.credits;

  // Set heart progress bar fill
  const heartFill = document.getElementById("heart-fill");
  if (heartFill) {
    heartFill.style.width = `${avaData.heart}%`;
  }
});

// 🔘 Button click actions (these will be updated later to real pages)
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
