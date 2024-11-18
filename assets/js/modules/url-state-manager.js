export const updateURL = (isShowreelOn) => {
    const url = new URL(window.location);
    if (isShowreelOn) {
        url.searchParams.set("showreel", "on");
    } else {
        url.searchParams.set("showreel", "off");
    }
    history.replaceState(null, "", url);
}