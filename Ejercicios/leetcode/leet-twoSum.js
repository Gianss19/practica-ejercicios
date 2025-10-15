/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    //nums = [2,7,11,15]
    //target = 9

    //nums = [3, 1, 5, 7, 5]
    //target = 10

function twoSum(nums, target) {
        const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i]))
             return [map.get(target-nums[i]), i];
        map.set(nums[i], i);
    }
    


}
twoSum([3, 1, 5, 7, 5], 10)
