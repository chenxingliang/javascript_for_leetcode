/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map = {}
  const tMap = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]] && !tMap[t[i]]) {
      map[s[i]] = t[i];
      tMap[t[i]] = true;
    } else if (map[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end

