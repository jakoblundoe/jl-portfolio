(() => {
  // ns-hugo:D:\FileFolder\Repos\jl-portfolio\assets\js\modules\cinemamodule.js
  function togglevideo() {
    document.addEventListener("DOMContentLoaded", (event) => {
      const button = document.getElementById("showreelbutton");
      const videocontainer = document.getElementById("videocontainer");
      const video = document.getElementById("showreelvideo");
      const resetDelay = 500;
      if (button && videocontainer) {
        button.addEventListener("click", () => {
          if (videocontainer.classList.contains("display_none")) {
            videocontainer.classList.remove("display_none");
            videocontainer.classList.add("display_flex");
            overlayOn();
            video.play();
          } else {
            videocontainer.classList.remove("display_flex");
            videocontainer.classList.add("display_none");
            video.pause();
            overlayOff();
            setTimeout(() => {
              video.currentTime = 0;
            }, resetDelay);
          }
        });
      } else {
        console.error("Button or videocontainer element not found");
      }
    });
  }
  function overlayOn() {
    const overlayContainer = document.getElementById("overlay");
    const overlayFooter = document.getElementById("footer");
    if (overlayContainer.classList.contains("display_none") && overlayFooter.classList.contains("normal")) {
      overlayContainer.classList.remove("display_none");
      overlayFooter.classList.remove("normal");
      overlayContainer.classList.add("display_flex");
      overlayFooter.classList.add("overlay");
    }
  }
  function overlayOff() {
    const overlayContainer = document.getElementById("overlay");
    const overlayFooter = document.getElementById("footer");
    if (overlayContainer.classList.contains("display_flex") && overlayFooter.classList.contains("overlay")) {
      overlayContainer.classList.remove("display_flex");
      overlayFooter.classList.remove("overlay");
      overlayContainer.classList.add("display_none");
      overlayFooter.classList.add("normal");
    }
  }

  // <stdin>
  togglevideo();
})();
