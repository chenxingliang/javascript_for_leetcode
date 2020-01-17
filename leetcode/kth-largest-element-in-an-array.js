/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let stack = new MaxStack(k);

    for (let num of nums) {
        stack.add(num);
    }

    return stack.top();
};

class MaxStack {
    constructor (size) {
        this.size = size;
        this.stack = [];
    }

    add (num) {
        this.stack.unshift(num);
        this.adjust();
    }

    adjust () {
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i] && this.stack[i + 1] && this.stack[i] > this.stack[i + 1]) {
                [this.stack[i], this.stack[i + 1]] = [this.stack[i + 1], this.stack[i]];
            }
        }
    }

    top () {
        console.log(this.stack)
        return this.stack[0];
    }
}

findKthLargest([3, 2, 1, 5, 6, 4], 2)