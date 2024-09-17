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
    const animatedElem = dropdownContentElem;
    const headerOffset = 68;
    let elementPosition = animatedElem.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - headerOffset;
    let activeAnimationFrameID;

    const scrollWithAnimation = () => {
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        activeAnimationFrameID = requestAnimationFrame(scrollWithAnimation);
    };

    animatedElem.addEventListener("animationstart", () => {
        scrollWithAnimation();
    });
    animatedElem.addEventListener("animationend", () => {
        cancelAnimationFrame(activeAnimationFrameID);
    });
    
    dropdownContentElem.animationListenersAdded = true;
};