class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: readonly number[]): number {
        if (height.length < 3) return 0;
        let left = 0;
        let right = height.length - 1;
        let leftMax = height[0];
        let rightMax = height[right];
        let amountWater = 0;
        while(left < right)
        {
            if(leftMax < rightMax)
            {
                left++;
                if (height[left] > leftMax)
                    leftMax = height[left];
                else
                    amountWater += leftMax - height[left];
            }
            else
            {
                right--;
                if (height[right] > rightMax)
                    rightMax = height[right];
                else
                    amountWater += rightMax - height[right];
                
            }  
        }
        return amountWater;
    }
}
