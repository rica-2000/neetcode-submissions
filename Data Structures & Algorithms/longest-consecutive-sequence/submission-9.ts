class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;
        const numSet = new Set<number>(nums);
        let longest: number = 0;
        
        for (const num of numSet)
        {
            if (!numSet.has(num - 1))
            {
                let currentNum = num;
                let currentStreak = 1;
                while (numSet.has(currentNum + 1))
                {
                    currentNum++;
                    currentStreak++;
                }
                longest = Math.max(longest, currentStreak);
            }
        }
        return longest;
    }
}
