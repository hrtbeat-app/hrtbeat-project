document.addEventListener("DOMContentLoaded", function() {
    const downloadLink = document.getElementById('download-link');
    //kaboom protection
    if (!downloadLink) return;
    const userAgent = navigator.userAgent;
    const isIPhone = /iPhone|iPod/.test(userAgent);
    const isIPad = /iPad/.test(userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMacOS = /Macintosh/.test(userAgent) && !isIPad;

    //hardcode until tacky standardizes release names
    if (isIPhone || isIPad) {
        downloadLink.href = "https://github.com/ValveTextureFile/hrtbeat/releases/download/alpha-ios/mac/hrtbeat.ipa";
        downloadLink.innerHTML = `<img src="assets/download-24.svg" class="btn-icon" alt=""> Download for iOS`;
    } 
    else if (isMacOS) {
        downloadLink.href = "https://github.com/ValveTextureFile/hrtbeat/releases/download/alpha-ios/mac/hrtbeat.macOS.zip";
        downloadLink.innerHTML = `<img src="assets/download-24.svg" class="btn-icon" alt=""> Download for macOS`;
    }
});