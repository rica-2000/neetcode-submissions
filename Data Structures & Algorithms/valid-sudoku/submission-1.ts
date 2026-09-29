class Solution {
    isValidSudoku(board: string[][]): boolean {
        const row = Array.from({ length: 9 }, () => new Set<string>());
        const column = Array.from({ length: 9 }, () => new Set<string>());
        const box = Array.from({ length: 9 }, () => new Set<string>());
        for(let i = 0; i < 9; i++)
        {
            const boxRow: number = Math.trunc(i/3);
            for(let j = 0; j < 9; j++)
            {
                const boxColumn = Math.trunc(j/3)
                const current = board[i][j];
                if(current !== ".")
                {
                    if(row[i].has(current))
                        return false;
                    if(column[j].has(current))
                        return false;
                    if(box[boxRow * 3 + boxColumn].has(current))
                        return false;
                    row[i].add(current);
                    column[j].add(current);
                    box[boxRow * 3+ boxColumn].add(current);
                }
            }
        }
        return true;
    }
}
