class Solution {
    isAnagram(s: string, t: string): boolean {
        const n = s.length;
        if(n !== t.length)
            return false;
        const map = new Map<string, number>();
        for(const c of s)
        {
            map.set(c , (map.get(c) ?? 0) + 1);  
        }
        for(const c of t)
        {
            const cont = map.get(c);
            if(!cont)
                return false;
            map.set(c, cont - 1);
        }
        return true;
    }
}
