let smallimages = document.getElementsByClassName("oldImg");

for(let i = 0 ; i<smallimages.length ; i++){
    smallimages[i].src = "/Assets/Spider-Man.png";
    console.log(`value of image no, ${i} is changed`);
}


document.getElementsByTagName("p")[0] = 'abc';

console.log(document.querySelector('h1'));
console.log(document.querySelector('#description'));
console.log(document.querySelector('.oldImg'));
console.log(document.querySelector("div a "));
console.log(document.querySelectorAll("div a "));


let para = document.querySelector('p');
para.innerText='abc<b>bbbbb</b>'            // screen text on display
para.innerHTML='abc<b>bbbbb</b>'            // Html index page 
//para.textContent = ;                        // show all display hide data like 


// Manipulation attributes

let img = document.querySelector("mainImg");
img.getAttribute(id);
img.setAttribute("id", 'spiderman')


// Manipulate style
let links = document.querySelectorAll('.pubInfo a') ;

for(let i=0; i<links.length;i++ ){
    links[i].style.color= 'yellow';
}

//classlist property

list.heading = document.querySelector(h1);
heading.classlist.add('green');                 //create class for h1 name with green
heading.classlist.remove('green');              //delete class for h1 name of green
heading.classlist.contains('green');            //check class name of green fi its there than will give true
heading.classlist.toggle('green');              //if green classname is already create than it will delete and if its not there than create it with green classname 


// Navigation on page 

let h4 = document.querySelector('h4');
h4.parentElement;   //box
let box = document.querySelector('.box');  
box.children;        //h4,ul
box.childElementCount
let ul = document.querySelector('ul');
ul.parentElement;
ul.childElementCount;
ul.children
ul.children[1];
ul.children[1].nextElementSibling;


// adding element on page 

document.createElement('p');
let newp=document.createElement('p');
console.dir(newp);
newp.innerText = "hi, i am newp";
consosle.dir(newp);
let body1 = document.querySelector('body');
body1.appendChild(newp);

let box1 = document.querySelector('.box1');
box.appendChild(newp);

let = document.createElement('button');
console.dir(btn);
btn-innertext = 'click me';
box.appendChild(btn);
new.append('this is new text');
new.append(btn);
new.append('do not this btn');

box.prepend(newp);

let btn = document.createElement('button');
btn.innerHTML='new button';
let p = document.querryselector('p');
p.insertadjacementelement('beforebegin',btn);
p.insertadjacementelement('afterbegin',btn);
p.insertadjacementelement('beforeend',btn);
p.insertadjacementelement('afterend',btn);


//remove elements

let body = document.querySelector('body');
body.removeChild(btn);
btn.remove();
p.remove();