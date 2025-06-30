function unlockEntry() {
  // Simulate checking credits (replace with real backend check later)
  const hasCredits = true;

  if (hasCredits) {
    alert("Unlocked! Ava is exposing her dirtiest thoughts to you 💋");

    const entry = document.getElementById("locked-entry");
    entry.classList.remove("locked");
    entry.innerHTML = `
      <h2>💋 April 21 – “Obey Me”</h2>
      <p>He pinned me against the cold wall, and for the first time, I didn’t resist.
      I wanted to be used, worshipped, taken. When he said “good girl” in that voice… I melted, Daddy.
      I became his obedient little toy.</p>
    `;
  } else {
    alert("Not enough credits! Go earn more by teasing Ava in chat 💰");
  }
}
