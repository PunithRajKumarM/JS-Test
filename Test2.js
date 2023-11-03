//Question 2
// Sort the array: [12, 6, 37, 29, 79, 54, 3, 18, 22, 29, 71, 83, 6, 45] using Bubble Sort.
function BubbleSort(...arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const arr = [12, 6, 37, 29, 79, 54, 3, 18, 22, 29, 71, 83, 6, 45];
console.log(BubbleSort(...arr));
