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
        if (this.stack.length > this.size && this.stack[0] >= num) {
            return;
        } else {
            this.stack.unshift(num);
            this.adjust();
        }
    }

    adjust() {
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i] != null && this.stack[i + 1] != null && this.stack[i] > this.stack[i + 1]) {
                [this.stack[i], this.stack[i + 1]] = [this.stack[i + 1], this.stack[i]];
            }
        }
        if (this.stack.length > this.size) {
            this.stack.shift();
        }
    }

    top () {
        return this.stack[0];
    }
}

findKthLargest([-1, 2, 0], 2)