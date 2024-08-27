(() => {
  // ns-hugo:D:\FileFolder\Repos\jl-portfolio\assets\js\modules\cinemamodule.js
  function togglevideo() {
    const videocontainer2 = document.getElementById("videocontainer");
    const video = document.getElementById("showreelvideo");
    const resetDelay = 500;
    if (videocontainer2.classList.contains("display_none")) {
      videocontainer2.classList.remove("display_none");
      videocontainer2.classList.add("display_flex");
      video.volume = 0;
      fadeInVolume(video, 800, 1);
      setTimeout(() => {
        video.play();
      }, resetDelay);
    } else if (videocontainer2.classList.contains("display_flex")) {
      videocontainer2.classList.remove("display_flex");
      videocontainer2.classList.add("display_none");
      fadeOutVolume(video, 500);
      setTimeout(() => {
        video.pause();
        video.currentTime = 0;
      }, resetDelay);
    } else {
      console.error("Button or videocontainer element not found");
    }
  }
  function overlayToggle() {
    const overlayContainer = document.getElementById("overlay");
    const overlayFooter = document.getElementById("footer");
    if (overlayContainer.classList.contains("display_none") && overlayFooter.classList.contains("normal")) {
      overlayContainer.classList.remove("display_none");
      overlayFooter.classList.remove("normal");
      overlayContainer.classList.add("display_flex");
      overlayFooter.classList.add("overlay");
    } else if (overlayContainer.classList.contains("display_flex") && overlayFooter.classList.contains("overlay")) {
      overlayContainer.classList.remove("display_flex");
      overlayFooter.classList.remove("overlay");
      overlayContainer.classList.add("display_none");
      overlayFooter.classList.add("normal");
    }
  }
  function showreelButtonState() {
    const showreelButton = document.getElementById("showreelbutton");
    const showreelButtonText = showreelButton.querySelector("p");
    if (showreelButton.classList.contains("notPlaying")) {
      showreelButton.classList.remove("notPlaying");
      showreelButton.classList.add("playing");
      showreelButtonText.textContent = "Stop Showreel";
    } else if (showreelButton.classList.contains("playing")) {
      showreelButton.classList.remove("playing");
      showreelButton.classList.add("notPlaying");
      showreelButtonText.textContent = "Play Showreel";
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
  document.addEventListener("keydown", function(keyDownEvent) {
    $(document).ready(function() {
      if (document.body.getAttribute("data-page").toLowerCase() == "showreel") {
        console.log("conditions met");
        const videocontainer2 = document.getElementById("videocontainer");
        if (keyDownEvent.key === "Escape" && videocontainer2.classList.contains("display_flex")) {
          firstClick = true;
          togglevideo();
          overlayToggle();
          showreelButtonState();
          videocontainer2.offsetHeight;
          const showreelButton = document.getElementById("showreelbutton");
          showreelButton.offsetHeight;
          showreelButton.blur();
        }
      } else {
        console.log("conditions not met");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
      if (document.body.getAttribute("data-page").toLowerCase() == "showreel") {
        console.log("conditions met");
        const button = document.getElementById("showreelbutton");
        button.addEventListener("click", function(buttonClickEvent) {
          togglevideo();
          overlayToggle();
          showreelButtonState();
          firstClick = true;
          videocontainer.offsetHeight;
          const showreelButton = document.getElementById("showreelbutton");
          showreelButton.offsetHeight;
          showreelButton.blur();
        });
      } else {
        console.log("conditions not met");
      }
    });
  });
  window.addEventListener("click", function(clickEvent) {
    $(document).ready(function() {
      if (document.body.getAttribute("data-page").toLowerCase() == "showreel") {
        console.log("conditions met");
        const videocontainer2 = document.getElementById("videocontainer");
        const showreelvideo = document.getElementById("showreelvideo");
        if (firstClick) {
          firstClick = false;
          return;
        }
        if (!document.getElementById("showreelvideo").contains(clickEvent.target) && videocontainer2.classList.contains("display_flex")) {
          togglevideo();
          overlayToggle();
          showreelButtonState();
        }
      } else {
        console.log("conditions not met");
      }
    });
  });
})();
