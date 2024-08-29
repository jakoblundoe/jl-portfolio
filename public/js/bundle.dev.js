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
  $(document).ready(function() {
    let firstClick2 = true;
    document.addEventListener("keydown", function(keyDownEvent) {
      if (document.body.getAttribute("data-page").toLowerCase() == "showreel") {
        const videocontainer = document.getElementById("showreelvideocontainer");
        if (keyDownEvent.key === "Escape" && videocontainer.classList.contains("flex")) {
          firstClick2 = true;
          togglevideo();
          showreelButtonState();
        }
      } else {
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
      if (document.body.getAttribute("data-page").toLowerCase() == "showreel") {
        const button = document.getElementById("showreelbutton");
        button.addEventListener("click", function(buttonClickEvent) {
          togglevideo();
          showreelButtonState();
          firstClick = true;
          const showreelButton = document.getElementById("showreelbutton");
          showreelButton.offsetHeight;
          showreelButton.blur();
        });
      } else {
      }
    });
  });
  window.addEventListener("click", function(clickEvent) {
    $(document).ready(function() {
      if (document.body.getAttribute("data-page").toLowerCase() == "showreel") {
        console.log("conditions met");
        const videocontainer = document.getElementById("showreelvideocontainer");
        const video = document.getElementById("showreelvideo");
        if (firstClick) {
          firstClick = false;
          return;
        }
        if (video.contains(clickEvent.target) && videocontainer.classList.contains("display_flex")) {
          togglevideo();
          showreelButtonState();
        }
      } else {
        console.log("conditions not met");
      }
    });
  });
})();
