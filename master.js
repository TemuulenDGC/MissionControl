const tickerFeed = document.getElementById('tickerFeed');

// Forensic-style alerts for the broadcast bar
const tacticalAlerts = [
    "UNAUTHORIZED UPLINK DETECTED in SECTOR_04 // ",
    "ENCRYPTION KEY ROTATION COMPLETE // ",
    "PACKET ANALYSIS: 0 VULNERABILITIES FOUND // ",
    "DOTMATRIX CORE STATUS: NOMINAL // ",
    "AVALON_OS OPERATIONAL: JUNIOR SERGEANT AUTHENTICATED // ",
    "RSA_4096_HANDSHAKE: SUCCESSFUL // ",
    "LATENCY STABLE: 12ms // "
];

// Adds a new alert to the scrolling bar every 8 seconds
setInterval(() => {
    const randomAlert = tacticalAlerts[Math.floor(Math.random() * tacticalAlerts.length)];
    tickerFeed.innerHTML += ` <span style="color: #fff">|</span> ${randomAlert}`;
}, 8000);

// Professional Console Log for the browser inspector
console.log("%c MISSION_CONTROL INITIALIZED ", "background: #00ff41; color: #000; font-weight: bold;");
const fsBtn = document.getElementById('fullscreenBtn');

fsBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
        fsBtn.innerText = "EXIT_FULLSCREEN";
    } else {
        document.exitFullscreen();
        fsBtn.innerText = "GO_FULLSCREEN";
    }
});

// Update button text if user exits fullscreen using 'Esc' key
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fsBtn.innerText = "GO_FULLSCREEN";
    }
});
