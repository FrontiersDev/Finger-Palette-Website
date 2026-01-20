// ==========================================
// CONFIGURATION - EDIT THIS SECTION
// ==========================================

// 1. APPLICATION SETTINGS
// Change 'false' to 'true' to open applications
const APPS_OPEN = true; 

// Paste your Google Form or website link here
const APP_LINK = "https://your-application-form-url.com"; 

// 2. MEMBER LIST
// Add member names inside the quotes, separated by commas.
const MEMBERS = {
    // TIER 1: PALETTES
    palettes: [
        "UserOne",
        "CoolGorilla",
        "ProPlayer123",
        // Add more here...
    ],

    // TIER 2: CANVASES
    canvases: [
        "NewGuy",
        "ArtistMonke",
        "AnotherUser",
        // Add more here...
    ]
};

// ==========================================
// DO NOT EDIT BELOW THIS LINE (LOGIC ONLY)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    setupStatus();
    renderMembers("palette-list", MEMBERS.palettes);
    renderMembers("canvas-list", MEMBERS.canvases);
});

function setupStatus() {
    const btn = document.getElementById("app-btn");
    const text = document.getElementById("status-text");

    if (APPS_OPEN) {
        btn.href = APP_LINK;
        btn.classList.remove("hidden");
        text.textContent = "Applications are OPEN until the 7th!";
        text.style.color = "#4CAF50"; // Green text for open
    } else {
        btn.classList.add("hidden");
        text.textContent = "Applications are currently CLOSED. Check back on the 1st of next month.";
        text.style.color = "#FF5252"; // Red text for closed
    }
}

function renderMembers(elementId, memberList) {
    const container = document.getElementById(elementId);
    
    // Sort names alphabetically (A-Z) automatically
    memberList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    memberList.forEach(name => {
        const card = document.createElement("div");
        card.className = "member-card";
        
        const nameTag = document.createElement("h3");
        nameTag.className = "member-name";
        nameTag.textContent = name;

        card.appendChild(nameTag);
        container.appendChild(card);
    });
}