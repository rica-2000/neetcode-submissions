class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let i: number = s.length - 1;
        let end: number;
        while(s[i] === " " && i >= 0)
            i--;
        end = i;
        while(s[i] !== " " && i >= 0)
            i--;
        return end-i;
    }
}
