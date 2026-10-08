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
            const middle = left + ((right - left) >> 1);
            const middleVal = nums[middle];
            if(middleVal === target)
                return middle;
            if(nums[left] <= middleVal)
            {
                if (nums[left] <= target && target < middleVal)
                    right = middle - 1;
                else
                    left = middle + 1;
            }
            else 
            {
                if(middleVal < target && target <= nums[right])
                    left = middle + 1;
                else
                    right = middle - 1;
            }
        }
        return -1;
    }
}
