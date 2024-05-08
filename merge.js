function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let b = 0;
  
    while (i < arr1.length && b < arr2.length) {
        if (arr2[b] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[b]);
            b++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (b < arr2.length) {
        results.push(arr2[b]);
        b++;
    }
    return results;
}
  
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length/2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
  
module.exports = {merge, mergeSort};

/*
let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2)); // [1, 2, 3, 4, 4, 5, 6, 8]

let arr3 = [-2, -1, 0, 4, 5, 6];
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
console.log(merge(arr3, arr4)); // [-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8]

let arr5 = [3, 4, 5];
let arr6 = [1, 2];
console.log(merge(arr5, arr6)); // [1, 2, 3, 4, 5]
*/