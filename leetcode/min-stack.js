/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.min = null;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (this.min === null) {
        this.min = x;
    } else {
        this.min = this.min <= x ? this.min : x;
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let res = this.stack.pop();
    if (res == this.min) {
        let len = this.stack.length;
        if (len > 0) {
            let min = this.stack[0];
            for (let i = 1; i < len; i++) {
                min = min < this.stack[i] ? min : this.stack[i];
            }
            this.min = min;
        } else {
            this.min = null;
        }
        
    }
    return res;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */