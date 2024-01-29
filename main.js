import './css/reset.css'
import './css/style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*gsap.registerPlugin(ScrollTrigger);

gsap.to(".desk__train", {
  x:50,
  duration: 3,
  scrollTrigger: {
    trigger: ".roll",
    start: "top 70%",
    end: "bottom 20%",
    toggleClass: "white",
    markers: { fontSize: "25px", fontWeight: "bold" },
    scrub: 0.5, //true
  },
});*/


document.addEventListener("DOMContentLoaded", function() {
  // Define toggleAudio in the global scope
  window.toggleAudio = function(element) {
    let audio = element.parentElement.querySelector('audio');
    let img = element.querySelector('.play__img');
    let iframe = element.querySelector('.play__hidden');

    if (audio.paused) {
      audio.play();
      img.style.display = 'none';
      iframe.style.display = 'block';
    } else {
      audio.pause();
      img.style.display = 'block';
      iframe.style.display = 'none';
    }
  };

  // Show the audio element initially
  document.querySelector('.audio-player audio').style.display = 'block';

  // Use event delegation to handle the click event on any play button
  document.addEventListener('click', function(event) {
    let target = event.target;

    // Check if the clicked element has the class 'play-button'
    if (target.classList.contains('play-button')) {
      toggleAudio(target);
    }
  });
});
