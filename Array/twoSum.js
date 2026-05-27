function twoSum (array, target) {
    for (let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) === target) {
                console.log(i, j)
            }
        }
    }
}
twoSum([2, 7, 11, 15, 3, 6, 0, 4, 6, 3, 9, 10], 9)

//HASH MAP
// function twoSum(array, target) {
//     const map = new Map();

//     for (let i=0; i< array.length; i++) {
//         const needed = target - array[i]
//         if (map.has(needed)) {
//             return [map.get(needed), i];
//         }
//         map.set(array[i], i);
        
//     }
// }
// twoSum([2, 7, 11, 15, 3, 6, 0, 4, 6, 3, 9, 10], 19)





