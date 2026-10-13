class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        k = k % nums.length;
        let left = 0;
        let size = nums.length - 1;
        let right = size;
        while (left < right)
        {
            const aux = nums[left];
            nums[left] = nums [right];
            nums[right] = aux;
            left++;
            right--;
        }
        left = 0;
        right = k - 1;
        while( left < right)
        {
            const aux = nums[left];
            nums[left] = nums [right];
            nums[right] = aux;
            left++;
            right--;
        }
        left = k;
        right = size;
        while( left < right)
        {
            const aux = nums[left];
            nums[left] = nums [right];
            nums[right] = aux;
            left++;
            right--;
        }
    }
}
