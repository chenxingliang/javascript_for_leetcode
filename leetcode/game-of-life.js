/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let dx = [-1, 0, 1, -1, 1, -1, 0, 1],
        dy = [-1, -1, -1, 0, 0, 1, 1, 1],
        rLen = board.length,
        cLen = board[0].length;

    function checkCell(r, c) {
        if (0 <= r && r < rLen && 0 <= c && c < cLen && Math.abs(board[r][c]) == 1) {
            return 1;
        }

        return 0;
    }
    
    for (let r = 0; r < rLen; r++) {
        for (let c = 0; c < cLen; c++) {
            let liveCells = 0;
            for (let i = 0; i < 8; i++) {
                liveCells += checkCell(r + dy[i], c + dx[i]);
            }
            if (board[r][c] == 1 && (liveCells < 2 || liveCells > 3)) {
                board[r][c] = -1;
            }
            if (board[r][c] == 0 && liveCells == 3) {
                board[r][c] = 2;
            }
        }
    }

    for (let r = 0; r < rLen; r++) {
        for (let c = 0; c < cLen; c++) {
            if (board[r][c] > 0) {
                board[r][c] = 1;
            } else {
                board[r][c] = 0;
            }
        }
    }
};

let test = gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);