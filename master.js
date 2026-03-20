const fsBtn = document.getElementById('fullscreenBtn');
const tickerFeed = document.getElementById('tickerFeed');

// --- IMPROVED FULLSCREEN & KEEP-ALIVE ---
fsBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) { 
        document.documentElement.requestFullscreen()
            .then(() => {
                fsBtn.innerText = "EXIT_FULLSCREEN";
                // NUDGE: Briefly reset iframe src to force browser to keep JS/CSS active
                document.querySelectorAll('iframe').forEach(f => {
                    const currentSrc = f.src;
                    f.src = currentSrc; 
                });
            })
            .catch(err => console.warn(`FS_ERR: ${err.message}`));
    } else {
        document.exitFullscreen();
        fsBtn.innerText = "GO_FULLSCREEN";
    }
});

// --- NON-DESTRUCTIVE FULLSCREEN & PERSISTENCE ---
fsBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
            .then(() => {
                fsBtn.innerText = "EXIT_FULLSCREEN";
                
                // SOFT NUDGE: Change a CSS property instead of reloading the SRC
                // This keeps the uploaded video/data alive while waking the browser
                document.querySelectorAll('iframe').forEach(f => {
                    f.style.opacity = "0.99"; 
                    setTimeout(() => { f.style.opacity = "1"; }, 50);
                });
            })
            .catch(err => console.warn(`FS_ERR: ${err.message}`));
    } else {
        document.exitFullscreen();
        fsBtn.innerText = "GO_FULLSCREEN";
    }
});

// --- TACTICAL BROADCAST UPDATES ---
const alerts = [
    "SECTOR_04: ENCRYPTION STABLE // ",
    "PACKET_LOSS: 0% // ",
    "NODE_02_SYNC: COMPLETED // ",
    "THREAT_LEVEL: ALPHA_LOW // ",
    "JUNIOR_SERGEANT_SESSION: ACTIVE // ",
    "LATENCY: 8ms // ",
    "CORE_TEMP: 38C // "
];

setInterval(() => {
    const nextAlert = alerts[Math.floor(Math.random() * alerts.length)];
    tickerFeed.innerHTML += ` <span style="color: #444">|</span> ${nextAlert}`;
}, 6000);

console.log("%c [AVALON_OS] MISSION_CONTROL_READY ", "color: #00ff41; font-weight: bold; background: #000;");
