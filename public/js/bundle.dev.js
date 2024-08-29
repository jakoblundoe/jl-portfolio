(() => {
  // ns-hugo:D:\FileFolder\repos\jl-portfolio\assets\js\modules\cinemamodule.js
  function togglevideo() {
    const videocontainer = document.getElementById("showreelvideocontainer");
    const video = document.getElementById("showreelvideo");
    const resetDelay = 500;
    if (videocontainer.classList.contains("hidden")) {
      videocontainer.classList.remove("hidden", "animate-fadeout");
      videocontainer.classList.add("flex", "animate-fadein");
      video.volume = 0;
      fadeInVolume(video, 800, 1);
      setTimeout(() => {
        video.play();
      }, resetDelay);
    } else if (videocontainer.classList.contains("animate-fadein")) {
      videocontainer.classList.remove("animate-fadein");
      videocontainer.classList.add("animate-fadeout");
      fadeOutVolume(video, 500);
      setTimeout(() => {
        video.pause();
        videocontainer.classList.remove("flex");
        videocontainer.classList.add("hidden");
        video.currentTime = 0;
      }, resetDelay);
    } else {
      console.error("Button or videocontainer element not found");
    }
  }
  function overlayToggle() {
    const overlayContainer = document.getElementById("overlay");
    const overlayFooter = document.getElementById("footer");
    if (overlayContainer.classList.contains("opacity-0") && overlayFooter.classList.contains("bg-white")) {
      console.log("check");
      overlayContainer.classList.remove("animate-fadeout");
      overlayFooter.classList.remove("bg-white");
      overlayContainer.classList.add("animate-fadein");
      overlayFooter.classList.add("bg-[#6e6e6e]");
    } else if (overlayContainer.classList.contains("animate-fadein") && overlayFooter.classList.contains("bg-[#6e6e6e]")) {
      overlayContainer.classList.remove("animate-fadein");
      overlayFooter.classList.remove("bg-[#6e6e6e]");
      overlayContainer.classList.add("animate-fadeout");
      overlayFooter.classList.add("bg-white");
    }
  }
  function showreelButtonState() {
    const showreelButton = document.getElementById("showreelbutton");
    const showreelButtonTextElement = showreelButton.querySelector("p");
    if (showreelButtonTextElement.textContent === "Play Showreel") {
      showreelButton.classList.add("z-50");
      showreelButtonTextElement.textContent = "Stop Showreel";
    } else if (showreelButtonTextElement.textContent === "Stop Showreel") {
      showreelButton.classList.remove("z-50");
      showreelButtonTextElement.textContent = "Play Showreel";
    }
  }
  function fadeOutVolume(video, duration) {
    const step = 0.05;
    const interval = duration / (video.volume / step);
    const fadeAudio = setInterval(() => {
      if (video.volume > 0) {
        video.volume = Math.max(video.volume - step, 0);
      } else {
        video.volume = 0;
        clearInterval(fadeAudio);
      }
    }, interval);
  }
  function fadeInVolume(video, duration, targetVolume) {
    const step = 0.05;
    const interval = duration / (targetVolume / step);
    const fadeAudio = setInterval(() => {
      if (video.volume < targetVolume) {
        video.volume = Math.min(video.volume + step, targetVolume);
      } else {
        video.volume = targetVolume;
        clearInterval(fadeAudio);
      }
    }, interval);
  }

  // <stdin>
  var firstClick = true;
  $(document).ready(function() {
    document.addEventListener("keydown", function(keyDownEvent) {
      if (document.body.getAttribute("data-page").toLowerCase() == "showreel") {
        const videocontainer = document.getElementById("showreelvideocontainer");
        if (keyDownEvent.key === "Escape" && videocontainer.classList.contains("flex")) {
          firstClick = true;
          togglevideo();
          overlayToggle();
          showreelButtonState();
        }
      } else {
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    if (document.body.getAttribute("data-page").toLowerCase() === "showreel") {
      const button = document.getElementById("showreelbutton");
      button.addEventListener("click", function(buttonClickEvent) {
        togglevideo();
        overlayToggle();
        showreelButtonState();
        firstClick = true;
      });
    } else {
    }
  });
  window.addEventListener("click", function(clickEvent) {
    if (document.body.getAttribute("data-page").toLowerCase() === "showreel") {
      const videocontainer = document.getElementById("showreelvideocontainer");
      const video = document.getElementById("showreelvideo");
      if (firstClick) {
        firstClick = false;
        return;
      }
      if (!video.contains(clickEvent.target) && videocontainer.classList.contains("flex")) {
        togglevideo();
        overlayToggle();
        showreelButtonState();
      }
    }
  });
})();
