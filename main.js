import './css/reset.css'
import './css/style.css'

// main.js

document.addEventListener("DOMContentLoaded", function() {
  function toggleAudio() {
    var audio = document.querySelector('.audio-player audio');
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  // You can also use event delegation to handle the click event on the play button
  document.querySelector('.audio-player button.play-button').addEventListener('click', toggleAudio);
});

document.addEventListener("DOMContentLoaded", function() {
  function toggleAudio() {
    var audio = document.querySelector('.audio-player audio');
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  // Define toggleAudio in the global scope
  window.toggleAudio = toggleAudio;

  // You can also use event delegation to handle the click event on the play button
  document.querySelector('.audio-player button.play-button').addEventListener('click', toggleAudio);
});
