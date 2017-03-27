// get margin
var m = document.getElementsByClassName('laser-shooter').currentStyle;
// Shooter + Margin
function setupLasers(amount) {

  var amtLasers = (document.getElementById('game-container').clientHeight / 125);

  var lasers = Math.floor(amtLasers) / 2;
  console.log(lasers)
  for (i = 0; i < lasers; i++) {
    var shooter = document.createElement('div');
    shooter.className = 'laser-shooter';
    document.getElementById('game-container').appendChild(shooter);

    // Now create and append to iDiv
    var laser = document.createElement('div');
    laser.className = 'laser';
    laser.id = 'laserbeam';

    // Prelaser
    var prelaser = document.createElement('div');
    prelaser.className = 'prelaser';
    prelaser.id = 'prelaserbeam';

    // The variable iDiv is still good... Just append to it.
    shooter.appendChild(laser);
    shooter.appendChild(prelaser);
  }



}
