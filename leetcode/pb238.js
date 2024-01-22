var moveZeroes = function(nums) {
    nums.forEach((num, index) => {
        if (num === 0) {
            nums.slice(index,1);
            nums.push(0);
        }
    })
};