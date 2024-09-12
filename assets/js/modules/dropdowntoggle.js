// OPEN EDUCATION
export function openEducation (dropdownIsOpen) {
    const dropdownContainer = document.getElementById("educationcontent");
    const dropdownButton = document.getElementById("educationbutton");

    if (dropdownContainer && dropdownButton && !dropdownIsOpen) {
        dropdownButton.classList.remove("rotate-180");
        dropdownContainer.classList.remove("animate-collapse");
        dropdownContainer.classList.add("animate-expand");
        return true;
    }

}

export function closeEducation (dropdownIsOpen) {
    const dropdownContainer = document.getElementById("educationcontent");
    const dropdownButton = document.getElementById("educationbutton");

    if (dropdownContainer && dropdownButton && dropdownIsOpen) {
        dropdownButton.classList.add("rotate-180");
        dropdownContainer.classList.remove("animate-expand");
        dropdownContainer.classList.add("animate-collapse");
        return false;
    }
}

// OPEN EXPERIENCE
export function openExperience (dropdownIsOpen) {
    const dropdownContainer = document.getElementById("experiencecontent");
    const dropdownButton = document.getElementById("experiencebutton");

    if (dropdownContainer && dropdownButton && !dropdownIsOpen) {
        dropdownButton.classList.remove("rotate-180");
        dropdownContainer.classList.remove("animate-collapse");
        dropdownContainer.classList.add("animate-expand");
        return true;
    }

}

export function closeExperience (dropdownIsOpen) {
    const dropdownContainer = document.getElementById("experiencecontent");
    const dropdownButton = document.getElementById("experiencebutton");

    if (dropdownContainer && dropdownButton && dropdownIsOpen) {
        dropdownButton.classList.add("rotate-180");
        dropdownContainer.classList.remove("animate-expand");
        dropdownContainer.classList.add("animate-collapse");
        return false;
    }
}