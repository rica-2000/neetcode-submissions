class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length;
        let half = ((right + left) / 2) | 0;
        while(left <= right)
        {
            if(nums[half] == target)
                return half;
            else if(nums[half] < target)
                left = half + 1;
            else
                right = half - 1;
            half = ((right + left) / 2) | 0;
        }
        return -1;
    }
}
