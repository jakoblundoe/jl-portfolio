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
    const bottomNavbar = document.getElementById("bottomnavbar");

    const menuButtonContainer = document.getElementById("menubuttoncontainer");
    const footer = document.getElementById("footer");

    menuButton.addEventListener("click", function(buttonClickEvent) {
        if (menuButton && sideBar) {
            console.log(menuButton);
            menuButton.classList.remove("flex");
            menuButton.remove();
            bottomNavbar.remove();

            sideBar.classList.remove("animate-slideout");
            sideBar.classList.add("animate-slidein");
        }
        else {

        }
    });

    closeMenuButton.addEventListener("click", function(buttonClickEvent) {
        if (closeMenuButton) {

            menuButtonContainer.appendChild(menuButton);
            footer.prepend(bottomNavbar);

            sideBar.classList.remove("animate-slidein");
            sideBar.classList.add("animate-slideout");
        }
    });
});