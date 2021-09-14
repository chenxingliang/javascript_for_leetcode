/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let start = 0;
  let end = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (end !== 0) {
      if (s[i] === ' ') {
        start = i + 1;
        break;
      }
    } else {
      if (s[i] !== ' ') {
        end = i;
      }
    }
  }
  return end - start + 1;
};
// @lc code=end
// const s = "Hello World";
// const s = "   fly me   to   the moon  ";
const s = "luffy is still joyboy";
const res = lengthOfLastWord(s);
console.log(res);
