export const LEETCODE_DATA = {
    "Arrays & Hashing": [
        {
            id: "LC-217",
            title: "Contains Duplicate",
            description: "Check if any value appears at least twice in the array.",
            problem: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true`,
            type: "coding",
            visualType: "array",
            pedagogy: {
                question: "Detect duplicates in an integer array efficiently.",
                breakdown: [
                    "A Set data structure stores only unique elements.",
                    "Iterate through the array.",
                    "For each element, check if it's already in the Set.",
                    "If yes -> Duplicate found! Return true.",
                    "If no -> Insert into Set and continue.",
                    "If loop finishes without finding duplicates -> Return false."
                ],
                key_mapping: {
                    "Set": "Stores unique elements encountered so far",
                    "Loop": "Iterates through each number",
                    "O(n) Time": "Each lookup/insert is O(1) on average"
                },
                concept_selection: {
                    selected: "Hash Set",
                    reason: "Provides O(1) average time complexity for checking existence."
                },
                structural_plan: {
                    default_algo: "Hash Set Traversal",
                    modifications: []
                }
            },
            visualizer: {
                type: "array",
                initialState: [1, 2, 3, 1] // Simple array visualization
            },
            simulation: {
                narrative_steps: [
                    { text: "Initialize an empty Hash Set 'seen'.", canvasAction: "RESET" },
                    { text: "Check 1: Not in set. Insert 1.", canvasAction: "HIGHLIGHT_INDEX", data: { index: 0, set: [1] } },
                    { text: "Check 2: Not in set. Insert 2.", canvasAction: "HIGHLIGHT_INDEX", data: { index: 1, set: [1, 2] } },
                    { text: "Check 3: Not in set. Insert 3.", canvasAction: "HIGHLIGHT_INDEX", data: { index: 2, set: [1, 2, 3] } },
                    { text: "Check 1: ALREADY in set! Duplicate found.", canvasAction: "HIGHLIGHT_INDEX_FAILURE", data: { index: 3, set: [1, 2, 3] } },
                    { text: "Return True.", canvasAction: "CONCLUSION" }
                ],
                sample_io: {
                    input: "nums = [1, 2, 3, 1]",
                    expected_output: "true"
                },
                key_takeaways: [
                    "Hash Sets give O(1) lookups.",
                    "Sorting would take O(n log n).",
                    "Space complexity is O(n) to store the set."
                ]
            },
            code: {
                cpp: `// LC 217: Contains Duplicate
// Pattern: Hash Set
// Time: O(n) | Space: O(n)
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> seen;
    for (int num : nums) {
        if (seen.count(num)) return true;
        seen.insert(num);
    }
    return false;
}`,
                java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (seen.contains(num)) return true;
            seen.add(num);
        }
        return false;
    }
}`,
                python: `class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False`,
                javascript: `var containsDuplicate = function(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};`
            }
        },
        {
            id: "LC-242",
            title: "Valid Anagram",
            description: "Check if string t is an anagram of string s.",
            problem: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true`,
            type: "coding",
            visualType: "chart", // Custom visual type we might handle as generic or add specific logic
            pedagogy: {
                question: "Check if two strings have same character counts.",
                breakdown: [
                    "If lengths differ, return false immediately.",
                    "Use a frequency array (size 26) or Hash Map.",
                    "Increment counts for char in 's'.",
                    "Decrement counts for char in 't'.",
                    "Check if all counts are zero."
                ],
                key_mapping: {
                    "Frequency Map": "Tracks balance of characters",
                    "Increment": "Seen in String S",
                    "Decrement": "Seen in String T"
                },
                concept_selection: {
                    selected: "Frequency Counting",
                    reason: "O(n) time and O(1) space (since 26 chars is constant)."
                },
                structural_plan: {
                    default_algo: "Hash Map / Frequency Array",
                    modifications: []
                }
            },
            visualizer: {
                type: "custom", // Will handle as generic for now in fallback
                initialState: { s: "anagram", t: "nagaram" }
            },
            simulation: {
                narrative_steps: [
                    { text: "Strings length match. Init count array.", canvasAction: "RESET" },
                    { text: "Process 'a' in s (+1) and 'n' in t (-1).", canvasAction: "UPDATE_COUNTS", data: { charS: 'a', charT: 'n' } },
                    { text: "Process 'n' in s (+1) and 'a' in t (-1).", canvasAction: "UPDATE_COUNTS", data: { charS: 'n', charT: 'a' } },
                    { text: "Continue processing...", canvasAction: "UPDATE_COUNTS", data: { status: "..." } },
                    { text: "All counts are zero. Return True.", canvasAction: "CONCLUSION" }
                ],
                sample_io: {
                    input: "s='anagram', t='nagaram'",
                    expected_output: "true"
                },
                key_takeaways: [
                    "Length check is first optimization.",
                    "Sorting both strings is O(n log n), counting is O(n)."
                ]
            },
            code: {
                cpp: `// LC 242: Valid Anagram
// Pattern: Frequency Count / Hash Map
// Time: O(n) | Space: O(1) - fixed alphabet
#include <iostream>
#include <string>
#include <vector>
using namespace std;

bool isAnagram(string s, string t) {
    if (s.size() != t.size()) return false;
    vector<int> count(26, 0);
    for (int i = 0; i < (int)s.size(); i++) {
        count[s[i] - 'a']++;
        count[t[i] - 'a']--;
    }
    for (int c : count) if (c != 0) return false;
    return true;
}`,
                java: `class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }
        for (int c : count) if (c != 0) return false;
        return true;
    }
}`,
                python: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        # In Python, we can use Counter or manual dict
        # return Counter(s) == Counter(t)
        
        count = [0] * 26
        for char in s:
            count[ord(char) - ord('a')] += 1
        for char in t:
            count[ord(char) - ord('a')] -= 1
            
        return all(c == 0 for c in count)`
            }
        },
        {
            id: "LC-1",
            title: "Two Sum",
            description: "Find indices of two numbers that add up to target.",
            problem: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
            type: "coding",
            visualType: "array",
            pedagogy: {
                question: "Find two numbers summing to target.",
                breakdown: [
                    "Checking all pairs is O(n^2). We need faster.",
                    "Equation: a + b = target  =>  b = target - a",
                    "As we iterate 'a', check if 'b' (complement) exists.",
                    "Use a Hash Map: key=number, value=index.",
                    "Store current number after checking complement."
                ],
                key_mapping: {
                    "Map Key": "Number Value",
                    "Map Value": "Index in Array",
                    "Complement": "Target - Current Num"
                },
                concept_selection: {
                    selected: "Hash Map / Complement Check",
                    reason: "One-pass solution with O(n) time complexity."
                },
                structural_plan: {
                    default_algo: "Hash Map One-Pass",
                    modifications: []
                }
            },
            visualizer: {
                type: "array",
                initialState: [2, 7, 11, 15]
            },
            simulation: {
                narrative_steps: [
                    { text: "Target = 9. Map is empty.", canvasAction: "RESET" },
                    { text: "Val: 2. Need 7. Map doesn't have 7.", canvasAction: "Check 7", data: { map: { 2: 0 } } },
                    { text: "Val: 7. Need 2. Map HAS 2!", canvasAction: "Found 2", data: { found: true } },
                    { text: "Return indices [0, 1].", canvasAction: "CONCLUSION" }
                ],
                sample_io: {
                    input: "nums=[2,7,11,15], target=9",
                    expected_output: "[0, 1]"
                },
                key_takeaways: [
                    "Trading space for time (Space O(n), Time O(n)).",
                    "Brute force is O(n^2)."
                ]
            },
            code: {
                cpp: `// LC 1: Two Sum
// Pattern: Hash Map Complement
// Time: O(n) | Space: O(n)
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < (int)nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}`,
                java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
                python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in seen:
                return [seen[diff], i]
            seen[num] = i
        return []`
            }
        }
    ]
};
