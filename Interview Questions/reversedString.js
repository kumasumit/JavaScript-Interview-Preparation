//Given a string, create a new string of last 2 words
//separated by space
//Given the word bat , return t a, 
//there is space between t and a 
//apple, e l.
/*
 * Complete the 'lastLetters' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING word as parameter.
 */

function lastLetters(word) {

    // Write your code here
    let outStr = "";
    let reversedArray = word.split("").reverse();
    for (let i = 0; i < 2; i++) {
        if (i === 1) {
            outStr += " ";
            outStr += reversedArray[i];
        }
        else {
            outStr += reversedArray[i];
        }
    }
    return outStr;

}
console.log(lastLetters("Apple"));
