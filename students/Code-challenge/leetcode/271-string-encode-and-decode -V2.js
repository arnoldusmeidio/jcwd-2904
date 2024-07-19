class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodeStr = "";
    for (let word of strs) {
      encodeStr += `${word.length}#${word}`;
    }
    return encodeStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const result = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      result.push(str.substring(i, j));
      i = j;
    }
    return result;
  }
}

const solution = new Solution();
const arr = ["hello", "world", "hello"];
console.log(solution.encode(arr));
console.log(solution.decode(solution.encode(arr)));
