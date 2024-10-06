export function applyTouchHoverEffect (hoverNode) {
    if (hoverNode.touchHoverTimeout === undefined) {
        hoverNode.touchHoverTimeout = null;
    }
    if (hoverNode.isHovering === undefined) {
        hoverNode.isHovering = false;
    }
    if (hoverNode.isHovering) {
        clearTimeout(hoverNode.touchHoverTimeout);
    } else {
        hoverNode.classList.remove('opacity-0');
        hoverNode.classList.add('opacity-100');
        hoverNode.isHovering = true;
    }
    hoverNode.touchHoverTimeout = setTimeout(() => {
        hoverNode.classList.remove('opacity-100');
        hoverNode.classList.add('opacity-0');
        hoverNode.isHovering = false;
    }, 3000);
}

export function applyOverlay (hoverNode) {
    hoverNode.classList.remove('opacity-0');
    hoverNode.classList.add('opacity-100');
}

export function removeOverlay (hoverNode) {
    hoverNode.classList.remove('opacity-100');
    hoverNode.classList.add('opacity-0');
}