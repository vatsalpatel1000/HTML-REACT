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