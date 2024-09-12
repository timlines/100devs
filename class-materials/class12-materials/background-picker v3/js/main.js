const COLOR_PURPLE  = 'rgba(241,063,247,1)';
const COLOR_GREEN   = 'rgba(000,253,081,1)';
const COLOR_BLUE    = 'rgba(000,254,255,1)';
const COLOR_RED     = 'rgba(255,000,000,1)';

document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("red").onclick = partyRed;

function partyPurple() {
  document.querySelector('body').style.backgroundColor = COLOR_PURPLE;
  document.querySelector('body').style.color = 'white';
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = COLOR_GREEN;
  document.querySelector('body').style.color = 'white';
}
function partyBlue() {
  document.querySelector('body').style.backgroundColor = COLOR_BLUE;
  document.querySelector('body').style.color = 'white';
}
function partyRed() {
  document.querySelector('body').style.backgroundColor = COLOR_RED;
  document.querySelector('body').style.color = 'white';
}