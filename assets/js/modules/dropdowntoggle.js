// Because the .animate-expand class does not exist when the openDropdownContent is called,
// it was necessary to create a global bool to check if event listeners is added (to prevent adding them again).
let animationListenersAdded = false;
let animationActive = false;

// OPEN EDUCATION
export function openDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {

    if (dropdownContentElem && dropdownButtonElem && !isDropdownOpen) {
        dropdownButtonElem.classList.remove("rotate-180");
        dropdownContentElem.classList.remove("animate-collapse");
        dropdownContentElem.classList.add("animate-expand");
        if (!animationListenersAdded) {
            addAnimationEventListeners();
        };
        return true;
    }
}

export function closeDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {
    if (dropdownContentElem && dropdownButtonElem && isDropdownOpen) {
        dropdownButtonElem.classList.add("rotate-180");
        dropdownContentElem.classList.remove("animate-expand");
        dropdownContentElem.classList.add("animate-collapse");
        return false;
    }
}

function addAnimationEventListeners () {
    const animated = document.querySelector(".animate-expand");
    let activeAnimationFrameID;

    const scrollWithAnimation = () => {
        const dropdownContainer = document.getElementById("dropdown-button-education");
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