// ==========================================
// CONFIGURATION - EDIT THIS SECTION
// ==========================================

// 1. APPLICATION SETTINGS
const APPS_OPEN = true; // Set to true to open
const APP_LINK = "https://your-form-url-here.com"; 

// 2. MEMBER LIST
const MEMBERS = {
    palettes: [
        "UserOne", "CoolGorilla", "ProPlayer123"
    ],
    canvases: [
        "NewGuy", "ArtistMonke", "AnotherUser"
    ]
};

// ==========================================
// LOGIC
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
        text.textContent = "Applications are currently OPEN!";
        text.style.color = "#FFC800"; 
    } else {
        btn.classList.add("hidden");
        text.textContent = "Applications are currently CLOSED. Check back next month.";
        text.style.color = "#E6E1C5"; 
    }
}

function renderMembers(elementId, memberList) {
    const container = document.getElementById(elementId);
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