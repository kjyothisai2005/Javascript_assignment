//question-2
function findLongestPalindrome(str) {
    if (str.length === 0) 
        return "";
    let start = 0;
    let maxlen = 1;
    for (let i = 0; i < str.length; i++) {
        let lft = i;
        let rgt = i;
        while (lft >= 0 && rgt < str.length && str[lft] === str[rgt]) {
            if ((rgt - lft + 1) > maxlen) {
                start = lft;
                maxlen = rgt - lft + 1;
            }
            console.log(str[lft],str[rgt]);
            lft--;
            rgt++;
        }
        lft = i;
        rgt = i + 1;
        while (lft >= 0 && rgt < str.length && str[lft] === str[rgt]) {
            if ((rgt - lft + 1) > maxlen) {
                start = lft;
                maxlen = rgt - lft + 1;
            }
            console.log(str[lft],str[rgt]);
            lft--;
            rgt++;
        }
    }
    let result = "";
    for (let i = start; i < start + maxlen; i++) {
        result += str[i];
    }

    return result;
}
console.log(findLongestPalindrome('abba'));