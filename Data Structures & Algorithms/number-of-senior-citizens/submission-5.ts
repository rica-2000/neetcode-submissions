class Solution {
     /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let seniors = 0;
        
        for (const passenger of details)
        {
            const tens = passenger.charCodeAt(11) - 48;
            const ones = passenger.charCodeAt(12) - 48;
            const age = tens * 10 + ones;
            if (age > 60)
                seniors++;
        }
        return seniors;
    }
}