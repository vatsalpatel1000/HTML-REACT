//1. Write a JavaScript function that returns array elements larger than a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function larger(arr,num){
    for(let i = 0; i<= arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}

larger(arr,num);



//2.Write a JavaScript function to extract unique characters from a string

let str = "abcdabcdefgggh";
//function to get String with all unique elements
function getUnique(str) {
let ans = "";
for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
    //if current character is not added, then add it in
    ans.
    //Otherwise it is a duplicate.
    ans += currChar;
    }
    }
    
return ans;
}
getUnique(str);



//3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
let ansIdx = 0;

    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
longestName(country);



// 4. Write a JavaScript function to count the number of vowels in a String argument.

let str1 = "apnacollege";
function countVowels(str) {
let count = 0;
    for( let i = 0; i<=str.length; i++){
        if( str1.charAt[i] == 'a' || str1.charAt[i] == 'e' || str1.charAt[i] == 'i' || str1.charAt[i] == 'o' || str1.charAt[i] == 'u' ){
            count++;
        }
}
return count;
}



//5. Write a JavaScript function to generate a random number within a range. (start, end).
let start = 100;
let end = 200;
function generateRandom(start, end) {
let diff = end - start;
return Math.floor(Math.random() * diff) + start;
}