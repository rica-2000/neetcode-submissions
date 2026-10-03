class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a, b) => a - b);
        let anchor = nums[0];
        let triplets: number[][] = [];
        let left: number, right: number;
        for(let i = 0; i < nums.length; i++)
        {
            if(nums[i] > 0)
                break;
            left = i + 1;
            right = nums.length - 1
            if(nums[i] !== nums[i-1] || i === 0)
            { 
                while(left < right)
                {
                    const suma = nums[left] + nums[right] + nums[i];
                    if(suma === 0)
                    {
                        triplets.push([nums[i], nums[left], nums[right]]);
                        left++;
                        right--;
                        while(nums[left] === nums[left - 1])
                            left++;
                        while(nums[right] === nums[right + 1])
                            right++;
                    }
                    else if(suma < 0)
                        left++;
                    else
                        right--;   
                }
            }
        }
        return triplets;
    }
}
