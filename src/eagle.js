var makeShinyDancer = function(top, left, timeBetweenSteps) {
  // gif = "/images/eagles.gif";

  makeDancer.call(this, top, left, timeBetweenSteps);

  // this.$node.addClass('eagle');
  this.$node = $('<span class="eagleElement"><img class="eagleGif" src="./images/eagles.gif"/></span>');

  this.setPosition(top, left);
};

makeShinyDancer.prototype = Object.create(makeDancer.prototype);
makeShinyDancer.prototype.constructor = makeShinyDancer;

// the eagle slides up and down
// makeShinyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
//   // this.$node.animate({left: '200px'});

//   var rando = function() {
//     return Math.floor(Math.random() * 256);
//   };

//   var styleSettings = {
//     border: '15px solid rgb(' + rando() + ',' + rando() + ',' + rando() + ')'
//   };

//   this.$node.css(styleSettings);

// };

