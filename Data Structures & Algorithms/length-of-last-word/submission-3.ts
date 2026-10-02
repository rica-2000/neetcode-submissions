class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let i: number = s.length - 1;
        let k: number;
        while(s[i] === " " && i > 0)
            i--;
        k = i;
        while(s[i] !== " " && i >= 0)
            i--;
        return k-i;
    }
}
