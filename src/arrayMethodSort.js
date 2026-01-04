'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function bubblePass(arr, compareFunction) {
    let quantityOfSwaps = 0;

    for (let i = 0, j = 1; j < arr.length; i++, j++) {
      const firstValue = arr[i];
      const secondValue = arr[j];
      const compareValue = compareFunction(firstValue, secondValue);

      if (compareValue > 0) {
        arr[i] = secondValue;
        arr[j] = firstValue;
        quantityOfSwaps += 1;
      }
    }

    return quantityOfSwaps;
  }

  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      function (a, b) {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr > bStr) {
          return 1;
        }

        if (aStr < bStr) {
          return -1;
        }

        return 0;
      };

    let quantityOfSwaps = 0;

    do {
      quantityOfSwaps = bubblePass(this, compare);
    } while (quantityOfSwaps > 0);

    return this;
  };

  [].__proto__.sort = function (compareFunction) {
    return this.sort2(compareFunction);
  };
}

module.exports = applyCustomSort;
