class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let prefix = ""; 
        const base = strs[0];
        for(let i = 0; i < base.length; i++)
        {
            const char = base[i];
            let j = 0
            while(j < strs.length)
            {
                if(strs[j][i] != char)
                    return prefix;
                j++
            }
            prefix += char;
        }
        return prefix;
    }
}
