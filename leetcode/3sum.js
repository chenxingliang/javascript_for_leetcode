var threeSum = function (nums) {
    let res = [],
        len = nums.length,
        first,
        last,
        temp;
    
    nums.sort((a, b) => a - b);

    if (nums[0] <= 0 && nums[len - 1] >= 0) {
        for (let i = 0; i < len - 2;) {
            if (nums[i] > 0) {
                break;
            }

            first = i + 1;
            last = len - 1;

            do {
                if (first >= last || nums[i] * nums[last] > 0) {
                    break;
                }

                temp = nums[i] + nums[first] + nums[last];

                if (temp === 0) {
                    res.push([nums[i], nums[first], nums[last]]);
                }

                if (temp <= 0) {
                    while(first < last && nums[first] === nums[++first]) {}
                } else {
                    while (first < last && nums[last] === nums[--last]) {}
                }
            } while (first < last)

            while (nums[i] === nums[++i]) {}
        }
    }
    
    return res;
}

console.log(threeSum([-2,-1,-1,-1,0,1,2,3,-3,5,-4]))