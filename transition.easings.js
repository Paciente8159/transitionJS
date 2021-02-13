"use strict";

transitionJS.prototype.easeInQuad = function (x) {
  return x * x;
};

transitionJS.prototype.easeOutQuad = function (x) {
  return 1 - (1 - x) * (1 - x);
};

transitionJS.prototype.easeInOutQuad = function (x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
};

transitionJS.prototype.easeInCubic = function (x) {
  return x * x * x;
};

transitionJS.prototype.easeOutCubic = function (x) {
  return 1 - Math.pow(1 - x, 3);
};

transitionJS.prototype.easeInOutCubic = function (x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

transitionJS.prototype.easeInQuart = function (x) {
  return x * x * x * x;
};

transitionJS.prototype.easeOutQuart = function (x) {
  return 1 - Math.pow(1 - x, 4);
};

transitionJS.prototype.easeInOutQuart = function (x) {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
};

transitionJS.prototype.easeInQuint = function (x) {
  return x * x * x * x * x;
};

transitionJS.prototype.easeOutQuint = function (x) {
  return 1 - Math.pow(1 - x, 5);
};

transitionJS.prototype.easeInOutQuint = function (x) {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
};

transitionJS.prototype.easeInSine = function (x) {
  return 1 - Math.cos((x * Math.PI) / 2);
};

transitionJS.prototype.easeOutSine = function (x) {
  return Math.sin((x * Math.PI) / 2);
};

transitionJS.prototype.easeInOutSine = function (x) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
};

transitionJS.prototype.easeInExpo = function (x) {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
};

transitionJS.prototype.easeOutExpo = function (x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

transitionJS.prototype.easeInOutExpo = function (x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
};

transitionJS.prototype.easeInCirc = function (x) {
  return 1 - Math.sqrt(1 - Math.pow(x, 2));
};

transitionJS.prototype.easeOutCirc = function (x) {
  return Math.sqrt(1 - Math.pow(x - 1, 2));
};

transitionJS.prototype.easeInOutCirc = function (x) {
  return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
};

transitionJS.prototype.easeInBack = function (x) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return c3 * x * x * x - c1 * x * x;
};

transitionJS.prototype.easeOutBack = function (x) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};

transitionJS.prototype.easeInOutBack = function (x) {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;
  return x < 0.5
    ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
};

transitionJS.prototype.easeInElastic = function (x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
};

transitionJS.prototype.easeOutElastic = function (x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
};

transitionJS.prototype.easeInOutElastic = function (x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
    : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
};

transitionJS.prototype.easeOutBounce = function (x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};

transitionJS.prototype.easeInBounce = function (x) {
  return 1 - this.easeOutBounce(1 - x);
};

transitionJS.prototype.easeInOutBounce = function (x) {
  return x < 0.5
    ? (1 - this.easeOutBounce(1 - 2 * x)) / 2
    : (1 + this.easeOutBounce(2 * x - 1)) / 2;
};
