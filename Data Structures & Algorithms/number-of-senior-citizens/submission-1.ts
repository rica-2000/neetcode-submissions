class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        return details.reduce((count, passenger) => {
            const edad = +passenger.substring(11, 13);
            return edad > 60 ? count + 1 : count;
        }, 0);
    }
}
