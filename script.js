// 🔄 Expand Telegram WebApp to full height
const tg = window.Telegram.WebApp;
tg.expand();

// 🧠 Get Telegram Username
const username = tg.initDataUnsafe?.user?.username || "Guest";
document.getElementById("telegram-username").innerText = "@" + username;

// ❤️ Ava’s dynamic mock data (replace with real backend later)
const avaData = {
  mood: "Needy and Naughty 🥵",
  heart: 92, // percent
  credits: 180,
};

// 🎯 Inject Ava data into HTML
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ava-mood").innerText = avaData.mood;
  document.getElementById("heart-meter").innerText = `${avaData.heart}%`;
  document.getElementById("nsfw-credits").innerText = avaData.credits;

  // Fill heart bar visually
  const heartFill = document.getElementById("heart-fill");
  if (heartFill) {
    heartFill.style.width = `${avaData.heart}%`;
  }
});

// 🔘 Navigation Handlers
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
