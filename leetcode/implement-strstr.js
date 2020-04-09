/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let hLen = haystack.length,
        nLen = needle.length;

    if (nLen == 0) {
        return 0;
    }

    if (hLen < nLen) {
        return -1;
    }

    let haystackPointer = 0,
        needlePointer = 0;
    
    while (haystackPointer < hLen && needlePointer < nLen) {
        if (haystack[haystackPointer] == needle[needlePointer]) {
            if (needlePointer == nLen - 1) {
                return haystackPointer - needlePointer;
            }
            haystackPointer++;
            needlePointer++;
        } else {
            haystackPointer = haystackPointer - needlePointer + 1;
            needlePointer = 0;
        }
    }

    return -1;
};

let test = strStr("mississippi","issip");
console.log(test);