export function openDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {
    
    if (dropdownContentElem && dropdownButtonElem && !isDropdownOpen) {
        dropdownButtonElem.classList.remove("rotate-180");
        dropdownContentElem.classList.remove("animate-collapse");
        dropdownContentElem.classList.add("animate-expand");
        addAnimationEventListeners(dropdownContentElem);
        return true;
    };
};

export function closeDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {
    
    if (dropdownContentElem && dropdownButtonElem && isDropdownOpen) {
        dropdownButtonElem.classList.add("rotate-180");
        dropdownContentElem.classList.remove("animate-expand");
        dropdownContentElem.classList.add("animate-collapse");
        addAnimationEventListeners(dropdownContentElem);
        return false;
    };
};

function addAnimationEventListeners (dropdownContentElem) {
    const animatedElem = dropdownContentElem;
    const headerOffset = 68;
    let elementPosition = animatedElem.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - headerOffset;

    let animationActive = false;
    let frameId = null;
    let pageScrolled = false;
    
    // check if offsetPosition is new since animation end on specific element

    function scrollAnimate() {
        if (pageScrolled) {
            window.scrollTo({
                top:offsetPosition,
                behavior: 'smooth'
            })
        } else if(!pageScrolled) {
            window.scrollTo({
                top:offsetPosition,
            })
        }
        if (animationActive) {
            requestAnimationFrame(scrollAnimate);
        }
    }

    let isOpen = dropdownContentElem.getAttribute('data-isOpen');
    let isClosed = dropdownContentElem.getAttribute('data-isClosed');
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

            pageScrolled = false;
            console.log(pageScrolled)
        }
    })

    dropdownContentElem.addEventListener('animationstart', function(anim) {
        if (anim.animationName === 'collapse' && !isClosed) {
            dropdownContentElem.setAttribute('data-isClosed', 'true');
            pageScrolled = true;
        }
    })

    dropdownContentElem.addEventListener('animationend', function(anim) {
        if (anim.animationName === 'collapse' && !isClosed) {
            pageScrolled = false;
            console.log(pageScrolled)
        }
    })
    document.addEventListener('scroll', () => {
        console.log('scroll happening');
        pageScrolled = true;
    })
}

// function updateElementPosition (dropdownButtonElem) {
//     const animatedElem = dropdownButtonElem;

//     const elementPosition = animatedElem.getBoundingClientRect().top;

//     return elementPosition;
// }