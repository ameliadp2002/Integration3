import './css/reset.css'
import './css/style.css'

// main.js

document.addEventListener("DOMContentLoaded", function() {
  // Define toggleAudio in the global scope
  window.toggleAudio = function(element) {
    var audio = element.parentElement.querySelector('audio');
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  // Use event delegation to handle the click event on any play button
  document.addEventListener('click', function(event) {
    var target = event.target;

    // Check if the clicked element has the class 'play-button'
    if (target.classList.contains('play-button')) {
      toggleAudio(target);
    }
  });
});



