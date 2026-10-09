class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;
        let middle = left + ((right - left) >> 1);
        while(left < right)
        {
            const middleVal = nums[middle];
            if(middleVal > nums[right] )
            {
                left = middle + 1;
            }
            else
            {
                right = middle;
            }
            middle = left + ((right - left) >> 1);
        }
        return nums[middle];
    }
}
