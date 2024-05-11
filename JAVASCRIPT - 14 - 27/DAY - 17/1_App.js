// for(let i=1; i<=5;i++){
//     console.log(i);
// }

// for(let i=5; i>=1;i--){
//     console.log(i);
// }
// for(let i=10;i>=1;i=i-3){
//     console.log(i);
// }

console.log('upwards odd no');
for(let i=1; i<=15; i=i+2){
    console.log(i);
}
console.log('backwards odd no');

for(let i=15; i>=0; i=i-2){
    console.log(i);
}

console.log('upwards even no');
for(let i=2; i<=10; i=i+2){
    console.log(i);
}
console.log('backwards even no');
for(let i=10; i>=0; i=i-2){
    console.log(i);
}

console.log('table of 5');
for(let i=1; i<=10; i++){
    s=i*5;
    console.log(s);
}
//OR    
console.log('table of 5');
for(let i=5; i<=50; i=i+5){
    console.log(i);
}


console.log('table of n no.');
n= prompt('enter no.');
n=parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}


//Nested Loop
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(j);
    }
} 


// while loop

let h= 0;
while(h<=20){
    console.log(h);
    h++;
}

// Practice 

let favorite  = 'avatar';
let guess = prompt('guess movie');

    while( ( guess != favorite ) && ( guess != 'quit')){
        guess = prompt('Wrong guess');
    }

    if( guess == favorite){
        console.log('Congratulation');
    }else{
        console.log('quit');
    }


// break keyword
let g= 1;
while(g<=5){
    if( g ==3){
        break;
    }
    console.log(g);
    g++;
}

// Loop with array
let fruits = ['mongo','apple','banana','litchi','orange'];
fruits.push('papaya');
    for(let k =0; k<= fruits.length; k++){
        console.log(k, fruits[k] );
    }

// Loop reverse  
    let fruits1 = ['mongo','apple','banana','litchi','orange'];

    for(let k =fruits1.length; k>=0; k--){
        console.log(k, fruits1[k] );
    }


// Nested Loop with array
let heroess= [
    ['ironman','spideman','thor'],
    ['suparman','wonderwoman','flash']
]

for(let a=0; a<heroess.length; a++){
    console.log(a,heroess[a], heroess[a].length);
    for(let s=0; s<heroess[a].length; s++){
        console.log(`s=${s}, ${heroess[a][s]}`)
        }
}   


// For of loop

let fruit = ['mango','apple','banana','litchi','orange'];
for(fruit of fruits){
    console.log(fruit);
}

let fruit4 = ['mango','apple','banana','litchi','orange'];
for(fruit of fruit4){
    for(heros of fruit){
    console.log(heros);
}
}

/* Practice Question */
/*Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3] */
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
    for(i=0; i<arr.length; i++){
        if(arr[i] == num){
            arr.splice(i,1);
        }   
    }

/*Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6
 */
let number = 287152; 
let count = 0;
let copy = number;
    while(copy>0){
        count++;
        copy = Math.floor(copy/10);
    }
    console.log(count);

/*Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25 */
let number1 = 287152; 
let sum = 0;
let copy1 = number;
    while(copy1>0){
        digit = copy1 % 10;
        sum+= digit;
        copy1 = Math.floor(copy1/10);
    }
    console.log(sum);    

/*Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1
 */
let n = 5;
let Factorial = 1;
    for(let i=1 ; i<=n; i++){
        Factorial = i*Factorial;
    }
    console.log('factorial of'+ n + 'is'+ Factorial );



/* largest no in array with positiver no. */

let arrr = [2,5,10,4,2,7,1,9];
let largest =0;

for(let i=0; i<=arrr.length; i++){
    if(largest<arrr[i]){
        largest = arrr[i];
    }
}
console.log(largest);