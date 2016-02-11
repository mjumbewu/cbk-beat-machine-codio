// The playSound function
// ----------------------

// The "playSound" function will play a sound and attach that sound to a
// particular element.
//
// - "el" is the element that was clicked on.
// - "soundfile" is a string that has the location of the sound file.
function playSound(el, soundfile) {

    function turnOn() {
        el.mp3.play();
        el.classList.remove('off');
        el.classList.add('on');
    }

    // If the "el" does not have an attribute called "mp3", then create
    // it. "el.mp3" will be an "Audio" object.
    if (!el.mp3) {
        el.mp3 = new Audio(soundfile);
        el.mp3.loop = false;
        turnOn();
    }

    // Otherwise (if "el" already does have an "mp3" attribute) play or
    // or pause the audio. Go back to the beginning of the track each
    // time.
    else {
        el.mp3.currentTime = 0;
        turnOn(); 
    }
}
