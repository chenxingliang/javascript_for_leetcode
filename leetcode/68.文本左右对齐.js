/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let text = [];
  let line = [];
  let stringLenght = 0;
  for (let i = 0; i < words.length; i++) {
    if (stringLenght + words[i].length + 1 <= maxWidth + 1) {
      line.push(words[i]);
      stringLenght += (words[i].length + 1);
    } else {
      i--;
      let placeholderSumLength = maxWidth - (stringLenght - line.length);
      let placeholderCount = line.length - 1 < 1 ? 1 : line.length - 1; 
      let placeholderBaseLenght = Math.floor(placeholderSumLength / placeholderCount);
      let placeholderSurplusLength = placeholderSumLength % placeholderCount;
      let str = '';
      let placeholder = new Array(placeholderBaseLenght + 1).join(' ');
      if (line.length === 1) {
        str += `${ line[0] }${ placeholder }`;
      } else {
        for (let i = 0; i < line.length; i++) {
          str += `${ line[i] }${ placeholder }${ i < placeholderSurplusLength ? ' ' : '' }`;
        }
        str = str.trim();
      }
      text.push(str);
      line = [];
      stringLenght = 0;
    }
  }
  if (line.length > 0) {
    let str = line.join(' ');
    if (str.length < maxWidth) {
      str +=  new Array(maxWidth - str.length + 1).join(' ');
    }
    text.push(str);
  }
  return text;
};
// @lc code=end

// let words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
// let words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
let maxWidth = 20;
console.log(fullJustify(words, maxWidth));