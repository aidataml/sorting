function bubbleSort(arr) {
    let b = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < b - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        b--;
    } while (swapped);
    return arr;
}

module.exports = bubbleSort;


//let array = [52, 96, 13, 41, 18, 63, 84, 108];
//console.log(bubbleSort(array));
