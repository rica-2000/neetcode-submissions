class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let strs: string[] = [];
        let i: number = 0; 
        while(i < str.length)
        {
            const j = str.indexOf('#', i);
            const length = Number(str.substring(i, j));
            const start = j + 1;
            const end = start + length;
            strs.push(str.substring(start, end));
            i = end
        }
        return strs;
    }
}
