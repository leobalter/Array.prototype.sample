# Array.prototype.sample()

The following steps are taken:

1. Let O be ? ToObject(this value).
1. Let len be ? ToLength(? Get(O, "length")).
1. If count is not present, let relativeCount be 1
1. Else, let relativeCount be ? ToLength(len).
1. If len is 0, return ? ArraySpeciesCreate(O, 0).
1. Let A be ? ArraySpeciesCreate(O, relativeCount).
1. Let k be 0
1. Repeat, while k < relativeCount
  1. Let Pk be ! ToString(k).
  1. Let random be a random number from 0 to len - 1.
  1. Let sample be a ! ToString(random).
  1. Let kPresent be ? HasProperty(O, sample).
  1. If kPresent is true, then
    1. Let kValue be ? Get(O, sample).
    1. Perform ? CreateDataPropertyOrThrow(A, Pk, kValue).
  1. Increase k by 1
1. Return A
