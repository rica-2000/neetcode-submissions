class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let arr = s.split(" ");
        let i: number = arr.length - 1;
        while(arr[i] === "" || arr[i] === " ")
            i--;
        return arr[i].length;
    }
} 

