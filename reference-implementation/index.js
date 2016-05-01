"use strict";

Array.prototype.sample = function (n) {
  if (this.length === 0) {
    return [];
  }
  if (arguments.length === 0) {
    return [this[Math.floor(Math.random()*this.length)]];
  }
  if (parseInt(n) !== n) {
    throw TypeError("argument must be a number");
  }
  if (n <= 0) {
    throw RangeError("argument must greater than zero");
  }
  let randNum;
  let result = [];
  let dupe = this.slice();
  let count = n > this.length ? this.length : n;
  for(var i=0; i<count; i++) {
    randNum = Math.floor(Math.random()*dupe.length);
    result.push(dupe[randNum]);
    dupe.splice(randNum, 1);
  }
  return result;
};
