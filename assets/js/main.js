import * as cinemaModule from './modules/cinemamodule.js';

let firstClick = true;

document.addEventListener("keydown", function(keyDownEvent) {
    const videocontainer = document.getElementById("videocontainer")
    if (keyDownEvent.key === "Escape" && videocontainer.classList.contains("display_flex")) {
        firstClick = true;
        cinemaModule.togglevideo();
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState();

        // Force reflow on specific elements
        videocontainer.offsetHeight; // Trigger reflow
        const showreelButton = document.getElementById("showreelbutton");
        showreelButton.offsetHeight; // Trigger reflow

        // Blur the focus from the button
        showreelButton.blur();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("showreelbutton");
    button.addEventListener("click", function(buttonClickEvent) {
        cinemaModule.togglevideo();
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState();
        firstClick = true;

        // Force reflow on specific elements
        videocontainer.offsetHeight; // Trigger reflow
        const showreelButton = document.getElementById("showreelbutton");
        showreelButton.offsetHeight; // Trigger reflow

        // Blur the focus from the button
        showreelButton.blur();
    });
});

window.addEventListener('click', function(clickEvent){   
    const videocontainer = document.getElementById("videocontainer");
    const showreelvideo = document.getElementById("showreelvideo");
    if (firstClick) {
        firstClick = false;
        return;
    }
    if (!document.getElementById("showreelvideo").contains(clickEvent.target) && videocontainer.classList.contains("display_flex")){
        cinemaModule.togglevideo();
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState();
    }
  });