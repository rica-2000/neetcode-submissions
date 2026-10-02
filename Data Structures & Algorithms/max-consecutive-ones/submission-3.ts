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
            n = num === 1 ? n + 1 : 0;
            longest = Math.max(longest, n)
        }
        return longest;
    }
}
