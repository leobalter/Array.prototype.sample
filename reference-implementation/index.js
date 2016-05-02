Array.prototype.sample = function(count) {

  // Let O be ? ToObject(this value).
  let O = this;
  // ... validates ToObject

  // Let len be ? ToLength(? Get(O, "length")).
  var len = new Array(O.length).length;

  // If count is not present, let relativeCount be 1
  var relativeCount = arguments.length === 0 ? 1 : new Number(count);

  // Else, let relativeCount be ? ToLength(len).
  if (Number.isNaN(relativeCount) || relativeCount <= 0) {
    relativeCount = 0;
  } else {
    relativeCount = Math.floor(relativeCount);
  }

  // If len is 0, return ? ArraySpeciesCreate(O, 0).
  if (len === 0) {
    return [].slice.call(O, 0, 0);
  }

  // Let A be ? ArraySpeciesCreate(O, relativeCount).
  var A = [].slice.call(O, 0, relativeCount);

  // Let k be 0
  var k = 0;

  // Repeat, while k < relativeCount
  while ( k < relativeCount ) {

    // Let Pk be ! ToString(k).
    let Pk = k.toString();

    // Let random be a random number from 0 to len - 1.
    let random = Math.floor(Math.random()*len);

    // Let sample be a ! ToString(random).
    let sample = random + "";

    // Let kPresent be ? HasProperty(O, sample).
    let kPresent = sample in O;

    // If kPresent is true, then
    if ( kPresent ) {

      // Let kValue be ? Get(O, sample).
      let kValue = O[sample];

      // Perform ? CreateDataPropertyOrThrow(A, Pk, kValue).
      A[Pk] = kValue;
    }

    // Increase k by 1
    k += 1;
  }

  // Return A
  return A;
};
