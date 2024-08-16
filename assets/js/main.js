import * as cinemaModule from './modules/cinemamodule.js';

document.addEventListener("keydown", function(keyDownEvent) {
    if (keyDownEvent.key === "Escape") {
        cinemaModule.helloworldmessage();
        cinemaModule.togglevideo();
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("showreelbutton");
    button.addEventListener("click", function(buttonClickEvent) {
        cinemaModule.helloworldmessage();
        cinemaModule.togglevideo();
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState();
    });
});