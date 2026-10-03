class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        let score: number = 0;
        let prevCode = s.charCodeAt(0);
        for(let i = 1; i < s.length; i++)
        {
            const currentCode = s.charCodeAt(i);
            score += Math.abs(prevCode - currentCode);
            prevCode = currentCode;
        }
        return score;
    }
}
