class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): [number, number] {
        let left = 0;
        let right = numbers.length - 1;
        while(left < right)
        {
            const leftVal = numbers[left];
            const rightVal = numbers[right];
            const suma = leftVal + rightVal
            if (suma === target)
                return [left + 1, right + 1];
            else if (suma < target)
                left++;
            else
                right--;
        }
        return[-1, -1];
    }
}
