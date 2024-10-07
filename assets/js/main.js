import * as cinemaModule from './modules/cinemamodule.js';
import * as sidebarToggle from './modules/sidebartoggle.js';
import * as dropdownToggle from './modules/dropdowntoggle.js';
import * as touchscreenutilities from './modules/touchscreenutilities.js';
import * as audioMotionModule from './modules/audiomotion.js';

import Plyr from 'plyr';

document.addEventListener('DOMContentLoaded', (e) => {
    // HANDLE INTERACTIONS WITH PROJECT OVERLAY BUTTONS
    const projectOverlays = document.querySelectorAll("[id^='project-overlay-']");
    projectOverlays.forEach((projectOverlay) => {
        if (projectOverlay.isHovering === undefined) {
            projectOverlay.isHovering = false;
        }

        const parentLink = projectOverlay.closest('a');
        parentLink.addEventListener('click', (e) => {
            if(!projectOverlay.isHovering) {
                e.preventDefault();
            }
        })

        projectOverlay.addEventListener('mouseover', () => {
            touchscreenutilities.applyOverlay(projectOverlay);
        })
        projectOverlay.addEventListener('mouseout', () => {
            touchscreenutilities.removeOverlay(projectOverlay);
        })
        parentLink.addEventListener('touchend', (e) => {
            if(!projectOverlay.isHovering) {
                e.preventDefault();
                touchscreenutilities.applyTouchHoverEffect(projectOverlay);
            }
        })
    });
    document.addEventListener('click', (e) => {
        projectOverlays.forEach((projectOverlay) => {
            if (!projectOverlay.contains(e.target)) {
                touchscreenutilities.removeOverlay(projectOverlay);
                projectOverlay.isHovering = false;
            }
        });
    });

    // Initialize default Plyr for all video elements with the class 'plyr-video' applied
    //PLYR VIDEO PLAYERS (DEFAULT)
    const videoPlayers = Plyr.setup('.plyr-video', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen',],
        keyboard: {
            focused: true,
            global: false,
        },
        volume: 0.8,
        storage: {
            enabled: false
        }
    });

    // PLYR MUSIC VIDEO PLAYERS
    const musicVideoPlayers = Plyr.setup('.plyr-musicvideo', {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings',],
        keyboard: {
            focused: true,
            global: false,
        },
        volume: 0.8,
        storage: {
            enabled: false
        }
    })

    // PLYR AUDIO PLAYERS
    // Initialize default Plyr for all audio elements with the class 'plyr-audio' applied
    const audioPlayers = Plyr.setup('.plyr-audio', {
        volume: 0.8,
        storage: {
            enabled: false
        }
    });
    
    const workPageActive = (document.body.getAttribute("data-page").toLowerCase() === "work") || false;
    if (!workPageActive) {
        return;
    }

    // HANDLE INTERACTIONS WITH MUSIC OVERLAY BUTTONS
    const playMusicOverlays = document.querySelectorAll("[id^='play-music-overlay-']");
    playMusicOverlays.forEach((musicOverlay, index) => {
        if (musicOverlay.isHovering === undefined) {
            musicOverlay.isHovering = false;
        }
        musicOverlay.addEventListener('mouseover', () => {
            touchscreenutilities.applyOverlay(musicOverlay);
        })
        musicOverlay.addEventListener('mouseout', () => {
            touchscreenutilities.removeOverlay(musicOverlay);
        })

        const playMusicBtn = document.querySelector(`#play-music-overlay-${index}`);
        const ionIconElem = playMusicBtn.querySelector('ion-icon');

        if (playMusicBtn) {
            playMusicBtn.addEventListener('click', (e) => {
                if (touchscreenutilities.isTouchDevice()) {
                    e.preventDefault();
                    return;
                }
                if (musicOverlay.isHovering) {
                    if (!audioPlayers[index].playing) {
                        audioPlayers[index].play();
                    } else if (audioPlayers[index].playing) {
                        audioPlayers[index].pause();
                    }
                }
            })
            playMusicBtn.addEventListener('touchend', () => {
                if(musicOverlay.isHovering) {
                    if (!audioPlayers[index].playing) {
                        audioPlayers[index].play();
                    } else if (audioPlayers[index].playing) {
                        audioPlayers[index].pause();
                    }
                } else {
                    touchscreenutilities.applyTouchHoverEffect(musicOverlay);
                }
            })
        }

        audioPlayers[index].on('play', () => {
            ionIconElem.setAttribute('name', 'pause-circle-outline');
        })
        audioPlayers[index].on('pause', () => {
            ionIconElem.setAttribute('name', 'play-circle-outline');
        })
        audioPlayers[index].on('end', () => {
            ionIconElem.setAttribute('name', 'play-circle-outline');
        })

        // ADDING AUDIO VISUALIZATION TO AUDIO SETUP
        let audioMotion;
        let isPlaying = false;
        let isPaused;
        let hasSeeked = false;

        const audioContainer = document.querySelector(`#audioContainer-${index}`);
        audioPlayers[index].on('play', () => {
            if (isPlaying) return;
            
            if (!audioMotion) {
                audioMotion = audioMotionModule.createAudioMotionInstance(audioContainer, audioPlayers[index]);
                audioMotionModule.audioMotionFadeIn(audioMotion);
            }

            isPlaying = true;
            isPaused = false;
            setTimeout(() => {
                if (!hasSeeked) {
                    audioMotionModule.audioMotionFadeIn(audioMotion);
                }
            }, 10);
        });
        audioPlayers[index].on('pause', () => {
            if (isPaused) return;

            isPaused = true;
            isPlaying = false;
            hasSeeked = false;
            setTimeout(() => {
                if (!hasSeeked) {
                    audioMotionModule.pauseAudioMotionInstance(audioMotion);
                }
            }, 10);
        });
        audioPlayers[index].on('seeking', () => {
            hasSeeked = true;
        });
    });
    //PRELOAD AUDIO MEDIA
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audioElement => {
        audioElement.preload = 'auto';
        audioElement.load();
    });
    

    // MAKE SURE NO PLAYERS PLAY SIMULTANEOUSLY
    const allPlyrPlayers = videoPlayers.concat(musicVideoPlayers, audioPlayers);
    allPlyrPlayers.forEach(player => {
        player.on('play', () => {
            allPlyrPlayers.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    otherPlayer.pause();
                }
            });
        });
    });
});

// VIDEO TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const videocontainer = document.getElementById('showreelvideocontainer');
    const video = document.querySelector('#reel-container');
    const button = document.getElementById("showreelbutton");
    const closeReelButton = document.getElementById("close-reel-button");
    const delayTime = 500;
    let timerActive = false;

    const showreelPageActive = (document.body.getAttribute("data-page").toLowerCase() === "showreel") || false;

    if (!showreelPageActive)
        return;

    document.addEventListener("keydown", (keydownEvent) => {
        if (timerActive)
            return;
        if (keydownEvent.key === "Escape" && videocontainer.classList.contains("grid")) {

            cinemaModule.togglevideo(delayTime);
            cinemaModule.overlayToggle();
            cinemaModule.showreelButtonState(delayTime);

            timerActive = true;
            setTimeout(() => {
                timerActive = false;
            }, delayTime);
        }
    });

    button.addEventListener("click", () => {
        if (timerActive)
            return;
        cinemaModule.togglevideo(delayTime);
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState(delayTime);

        timerActive = true;
        setTimeout(() => {
            timerActive = false;
        }, delayTime);
    });

    closeReelButton.addEventListener("click", () => {
        if (timerActive)
            return;
        cinemaModule.togglevideo(delayTime);
        cinemaModule.overlayToggle();
        cinemaModule.showreelButtonState(delayTime);

        timerActive = true;
        setTimeout(() => {
            timerActive = false;
        }, delayTime);
    });

    window.addEventListener("click", (clickEvent) => {
        if (timerActive)
            return;
        if (!video.contains(clickEvent.target) && videocontainer.classList.contains("grid")){
            cinemaModule.togglevideo(delayTime);
            cinemaModule.overlayToggle();
            cinemaModule.showreelButtonState(delayTime);

            timerActive = true;
            setTimeout(() => {
                timerActive = false;
            }, delayTime);
        }
    });
});

// NAV SIDEBAR TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const closeMenuButton = document.getElementById("closemenubutton");
    const menuButton = document.getElementById("openmenubutton");
    const sidebar = document.getElementById("sidebarnav");

    let sidebarOpen = false;

    menuButton.addEventListener("click", () => (!sidebarOpen) ? sidebarOpen = sidebarToggle.openMenu(sidebarOpen) : sidebarOpen = sidebarToggle.closeMenu(sidebarOpen));
    closeMenuButton.addEventListener("click", () => (sidebarOpen) ? sidebarOpen = sidebarToggle.closeMenu(sidebarOpen) : sidebarOpen = sidebarToggle.openMenu(sidebarOpen));
    
    document.addEventListener("click", (clickEvent) => {
        if (!sidebarOpen) {
            return;
        } else if (!sidebar.contains(clickEvent.target) && !menuButton.contains(clickEvent.target)) {
            sidebarOpen = sidebarToggle.closeMenu(sidebarOpen);
        }
    });

    addEventListener("resize", () => {
        const width = window.innerWidth;
        if (width > 640)
            {
                sidebarOpen = sidebarToggle.closeMenu(sidebarOpen);
            }
    });
});

// DROPDOWN CONTENT TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const aboutPageActive = (document.body.getAttribute("data-page").toLowerCase() === "about") || false;    
    if (!aboutPageActive)
        return;
    
    const resumeContentElem = document.getElementsByClassName("resume-content");

    for (const elem of resumeContentElem) {
        const buttonContainerElem = elem.firstElementChild.firstElementChild;

        const buttonElemIDs = buttonContainerElem.querySelector("button").id;
        const contentElemIDs = elem.children[1]?.firstElementChild.id;

        const dropdownButtonElem = document.getElementById(buttonElemIDs);
        const dropdownContentElem = document.getElementById(contentElemIDs);

        let isDropdownOpen = false;
        buttonContainerElem.addEventListener("click", () => {
            if (!isDropdownOpen) {
                isDropdownOpen = dropdownToggle.openDropdown(isDropdownOpen, dropdownButtonElem, dropdownContentElem);
            } else if (isDropdownOpen) {
                isDropdownOpen = dropdownToggle.closeDropdown(isDropdownOpen, dropdownButtonElem, dropdownContentElem);
            }
        });
    };
});