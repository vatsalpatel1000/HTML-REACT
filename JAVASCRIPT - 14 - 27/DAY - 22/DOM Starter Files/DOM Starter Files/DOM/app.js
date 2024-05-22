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
para.innerText='abc<b>bbbbb</b>'
para.innerHTML='abc<b>bbbbb</b>'
