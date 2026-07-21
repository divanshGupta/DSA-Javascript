function maxSubArray(array) {

    let currentSum = 0;
    let maxSum = array[0];

    for (let i = 0; i < array.length; i++) {

        if (currentSum < 0) {
            currentSum = array[i];
        } else {
            currentSum = currentSum + array[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

console.log(maxSubArray([5,4,-1,7,8]));