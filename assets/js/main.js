import * as cinemaModule from './modules/cinemamodule.js';
import * as sidebarToggle from './modules/sidebartoggle.js';
import * as dropdownToggle from './modules/dropdowntoggle.js';

// VIDEO TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const videocontainer = document.getElementById("showreelvideocontainer");
    const video = document.getElementById("showreelvideo");
    const button = document.getElementById("showreelbutton");
    const delayTime = 500;
    let timerActive = false;
    const showreelPageActive = (document.body.getAttribute("data-page").toLowerCase() === "showreel") || false;
    let firstClick = true;

    if (!showreelPageActive)
        return;

    document.addEventListener("keydown", (keydownEvent) => {
        if (timerActive)
            return;
        if (keydownEvent.key === "Escape" && videocontainer.classList.contains("flex")) {
            cinemaModule.togglevideo(delayTime);
            cinemaModule.overlayToggle();
            cinemaModule.showreelButtonState();
            firstClick = true;

            timerActive = true;
            setTimeout(() => {
                timerActive = false;
            }, delayTime);
        }
    });

    button.addEventListener("click", () => {
        if (timerActive)
            return;
        cinemaModule.togglevideo(delayTime);
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState();
        firstClick = true;

        timerActive = true;
        setTimeout(() => {
            timerActive = false;
        }, delayTime);
    });

    window.addEventListener("click", (clickEvent) => {
        if (timerActive)
            return;
        if (firstClick) {
            firstClick = false;
            return;
        }
        if (!video.contains(clickEvent.target) && videocontainer.classList.contains("flex")){
            cinemaModule.togglevideo(delayTime);
            cinemaModule.overlayToggle();
            cinemaModule.showreelButtonState();

            timerActive = true;
            setTimeout(() => {
                timerActive = false;
            }, delayTime);
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

// DROPDOWN CONTENT TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("dropdownbutton");
    const aboutPageActive = (document.body.getAttribute("data-page").toLowerCase() === "about") || false;

    let dropdownIsOpen = false;

    if (!aboutPageActive)
        return;

    dropdownButton.addEventListener("click", () => (!dropdownIsOpen) ? dropdownIsOpen = dropdownToggle.openDropdown(dropdownIsOpen) : dropdownIsOpen = dropdownToggle.closeDropdown(dropdownIsOpen));
});