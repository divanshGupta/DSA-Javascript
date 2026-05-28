// find second largest number in an array
function secondLargest (array) {
    let highest = -Infinity
    let secondHighest = -Infinity

    if (array.length < 2) {
        return null;
    }

    for (let num of array) {
        if (num > highest) {
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num !== highest) {
            secondHighest = num 
        }
    }
    console.log(secondHighest)
}
// secondLargest([1, 4, 2, 9, 6, 11, 11])

// count frequency of letters in a string

function frequency (str) {
    const map = new Map();
    for (let s of str) {
        if(map.has(s)) {
            map.set(s, map.get(s) + 1)
        } else {
            map.set(s, 1)
        }
    }
    console.log(map)
}
// frequency("simultaneously")


// valid anagram
function anagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }

    const map = new Map();

    for (let char of string1) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1) 
        } else {
            map.set(char,1)
        }
    }

    for (let char of string2) {
        if(!map.has(char) || map.get(char) === 0) {
            return false;
        }
        map.set(char, map.get(char) - 1);
        
    }
    return true;
}
// console.log(anagram("rahulsanthosh", "santhoshrah"));


// remove a targeted element from an array
function removeElement (nums, val) {
    let k = 0;
    for(let i=0; i<nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++;
        }
    }

    nums.length = k;
    return console.log(nums)
};
// removeElement([3,2,2,3, 5, 7, 2, 3, 2], 2);

// remove duplicated from an array 

function removeDuplicates (nums) {
    const set = new Set();
    for (let i= 0; i< nums.length; i++) {
        set.add(nums[i])
    }
    return set;
}

console.log(removeDuplicates([1, 1, 2]))