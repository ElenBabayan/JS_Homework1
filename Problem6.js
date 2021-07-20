// Problem 6
//this function whateverrr
function getSubsets(arr ) {
 
    let currArr = new Array(3).fill(0);
    let  i = 0;
    let j = 0;
    

    if(arr.length <= 3) {
        let tmp = "";
        for(let k = 0; k < arr.length; k++) {
            
           tmp += arr[k] + " ";
        }
        console.log(tmp);
        return;
    }  
    for( i = 0; i < arr.length; i++) {
         
        for( j = i; j < arr.length; j++) {

               for(let currIndex = j; currIndex < arr.length; currIndex++) {

                   if(i !== j && j !== currIndex ) {
                        currArr[0] = arr[i];
                        currArr[1] = arr[j];
                        currArr[2] = arr[currIndex];
                        let temp = "";
                        for(let k = 0; k < 3; k++) {
                               temp += currArr[k] + " ";
                        }
                        console.log(temp);
               }
            }
        }  
     }
}

let arr = [19, 6, 1, 4];
getSubsets(arr);