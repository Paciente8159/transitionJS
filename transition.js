"use strict";

function transitionJS(options) {
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  const cancelAnimationFrame =
    window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  this.options = this.defaultOptions(options);
  //max to 110% the frame rate
  this.frameTime = 900 / this.options.fps;
  this.startTime = 0;
  this.lastTime = 0;
  this.transitionID = 0;
  this.rendering = false;
  this.easing = this.selectEasing(this.options.transitionEasing);
}

transitionJS.prototype.now = function () {
  if (performance.now) {
    return performance.now();
  }

  if (Date.now) {
    return Date.now();
  }

  return new Date().getTime();
};

transitionJS.prototype.startTransition = function (
  transitionDelayCallback,
  transitionDelay
) {
  if (transitionDelay) {
    setTimeout(
      function () {
        this.startTransition(transitionDelayCallback);
      }.bind(this),
      transitionDelay
    );
  } else {
    this.lastTime = 0;
    this.startTime = this.now();
    this.lastTime = this.startTime;
    this.rendering = true;
    if (transitionDelayCallback) {
      transitionDelayCallback();
    }
    this.run();
  }
};

transitionJS.prototype.cancelTransition = function () {
  cancelAnimationFrame(this.transitionID);
  this.rendering = false;
  this.lastTime = 0;
  this.startTime = 0;
};

transitionJS.prototype.run = function () {
  this.transitionID = requestAnimationFrame(this.run.bind(this));
  var current = this.now();
  var elapsed = current - this.lastTime;
  //nothing to render leave
  if (elapsed < this.frameTime) {
    return;
  }

  var elapsed_total = Math.min(
    this.options.transitionDuration,
    current - this.startTime
  );
  var percentage = elapsed_total / this.options.transitionDuration;
  var framepercentage = !this.easing ? percentage : this.easing(percentage);

  if (this.options.renderFrame) {
    this.options.renderFrame(percentage, framepercentage);
  }

  if (percentage == 1 && !this.rendering) {
    cancelAnimationFrame(this.transitionID);
    if (this.options.transitionEnded) {
      this.options.transitionEnded();
    }
  }

  this.lastTime = current;
  this.rendering = percentage != 1;
};

transitionJS.prototype.isRunning = function () {
  return this.rendering;
};

transitionJS.prototype.selectEasing = function (easing) {
  if (typeof easing === "string") {
    switch (easing) {
      case "easeInQuad":
        return this.easeInQuad;
      case "easeOutQuad":
        return this.easeOutQuad;
      case "easeInOutQuad":
        return this.easeInOutQuad;
      case "easeInCubic":
        return this.easeInCubic;
      case "easeOutCubic":
        return this.easeOutCubic;
      case "easeInOutCubic":
        return this.easeInOutCubic;
      case "easeInQuart":
        return this.easeInQuart;
      case "easeOutQuart":
        return this.easeOutQuart;
      case "easeInOutQuart":
        return this.easeInOutQuart;
      case "easeInQuint":
        return this.easeInQuint;
      case "easeOutQuint":
        return this.easeOutQuint;
      case "easeInOutQuint":
        return this.easeInOutQuint;
      case "easeInSine":
        return this.easeInSine;
      case "easeOutSine":
        return this.easeOutSine;
      case "easeInOutSine":
        return this.easeInOutSine;
      case "easeInExpo":
        return this.easeInExpo;
      case "easeOutExpo":
        return this.easeOutExpo;
      case "easeInOutExpo":
        return this.easeInOutExpo;
      case "easeInCirc":
        return this.easeInCirc;
      case "easeOutCirc":
        return this.easeOutCirc;
      case "easeInOutCirc":
        return this.easeInOutCirc;
      case "easeInBack":
        return this.easeInBack;
      case "easeOutBack":
        return this.easeOutBack;
      case "easeInOutBack":
        return this.easeInOutBack;
      case "easeInElastic":
        return this.easeInElastic;
      case "easeOutElastic":
        return this.easeOutElastic;
      case "easeInOutElastic":
        return this.easeInOutElastic;
      case "easeOutBounce":
        return this.easeOutBounce;
      case "easeInBounce":
        return this.easeInBounce;
      case "easeInOutBounce":
        return this.easeInOutBounce;
    }
  }

  return easing;
};

transitionJS.prototype.defaultOptions = function (options) {
  var fulloptions = {
    /**
     * FPS options
     */
    fps: 60,
    transitionDuration: 1000,

    /**
     * Callback functions
     */
    renderFrame: null,
    transitionEasing: null,
    transitionEnded: null,
  };

  Object.getOwnPropertyNames(options).forEach(function (element) {
    Object.defineProperty(fulloptions, element, {
      value: options[element],
      writable: true,
    });
  });

  return fulloptions;
};
