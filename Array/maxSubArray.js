//brute force way 
const array = [1, 2, 8, 6, 7, 3];
let sum = array[0] + array[1]
function max(arr) {
    for(let i = 0; i<arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (sum < arr[i] + arr[j]) {
                sum = arr[i] + arr[j]
            }
        }
    }
    console.log(sum);
}

// efficient way

function maxSum(arr) {

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {

        if (num > largest) {

            secondLargest = largest;
            largest = num;

        } else if (num > secondLargest) {

            secondLargest = num;
        }
    }

    return largest + secondLargest;
}

console.log(maxSum(array));
