// Question 2: Find the Maximum Value
function findMaxValue(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const maxValue = findMaxValue([5, 12, 43, 8, 19]);
console.log(maxValue);

// Question 4 reverse an array
function reverseArray(arr) {
  let new_arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    new_arr.push(arr[i]);
  }

  return new_arr;
}
const reversedArray = reverseArray([5, 12, 43, 8, 19]);
console.log(reversedArray);

// Count Occurrences
function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      count++;
    }
  }

  return count;
}

const count = countOccurrences([5, 12, 5, 8, 5, 24], 5);
console.log(count);

