import * as cinemaModule from './modules/cinemamodule.js';
import * as sidebarToggle from './modules/sidebartoggle.js';
import * as dropdownToggle from './modules/dropdowntoggle.js';
import * as touchscreenutilities from './modules/touchscreenutilities.js';
import * as audioMotionModule from './modules/audiomotion.js';

import Plyr from 'plyr';
import Hammer from 'hammerjs';

document.addEventListener('DOMContentLoaded', (e) => {
    // HANDLE INTERACTIONS WITH PROJECT OVERLAY BUTTONS
    const projectOverlays = document.querySelectorAll("[id^='project-overlay-']");
    const linkOverlaysBtns = document.querySelectorAll("[id^='link-overlay-btn-']");

    projectOverlays.forEach((projectOverlay, index) => {
        if (projectOverlay.isHovering === undefined) {
            projectOverlay.isHovering = false;
        }
        const parentLink = projectOverlay.closest('a');
        const hammerProjectBtn = new Hammer(parentLink);

        parentLink.addEventListener('click', (e) => {
            // THIS CONDITION SHOULD BE REDUNDANT BUT FOR SOME REASON IT IS NEEDED.
            if(touchscreenutilities.isTouchDevice()) {
                e.preventDefault();
            }
        })
        projectOverlay.addEventListener('mouseover', () => {
            touchscreenutilities.applyOverlay(projectOverlay);
        })
        projectOverlay.addEventListener('mouseout', () => {
            touchscreenutilities.removeOverlay(projectOverlay);
        })
        hammerProjectBtn.on('tap', () => {
            if (!projectOverlay.isHovering) {
                linkOverlaysBtns[index].classList.remove('opacity-80');
                linkOverlaysBtns[index].classList.add('opacity-100');
                touchscreenutilities.applyTouchHoverEffect(projectOverlay);
            } else {
                linkOverlaysBtns[index].classList.remove('opacity-80');
                linkOverlaysBtns[index].classList.add('opacity-100');
                setTimeout(() => {
                    window.open(parentLink.href, '_blank', 'noopener,noreferrer');
                }, 15);
            }
        });
        if(touchscreenutilities.isTouchDevice()) {
            projectOverlay.addEventListener('touchstart', () => {
                linkOverlaysBtns[index].classList.remove('opacity-100');
                linkOverlaysBtns[index].classList.add('opacity-80');
            });
            document.addEventListener('touchend', () => {
                linkOverlaysBtns[index].classList.remove('opacity-80');
                linkOverlaysBtns[index].classList.add('opacity-100');
            });
        } else {
            projectOverlay.addEventListener('mousedown', () => {
                if (projectOverlay.isHovering) {
                    linkOverlaysBtns[index].classList.remove('opacity-100');
                    linkOverlaysBtns[index].classList.add('opacity-80');
                }
            })
            document.addEventListener('mouseup', () => {
                linkOverlaysBtns[index].classList.remove('opacity-80');
                linkOverlaysBtns[index].classList.add('opacity-100');
            })
        }
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
    });

    // PLYR MUSIC VIDEO PLAYERS
    const musicVideoPlayers = Plyr.setup('.plyr-musicvideo', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings',],
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
        seekTime: 10,
        controls: ['play', 'progress', 'volume', 'mute'],
        disableContextMenu: true,
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
    // const musicOverlaysBtns = document.querySelectorAll("[id^='play-music-btn-']");
    playMusicOverlays.forEach((musicOverlay, index) => {
        const musicOverlayID = musicOverlay.getAttribute('id');
        const customIndex = musicOverlayID.charAt(musicOverlayID.length - 1);
        const musicOverlaysBtns = document.querySelector(`[id^='play-music-btn-${customIndex}']`);

        if (musicOverlay.isHovering === undefined) {
            musicOverlay.isHovering = false;
        }
        musicOverlay.addEventListener('mouseover', () => {
            touchscreenutilities.applyOverlay(musicOverlay);
        })
        musicOverlay.addEventListener('mouseout', () => {
            touchscreenutilities.removeOverlay(musicOverlay);
        })

        const playMusicBtn = document.querySelector(`#play-music-overlay-${customIndex}`);
        const ionIconElem = playMusicBtn.querySelector('ion-icon');
        const hammerMusicBtn = new Hammer(playMusicBtn);

        if (playMusicBtn) {
            hammerMusicBtn.on('tap', () => {
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


            if(touchscreenutilities.isTouchDevice()) {
                playMusicBtn.addEventListener('touchstart', () => {
                    musicOverlaysBtns.classList.remove('opacity-100');
                    musicOverlaysBtns.classList.add('opacity-80');
                });
                playMusicBtn.addEventListener('touchend', () => {
                    musicOverlaysBtns.classList.remove('opacity-80');
                    musicOverlaysBtns.classList.add('opacity-100');
                });
            } else {
                playMusicBtn.addEventListener('mousedown', () => {
                    if (musicOverlay.isHovering) {
                        musicOverlaysBtns.classList.remove('opacity-100');
                        musicOverlaysBtns.classList.add('opacity-80');
                    }
                })
                playMusicBtn.addEventListener('mouseup', () => {
                    musicOverlaysBtns.classList.remove('opacity-80');
                    musicOverlaysBtns.classList.add('opacity-100');
                })
            }
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
        if(!touchscreenutilities.isTouchDevice()) {
            let audioMotion;
            let isPlaying = false;
            let isPaused = true;
            let isSeeking = false;
            let pauseTime = 0;
            let seekPause = false;

            const audioContainer = document.querySelector(`#audioContainer-${customIndex}`);
            audioPlayers[index].on('play', () => {
                if (isPlaying) return;

                if (!audioMotion) {
                    audioMotion = audioMotionModule.createAudioMotionInstance(audioContainer, audioPlayers[index]);
                    audioMotionModule.audioMotionFadeIn(audioMotion);
                }

                isPlaying = true;
                isPaused = false;

                if (!seekPause) {
                    audioMotionModule.audioMotionFadeIn(audioMotion);
                } else {
                    seekPause = false;
                }
            });

            audioPlayers[index].on('pause', () => {
                if (isPaused) return;

                isPaused = true;
                isPlaying = false;

                pauseTime = Date.now();

                setTimeout(() => {
                    if(!seekPause) {
                        audioMotionModule.pauseAudioMotionInstance(audioMotion);
                    }
                }, 10);
            });

            audioPlayers[index].on('seeking', () => {
                isSeeking = true;

                const currentTime = Date.now();
                if (currentTime - pauseTime < 5) {
                    seekPause = true;
                };
            });
        }
    });


    // MAKE SURE NO PLAYERS PLAY SIMULTANEOUSLY
    const allPlyrPlayers = videoPlayers.concat(musicVideoPlayers, audioPlayers);
    allPlyrPlayers.forEach(player => {
        player.on('play', async () => {
            for (let otherPlayer of allPlyrPlayers) {
                if (otherPlayer !== player &&  !otherPlayer.paused) {
                    otherPlayer.pause();
                }
            };
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