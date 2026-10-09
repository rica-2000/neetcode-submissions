class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {
        if(x < 2) return x;
        let left = 1;
        let right = x;
        while(left <= right)
        {
            const middle = (left + right) >>> 1;
            if(middle > x/middle)
            {
                right = middle - 1;
            }
            else
            {
                left = middle + 1;
            }
        }
        return right;
    }
}
