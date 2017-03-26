var laser = Math.floor(Math.random() * 6) + 1;
var laserinuse = 0;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var laserpickerMech;

function startLasers() {
laserpickerMech = setInterval(function(){
      var random = Math.floor(Math.random() * $('.laser').length);
      $('.prelaser').hide().eq(random).show();

      sleep(1500).then(() => {
        $('.laser').hide().eq(random).show();

      });
     

  }, 2000);

}


var scoreKeeper;
var score = 0;

function startScore() {
      console.log("GAME STARTED");

  scoreKeeper = setInterval(function(){
    score = score + 1;
    document.getElementById('livescore').innerHTML = score;
    document.getElementById('livescore-alive').innerHTML = score;
  }, 4000);
}


function resetLasers() {
  document.getElementsByClassName('laser')[0].style.display = "none";
  document.getElementsByClassName('laser')[1].style.display = "none";
  document.getElementsByClassName('laser')[2].style.display = "none";
  document.getElementsByClassName('laser')[3].style.display = "none";
  document.getElementsByClassName('laser')[4].style.display = "none";

  document.getElementsByClassName('prelaser')[0].style.display = "none";
  document.getElementsByClassName('prelaser')[1].style.display = "none";
  document.getElementsByClassName('prelaser')[2].style.display = "none";
  document.getElementsByClassName('prelaser')[3].style.display = "none";
  document.getElementsByClassName('prelaser')[4].style.display = "none";

}
