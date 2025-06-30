let tg = window.Telegram.WebApp;

// 🟣 Expand Mini App full screen
tg.expand();

// 💋 Sample Ava mood (will be dynamic later)
const avaMood = "Needy and Naughty 🥵";
const nsfwCredits = 120;
const heartMeter = "❤️❤️❤️🤍🤍";

// 👤 Set user data from Telegram
const username = tg.initDataUnsafe?.user?.first_name || "My Love";

// ✨ Inject into page
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("username").textContent = username;
  document.getElementById("mood").textContent = avaMood;
  document.getElementById("credits").textContent = `${nsfwCredits} NSFW Credits`;
  document.getElementById("hearts").textContent = heartMeter;
});
