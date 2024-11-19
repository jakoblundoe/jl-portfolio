export const updateURL = (isShowreelOn) => {
    const url = new URL(window.location);
    if (isShowreelOn) {
        url.searchParams.set("showreel", "on");
    } else {
        url.searchParams.delete("showreel");
    }
    history.pushState(null, "", url.toString());
}