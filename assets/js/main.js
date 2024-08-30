import * as cinemaModule from './modules/cinemamodule.js';


let firstClick = true;

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
    const menuButton = document.getElementById("openmenubutton");
    const closeMenuButton = document.getElementById("closemenubutton");
    const sideBar = document.getElementById("sidebarnav");

    menuButton.addEventListener("click", function(buttonClickEvent) {
        if (menuButton && sideBar) {
            console.log(menuButton);
            menuButton.classList.remove("flex");
            menuButton.classList.add("hidden");

            sideBar.classList.remove("hidden");
            sideBar.classList.add("flex");
        }
        else {

        }
    });
    closeMenuButton.addEventListener("click", function(buttonClickEvent) {
        if (closeMenuButton) {
            console.log(closeMenuButton);

            menuButton.classList.remove("hidden");
            menuButton.classList.add("flex");

            sideBar.classList.remove("flex");
            sideBar.classList.add("hidden");
        }
    });
});