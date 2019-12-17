var makeShinyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

makeShinyDancer.prototype = Object.create(makeDancer.prototype);
makeShinyDancer.prototype.constructor = makeShinyDancer;

// var oldStep = makeBlinkyDancer.step
// makeBlinkyDancer.step is delegating to the Dancer prototype so oldStep = makeDancer.prototype.step
makeShinyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};