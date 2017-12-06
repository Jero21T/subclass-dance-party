var makeDancer = function (top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"><img class="santa" src="santa.png"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);

  
  $('body').on('mouseover', '.dancer', (function () {
    this.setPosition(0, 0);
  }).bind(this));
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};















