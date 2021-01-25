const app = () => {
  const song = document.querySelector(.'song');
  const play = document.querySelector(.'play');
  const outline = document.querySelector(.'moving-outline circle');
  const video = document.querySelector(.'vid-container video');

//  Meditation  Sounds
  const sounds = document.querySelectorAll('.sound-picker button');
// Time Display
  const timeDisplay = document.querySelector('.time-display');
// Getting length of circle outline
  const outlineLength = outline.getTotalLength();
// Duration
  let fakeDuraction= 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;
}







app();