const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0], arr[arr.length - 1]);

arr.push("Aslam");
// console.log(arr);

arr.pop();
// console.log(arr);

arr.shift();
// console.log(arr);

arr.unshift(1);
// console.log(arr);

arr2 = arr.map((value) => {
  return value * value;
});

// console.log(arr2);
arr2 = arr.filter((value) => value % 2 == 0);
// console.log(arr2);

const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// console.log(sum);

for (let x in arr) {
  //console.log(arr[x]);
}

// arr.forEach((value) => console.log(value));

multiArr = [
  [1, 2],
  [3, 4],
];
// console.log(multiArr);

multiArr.forEach((element) => {
  //console.log(element);
  element.forEach((val) => console.log(val));
});
