function positiveSum(arr) {
  return arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
}

module.exports = positiveSum;
