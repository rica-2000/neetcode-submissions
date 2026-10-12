class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        for ( let i = 0; i < k; i++)
        {
            const ultimo = nums.pop();
            if (ultimo !== undefined) nums.unshift(ultimo);
        }
    }
}
