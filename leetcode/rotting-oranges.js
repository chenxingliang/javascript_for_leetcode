/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    let rLen = grid.length;
    let cLen = grid[0].length;
    let newFresh = 0;
    let minutes = 0;

    for (let r = 0; r < rLen; r++) {
        for (let c = 0; c < cLen; c++) {
            if (grid[r][c] == 2) {
                queue.push([r, c]);
            }
            if (grid[r][c] == 1) {
                newFresh++;
            }
        }
    }

    let newQueue = [];

    function influence(r, c) {
        if (0 <= r && r < rLen && 0 <= c && c < cLen && grid[r][c] == 1) {
            newQueue.push([r, c]);
            grid[r][c] = 2;
            newFresh--;
        }
    }

    while (queue.length > 0 && newFresh) {
        while (queue.length > 0) {
            let [r, c] = queue.shift();
            influence(r + 1, c);
            influence(r - 1, c);
            influence(r, c + 1);
            influence(r, c - 1);
        }
        minutes++;
        queue = newQueue;
        newQueue = [];
    }

    if (newFresh != 0) {
        return -1;
    }

    return minutes;
};

let test = orangesRotting(
    [
        [2,1,1],
        [1,1,0],
        [0,1,1]
    ]
);

console.log(test);