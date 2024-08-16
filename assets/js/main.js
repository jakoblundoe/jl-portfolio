import * as cinemaModule from './modules/cinemamodule.js';

document.addEventListener("keydown", function(keyDownEvent) {
    const videocontainer = document.getElementById("videocontainer")
    if (keyDownEvent.key === "Escape" && videocontainer.classList.contains("display_flex")) {
        cinemaModule.togglevideo();
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("showreelbutton");
    button.addEventListener("click", function(buttonClickEvent) {
        cinemaModule.togglevideo();
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState();
    });
});