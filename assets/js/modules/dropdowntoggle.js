export function openDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {
    
    if (dropdownContentElem && dropdownButtonElem && !isDropdownOpen) {
        dropdownButtonElem.classList.remove("rotate-180");
        dropdownContentElem.classList.remove("animate-collapse");
        dropdownContentElem.classList.add("animate-expand");
        const currentElementPosition = updateElementPosition(dropdownContentElem);
        const latestPosition = currentElementPosition;
        addAnimationEventListeners(dropdownContentElem, latestPosition);
        return true;
    };
};

export function closeDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {
    
    if (dropdownContentElem && dropdownButtonElem && isDropdownOpen) {
        dropdownButtonElem.classList.add("rotate-180");
        dropdownContentElem.classList.remove("animate-expand");
        dropdownContentElem.classList.add("animate-collapse");
        const currentElementPosition = updateElementPosition(dropdownContentElem);
        const latestPosition = currentElementPosition;
        addAnimationEventListeners(dropdownContentElem, latestPosition);
        return false;
    };
};

function addAnimationEventListeners (dropdownContentElem, latestPosition) {
    const animatedElem = dropdownContentElem;
    const headerOffset = 68;
    let firstElementPosition = animatedElem.getBoundingClientRect().top;
    // let currentElementPosition = 0;
    let offsetPosition = firstElementPosition + window.scrollY - headerOffset;

    let animationActive = false;
    let frameId = null;

    if (!dropdownContentElem.dataset.currentElementPosition) {
        dropdownContentElem.dataset.currentElementPosition = '0';
    }
    
    let currentElementPosition = parseFloat(dropdownContentElem.dataset.currentElementPosition);
    
    // check if offsetPosition is new since animation end oni specific element
    console.log(`latestPosition is: ${latestPosition}`);
    console.log(`firstElementPosition is: ${firstElementPosition}`);
    console.log(`currentElementPosition is: ${currentElementPosition}`);

    if ((currentElementPosition > 0) && (latestPosition !== currentElementPosition)) {
        console.log(`latest position does not match with position when clicked`);
        
    }

    function scrollAnimate() {
        window.scrollTo({
            top:offsetPosition
        })
        if (animationActive) {
            requestAnimationFrame(scrollAnimate);
        }
    }

    let isOpen = dropdownContentElem.getAttribute('data-isOpen');
    dropdownContentElem.addEventListener('animationstart', function(anim) {
        if (anim.animationName === "expand" && !isOpen) {

            // make sure listeners is only added once on each individual dropdownButtonElem
            dropdownContentElem.setAttribute('data-isOpen', 'true');

            frameId = requestAnimationFrame(scrollAnimate);

            anim.animationName.animationListenersAdded = true;
            animationActive = true;
        }
    })
    dropdownContentElem.addEventListener('animationend', function(anim) {
        if (anim.animationName === 'expand' && !isOpen) {
            cancelAnimationFrame(frameId);
            animationActive = false;
            const getElementPosition = updateElementPosition(dropdownContentElem);
            dropdownContentElem.dataset.currentElementPosition = getElementPosition.toString();
            // console.log(`animation end invoked and currentElementPosition is: ${getElementPosition}`);
        }
    })
}

function updateElementPosition (dropdownButtonElem) {
    const animatedElem = dropdownButtonElem;

    const elementPosition = animatedElem.getBoundingClientRect().top;

    return elementPosition;
}