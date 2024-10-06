export function applyTouchHoverEffect (hoverNode) {
    hoverNode.classList.remove('opacity-0');
    hoverNode.classList.add('opacity-100');

    setTimeout(() => {
        hoverNode.classList.remove('opacity-100');
        hoverNode.classList.add('opacity-0');
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