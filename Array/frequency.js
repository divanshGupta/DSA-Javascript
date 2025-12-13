// var countFreq = function (nums) {
//     const map = new Map();

//     for(let i=0; i<nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i]) || 0)+ 1)
//     }

//     return map;
// }

// console.log(countFreq([2, 3, 3, 2, 3, 4, 4, 4, 6]))

var findUniq = function (str) {
    const map = new Map();

    for (ch of str) {
        map.set(ch, (map.get(ch) || 0)+1)
    }

    for (ch of str) {
        if ( map.get(ch) === 1 ) return ch;
    }
}

console.log(findUniq("aaiina"))