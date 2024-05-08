function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];
        let b = i - 1;
        while (b > -1 && arr[b] > currentVal) {
            arr[b + 1] = arr[b];
            b--;
        }
        arr[b + 1] = currentVal;
    }
    return arr;
  }
  
module.exports = insertionSort;

/*
insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
insertionSort([1, 2, 3]); // [1, 2, 3]
insertionSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34,
//  34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
*/