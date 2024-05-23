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
para.textContent = ;                        // show all display hide data like 


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
