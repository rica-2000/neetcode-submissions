class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let n: number = 0;
        let longest: number = 0;
        for(const num of nums)
        {
            if(num === 1)
                n++;
            else
                n=0;
            if(longest < n)
                longest = n;
        }
        return longest;
    }
}
