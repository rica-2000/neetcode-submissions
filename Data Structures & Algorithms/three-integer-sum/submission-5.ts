class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        let anchor = nums[0];
        let triplets: number[][] = [];
        let left: number, right: number;
        for(let i = 0; i < nums.length - 2; i++)
        {
            const current = nums[i];
            if(current > 0)
                break;
            left = i + 1;
            right = nums.length - 1
            if (i > 0 && current === nums[i - 1]) continue;
            while(left < right)
            {
                const leftVal = nums[left];
                const rightVal = nums[right];
                const suma = leftVal + rightVal + current;
                if(suma === 0)
                {
                    triplets.push([current, leftVal, rightVal]);
                    left++;
                    right--;
                    while(leftVal === nums[left]) left++;
                    while(rightVal === nums[right]) right++;
                }
                else if(suma < 0)
                    left++;
                else
                    right--;   
            }
        }
        return triplets;
    }
}
