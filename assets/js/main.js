import * as cinemaModule from './modules/cinemamodule.js';

$(document).ready(function() {// jquery library $function() executes when whole DOM is loaded

let firstClick = true;

document.addEventListener("keydown", function(keyDownEvent) {
        if(document.body.getAttribute("data-page").toLowerCase() == "showreel")
        {
            console.log("conditions met");

            const videocontainer = document.getElementById("showreelvideocontainer")
            if (keyDownEvent.key === "Escape" && videocontainer.classList.contains("hidden")) {
                firstClick = true;
                cinemaModule.togglevideo();
                // cinemaModule.overlayToggle();
                // cinemaModule.showreelButtonState();
        
                // Force reflow on specific elements
                videocontainer.offsetHeight; // Trigger reflow
                const showreelButton = document.getElementById("showreelbutton");
                showreelButton.offsetHeight; // Trigger reflow
        
                // Blur the focus from the button
                showreelButton.blur();
            }
        }
        else {
            console.log("conditions not met");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
        if(document.body.getAttribute("data-page").toLowerCase() == "showreel")
        {
            console.log("conditions met");

            const button = document.getElementById("showreelbutton");
            button.addEventListener("click", function(buttonClickEvent) {
                cinemaModule.togglevideo();
                // cinemaModule.overlayToggle();
                // cinemaModule.showreelButtonState();
                firstClick = true;
        
                // Force reflow on specific elements
                // videocontainer.offsetHeight; // Trigger reflow
                const showreelButton = document.getElementById("showreelbutton");
                showreelButton.offsetHeight; // Trigger reflow
        
                // Blur the focus from the button
                showreelButton.blur();
            });
        }
        else {
            console.log("conditions not met");
        }
    });
});

window.addEventListener('click', function(clickEvent){   
    $(document).ready(function() {
        if(document.body.getAttribute("data-page").toLowerCase() == "showreel")
        {
            console.log("conditions met");

            const videocontainer = document.getElementById("showreelvideocontainer");
            const video = document.getElementById("showreelvideo");
            if (firstClick) {
                firstClick = false;
                return;
            }
            if (video.contains(clickEvent.target) && videocontainer.classList.contains("display_flex")){
                cinemaModule.togglevideo();
                // cinemaModule.overlayToggle();
                // cinemaModule.showreelButtonState();
            }
        }
        else {
            console.log("conditions not met");
        }
    });
  });