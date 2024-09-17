// OPEN EDUCATION
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
        return false;
    };
};

// function addAnimationEventListeners (dropdownContentElem) {
//     const animatedElem = dropdownContentElem;
//     const headerOffset = 68;
//     let elementPosition = animatedElem.getBoundingClientRect().top;
//     let offsetPosition = elementPosition + window.scrollY - headerOffset;
//     let activeAnimationFrameID;

//     const scrollWithAnimation = () => {
//         window.scrollTo({
//             top: offsetPosition,
//             behavior: "instant"
//         });
//         activeAnimationFrameID = requestAnimationFrame(scrollWithAnimation);
//     };

//     animatedElem.addEventListener("animationstart", () => {
//         scrollWithAnimation();
//     });
//     animatedElem.addEventListener("animationend", () => {
//         cancelAnimationFrame(activeAnimationFrameID);
//     });
    
//     dropdownContentElem.animationListenersAdded = true;
// };


function addAnimationEventListeners (dropdownContentElem) {
    const animatedElem = dropdownContentElem;
    const headerOffset = 68;
    let elementPosition = animatedElem.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - headerOffset;
    let animationActive = false;
    let frameId = null;

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
            console.log(`currentFrameId is: ${frameId}`);
            // console.log('event listener attached properly to animation start');
            anim.animationName.animationListenersAdded = true;
            animationActive = true;
        }
    })
    dropdownContentElem.addEventListener('animationend', function(anim) {
        if (anim.animationName === 'expand' && !isOpen) {
            // console.log('event listener attached properly to animation end');
            cancelAnimationFrame(frameId);
            animationActive = false;
        }
    })
}