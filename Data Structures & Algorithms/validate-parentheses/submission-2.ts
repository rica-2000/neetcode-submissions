class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 !== 0)
            return false;
        let stack: Array<string> = [];
        const pair: Record<string, string> = {
            '{': '}',
            '[': ']',
            '(': ')'
        };
        for(const c of s)
        {
            if (c in pair) {
                stack.push(pair[c]);
            } 
            else if (stack.pop() !== c) {
                return false;
            }
        }
        return stack.length === 0;
    }
}
