type Operator = "+" | "-" | "*" | "/";
const OPERATIONS: Record<Operator, (b: number, a: number) => number> = {
  "+": (b, a) => b + a,
  "-": (b, a) => b - a,
  "*": (b, a) => b * a,
  "/": (b, a) => (b / a) | 0,
};

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: Array<number> = [];
        for(const token of tokens)
        {
            if(token in OPERATIONS)
            {
                const a = stack.pop()!;
                const b = stack.pop()!;
                const op = OPERATIONS[token as Operator]
                stack.push(op(b, a));
            }
            else
                stack.push(Number(token));
        }
        return stack[0];
    }
}
