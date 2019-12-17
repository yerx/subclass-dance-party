describe('shinyDancer', function() {

  var shinyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shinyDancer = new makeShinyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shinyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(shinyDancer.$node, 'toggle');
    shinyDancer.step();
    expect(shinyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shinyDancer, 'step');
      expect(shinyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shinyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shinyDancer.step.callCount).to.be.equal(2);
    });
  });
});
