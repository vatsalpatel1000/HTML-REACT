let msg2 = '    Vatsal      patel    ';
let vt = msg2.trim();
console.log(vt);                                                /* Vatsal      patel */

let password = prompt('set password');
let newpass = password.trim();
console.log(newpass);                                           /* String are immutable  */


let msg = "VATSAL";
msg.toLowerCase();
console.log(msg);


let msg1 = "VATSAL";
msg.toUpperCase();
console.log(msg1);

let str = ('iLovecoding');
str.indexOf('c');

let str1 = ('ilovecoding');
str1.trim().toUpperCase();

let str3 = "ilovecoding";
str3.slice(1,4);
str3.slice(5);
str3.slice(-2);

str3.replace('love','do');   
str3.repeat(3);                                 // ilovecodingilovecodingilovecoding


let msg4 = 'help!';
msg4.trim.toUpperCase();


/*          ARRAY          ARRAY          ARRAY          ARRAY          ARRAY          ARRAY          ARRAY          ARRAY          ARRAY          ARRAY         */

let student = ['aman', 'shraddha','vatsal'];
student;
student[0];
student[1];
student[2];
student.length;
typeof student;
student[0][0];                  /* a */
student[1][0];                  /* s */
student[2][0];                  /* v */
student[1].length;              /* index of 1 length */ 
student[];  student.length;     /* enpty array */

let fruits = ['banana','apple','orange'];
fruits[0] = 'watermalon';
fruits

fruits[10] = 'papaya'; 


fruits.push('lal');                 /* Add last array */ 
fruits.pop();                       /* remove last array */
fruits.unshift('red');              /* Add First array */
fruits.shift();                     /* remove First array */

/* EXAMPLE */
let followers = ['a','b','c'];
let blocked = followers.shift();

let months = ['january','july','march','august',];
months.shift().months.shift();

let months1 = ['january','july','march','august',];
months.indexOf('august')                /* true 3 false = -1  */
months.includes('august')               /* True fase  */

let followers1 = ['a','b','c'];
let months12 = ['january','july','march','august',];
followers1.concat(months12)

let months123 = ['january','july','march','august',];
months123.reverse();

let color = ['red','yellow','blue','orange','pink','white',];
color.slice(2);
color.slice(-2);
color.slice(2,3);
color.slice(color.length-1);

let color1 = ['red','yellow','blue','orange','pink','white',];
color.splice(3);
color
color.splice(0,1);
color
color.push("maruti");
color.push('ferrari');
car
color.splice(1,2);
color
color.splica(0,0,'toyota','xuv','maruti');
color
color.splice(1,0,'mercedes');
color
color.splice(1,1,'gwagon');
color


/* EXAMPLE */
let months02 = ['january','july','march','august',];                 /* ['july', 'june', 'march', 'august'] */
months02.splice(0,2,'july','june');
months02                /* ['july', 'june', 'march', 'august'] */

let months03 = ['c','c++','java','javascript',];   
months03.reverse().indexOf('java');


/* Array refereaces  */
[1] === [1];            /* false  cz reference are not same */    
[1] == [1];             /* false  */




const arr = ['1','2','3'];
arr;
arr1 = arr;   
arr1 == arr;          /* true cz reference are same in memory */


/* Const Array   */

const arr12 = [1,2,3]
arr12;
arr12.push('4');
arr12;
arr12.pop();
arr12;
arr123 = [1,2,3]        /* typeerror can't assign arr123 to value again */


/* Nested Array   */

let nums = [['2','4'],['3','6'],['4','8']];
nums;
nums.length;
nums;
nums[0].length;
nums[0][0];


let game = [['x','null','0'],
            ['null','x','null'],
            ['0','null','x']];

game[0];
game;
game[0][1] = '0';
game;
game;

// /* PRACTICE 
// Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3;
let arra = [7,9,0,-2];
let n= 3;
ans = arra.slice(0,n);
console.log(ans);


// Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3let arra = [7,9,0,-2];
let arra1 = [7,9,0,-2];
let n1= 3;
ans = arra1.slice(arra1.length-n1);
console.log(ans);


// JavaScript program to check whether a string is blank or not.
let str12 = '123';
if(str12==0){
    console.log("string is empty");
}else{
    console.log("string");
} 


// Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

let apn = 'apnacollege';
if(apn == apn.toLowerCase){
    console.log("lower");
}else{
    console.log("notlower");
}    


// JavaScript program to strip leading and trailing spaces from a string.

let str32 = prompt('please enter the string');
sre33 = console.log('orignal string '+ str32);
console.log('After string '+ str32.trim());

// JavaScript program to check if an element exists in an array or not.

let arr43 = ['hello','a',23,64,99,-61];
let item43 = 64;
if(arr43.indexOf(item43)!= -1){
    console.log('element exist in array');
}else{
    console.log('element doesnt exist in array');
}