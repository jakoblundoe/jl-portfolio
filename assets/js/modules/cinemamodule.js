
export function togglevideo () {
    const videocontainer = document.getElementById("showreelvideocontainer");
    const video = document.getElementById("showreelvideo");
    const resetDelay = 500;

    if (videocontainer.classList.contains("hidden")) {
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

export function overlayToggle () {
    const overlayContainer = document.getElementById("overlay");
    const overlayFooter = document.getElementById("footer");

    if (overlayContainer.classList.contains("opacity-0") && overlayFooter.classList.contains("bg-white")) {
        console.log("check");
        overlayContainer.classList.remove("animate-fadeout");
        overlayFooter.classList.remove("bg-white");
        overlayContainer.classList.add("animate-fadein");
        overlayFooter.classList.add("bg-[#6e6e6e]");
    } else if (overlayContainer.classList.contains("animate-fadein") && overlayFooter.classList.contains("bg-[#6e6e6e]")) {
        overlayContainer.classList.remove("animate-fadein");
        overlayFooter.classList.remove("bg-[#6e6e6e]");
        overlayContainer.classList.add("animate-fadeout");
        overlayFooter.classList.add("bg-white");
    }
}

export function showreelButtonState() {
    const showreelButton = document.getElementById("showreelbutton");
    const showreelButtonTextElement = showreelButton.querySelector("p"); // DOM element (not yet a string)

    if (showreelButtonTextElement.textContent === "Play Showreel") {
        showreelButton.classList.add("z-50");
        showreelButtonTextElement.textContent = "Stop Showreel";
    } else if (showreelButtonTextElement.textContent === "Stop Showreel") {
        showreelButton.classList.remove("z-50");
        showreelButtonTextElement.textContent = "Play Showreel";
    }
}

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