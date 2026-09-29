class Solution {
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();
        for(let i = 0; i < nums.length; i++)
        {
            const current = nums[i];
            const complement = target - current
            const complementId =  map.get(complement);
            if(complementId !== undefined)
            {
                return [complementId, i];
            }
            map.set(current, i);
        }
        return [];
    }
}
