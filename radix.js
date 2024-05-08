function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
  
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
  
function mostDigits(nums) {
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        maxNum = Math.max(maxNum, digitCount(nums[i]));
    }
    return maxNum;
}
  
function radixSort(nums) {
    let maxNumCount = mostDigits(nums);
    for (let b = 0; b < maxNumCount; b++) {
        let digitGroup = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let digit = getDigit(num, b);
            digitGroup[digit].push(num);
        }
        nums = [].concat(...digitGroup);
    }
    return nums;
}
  
module.exports = {getDigit, digitCount, mostDigits, radixSort};

/*
console.log(radixSort([8, 6, 1, 12]));
// [1, 6, 8, 12]

console.log(radixSort([10, 100, 1, 1000, 10000000]));
// [1, 10, 100, 1000, 10000000]

console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]));
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
*/