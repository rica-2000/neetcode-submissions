class Solution {
    productExceptSelf(nums: number[]): number[] {
        const out: Array<number> = new Array(nums.length);
        let suf = 1, pref=1;
        for(let i = 0; i < nums.length; i++)
        {
            out[i] = pref;
            pref *= nums[i];
        }
        for(let i = nums.length - 1; i >= 0 ; i--)
        {
            out[i] *= suf;
            suf *= nums[i];
        }
        return out;
    }
}
