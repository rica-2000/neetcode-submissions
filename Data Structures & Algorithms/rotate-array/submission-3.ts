class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        const n = nums.length;
        k %= n;
        if (k === 0 || n <= 1) return;
        const reverse = (left: number, right: number): void => {
            while (left < right)
            {
                const aux = nums[left];
                nums[left++] = nums[right];
                nums[right--] = aux;
            }
        };
        reverse(0, n - 1);
        reverse(0, k - 1);
        reverse(k, n - 1);
    }
}
