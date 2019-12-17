describe('awkwardDancer', function() {

  var awkwardDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    awkwardDancer = new makeAwkwardDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(awkwardDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(awkwardDancer.$node, 'toggle');
    awkwardDancer.step();
    expect(awkwardDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(awkwardDancer, 'step');
      expect(awkwardDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(awkwardDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(awkwardDancer.step.callCount).to.be.equal(2);
    });
  });
});
