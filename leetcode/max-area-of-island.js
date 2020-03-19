/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (grid.length === 0) {
        return 0;
    }

    let rLen = grid.length,
        cLen = grid[0].length,
        res = 0,
        cur = 0;

    function getArea(r, c) {
        let area = 0;
        if (0 <= r && r < rLen && 0 <= c && c < cLen && grid[r][c] !== 0) {
            grid[r][c] = 0;
            area += getArea(r - 1, c);
            area += getArea(r + 1, c);
            area += getArea(r, c - 1);
            area += getArea(r, c + 1);
            area += 1;
        }
        return area;
    }

    function checkArea (r, c) {
        cur = getArea(r, c);
        if (cur > res) {
            res = cur;
        }
        cur = 0;
    }
    
    for (let r = 0; r < rLen; r++) {
        for(let c = 0; c < cLen; c++) {
            checkArea(r, c);
        }
    }

    return res;
};

let test = maxAreaOfIsland([
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
]);

console.log(test);