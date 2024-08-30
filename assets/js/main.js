import * as cinemaModule from './modules/cinemamodule.js';
import * as sidebarToggle from './modules/sidebartoggle.js';

let firstClick = true;
let sidebarOpen = false;

$(document).ready(function() {// jquery library $function() executes when whole DOM is loaded
document.addEventListener("keydown", function(keyDownEvent) {
        if(document.body.getAttribute("data-page").toLowerCase() == "showreel")
        {
            const videocontainer = document.getElementById("showreelvideocontainer")
            if (keyDownEvent.key === "Escape" && videocontainer.classList.contains("flex")) {
                
                firstClick = true;
                cinemaModule.togglevideo();
                cinemaModule.overlayToggle();
                cinemaModule.showreelButtonState();
            }
        }
        else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
        if(document.body.getAttribute("data-page").toLowerCase() === "showreel")
        {
            const button = document.getElementById("showreelbutton");
            button.addEventListener("click", function(buttonClickEvent) {
                cinemaModule.togglevideo();
                cinemaModule.overlayToggle();
                cinemaModule.showreelButtonState();
                firstClick = true;
            });
        }
        else {
        }
});

window.addEventListener('click', function(clickEvent){
    if(document.body.getAttribute("data-page").toLowerCase() === "showreel")
    {   
        const videocontainer = document.getElementById("showreelvideocontainer");
        const video = document.getElementById("showreelvideo");
        if (firstClick) {
            firstClick = false;
            return;
        }
        if (!video.contains(clickEvent.target) && videocontainer.classList.contains("flex")){
            cinemaModule.togglevideo();
            cinemaModule.overlayToggle();
            cinemaModule.showreelButtonState();
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const closeMenuButton = document.getElementById("closemenubutton");
    const menuButton = document.getElementById("openmenubutton");
    
    menuButton.addEventListener("click", function(buttonClickEvent) {
        sidebarToggle.openMenu();
        sidebarOpen = true;
    });
    
    closeMenuButton.addEventListener("click", function(buttonClickEvent) {
        sidebarToggle.closeMenu();
        sidebarOpen = false;
    });
});

addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width > 640 && sidebarOpen)
    {
        sidebarToggle.closeMenu();
        sidebarOpen = false;
    }
});