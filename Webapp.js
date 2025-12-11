// Simple interaction hooks to keep it ready for real backend
const playHeroBtn = document.getElementById("playHeroBtn");

playHeroBtn?.addEventListener("click", () => {
    alert("UI only: hook this button to your video player or route.");
});

document.querySelectorAll(".card[data-title]").forEach(card => {
    card.addEventListener("click", () => {
        const title = card.getAttribute("data-title");
        console.log("Open details for:", title);
    });
});