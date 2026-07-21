// var countFreq = function (nums) {
//     const map = new Map();

//     for(let i=0; i<nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i]) || 0)+ 1)
//     }

//     return map;
// }

// console.log(countFreq([2, 3, 3, 2, 3, 4, 4, 4, 6]))

// var findUniq = function (str) {
//     const map = new Map();

//     for (ch of str) {
//         map.set(ch, (map.get(ch) || 0)+1)
//     }

//     for (ch of str) {
//         if ( map.get(ch) === 1 ) return ch;
//     }
// }

// console.log(findUniq("aaiina"))

// function iterateMap (map) {
//     map.forEach((value, key) => {
//         console.log(key, value)
//     });
// }

// iterateMap(([
//     ["name", "Divyansh"],
//     ["age", 24]
// ]));

// function arrayMap(array) {
//     const map = new Map();
//     for (let i=0; i < array.length; i++) {
//         map.set(i, array[i])
//     }
//     console.log(map.has(2))
// }
// arrayMap(["mango", "banana", "orange", "watermelon", "lemon"])

// clone a map

// const map1 = new Map([
//     ["name", "Divyansh"],
//     ["age", 27],
// ])

// const map2 = new Map([
//     ["email", "divyanshg@gmail.com"],
//     ["phone", 9140251061],
// ])

// const merged = new Map([...map1, ...map2])

// console.log(merged)

// Map counting occurence - more efficient way

const arra = [2, 3, 3, 2, 3, 4, 4, 4, 6]
const freq = arra.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map())
console.log(freq)
