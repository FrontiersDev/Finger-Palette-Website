// ==========================================
// CONFIGURATION
// ==========================================

const APPS_OPEN = false; 
const DISCORD_INVITE = "https://discord.gg/fingerpalette"; 

const MEMBERS = {
    // 1. OWNERS
    owners: [ "Azriel", "Tornado" ],

    // 2. CO-OWNERS
    coOwners: [ "Crew" ],

    // 3. STAFF (Format: {name: "Name", rank: "Rank"})
    staff: [
        { name: "OJTHEBDAYBOI", rank: "Head Admin" },
        { name: "GKG", rank: "Head Moderator" },
        { name: "Slush4goon", rank: "Head Moderator" },
        { name: "Paulamine_vr", rank: "Admin" },
        { name: "goodguyvr", rank: "Admin" },
        { name: "sypt", rank: "Admin" },
        { name: "goodguyvr4canvas", rank: "Admin" },
        { name: "Camzzz", rank: "Moderator" },
        { name: "trixy", rank: "Moderator" },
        { name: "Neon!", rank: "Moderator" },
        { name: "AwesomeGuy4Palette", rank: "Moderator" },
        { name: "Furryboy", rank: "Trial Mod" },
        { name: "Floridaball", rank: "Developer" }
    ],

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
    // 5. CANVASES (Added Azriel, Tornado, Crew)
    canvases: [
        "Azriel", "Tornado", "Crew",
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

    // Helper to get name string for sorting
    const getName = (item) => (typeof item === 'string' ? item : item.name);

    memberList.sort((a, b) => getName(a).toLowerCase().localeCompare(getName(b).toLowerCase()));

    memberList.forEach((item) => {
        const card = document.createElement("div");
        card.className = "member-card";
        
        // Determine if it's a simple string or an object with rank
        const nameText = typeof item === 'string' ? item : item.name;
        const rankText = typeof item === 'object' ? item.rank : null;

        const nameTag = document.createElement("h3");
        nameTag.className = "member-name";
        nameTag.textContent = nameText;
        card.appendChild(nameTag);

        // Render Rank if it exists
        if (rankText) {
            const rankTag = document.createElement("div");
            rankTag.className = "member-rank";
            rankTag.textContent = rankText;
            card.appendChild(rankTag);
        }

        container.appendChild(card);
    });
}