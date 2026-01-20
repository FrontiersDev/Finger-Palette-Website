// ==========================================
// CONFIGURATION - EDIT THIS SECTION
// ==========================================

// 1. APPLICATION STATUS
const APPS_OPEN = false; // Set to true to open applications

// 2. LINKS
// Paste your Discord Invite Link here!
const DISCORD_INVITE = "https://discord.gg/fingerpalette"; 

// 3. MEMBER LIST
const MEMBERS = {
    // TIER 1: PALETTES (Cyan Role + Promoted Staff)
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

    // TIER 2: CANVASES (Lime Role)
    canvases: [
        "kellen", "MIKEMAS", "Slush", "Kaidens Gaming", 
        "erikk", "Morbo", "OJ!☆l", "Xeebros", "E", 
        "Boogle", "blitz_gt", "GKG"
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
        // When open, link to Discord and change text
        btn.href = DISCORD_INVITE;
        btn.classList.remove("hidden");
        btn.textContent = "JOIN DISCORD TO APPLY"; 
        
        text.textContent = "APPLICATIONS ARE OPEN!";
        text.style.color = "#FFC90E"; 
    } else {
        // When closed, hide button
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
        
        // This line adds the stagger effect!
        // Each card waits 50ms longer than the last one before popping in.
        card.style.animationDelay = `${index * 50}ms`; 
        
        const nameTag = document.createElement("h3");
        nameTag.className = "member-name";
        nameTag.textContent = name;

        card.appendChild(nameTag);
        container.appendChild(card);
    });

        // ==========================================
    // PARALLAX EFFECT LOGIC
    // ==========================================
    document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        
        // speed: 0.0 = static (fixed), 1.0 = moves with text
        // -0.2 means it moves slightly UP as you scroll DOWN (creating depth)
        const speed = -0.2; 
        
        const offset = scrollPosition * speed;
        
        // Send this value to the CSS variable on the body
        document.body.style.setProperty('--scroll-offset', `${offset}px`);
    });
}