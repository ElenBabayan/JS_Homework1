// Problem 1

function printFrequency(arr) {
    let max = Number.MIN_VALUE;
    for(let i = 0; i < arr.length; i++) {
        max = Math.max(arr[i], max);
    }
    
    const arrWithoutDuplicates = new Array(arr.length).fill(0);
    for(let i = 0; i < arr.length; i++) {
        arrWithoutDuplicates[arr[i]]++;
    }
    
    
    let len = arr.length;
    for(let i = 0; i < arrWithoutDuplicates.length; i++) {
        let frequency = arrWithoutDuplicates[i];
        if(frequency !== 0) {
            console.log( i + " " + frequency / len);
        }
    }
}
printFrequency([1,1,2,2,3]);
