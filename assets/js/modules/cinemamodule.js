
export function togglevideo () {
    const videocontainer = document.getElementById("videocontainer");
    const video = document.getElementById("showreelvideo");
    const resetDelay = 500;

    if (videocontainer.classList.contains("display_none")) {
        videocontainer.classList.remove("display_none");
        videocontainer.classList.add("display_flex");
        video.play();
    } else if (videocontainer.classList.contains("display_flex")) {
        videocontainer.classList.remove("display_flex");
        videocontainer.classList.add("display_none");
        video.pause();
        setTimeout(() => {
            video.currentTime = 0;
        }, resetDelay);
    } else {
        console.error("Button or videocontainer element not found");
    }
}

export function overlayToggle () {
    const overlayContainer = document.getElementById("overlay");
    const overlayFooter = document.getElementById("footer");

    if (overlayContainer.classList.contains("display_none") && overlayFooter.classList.contains("normal")) {
        overlayContainer.classList.remove("display_none");
        overlayFooter.classList.remove("normal");
        overlayContainer.classList.add("display_flex");
        overlayFooter.classList.add("overlay");
    } else if (overlayContainer.classList.contains("display_flex") && overlayFooter.classList.contains("overlay")) {
        overlayContainer.classList.remove("display_flex");
        overlayFooter.classList.remove("overlay");
        overlayContainer.classList.add("display_none");
        overlayFooter.classList.add("normal");
    }
}

export function showreelButtonState() {
    const showreelButton = document.getElementById("showreelbutton");
    const showreelButtonText = showreelButton.querySelector("p");

    if (showreelButton.classList.contains("notPlaying")) {
        showreelButton.classList.remove("notPlaying");
        showreelButton.classList.add("playing");
        showreelButtonText.textContent = "Stop Showreel";
        
    } else if (showreelButton.classList.contains("playing")) {
        showreelButton.classList.remove("playing");
        showreelButton.classList.add("notPlaying");
        showreelButtonText.textContent = "Play Showreel";
    }
}