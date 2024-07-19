/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const stats = {};
  const result = [];
  const sortArr = [];

  for (let el of nums) {
    if (!stats[el]) {
      stats[el] = 1;
    } else {
      stats[el] += 1;
    }
  }

  for (let val in stats) {
    sortArr.push([Number(val), stats[val]]);
  }

  sortArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sortArr[i][0]);
  }

  return result;
};

console.log(topKFrequent([1, 2], 2));
