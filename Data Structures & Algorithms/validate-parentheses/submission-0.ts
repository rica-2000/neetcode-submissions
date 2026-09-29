class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 !== 0)
            return false;
        let stack: Array<string> = [];

        for(let i = 0; i < s.length; i++ )
        {
            switch(s[i])
            {
                case "{":
                    stack.push("}");
                    break;
                case "[":
                    stack.push("]");
                    break;
                case "(":
                    stack.push(")");
                    break;
                case "}":
                    if(stack.pop() != "}")
                        return false;
                    break;
                case "]":
                    if(stack.pop() != "]")
                        return false;
                    break;
                case ")":
                    if(stack.pop() != ")")
                        return false;
                    break;
                default:
                    return false;
            }
        }
        if(stack.length === 0)
           return true;
        return false;
    }
}
