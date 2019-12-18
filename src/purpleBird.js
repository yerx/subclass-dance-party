var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

  this.$node = $('<span class="purpleBirdElement"><img style="height:100px" class="purpleBirdGif" src="./images/purpleBird.gif" /></span>'
  );

  this.setPosition(top, left);

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.slideToggle('slow');
//   // this.$node.animate({left: '200px'});
//   // this.findMate();
// };

// find closest dancer to interact with
// makeBlinkyDancer.prototype.findMate = function() {
//   // generate a random number to represent an index in windows.dancers
//   var minDistance = Math.sqrt(Math.pow(dancer.left[0] - this.left, 2)) + Math.pow(dancer.top[0] - this.top, 2);

//   var dancer, distance;

//   for (var i = 1; i < window.dancers.length; i++) {
//     dancer = window.dancers[i];
//     // use pythagorean theorem to find the distance
//     distance = Math.sqrt(Math.pow(dancer.left - this.left, 2)) + Math.pow(dancer.top - this.top, 2);
//     if (distance < min) {
//       min = distance;
//       this.positionForMate = [dancer.left, dancer.top];
//     }
//   }
//   console.log('closest partner is' + min);
// };



