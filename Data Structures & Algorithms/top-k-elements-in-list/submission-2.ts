class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        const out: Array<number> = [];
        for(const n of nums)
            map.set(n, (map.get(n) ?? 0) + 1);
        for (const [clave, valor] of map)
            bucket[valor].push(clave);
        for (let i = nums.length; i > 0; i--)
            for (const num of bucket[i])
            {
                out.push(num);           
                if (out.length === k)
                    return out;
            }
        return out;
    }
}
