let animationActive = false;

// OPEN EDUCATION
export function openDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {

    if (dropdownContentElem && dropdownButtonElem && !isDropdownOpen) {
        dropdownButtonElem.classList.remove("rotate-180");
        dropdownContentElem.classList.remove("animate-collapse");
        dropdownContentElem.classList.add("animate-expand");

        // make sure listeners is only added once on each individual dropdownButtonElem
        if (!dropdownButtonElem.animationListenersAdded) {
            addAnimationEventListeners(dropdownButtonElem);
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

function addAnimationEventListeners (dropdownButtonElem) {
    const animated = document.querySelector(".animate-expand");
    let activeAnimationFrameID;

    const scrollWithAnimation = () => {
        dropdownButtonElem.scrollIntoView({ behaviour: "smooth", block: "start" });
        activeAnimationFrameID = requestAnimationFrame(scrollWithAnimation);
    }

    animated.addEventListener("animationstart", () => {
        animationActive = true;
        scrollWithAnimation();
    });
    animated.addEventListener("animationend", () => {
        animationActive = false;
        cancelAnimationFrame(activeAnimationFrameID);
    });
    
    dropdownButtonElem.animationListenersAdded = true;
}