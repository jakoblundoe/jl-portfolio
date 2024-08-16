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
            setTimeout(() => {
              video.currentTime = 0;
              overlayOff();
            }, resetDelay);
          }
        });
      } else {
        console.error("Button or videocontainer element not found");
      }
    });
  }
  function overlayOn() {
    document.getElementById("overlay").style.display = "block";
  }
  function overlayOff() {
    document.getElementById("overlay").style.display = "none";
  }

  // <stdin>
  togglevideo();
})();
