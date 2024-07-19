class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  counter = {};
  encode(strs) {
    let encodeStr = "";
    let i = 0;
    for (let word of strs) {
      this.counter[i] = word.length;
      i++;
    }
    encodeStr = strs.join("");
    return encodeStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const decodeStr = [];
    const encodeStr = str.split("");
    for (let count in this.counter) {
      decodeStr.push(encodeStr.splice(0, this.counter[count]).join(""));
    }
    return decodeStr;
  }
}

const solution = new Solution();
const arr = ["hello", "world", "hello"];
console.log(solution.encode(arr));
console.log(solution.decode(solution.encode(arr)));
