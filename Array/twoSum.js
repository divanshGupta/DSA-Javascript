// const arr2 = [2, 7, 11, 15, 3, 6, 0, 4, 6, 3, 9, 10]
// const target2 = 9


// for (let i = 0; i < arr2.length -1 ; i++) {
//     for(let j = i + 1; j < arr2.length; j++) {
//         if ((arr2[i] + arr2[j]) === target2) {
//             console.log(i, j)
//         }
//     }
// }

// HASH MAP

const arr2 = [2, 7, 11, 15, 3, 6, 0, 4, 6, 3, 9, 10]
const target2 = 9

function twoSum(array, target) {
    const map = new Map();

for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i]
    const needed = target2 - num
    if (map.has(needed)) {
        console.log(map.get(needed), i)
    }
    map.set(num, i);
}
return null;
}
twoSum(arr2, target2)


// const arr = [2, 7, 11, 15, 3, 6, 0, 4, 6, 3, 9, 10]
// const target = 9
// const set = new Set();

// for (let i = 0; i < arr.length; i++) {
//     const needed = target - arr[i];

//     if (set.has(needed)) {
//         console.log(i)
//     }
//     set.add(arr[i])
// }

// const arr = [1, 2, 3, 4, 5]
// const target = 5
// let count = 0;
// for (let i = 0; i<arr.length-1; i++){
//     for(let j = i + 1; j< arr.length; j++) {
//         if ((arr[i] + arr[j]) === target) {
//             count++;
//         }
//     }
// }
// console.log(count)

// const arr = [1, 2, 3, 4, 5]
// const target = 5
// let count = 0;

// const set = new Set();

// for (let num of arr) {
//     const needed = target - num;

//     if( set.has(needed)) {
//         count++;
//     }
//     set.add(num);
// }
// console.log(count)
