// Bruteforce way
function sliding(array, val) {
    let greatest = 0;
    for(let i = 0; i <= array.length - val; i++) {
        let sum = 0;
        for(let j = i; j < val +i; j++) {
            sum = sum + array[j]
        }
        if(sum > greatest) {
            greatest = sum 
        }
    }
    console.log(greatest) 
}
sliding([2,1,5,1,3,2], 3)

