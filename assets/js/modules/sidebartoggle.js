export function openMenu () {
    const sideBar = document.getElementById("sidebarnav");
    const bottomNavbar = document.getElementById("bottomnavbar");
    const menuButton = document.getElementById("openmenubutton");

        if (menuButton && sideBar) {
            menuButton.classList.remove("flex");
            menuButton.classList.add("hidden");
            bottomNavbar.classList.add("hidden");

            sideBar.classList.remove("animate-slideout");
            sideBar.classList.add("animate-slidein");
        }
}

export function closeMenu () {
    const closeMenuButton = document.getElementById("closemenubutton");
    const sideBar = document.getElementById("sidebarnav");
    const bottomNavbar = document.getElementById("bottomnavbar");
    const menuButton = document.getElementById("openmenubutton");
        if (closeMenuButton) {

            // footer.prepend(bottomNavbar);
            // menuButtonContainer.appendChild(menuButtonId);
            
            menuButton.classList.remove("hidden");
            bottomNavbar.classList.remove("hidden");

            sideBar.classList.remove("animate-slidein");
            sideBar.classList.add("animate-slideout");
        }
}