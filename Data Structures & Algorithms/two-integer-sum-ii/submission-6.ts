class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length - 1;
        while(left < right)
        {
            const rightVal = numbers[right];
            const leftVal = numbers[left];
            const suma = leftVal + rightVal
            if(suma === target)
                return [left + 1, right + 1]
            if(left < right && suma < target)
                left++;
            if(left < right && suma > target)
                right--;
        }
    }
}
