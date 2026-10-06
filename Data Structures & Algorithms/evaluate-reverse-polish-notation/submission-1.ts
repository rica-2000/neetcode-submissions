class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens: string[]): number {
        let stack: Array<number> = [];
        const OPERATORS = new Set(["+", "-", "*", "/"]);
        for(const token of tokens)
        {
            if(OPERATORS.has(token))
            {
                const a = stack.pop()!;
                const b = stack.pop()!;
                switch(token)
                {
                    case "+":
                        stack.push(b + a);
                        break;
                    case "-":
                        stack.push(b - a);
                        break;
                    case "*":
                        stack.push(b * a);
                        break;
                    case "/":
                        stack.push((b / a) | 0);
                        break;
                    default:    
                }
            }
            else
                stack.push(Number(token));
        }
        return stack[0];
    }
}
