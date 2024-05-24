// PRACTICE
// a <p> with red text that say "Hey i m red!"

let para1= document.createElement('p');             //create attribute
para1.innerText = 'hey i am red';
document.querySelector('body').append(para1);       // append attribute on body

para1.classList.add('.red');                        // add html/ css class name with created attribute

// a <h1> with blue text that say "Hey i m blue!"

let h3= document.createElement('h3');             //create attribute
h3.innerText = 'hey i am blue';
document.querySelector('body').append(h3);       // append attribute on body 

h3.classList.add('.blue');

//  a <div> with a black border and pink background color with the following elements inside of it:
//  another <h1> that says 'i m in div'
//  a <p> that says 'me too';

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

h1.innerText = 'i m in div';
p.innerText = 'MEE TOO';

div.append(h1);
div.append(p);
div.classList.add('box');                       // add css class to with attribute

document.querySelector("body").apped(div);

//Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me'

let btn  = document.createElement('button');
let input  = document.createElement('input');
btn.innerText  = 'click me';

document.querySelector('body').append(input);
document.querySelector('body').append(button);


//Add following attributes to the element : 
//Change placeholder value of input to "username"
//Change the id of button to "btn'

input.setAttribute("placeholder","username");
button.setAttribute("id","btn");


// Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.
button = document.querySelector("button");
button.classList.add("buttonstyle");

//  Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

let h1 = document.createElement('h1');
h1.innerText="DOM Practice";
ducument.querySelector('body').apped(h1);

// Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.
let p = document.createElement("p") ;
p.innerHTML =" Apna College <b>Delta</b> Practice";
ducument.querySelector('body').apped(p);

