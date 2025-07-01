// ✅ Telegram WebApp context
const tg = window.Telegram.WebApp;
tg.expand();

const username = tg.initDataUnsafe?.user?.username || "Guest";
const userId = tg.initDataUnsafe?.user?.id || null;

// ✅ Fake user data (replace later with real API)
let coinCount = 0;
let energyCount = 91;
let activeStyle = 'Realistic';

// ✅ DOM Elements
const coinDisplay = document.getElementById("coin-count");
const energyDisplay = document.getElementById("energy-count");
const tabs = document.querySelectorAll(".tab");
const navButtons = document.querySelectorAll(".nav-btn");
const pages = {
  home: document.getElementById("homePage"),
  subscription: document.getElementById("subscriptionPage"),
  coins: document.getElementById("coinPage"),
};

// ✅ Update coin and energy UI
function updateStatusBar() {
  coinDisplay.textContent = coinCount;
  energyDisplay.textContent = `${energyCount}/100`;
}

// ✅ Tab switcher: Realistic / Anime
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeStyle = tab.textContent;
    // Optional: re-render character cards based on selected style
  });
});

// ✅ Navbar logic
navButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Hide all pages first
    Object.values(pages).forEach((page) => page.classList.add("hidden"));

    // Show selected page
    if (index === 0) {
      pages.home.classList.remove("hidden");
    } else if (index === 1) {
      pages.subscription.classList.remove("hidden");
    } else if (index === 2) {
      pages.coins.classList.remove("hidden");
    }
    // Add more logic if you add settings/chat page later
  });
});

// ✅ Plus buttons
document.querySelectorAll(".plus-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    tg.showAlert("This feature is not connected yet.");
    // Later: open coin store or energy recharge
  });
});

// ✅ Continue / Buy buttons (bottom pink)
document.querySelectorAll(".btn-full").forEach((btn) => {
  btn.addEventListener("click", () => {
    tg.showAlert("Action not implemented yet. Hook with backend.");
  });
});

// ✅ Close button
document.querySelector(".close-btn").addEventListener("click", () => {
  tg.close();
});

// ✅ "Create Character" Card Click (optional future logic)
const createCard = document.querySelector(".card.create");
if (createCard) {
  createCard.addEventListener("click", () => {
    tg.showPopup({
      title: "Coming Soon",
      message: "AI character creation will be available soon.",
      buttons: [{ id: "ok", type: "ok", text: "Okay" }],
    });
  });
}

// ✅ Init UI
updateStatusBar();
