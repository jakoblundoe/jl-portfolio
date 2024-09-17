// OPEN EDUCATION
export function openDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {

    if (dropdownContentElem && dropdownButtonElem && !isDropdownOpen) {
        dropdownButtonElem.classList.remove("rotate-180");
        dropdownContentElem.classList.remove("animate-collapse");
        dropdownContentElem.classList.add("animate-expand");

        // make sure listeners is only added once on each individual dropdownButtonElem
        if (!dropdownButtonElem.animationListenersAdded) {
            addAnimationEventListeners(dropdownContentElem);
        };
        return true;
    };
};

export function closeDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {
    if (dropdownContentElem && dropdownButtonElem && isDropdownOpen) {
        dropdownButtonElem.classList.add("rotate-180");
        dropdownContentElem.classList.remove("animate-expand");
        dropdownContentElem.classList.add("animate-collapse");
        return false;
    };
};

function addAnimationEventListeners (dropdownContentElem) {
    const animated = dropdownContentElem;
    let activeAnimationFrameID;

    const scrollWithAnimation = () => {
        dropdownContentElem.scrollIntoView({ behaviour: "smooth", block: "start" });
        activeAnimationFrameID = requestAnimationFrame(scrollWithAnimation);
    };

    animated.addEventListener("animationstart", () => {
        scrollWithAnimation();
    });
    animated.addEventListener("animationend", () => {
        cancelAnimationFrame(activeAnimationFrameID);
    });
    
    dropdownContentElem.animationListenersAdded = true;
};