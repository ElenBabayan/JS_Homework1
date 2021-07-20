// Problem 3
function findLongestSubstr(str) {
    let result = "";
    let tmp = "";
    for(let i = 0; i < str.length; i++) {
        for(let j = i; j < str.length; j++) {
            if(!tmp.includes(str[j]) || str[j] === " " || str[j] === "\""
                                     || str[j] === "," || str[j] === ".") {
                tmp = tmp.concat(str[j]);
            }
            else {
                break;
            }
        }

        if(tmp.length >= result.length){
            result = tmp;
        } 
        tmp = "";
    }

    console.log(result);
}

findLongestSubstr("there are no two words in the english language more harmful than \"good job\".");
