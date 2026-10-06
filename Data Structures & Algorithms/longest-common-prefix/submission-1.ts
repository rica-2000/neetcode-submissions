class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length === 0) return "";
        let base = strs[0]; 
        for(let i = 0; i < base.length; i++)
        {
            const char = base[i];
            let j = 0
            for(let j = 1; j < strs.length; j++)
            {
                if(strs[j][i] != char)
                    return base.slice(0,i);
            }
        }
        return base;
    }
}
