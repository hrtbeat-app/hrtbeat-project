document.addEventListener("DOMContentLoaded", function() {
    const downloadLink = document.getElementById('download-link');
    //kaboom protection
    if (!downloadLink) return;
    const userAgent = navigator.userAgent;
    const isIPhone = /iPhone|iPod/.test(userAgent);
    const isIPad = /iPad/.test(userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMacOS = /Macintosh/.test(userAgent) && !isIPad;

    //they look to be the same?? i hope tacky keeps this trend..
    if (isIPhone || isIPad) {
        downloadLink.href = "https://github.com/hrtbeat-app/hrtbeat/releases/latest/download/hrtbeat.ipa";
        downloadLink.innerHTML = `<img src="assets/download-24.svg" class="btn-icon" alt=""> Download for iOS`;
    } 
    else if (isMacOS) {
        downloadLink.href = "https://github.com/hrtbeat-app/hrtbeat/releases/latest/download/hrtbeat.macOS.zip";
        downloadLink.innerHTML = `<img src="assets/download-24.svg" class="btn-icon" alt=""> Download for macOS`;
    }
});