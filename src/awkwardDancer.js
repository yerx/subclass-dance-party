var makeAwkwardDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

};

makeAwkwardDancer.prototype = Object.create(makeDancer.prototype);
makeAwkwardDancer.prototype.constructor = makeAwkwardDancer;


makeAwkwardDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};