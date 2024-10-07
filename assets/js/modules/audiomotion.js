import AudioMotionAnalyzer from 'audiomotion-analyzer';

export function createAudioMotionInstance(audioContainer, audioPlayer) {
    const options = {
        colorStops: [
            { pos: 0, color: 'rgba(70, 130, 180, 1)' },
            { pos: 0.2, color: 'rgba(163, 193, 218, 1)' },
            { pos: 0.4, color: 'rgba(204, 229, 255, 1)' },
            { pos: 0.6, color: 'rgba(230, 240, 255, 1)' },
            { pos: 0.8, color: 'rgba(240, 245, 250, 1)' },
            { pos: 1, color: 'rgba(255, 255, 255, 1)' }
        ]
    }
    const audioMotion = new AudioMotionAnalyzer(audioContainer, {
        source: audioPlayer.media,
        height: audioContainer.clientHeight,
        width: audioContainer.clientWidth,
        ansiBands: false,
        showScaleX: false,
        bgAlpha: 0,
        overlay: true,
        smoothing: 0.7,
        mode: 0,
        channelLayout: "single",
        frequencyScale: "bark",
        gradient: 'prism',
        linearAmplitude: true,
        linearBoost: 1.8,
        mirror: 0,
        radial: false,
        reflexAlpha: 0.25,
        reflexBright: 1,
        reflexFit: true,
        reflexRatio: 0.3,
        showPeaks: true,
        weightingFilter: "D"
    });
    audioMotion.registerGradient( 'whiteGradient', options );
    audioMotion.setOptions({ gradient: 'whiteGradient' });

    return audioMotion;
}

export function audioMotionFadeIn(audioMotion) {
    console.log("play triggered")
    let alpha = 0;
    const fadeDuration = 500;
    const fadeInterval = 10;

    const fadeIn = setInterval(() => {
        alpha += fadeInterval /fadeDuration;
        if (alpha >= 0.75) {
            alpha = 0.75;
            clearInterval(fadeIn);
        }
        audioMotion.paused = false;
        audioMotion.setOptions({ bgAlpha: alpha });
    }, fadeInterval);
}

export function pauseAudioMotionInstance (audioMotion) {
    console.log("pause triggered")
    if (audioMotion) {
        let alpha = 0.75;
        const fadeDuration = 500;
        const fadeInterval = 10;

        const fadeOut = setInterval(() => {
            alpha -= fadeInterval / fadeDuration;
            if (alpha <= 0) {
                alpha = 0;
                clearInterval(fadeOut);
            }
            audioMotion.paused = true;
            audioMotion.setOptions({ bgAlpha: alpha });
        }, fadeInterval);
    }
}