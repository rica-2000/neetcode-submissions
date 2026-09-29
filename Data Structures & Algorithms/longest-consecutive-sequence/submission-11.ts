class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length === 0) return 0;
        let set = new Set<number>(nums);
        let longest: number = 0;
        for(const num of set)
        {
            if(!set.has(num-1))
            {
                let current = num;
                let sequence = 1;
                while(set.has(current+1))
                {
                    current++;
                    sequence++;
                }
                longest = Math.max(longest, sequence);
            }
        }
        return longest;
    }
}
