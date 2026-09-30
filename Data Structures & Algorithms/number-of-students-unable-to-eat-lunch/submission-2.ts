class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const type: [number, number] = [0, 0];
        for (const pref of students) {
            type[pref]++;
        }
        for (const sandwich of sandwiches)
        {
            if (type[sandwich] === 0)
                break;
            type[sandwich]--;
        }
        return type[0] + type[1];
    }
}
