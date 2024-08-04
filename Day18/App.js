//*Bubble sort
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let isSorted = 0;
    for (let j = 0; j < len; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        isSorted++;
      }
    }
    if (isSorted == len) break;
  }
  return arr;
}
// console.log(bubbleSort([5, 2, 3, 8]));

//*Selection sort
function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let j = i + 1;
    let min_index = i;
    while (j++ < len) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    if (min_index != i) [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }
  return arr;
}
// console.log(selectionSort([1, 2, 0, 5, 3]));

//*Quick sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; //! Base case: arrays with 0 or 1 element are already sorted
  }

  const pivot = arr[Math.floor(arr.length / 2)]; //! Choose the pivot element
  const left = []; //! Elements less than the pivot
  const right = []; //! Elements greater than the pivot
  const equal = []; //! Elements equal to the pivot

  //* Partition the array into left, right, and equal arrays
  arr.forEach((element) => {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element);
    }
  });

  //* Recursively sort the left and right sub-arrays, and concatenate results
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(array);
// console.log(sortedArray); //* Output: [1, 1, 2, 3, 6, 8, 10]

//*Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
}

// console.log(linearSearch([1, 1, 2, 3, 6, 8, 10], 6));

function binarySearch(arr, start, end, target) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 1, 2, 3, 6, 8, 10], 0, 7, 0));

function countCharacterOccurrences(str) {
  res = {};
  for (const char of str) {
    if (char === " ") continue;
    if (res[char]) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }
  return res;
}
// const str = "hello world";
// const counts = countCharacterOccurrences(str);
// console.log(counts);

function longestUniqueSubstring(s) {
  let start = 0; // Start index of the current window
  let maxLength = 0; // Maximum length of substring found
  let longestSubstring = ""; // Longest substring without repeating characters
  let charIndexMap = new Map(); // Map to store the last index of each character

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
      longestSubstring = s.slice(start, end + 1);
    }
  }

  return { longestSubstring, maxLength };
}

// Example usage
const str = "abcabcaabc";
const result = longestUniqueSubstring(str);
console.log(result.longestSubstring); // Output: "abc"
console.log(result.maxLength); // Output: 3
