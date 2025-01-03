import * as sidebarToggle from '../modules/sidebartoggle.js';

import Plyr from 'plyr';

let plyrInstance;

export function togglevideo (delayTime) {
    const videocontainer = document.getElementById("showreelvideocontainer");
    const video = document.querySelector('video');

    if (videocontainer.classList.contains("hidden")) {
        plyrInstance = new Plyr('.plyr-reel', {
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen',],
            clickToPlay: true,
            keyboard: {
                focused: true,
                global: true,
            },
          });
        videocontainer.classList.remove("hidden", "animate-fadeout");
        videocontainer.classList.add("grid", "animate-fadein");
        sidebarToggle.closeMenu(false);
        video.volume = 0;
        fadeInVolume(video, 800, 0.75);
        setTimeout(() => {
            video.play();
        }, delayTime);
        return true;
    } else if (videocontainer.classList.contains("animate-fadein")) {
        videocontainer.classList.remove("animate-fadein");
        videocontainer.classList.add("animate-fadeout");
        fadeOutVolume(video, 500);
        setTimeout(() => {
            video.pause();
            videocontainer.classList.remove("grid");
            videocontainer.classList.add("hidden");
            video.currentTime = 0;
            if (plyrInstance) {
                plyrInstance.destroy();
                plyrInstance = null;
            }
        }, delayTime);
        return false;
    } else {
        console.error("Button or videocontainer element not found");
    }
}

export function overlayToggle () {
    const overlayContainer = document.getElementById("overlay");
    const overlayFooter = document.getElementById("footer");
    const menuButtonContainer = document.getElementById("menubuttoncontainer");

    if (overlayContainer.classList.contains("opacity-0") && overlayFooter.classList.contains("bg-white")) {
        overlayContainer.classList.remove("animate-fadeout");
        overlayFooter.classList.remove("bg-white");
        overlayContainer.classList.add("animate-fadein");
        overlayFooter.classList.add("bg-[#6e6e6e]");
        menuButtonContainer.classList.add("pointer-events-none");
    } else if (overlayContainer.classList.contains("animate-fadein") && overlayFooter.classList.contains("bg-[#6e6e6e]")) {
        overlayContainer.classList.remove("animate-fadein");
        overlayFooter.classList.remove("bg-[#6e6e6e]");
        overlayContainer.classList.add("animate-fadeout");
        overlayFooter.classList.add("bg-white");
        menuButtonContainer.classList.remove("pointer-events-none");
    }
}

export function toggleTextBox () {
    const textBox = document.querySelector('#intro-textbox');

    if (textBox.classList.contains("animate-fadeout")) {
        textBox.classList.remove("animate-fadeout");
        textBox.classList.add("animate-fadein");
    } else {
        textBox.classList.remove("animate-fadein");
        textBox.classList.add("animate-fadeout");
    }
}

export function showreelButtonState(delayTime) {
    const showreelButton = document.getElementById("showreelbutton");
    const closeReelButton = document.getElementById("close-reel-button");

    if (showreelButton.classList.contains("opacity-100")) {
        showreelButton.classList.remove("opacity-100");
        showreelButton.classList.add("animate-fadeout");
        closeReelButton.classList.remove("opacity-0");
        closeReelButton.classList.remove("animate-fadeout");
        closeReelButton.classList.add("animate-fadein");
        setTimeout(() => {
            showreelButton.disabled = true;
            closeReelButton.disabled = false;
        }, delayTime);
    } else if (showreelButton.classList.contains("animate-fadein")) {
        showreelButton.classList.remove("animate-fadein");
        showreelButton.classList.add("animate-fadeout");
        closeReelButton.classList.remove("opacity-0");
        closeReelButton.classList.remove("animate-fadeout");
        closeReelButton.classList.add("animate-fadein");
        setTimeout(() => {
            showreelButton.disabled = true;
            closeReelButton.disabled = false;
        }, delayTime);
    } else if (showreelButton.classList.contains("animate-fadeout")) {
        showreelButton.classList.remove("animate-fadeout");
        showreelButton.classList.add("animate-fadein");
        closeReelButton.classList.remove("animate-fadein");
        closeReelButton.classList.add("animate-fadeout");
        setTimeout(() => {
            showreelButton.disabled = false;
            closeReelButton.disabled = true;
        }, delayTime);
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