class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left: number = 0;
        let right: number = height.length - 1;
        let leftMax: number = height[0];
        let rightMax: number = height[right];
        let amountWater: number = 0;
        while(left < right)
        {
            if(leftMax < rightMax)
            {
                amountWater += leftMax - height[left];
                left++;
                leftMax = Math.max(leftMax, height[left]);
            }
            else
            {
                amountWater += rightMax - height[right];
                right--;
                rightMax = Math.max(rightMax, height[right]);

            }  
        }
        return amountWater;
    }
}
