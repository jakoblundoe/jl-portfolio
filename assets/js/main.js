import * as cinemaModule from './modules/cinemamodule.js';
import * as sidebarToggle from './modules/sidebartoggle.js';

// VIDEO TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const videocontainer = document.getElementById("showreelvideocontainer");
    const video = document.getElementById("showreelvideo");
    const button = document.getElementById("showreelbutton");
    const showreelPageActive = (document.body.getAttribute("data-page").toLowerCase() === "showreel") || false;
    let firstClick = true;

    if (!showreelPageActive)
        return;

    document.addEventListener("keydown", (keydownEvent) => {
        if (keydownEvent.key === "Escape" && videocontainer.classList.contains("flex")) {
            cinemaModule.togglevideo();
            cinemaModule.overlayToggle();
            cinemaModule.showreelButtonState();
            firstClick = true;
        }
    });

    button.addEventListener("click", () => {
            cinemaModule.togglevideo();
            cinemaModule.overlayToggle();
            cinemaModule.showreelButtonState();
            firstClick = true;
    });

    window.addEventListener("click", (clickEvent) => {
        if (firstClick) {
            firstClick = false;
            return;
        }
        if (!video.contains(clickEvent.target) && videocontainer.classList.contains("flex")){
            cinemaModule.togglevideo();
            cinemaModule.overlayToggle();
            cinemaModule.showreelButtonState();
        }
    });
});

// NAV SIDEBAR TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const closeMenuButton = document.getElementById("closemenubutton");
    const menuButton = document.getElementById("openmenubutton");
    const sidebar = document.getElementById("sidebarnav");

    let sidebarOpen = false;

    menuButton.addEventListener("click", () => (!sidebarOpen) ? sidebarOpen = sidebarToggle.openMenu(sidebarOpen) : sidebarOpen = sidebarToggle.closeMenu(sidebarOpen));
    closeMenuButton.addEventListener("click", () => (sidebarOpen) ? sidebarOpen = sidebarToggle.closeMenu(sidebarOpen) : sidebarOpen = sidebarToggle.openMenu(sidebarOpen));
    
    document.addEventListener("click", (clickEvent) => {
        if (!sidebarOpen) {
            return;
        } else if (!sidebar.contains(clickEvent.target) && !menuButton.contains(clickEvent.target)) {
            sidebarOpen = sidebarToggle.closeMenu(sidebarOpen);
        }
    });

    addEventListener("resize", () => {
        const width = window.innerWidth;
        if (width > 640)
            {
                sidebarOpen = sidebarToggle.closeMenu(sidebarOpen);
            }
    });
});