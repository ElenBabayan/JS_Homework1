// Problem 2
function f(str) {
    let arr = str.split(' - ').join(' ').split(', ').join(' ').split('?').join(' ').split('.').join(' ').split(' ');

    const wordLengths = new Array(arr.length);
    for(let i = 0; i < arr.length; i++) {
        wordLengths[i] = arr[i].length;
    }

    let max = Number.MIN_VALUE;
    let index = -1;
    for(let i = 0; i < wordLengths.length; i++) {
        if(wordLengths[i] >= max) { //equals, to return the last word
            max = wordLengths[i];
            index = i;
        }
    }

    return arr[index];
}

let word = f('Which would be worse - to live as a monster, or to die as a good man, fairlyy?');
console.log(word);