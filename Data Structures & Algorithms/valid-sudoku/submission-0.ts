class Solution {
    isValidSudoku(board: string[][]): boolean {
        const sudokuRows: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
        const sudokuColumns: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
        const sudokuBoxes: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
        for(let i = 0; i < 9; i++)
        {
            const boxRow: number = Math.trunc(i/3);
            for(let j = 0; j < 9; j++)
                {
                    const boxColumn = Math.trunc(j/3)
                    if(board[i][j] !== ".")
                    {
                        if(sudokuRows[i].has(board[i][j]))
                            return false;
                        if(sudokuColumns[j].has(board[i][j]))
                            return false;
                        if(sudokuBoxes[boxRow * 3 + boxColumn].has(board[i][j]))
                            return false;
                        sudokuRows[i].add(board[i][j]);
                        sudokuColumns[j].add(board[i][j]);
                        sudokuBoxes[boxRow + boxColumn].add(board[i][j]);
                    }
                }
        }
        return true;
    }
}
