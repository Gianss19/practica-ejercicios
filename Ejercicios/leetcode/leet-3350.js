/*
Given an array nums of n integers, your task is to find the maximum value of k for which there exist two adjacent subarrays of length k each, such that both subarrays are strictly increasing. 
Specifically, check if there are two subarrays of length k starting at indices a and b (a < b), where:
Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
The subarrays must be adjacent, meaning b = a + k.
Return the maximum possible value of k.
A subarray is a contiguous non-empty sequence of elements within an array.

Input: nums = [2,5,7,8,9,2,3,4,3,1]

Output: 3
[1,2,3,4,4,4,4,5,6,7]

*/

    /**
    * @param {number[]} nums
    * @return {number}
    */
function maxLengthOfAdjacentIncreasing(nums) {
    const n = nums.length;
    const inc = new Array(n).fill(1);

    // 1️⃣ Calculamos inc[i]: longitud de la racha creciente que termina en i
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            inc[i] = inc[i - 1] + 1;
        }
    }

    // 2️⃣ Función que verifica si existe k dado
    function canFind(k) {
        for (let i = 0; i + 2 * k - 1 < n; i++) {
            // subarray 1 termina en i+k-1, subarray 2 termina en i+2*k-1
            if (inc[i + k - 1] >= k && inc[i + 2 * k - 1] >= k) {
                return true;
            }
        }
        return false;
    }

    // 3️⃣ Búsqueda binaria para encontrar máximo k
    let left = 1, right = Math.floor(n / 2), ans = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canFind(mid)) {
            ans = mid;       // k válido
            left = mid + 1;  // probamos más grande
        } else {
            right = mid - 1; // probamos más pequeño
        }
    }

    return ans;
}

// Ejemplo
console.log(maxLengthOfAdjacentIncreasing([2,5,7,8,9,2,3,4,3,1])); // 3
console.log(maxLengthOfAdjacentIncreasing([1,2,3,4,4,4,4,5,6,7])); // 2