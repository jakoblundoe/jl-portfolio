export function openDropdown (dropdownIsOpen) {
    const dropdownContainer = document.getElementById("dropdowncontent");
    const dropdownButton = document.getElementById("dropdownbutton");

    if (dropdownContainer && dropdownButton && !dropdownIsOpen) {
        console.log("test");
        dropdownButton.classList.remove("rotate-180");
        dropdownContainer.classList.remove("animate-collapse");
        dropdownContainer.classList.add("animate-expand");
        return true;
    }

}

export function closeDropdown (dropdownIsOpen) {
    const dropdownContainer = document.getElementById("dropdowncontent");
    const dropdownButton = document.getElementById("dropdownbutton");

    if (dropdownContainer && dropdownButton && dropdownIsOpen) {
        dropdownButton.classList.add("rotate-180");
        dropdownContainer.classList.remove("animate-expand");
        dropdownContainer.classList.add("animate-collapse");
        return false;
    }
}