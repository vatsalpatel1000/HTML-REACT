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


/*          ARRAY                      ARRAY                    ARRAY                                      ARRAY                                      ARRAY                  */

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