// Problem 5
function findBiggestNegative(arr) {
    let res = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            if(res === 0 || arr[i] > res)
                res = arr[i];
        }
    }

    if(res !== 0) {
        return res;
    }
    else {
        return 0;
    }
}

function problemFive(arrOfArrays) {
    let noNeg = true;
    let product = 1;
    for(let i = 0; i < arrOfArrays.length; i++) {
       if(!Array.isArray(arrOfArrays[i])) {
           return "Invalid Argument";
       }
    }
    for(let i = 0; i < arrOfArrays.length; i++) {
      
            let num = findBiggestNegative(arrOfArrays[i]);
            if( num !== 0) {
                noNeg = false;
                product *= num;
            }
    
    }

    if(noNeg === true) {
        return "No negatives";
    }
    else {
        return product;
    }
}

problemFive([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]);