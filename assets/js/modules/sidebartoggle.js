export function openMenu (menuButtonId) {
    const sideBar = document.getElementById("sidebarnav");
    const bottomNavbar = document.getElementById("bottomnavbar");

        if (menuButtonId && sideBar) {
            menuButtonId.classList.remove("flex");
            menuButtonId.classList.add("hidden");
            bottomNavbar.classList.add("hidden");

            sideBar.classList.remove("animate-slideout");
            sideBar.classList.add("animate-slidein");
        }
}

export function closeMenu (menuButtonId) {
    const closeMenuButton = document.getElementById("closemenubutton");
    const sideBar = document.getElementById("sidebarnav");
    const bottomNavbar = document.getElementById("bottomnavbar");
        if (closeMenuButton) {

            // footer.prepend(bottomNavbar);
            // menuButtonContainer.appendChild(menuButtonId);
            
            menuButtonId.classList.remove("hidden");
            bottomNavbar.classList.remove("hidden");

            sideBar.classList.remove("animate-slidein");
            sideBar.classList.add("animate-slideout");
        }
}