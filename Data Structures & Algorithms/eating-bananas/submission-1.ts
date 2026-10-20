class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const size: number = piles.length;
        let left = 1;
        let right = 0;
        for (const pile of piles)
            if (pile > right)
                right = pile;
        while(left <= right)
        {
            const mid: number = left + ((right - left) >> 1);
            let k = 0;
            for (const pile of piles)
            {
                k += Math.ceil(pile / mid);
                if (k > h)
                    break;
            }
            if(k <= h)
                right = mid - 1;
            else
                left = mid + 1;
        }
        return left;
    }
}
