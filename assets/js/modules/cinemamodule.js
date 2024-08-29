
export function togglevideo () {
    const videocontainer = document.getElementById("showreelvideocontainer");
    console.log(videocontainer);
    const video = document.getElementById("showreelvideo");
    const resetDelay = 500;

    if (videocontainer.classList.contains("hidden")) {
        console.log("hidden found");
        videocontainer.classList.remove("hidden", "animate-fadeout");
        videocontainer.classList.add("flex", "animate-fadein");
        video.volume = 0;
        fadeInVolume(video, 800, 1);
        setTimeout(() => {
            video.play();
        }, resetDelay);
    } else if (videocontainer.classList.contains("animate-fadein")) {
        videocontainer.classList.remove("animate-fadein");
        videocontainer.classList.add("animate-fadeout");
        fadeOutVolume(video, 500);
        setTimeout(() => {
            video.pause();
            videocontainer.classList.remove("flex");
            videocontainer.classList.add("hidden");
            video.currentTime = 0;
        }, resetDelay);
    } else {
        console.error("Button or videocontainer element not found");
    }
}

// export function overlayToggle () {
//     const overlayContainer = document.getElementById("overlay");
//     const overlayFooter = document.getElementById("footer");

//     if (overlayContainer.classList.contains("display_none") && overlayFooter.classList.contains("normal")) {
//         overlayContainer.classList.remove("display_none");
//         overlayFooter.classList.remove("normal");
//         overlayContainer.classList.add("display_flex");
//         overlayFooter.classList.add("overlay");
//     } else if (overlayContainer.classList.contains("display_flex") && overlayFooter.classList.contains("overlay")) {
//         overlayContainer.classList.remove("display_flex");
//         overlayFooter.classList.remove("overlay");
//         overlayContainer.classList.add("display_none");
//         overlayFooter.classList.add("normal");
//     }
// }

// export function showreelButtonState() {
//     const showreelButton = document.getElementById("showreelbutton");
//     const showreelButtonText = showreelButton.querySelector("p");
//     if (showreelButton.classList.contains("notPlaying")) {
//         showreelButton.classList.remove("notPlaying");
//         showreelButton.classList.add("playing");
//         showreelButtonText.textContent = "Stop Showreel"; 
//     } else if (showreelButton.classList.contains("playing")) {
//         showreelButton.classList.remove("playing");
//         showreelButton.classList.add("notPlaying");
//         showreelButtonText.textContent = "Play Showreel";
//     }
// }

function fadeOutVolume(video, duration) {

    const step = 0.05; // Volume decrement step
    const interval = duration / (video.volume / step); // Calculate interval time

    const fadeAudio = setInterval(() => {
        if (video.volume > 0) {
            video.volume = Math.max(video.volume - step, 0);
        } else {
            video.volume = 0;
            clearInterval(fadeAudio);
        }
    }, interval);
}

function fadeInVolume(video, duration, targetVolume) {

    const step = 0.05; // Volume increment step
    const interval = duration / (targetVolume / step);
    
    const fadeAudio = setInterval(() => {
        if (video.volume < targetVolume) {
            video.volume = Math.min(video.volume + step, targetVolume);
        } else {
            video.volume = targetVolume;
            clearInterval(fadeAudio);
        }
    }, interval);
}