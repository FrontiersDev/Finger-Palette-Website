// ==========================================
// CONFIGURATION
// ==========================================

// 1. APPLICATION STATUS
const APPS_OPEN = false; 

// 2. LINKS
const DISCORD_INVITE = "https://discord.gg/fingerpalette"; 

// 3. MEMBER LIST
const MEMBERS = {
    // NEW: OWNERS (Red)
    owners: [
        "YourNameHere", "PartnerName" 
    ],

    // NEW: STAFF TEAM (Gold)
    staff: [
        "Mod1", "Mod2", "Admin1"
    ],

    // TIER 1: PALETTES (Purple)
    palettes: [
        "Tfird", "SPNCE", "SharkyPro", "Voix", "mark", "Rub", 
        "LUNARGT", "LumberVR", "Nico", "PilloVR", "Ribbonz", 
        "Aiden", "optic", "Pigless", "GmanOnVr", "AliTheGuyVR", 
        "cookiee!", "Paulamine_vr", "FruitGT", "Drift", 
        "fancyandiamond", "isaac", "flinx", "VerdexGT4Canvas", 
        "goodguyvr", "ab.", "Headless", "Beheld", "Maybe_gtag", 
        "clox", "N1ZO", "AllMightyMonk", "Saffygotpalette!", 
        "Pezi", "OJ", "Llama", "palette520/ kel", "Blaze vr", 
        "ILikeGT", "Jolly JdpVr", "Cashh", "Espio", "kylemilly!", 
        "Saul", "sol", "milkywayy", "Zeep", "Bub", "Robvr", 
        "nine", "Pastry", "MoistyVR", "Zydex", "fraggz", 
        "Human Being", "Astromax", "new redguy with a hat", 
        "clipo (eclipse)", "fiction", "Freddyboy", "WERC", 
        "tornado", "Twizzler", "just._.stevenn", "Fenz", 
        "EddieGT", "incrim", "Ridis", "Evmation", "Azriel", 
        "! Crew", "Jacknoham", "Fran", "chrisy isa pro", 
        "cosmyyeahhhhh"
    ],

    // TIER 2: CANVASES (Blue)
    canvases: [
        "kellen", "MIKEMAS", "Slush", "Kaidens Gaming", 
        "erikk", "Morbo", "OJ!☆l", "Xeebros", "E", 
        "Boogle", "blitz_gt", "GKG"
    ]
};

// ==========================================
// LOGIC
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    setupStatus();
    renderMembers("owner-list", MEMBERS.owners);
    renderMembers("staff-list", MEMBERS.staff);
    renderMembers("palette-list", MEMBERS.palettes);
    renderMembers("canvas-list", MEMBERS.canvases);
});

function setupStatus() {
    const btn = document.getElementById("app-btn");
    const text = document.getElementById("status-text");

    if (APPS_OPEN) {
        btn.href = DISCORD_INVITE;
        btn.classList.remove("hidden");
        btn.textContent = "JOIN DISCORD TO APPLY"; 
        
        text.textContent = "APPLICATIONS ARE OPEN!";
        text.style.color = "#FFC90E"; 
    } else {
        btn.classList.add("hidden");
        text.textContent = "Applications are currently CLOSED. Check back on the 1st.";
        text.style.color = "#CDCDB4"; 
    }
}

function renderMembers(elementId, memberList) {
    const container = document.getElementById(elementId);
    
    // Sort names alphabetically (A-Z) automatically
    memberList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    memberList.forEach((name, index) => {
        const card = document.createElement("div");
        card.className = "member-card";
        
        card.style.animationDelay = `${index * 50}ms`; 
        
        const nameTag = document.createElement("h3");
        nameTag.className = "member-name";
        nameTag.textContent = name;

        card.appendChild(nameTag);
        container.appendChild(card);
    });
}