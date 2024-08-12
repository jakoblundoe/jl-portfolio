import * as cinemaModule from './modules/cinemamodule.js';

cinemaModule.printhelloworld();

// document.addEventListener('DOMContentLoaded', (event) => {
//     const button = document.getElementById('showreelbutton');
//     const videocontainer = document.getElementById('videocontainer');

//     if (button && videocontainer) {
//         button.addEventListener('click', () => {
//             videocontainer.classList.toggle('userhidden');
//         });
//     } else {
//         console.error('Button or videocontainer element not found');
//     }
// });

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('showreelbutton');
    const videocontainer = document.getElementById('videocontainer');

    if (button && videocontainer) {
        button.addEventListener('click', () => {
            if (videocontainer.classList.contains('display_none')) {
                videocontainer.classList.remove('display_none');
                videocontainer.classList.add('display_flex');
            } else {
                videocontainer.classList.remove('display_flex');
                videocontainer.classList.add('display_none');
            }
        });
    } else {
        console.error('Button or videocontainer element not found');
    }
});