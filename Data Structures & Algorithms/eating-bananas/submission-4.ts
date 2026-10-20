class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = 0;
        for (const pile of piles)
            if (pile > right)
                right = pile;
        const canFinish = (speed: number): boolean => {
            let hoursSpent = 0;
            for (const pile of piles) {
                hoursSpent += Math.ceil(pile / speed);
                if (hoursSpent > h) 
                    return false;
            }
            return true;
        };
        
        while (left <= right)
        {
            const mid = left + ((right - left) >> 1);
            if (canFinish(mid))
                right = mid - 1;
            else 
                left = mid + 1;
        }
        return left;
    }
}
