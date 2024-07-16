/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = {};
  for (let str of strs) {
    const count = Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join("#");
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(str);
  }
  return Object.values(result);
};
