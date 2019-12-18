var makeAwkwardDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

  this.$node = $('<span class="duckElement"><img class="duckGif" src="./images/ducks.gif" /></a></span>');

};

makeAwkwardDancer.prototype = Object.create(makeDancer.prototype);
makeAwkwardDancer.prototype.constructor = makeAwkwardDancer;


makeAwkwardDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();

};

makeDancer.prototype.mouseOver = function() {
  this.$node.toggleClass('duckElement');
  // this.$node.toggleClass()
};

// makeAwkwardDancer.prototype.mouseover = function() {

//   this.$node.on('mouseover', function() {
//     var styleSettings = {
//       height: 500,
//       width: 500,
//     };
//     this.$node.css(styleSettings);
//   });

// };