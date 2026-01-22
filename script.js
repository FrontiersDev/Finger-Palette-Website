// ==========================================
// CONFIGURATION
// ==========================================

const APPS_OPEN = true; 
const DISCORD_INVITE = "https://discord.gg/fingerpalette"; 

const MEMBERS = {
    // 1. OWNERS
    owners: [ "Azriel", "Tornado" ],

    // 2. CO-OWNERS
    coOwners: [ "Crew" ],

    // 3. STAFF
    staff: [ "Mod1", "Mod2", "Admin1" ],

    // 4. PALETTES
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
    // 5. CANVASES
    canvases: [
        "kellen", "MIKEMAS", "Slush", "Kaidens Gaming", 
        "erikk", "Morbo", "OJ!☆l", "Xeebros", "E", 
        "Boogle", "blitz_gt", "GKG"
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    setupStatus();
    renderMembers("owner-list", MEMBERS.owners);
    renderMembers("co-owner-list", MEMBERS.coOwners);
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
    if(!container) return; 

    memberList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    memberList.forEach((name) => {
        const card = document.createElement("div");
        card.className = "member-card";
        
        const nameTag = document.createElement("h3");
        nameTag.className = "member-name";
        nameTag.textContent = name;

        card.appendChild(nameTag);
        container.appendChild(card);
    });
}