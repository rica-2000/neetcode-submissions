class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {
        if(x === 0) return 0;
        let left = 0;
        let right = x;
        while(left <= right)
        {
            const middle = (left + right) >>> 1;
            if(middle === x/middle)
                return middle;
            if(middle * middle > x)
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
