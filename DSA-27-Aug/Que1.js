// Group Anagram 
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

function groupAnagrams(words) {
    const map = new Map();

    for (const word of words) {
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(words));

// First Unique Character
// Input: "leetcode"
// Output: 0 // 'l'
function firstUniqueChar(str) {
    const frequency = new Map();

    // Count frequency
    for (const char of str) {
        frequency.set(char, (frequency.get(char) || 0) + 1);
    }

    // Find first character with frequency 1
    for (let i = 0; i < str.length; i++) {
        if (frequency.get(str[i]) === 1) {
            return i;
        }
    }

    return -1;
}

console.log(firstUniqueChar("leetcode"));

// Interview Follow up
// For grouping anagrams, I can use the sorted string as the hash-map key,
//  which gives O(k log k) per word. A character-frequency signature avoids 
// sorting and gives O(k) per word, so it is better for long strings, especially
//  when the character set is fixed.