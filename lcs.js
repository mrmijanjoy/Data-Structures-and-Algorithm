let longestCommonSubstring = (strs) => {
    if (strs.length === 0) return '';

    // Function to find all common substrings in all strings
    let findCommonSubstrings = () => {
        let commonSubstrings = new Set();
        let firstStr = strs[0];

        for (let i = 0; i < firstStr.length; i++) {
            for (let len = 1; len <= firstStr.length - i; len++) {
                let substring = firstStr.substr(i, len);
                let isCommon = true;

                for (let j = 1; j < strs.length; j++) {
                    if (!strs[j].includes(substring)) {
                        isCommon = false;
                        break;
                    }
                }

                if (isCommon) {
                    commonSubstrings.add(substring);
                }
            }
        }

        return commonSubstrings;
    };

    // Find all common substrings
    let commonSubstrings = Array.from(findCommonSubstrings());

    // Sort substrings by length in descending order
    commonSubstrings.sort((a, b) => b.length - a.length);

    // Find the longest common substring
    for (let substring of commonSubstrings) {
        let isSubstringInAll = true;
        for (let str of strs) {
            if (!str.includes(substring)) {
                isSubstringInAll = false;
                break;
            }
        }
        if (isSubstringInAll) {
            return substring;
        }
    }

    return '';
};

let args = process.argv.slice(2);
let result = longestCommonSubstring(args);
console.log(result);
