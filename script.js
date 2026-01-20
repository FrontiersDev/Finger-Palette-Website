// ==========================================
// SETTINGS
// ==========================================

// 1. APPLICATION STATUS
const APPS_OPEN = false; // Set to true to show the button
const APP_LINK = "https://your-google-form-link.com"; 

// 2. MEMBERS LIST
const MEMBERS = {
    palettes: [
        "UserOne", "CoolGorilla", "ProPlayer123"
    ],
    canvases: [
        "NewGuy", "ArtistMonke", "AnotherUser"
    ]
};

// ==========================================
// LOGIC (Do not edit below)
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
        text.textContent = "APPLICATIONS ARE OPEN!";
        text.style.color = "#FFC90E"; 
    } else {
        btn.classList.add("hidden");
        text.textContent = "Applications are currently closed. Check back on the 1st.";
        text.style.color = "#CDCDB4"; 
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