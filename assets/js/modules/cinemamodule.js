export function helloworldmessage () {
    console.log("hello world");
}

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
    const showreelButton = document.getElementById("showreelbutton");

    if (overlayContainer.classList.contains("display_none") && overlayFooter.classList.contains("normal") && showreelButton.classList.contains("display_flex")) {
        overlayContainer.classList.remove("display_none");
        overlayFooter.classList.remove("normal");
        showreelButton.classList.remove("display_flex");
        overlayContainer.classList.add("display_flex");
        overlayFooter.classList.add("overlay");
        showreelButton.classList.add("display_none");
    } else if (overlayContainer.classList.contains("display_flex") && overlayFooter.classList.contains("overlay") && showreelButton.classList.contains("display_none")) {
        overlayContainer.classList.remove("display_flex");
        overlayFooter.classList.remove("overlay");
        showreelButton.classList.remove("display_none");
        overlayContainer.classList.add("display_none");
        overlayFooter.classList.add("normal");
        showreelButton.classList.add("display_flex");
    }
}