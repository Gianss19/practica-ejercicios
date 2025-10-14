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

    for (let index = 0; index < nums.length; index++) {
        if(map.has(target - nums[index])) return [map.get(target-nums[index]), index];
        else map.set(nums[index], index);
    }
    


}
twoSum([2,7,11,15], 9)
