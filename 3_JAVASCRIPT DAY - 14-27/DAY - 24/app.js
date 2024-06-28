// event bubbling 
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelector("li");

div.addEventListener("click",function(){
    console.log('div was clicked');
});

ul.addEventListener("click",function(event){    // when nested element create and internal element console call that all parenet console also called to print, this call event bubbling.
    event.stopPropagation();                    // event.stopPropagation used to stop event bubbling that is when we will click on li or ul their parent console will also worked 
    console.log('ul was clicked');
});

for(li of list){
    li.addEventListener("click",function(){
        console.log('li was clicked');
});
}