// Because the .animate-expand class does not exist when the openDropdownContent is called,
// it was necessary to create a global bool to check if event listeners is added (to prevent adding them again).
let animationListenersAdded = false;
let animationActive = false;

// OPEN EDUCATION
export function openEducation (dropdownIsOpen) {
    const dropdownContainer = document.getElementById("educationcontent");
    const dropdownButton = document.getElementById("educationbutton");

    if (dropdownContainer && dropdownButton && !dropdownIsOpen) {
        dropdownButton.classList.remove("rotate-180");
        dropdownContainer.classList.remove("animate-collapse");
        dropdownContainer.classList.add("animate-expand");
        if (!animationListenersAdded) {
            addAnimationEventListeners();
        };
        return true;
    }
}

function addAnimationEventListeners () {
    const animated = document.querySelector(".animate-expand");
    let activeAnimationFrameID;

    const scrollWithAnimation = () => {
        const dropdownContainer = document.getElementById("educationbutton");
        dropdownContainer.scrollIntoView({ behaviour: "smooth", block: "start" });
        activeAnimationFrameID = requestAnimationFrame(scrollWithAnimation);
    }

    animated.addEventListener("animationstart", () => {
        animationActive = true;
        console.log(`Animationactive is: ${animationActive}`);
        scrollWithAnimation();
    });
    animated.addEventListener("animationend", () => {
        animationActive = false;
        console.log(`Animationactive is: ${animationActive}`);
        cancelAnimationFrame(activeAnimationFrameID);
    });
    
    animationListenersAdded = true;
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