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
            const middle = (left + right)/2 | 0;
            const leftVal = nums[left];
            const middleVal = nums[middle];
            const rightVal = nums[right];
            if(middleVal === target)
                return middle;
            else if(leftVal <= middleVal)
            {
                if (target < middleVal && leftVal <= target)
                    right = middle - 1;
                else
                    left = middle + 1;
            }
            else 
            {
                if(target <= rightVal && middleVal < target)
                    left = middle + 1;
                else
                    right = middle -1;
            }
        }
        return -1;
    }
}
