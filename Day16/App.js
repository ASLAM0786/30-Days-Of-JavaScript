//*Basic Recursion
function fact(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * fact(num - 1);
}
// console.log(fact(5));
// console.log(fact(2));

function fibonacci(num) {
  if (num == 0 || num == 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
// console.log(fibonacci(3));
// console.log(fibonacci(2));

//*Recursion with Array
//!Method1
// function sum(arr, index, len) {
//   if (index >= len) {
//     return 0;
//   }
//   return arr[index] + sum(arr, ++index, len);
// }
// console.log(sum([1, 2, 3, 4, 5], 0, 5));
//!Method2
function sum(arr) {
  if (arr.length == 0) return 0;
  return arr[0] + sum(arr.slice(1));
}
// console.log(sum([1, 2, 3, 4, 5]));
//!Method1
// function findMax(arr, index, len, maxi) {
//   if (index >= len.length) {
//     return maxi;
//   }
//   if (maxi < arr[index]) {
//     maxi = arr[index];
//   }
//   return findMax(arr, ++index, arr, maxi);
//   //return maxi > temp ? maxi : temp;
// }
// console.log(findMax([1, 2, 3, 4, 5], 0, 5, -1));
//!Method2
function findMax(arr) {
  if (arr.length == 1) return arr[0];
  let tempMax = findMax(arr.slice(1));
  return Math.max(arr[0], tempMax);
}
// console.log(findMax([1, 2, 3, 6, 8, 1]));

function reversString(str) {
  if (str.length <= 1) return str;
  return reversString(str.slice(1)) + str[0];
}
// console.log(reversString("abab"));

function isPalindrome(str) {
  if (str === reversString(str)) {
    return true;
  }
  return false;
}
// console.log(isPalindrome("abab"));

function binarySearch(arr, target, left, right) {
  if (left > right) return -1;
  let mid = Math.floor(left + (right - left) / 2);
  if (arr[mid] == target) return mid;
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }
  return binarySearch(arr, target, mid + 1, right);
}

let result = binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1, 0, 9);
// if (result != -1) {
//   console.log("Target found at index: " + result);
// } else {
//   console.log("Target not found.");
// }

function countOccurrence(arr, target) {
  let count = 0;
  if (arr[0] == target) count = 1;
  if (arr.length == 1) {
    return count;
  }
  return count + countOccurrence(arr.slice(1), target);
}
// console.log(countOccurrence([1, 3, 5, 7, 9, 1, 13, 15, 3, 19], 2));

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null; //! Left child
    this.right = null; //! Right child
  }
}

//* Example usage:
const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(4);
root.left.right = new BinaryTreeNode(5);

//* Function to traverse the binary tree in-order
function inOrderTraversal(node) {
  if (node) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}

///* Traverse the binary tree
// inOrderTraversal(root);

function getDepth(node) {
  if (node === null) {
    return 0; //* Base case: an empty tree has a depth of 0
  }

  //* Recursively find the depth of the left and right subtrees
  const leftDepth = getDepth(node.left);
  const rightDepth = getDepth(node.right);

  //* The depth of the tree is the maximum of the left and right depths plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}
console.log(getDepth(root));
