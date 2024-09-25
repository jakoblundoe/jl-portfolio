export function openDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {

    if (dropdownContentElem && dropdownButtonElem && !isDropdownOpen) {
        dropdownButtonElem.classList.remove("rotate-180");
        dropdownContentElem.classList.remove("animate-collapse");
        dropdownContentElem.classList.add("animate-expand");

        if(!dropdownContentElem.getAttribute('data-height')) {
            const fullHeight = dropdownContentElem.offsetHeight;
            dropdownContentElem.setAttribute('data-height', fullHeight);
            const duration = calcAnimTime(dropdownContentElem);
            dropdownContentElem.style.animationDuration = `${duration}ms`;
            addAnimationEventListeners(dropdownContentElem);
        } else {
            const duration = calcAnimTime(dropdownContentElem);
            dropdownContentElem.style.animationDuration = `${duration}ms`;
            addAnimationEventListeners(dropdownContentElem);
        }

        return true;
    };
};

export function closeDropdown (isDropdownOpen, dropdownButtonElem, dropdownContentElem) {
    
    if (dropdownContentElem && dropdownButtonElem && isDropdownOpen) {
        dropdownContentElem.setAttribute('data-height', dropdownContentElem.offsetHeight);
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

    function scrollAnimate() {
        // TRIED TO FLAG INPUT SCROLL SO SMOOTH SCROLL WAS APPLIED ONLY WHEN MANUAL SCROLL HAD HAPPENED PRIOR TO THE ANIMATION.
        // IT IS STILL JANKY THOUGH. FOR SOME UNKNOWN REASON IT IS STILL RANDOM WHEN THE SMOOTH BEHAVIOUR IS
        // APPLIED. HAVE COMMENTED THE CODE THAT MAKES THE ANIMATION JANKY.

        // if (pageScrolled && !elementIsExpanded) {
        //     window.scrollTo({
        //         top:offsetPosition,
        //         behavior: 'smooth'
        //     })
        // } else if(!pageScrolled) {
        //     window.scrollTo({
        //         top:offsetPosition,
        //     })
        // }
        window.scrollTo({
            top: offsetPosition,
        })
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

            elementIsExpanded = true;
            pageScrolled = false;
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
            elementIsExpanded = false;
            pageScrolled = false;
            console.log(pageScrolled)
        }
    })
    // document.addEventListener('wheel', () => {
    //     console.log('scroll happening');
    //     console.log(animatedElem.getBoundingClientRect().top);
    //     pageScrolled = true;
    // })
}

function calcAnimTime (dropdownContentElem) {
    const elemHeight = parseFloat(dropdownContentElem.getAttribute('data-height'));
    const timeDuration = elemHeight;
    return timeDuration;
}