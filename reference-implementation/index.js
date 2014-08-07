"use strict";

Array.prototype.sample = function (n) {
  var randNum, dupe, result;
  if (arguments.length === 0) {
    result = this[Math.floor(Math.random()*this.length)];
  } else if (parseInt(n) !== n) {
    throw TypeError("argument must be a number");
  } else if (n <= 0) {
    throw RangeError("argument must greater than zero");
  } else {
    n = n > this.length ? this.length : n;
    dupe = this.slice();
    result = [];
    for(var i=0; i<n; i++) {
      randNum = Math.floor(Math.random()*dupe.length);
      result.push(dupe[randNum]);
      dupe.splice(randNum, 1);
    }
  }
  return result;
};
