//!Two sum problems
function compareNumbers(a, b) {
  return a - b;
}
var twoSum = function (nums, target) {
  let len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  return [-1 - 1];
};
//twoSum([2, 7, 11, 15], 9);

var reverse = function (x) {
  let isNegative = x < 0;
  if (isNegative) {
    x = -x; //* Make x positive
  }

  let ans = 0;
  while (x > 0) {
    let rem = x % 10;
    x = Math.floor(x / 10);

    //* Handle overflow
    if (ans > (2 ** 31 - 1) / 10 || (ans === (2 ** 31 - 1) / 10 && rem > 7)) {
      return 0;
    }

    ans = ans * 10 + rem;
  }

  return isNegative ? -ans : ans;
};
//reverse(123);

function processString(str) {
  // Convert the string to lowercase
  let lowerStr = str.toLowerCase();

  // Remove all non-alphanumeric characters
  let result = lowerStr.replace(/[^a-z0-9]/g, "");

  return result;
}

var isPalindrome = function (s) {
  s = processString(s);
  let len = s.length - 1;
  let start = 0;
  while (start < len) {
    if (s[start] !== s[len]) {
      return false;
    }
    start++;
    len--;
  }
  return true;
};

//isPalindrome("A man, a plan, a canal: Panama");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (list1, list2) {
  let list = new ListNode(0);
  let temp = list;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  while (list1) {
    temp.next = list1;
    list1 = list1.next;
    temp = temp.next;
  }
  while (list2) {
    temp.next = list2;
    list2 = list2.next;
    temp = temp.next;
  }
  return list.next;
};
// list1 = [1, 2, 4];
// list2 = [1, 3, 4];
list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);
list = mergeTwoLists(list1, list2);
// while (list) {
//   console.log(list.val);
//   list = list.next;
// }

var isValid = function (s) {
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let c of s) {
    if (mapping[c]) {
      // If the stack is empty or the top of the stack does not match the current closing bracket
      if (stack.length === 0 || stack[stack.length - 1] !== mapping[c]) {
        return false;
      }
      stack.pop();
    } else {
      // Push the opening bracket onto the stack
      stack.push(c);
    }
  }

  // If the stack is empty, all brackets were matched; otherwise, they were not
  return stack.length === 0;
};

// Example usage
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
