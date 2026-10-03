class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let maximum = 0;
        while(left < right)
        {
            const leftVal = heights[left];
            const rightVal = heights[right];
            const area = (right - left) * Math.min(leftVal, rightVal);
            maximum = Math.max(maximum, area);
            if(leftVal < rightVal)
                left++;
            else
                right--;
        }
        return maximum;
    }
}
