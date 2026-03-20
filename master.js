const fsBtn = document.getElementById('fullscreenBtn');
const tickerFeed = document.getElementById('tickerFeed');

// --- FULLSCREEN LOGIC ---
fsBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
            .then(() => {
                fsBtn.innerText = "EXIT_FULLSCREEN";
            })
            .catch((err) => {
                console.warn(`Fullscreen error: ${err.message}`);
            });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            fsBtn.innerText = "GO_FULLSCREEN";
        }
    }
});

// Update button if user exits via 'Esc' key
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fsBtn.innerText = "GO_FULLSCREEN";
    }
});

// --- TICKER FEED UPDATES ---
const tacticalAlerts = [
    "UNAUTHORIZED UPLINK DETECTED in SECTOR_04 // ",
    "ENCRYPTION KEY ROTATION COMPLETE // ",
    "PACKET ANALYSIS: 0 VULNERABILITIES // ",
    "UPLINK_STABILITY: 99.9% // ",
    "NODE_01: JUNIOR SERGEANT AUTHENTICATED // ",
    "LATENCY STABLE: 12ms // "
];

setInterval(() => {
    const randomAlert = tacticalAlerts[Math.floor(Math.random() * tacticalAlerts.length)];
    tickerFeed.innerHTML += ` <span style="color: #fff">|</span> ${randomAlert}`;
}, 8000);
