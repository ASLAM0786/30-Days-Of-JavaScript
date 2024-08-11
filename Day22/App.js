/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let list = new ListNode(0);
  let temp = list;
  let carry = 0;
  while (l1 && l2) {
    let val = l1.val + l2.val + carry;
    temp.next = new ListNode(val % 10);
    carry = Math.floor(val / 10);
    l1 = l1.next;
    l2 = l2.next;
    temp = temp.next;
  }
  while (l1) {
    let val = l1.val + carry;
    temp.next = new ListNode(val % 10);
    carry = Math.floor(val / 10);
    l1 = l1.next;
    temp = temp.next;
  }
  while (l2) {
    let val = l2.val + carry;
    temp.next = new ListNode(val % 10);
    carry = Math.floor(val / 10);
    l2 = l2.next;
    temp = temp.next;
  }
  if (carry != 0) {
    temp.next = new ListNode(carry);
  }
  return list.next;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0; //* Start index of the current window
  let maxLength = 0; //* Maximum length of substring found
  let longestSubstring = ""; //* Longest substring without repeating characters
  let charIndexMap = new Map(); //* Map to store the last index of each character

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    //* If the character is already in the map and its index is within the current window
    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1; //* Move the start to one position after the last occurrence
    }

    charIndexMap.set(char, end); //* Update the last index of the character

    //* Update the length of the longest substring found
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
    }
  }
  longestSubstring = s.slice(start, end + 1);
  return maxLength;
  //  return { longestSubstring, maxLength };
};
// Example usage
// const str = "abcabcaabc";
// const result = lengthOfLongestSubstring(str);

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, minHeight * width);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
// Example usage
// console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length;
  let ans = [];

  // Sort the array to make it easier to avoid duplicates
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    // Skip duplicate elements for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let target = -nums[i];
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      let sum = nums[left] + nums[right];

      if (sum === target) {
        ans.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate elements for the second element
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicate elements for the third element
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return ans;
};
//console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [[-1, -1, 2], [-1, 0, 1]]
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function sortStringLexicographically(str) {
  return str
    .split("") // Convert string to array of characters
    .sort() // Sort the array lexicographically
    .join(""); // Join the array back to a string
}

var groupAnagrams = function (strs) {
  const map = new Map();
  const res = [];

  for (let str of strs) {
    let sortedStr = sortStringLexicographically(str);

    if (map.has(sortedStr)) {
      res[map.get(sortedStr)].push(str);
    } else {
      map.set(sortedStr, res.length);
      res.push([str]);
    }
  }

  return res;
};

// Example usage
const inputStrings = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(inputStrings);

//console.log(groupedAnagrams);
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
