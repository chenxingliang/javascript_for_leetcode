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
        if (this.stack.length == 0) {
            this.stack.unshift(num);
        } else {
            for (let i = 0; i < this.stack.length; i++) {
                if (num >= this.stack[i]) {
                    [num, this.stack[i]] = [this.stack[i], num];
                }
            }
            this.stack.push(num);
        }
        this.adjust();
    }

    adjust () {
        if (this.stack.length > this.size) {
            this.stack.shift();
        }
    }

    top () {
        console.log(this.stack)
        return this.stack[0];
    }
}

findKthLargest([3, 2, 1, 5, 6, 4], 2)