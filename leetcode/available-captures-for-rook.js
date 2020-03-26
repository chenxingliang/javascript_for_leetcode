/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let rLen = 8,
        cLen = 8,
        count = 0;

    function check(r, c, direction) {
        if (0 <= r && r < rLen && 0 <= c && c < cLen && board[r][c] != 'B') {
            if (board[r][c] === 'B') {
                return;
            } else if (board[r][c] === 'p') {
                count++;
                return;
            } else if (direction === 'right') {
                check(r, c + 1, 'right');
            } else if (direction === 'left') {
                check(r, c - 1, 'left');
            } else if (direction === 'up') {
                check(r - 1, c, 'up');
            } else if (direction === 'down') {
                check(r + 1, c, 'down');
            }
        }
    }

    for (let r = 0; r < rLen; r++) {
        for (let c = 0; c < cLen; c++) {
            let chessman = board[r][c];
            if (chessman === 'R') {
                check(r, c + 1, 'right');
                check(r, c - 1, 'left');
                check(r - 1, c, 'up');
                check(r + 1, c, 'down');
            }
        }
    }

    return count;
};

let test = numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."], 
    [".", ".", ".", "p", ".", ".", ".", "."], 
    [".", ".", ".", "R", ".", ".", ".", "p"], 
    [".", ".", ".", ".", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", ".", ".", "."], 
    [".", ".", ".", "p", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", ".", ".", "."]
]);

console.log(test);