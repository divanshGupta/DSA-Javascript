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

// find duplicate

const array3 = [1, 2, 3, 4, 2, 2];
const set = new Set();
let count = 0;
for (num of array3) {
    if (set.has(num)) {
        console.log("duplicate found!", num)
    }
    set.add(num)
}
