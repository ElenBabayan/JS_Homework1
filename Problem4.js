// Problem 4
function firstCharAfterNextTwo(s) {

    let str = s.split("");
    for(let i = 0; i + 2 < str.length; i += 3) {
        let temp = str[i + 2];
        str[i + 2] = str[i];  
        str[i] = temp;

        let temp2 = str[i];
        str[i] = str[i + 1];
        str[i + 1] = temp;
        //   abc
        // 1.cba
        // 2.bca
    }

    return str.join("");
}

firstCharAfterNextTwo("aweyoolp");
