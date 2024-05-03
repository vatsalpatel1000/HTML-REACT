console.log("Hello world vatsal");
let a = 10;
let b = 5;
console.log("sum is "+ a + b);              /* + usen when string  + nuber    =   vatsal + 123 = vatsal123  */
console.log("sum is ", a + b);

let pencil = 10;
let erasor = 5;

console.log("total is " + (pencil + erasor)+ " rupees");
console.log(`total is ${pencil+erasor} rupees`);

// let age =18;
// console.log(age>20);
// console.log(age<20);

// console.log(5 == 5);
// console.log(5!= 5);


console.log("before my if statement");
let age =23;
if(age>=18){
    console.log("you can vote");
}
console.log(" you cant vote");


let firstName = "Vatsal";
    if (firstName == "Vatsal"){
        console.log(`Welcome${ firstName}`);
    }

                                /*if statement*/
let color = 'red';
    if(color == 'red'){
        console.log('stop');
    }
    if(color == 'yellow'){
        console.log('go slow');
    }
    if(color == 'green'){
        console.log('go');
    }

                                /*else if statement*/
let marks = 75;
    if(marks >= 80){
        console.log("A+");
    }
    else if(marks >= 60){
        console.log("A");
    }
    else if(marks >= 33){
        console.log("A");
    }
    else if(marks < 33){
        console.log("A");
    }

                                /*else  statement*/
let light = 'white';
    if(light == 'red'){
        console.log('stop');
    }
    else if(light == 'yellow'){
        console.log('go slow');
    }
    else if(light == 'green'){
        console.log('go');
    }
    else{
        console.log('borken');
    }

                                /*Practice question*/
let price = 320;
    if(price >= 250 ){
        console.log('size is xl');
    }
    else if(price <= 250 && price >= 200 ){
        console.log('size is L');
    }
    else if(price <= 200 && price >= 100 ){
        console.log('size is M');
    }
    else if(price <= 100 && price >= 50 ){
        console.log('size is s');
    }
    else {
        console.log('Get a size');
    }

                                /*nested if else statement*/
let markss = 85;
    if(markss >= 33){
        console.log('Pass');
        if(markss >= 80){
            console.log('O');
        }
        else{
            console.log('A');
        }
    }
    else{
        console.log('next time');
    }

                                /* Practice question*/ 

let str = 'sple';
    if((str[0]=='a')&& (str.length>3)){ 
        console.log('good str');
    }
    else{
        console.log('bad str');
    }


let num = 12;
    if(num%3 == 0 && (num+1 == 15 ) || (num-1 == 11)){
        console.log('safe');
    }    
    else{
        console.log('unsafe');
    }


                                /* Switch statement */
let colot ="white";
    switch (colot){
        case "red":
            console.log('stop');
        break;
        case "yellow":
            console.log('slow');
        break;
        case "green":
            console.log('go');
        break;    
        default:
            console.log('broken');
}


// alert('danger');
// console.log("thi sis a simle log");
// console.warn('warning');
// console.error('error');
// let vat = prompt('ente name');
// console.log(vat);


firstName = prompt('enter firstname');
lastName = prompt('enter lastname');
total = firstName + " " + lastName;
console.error(total);