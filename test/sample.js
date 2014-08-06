// Copyright (C) 2014 Tyler Kellen & Ashley G. Williams. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.sample should return a pseudo-random element from an array.
author: Tyler Kellen & Ashley G. Williams
---*/

var emptyArray = [];
var result = Array.prototype.sample.call(emptyArray);

if (result !== undefined) {
  $ERROR('Expected sample on empty array to return undefined');
}
