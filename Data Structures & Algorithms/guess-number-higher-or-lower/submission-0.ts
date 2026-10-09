/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let left = 1;
        let right = n;
        while(left < right)
        {
            const num = (left + right) >>> 1;
            const attempt = guess(num);
            if(attempt === 0)
                return num;
            if(attempt === 1)
                left = num + 1;
            else
                right = num - 1;
        }
        return left;
    }
}
