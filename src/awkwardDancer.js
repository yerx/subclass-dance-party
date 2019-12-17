var makeAwkwardDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
}

makeAwkwardDancer.prototype = Object.create(makeDancer.prototype);
makeAwkwardDancer.prototype.constructor = makeAwkwardDancer;

// var oldStep = makeBlinkyDancer.step
// makeBlinkyDancer.step is delegating to the Dancer prototype so oldStep = makeDancer.prototype.step
makeAwkwardDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
}