class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        let score: number = 0;
        for(let i = 0; i < s.length - 1; i++)
            score += Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0));
        return score;
    }
}
