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
console.log(selectionSort([1, 2, 0, 5, 3]));
