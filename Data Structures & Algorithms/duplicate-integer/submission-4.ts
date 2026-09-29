class Solution {
    hasDuplicate(nums: number[]): boolean {
        const set: Set<number> = new Set();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (set.has(num)) return true;
                set.add(num);
        }
        return false;
    }
}
