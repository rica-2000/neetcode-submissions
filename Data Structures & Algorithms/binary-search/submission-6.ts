class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right)
        {
            const middle = left + Math.floor((right - left) / 2);
            const midValue = nums[middle];
            if(midValue === target)
                return middle;
            else if(midValue < target)
                left = middle + 1;
            else
                right = middle - 1;
        }
        return -1;
    }
}
