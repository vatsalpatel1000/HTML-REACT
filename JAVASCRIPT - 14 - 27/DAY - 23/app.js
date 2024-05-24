//onclick event
let btn = document.querySelector('button');
console.dir(btn);

btn.onclick = function(){                                   // we can print multiple but using this method we can'nt call multile fucntion so we use event listners
    console.log('cutton was clicked');
    console.log('HIIIIII');
}


// OR
// function sayhello(){
//     alert('hello');
// }

// btn.onclick = sayhello;


//multiple buttion

// let btns = document.querySelectorAll('button');

// for(btn for btns){
//     btn.onclick = sayhello;     call sayhello function
// }


//onmouseenter event
btn.onmouseenter = function(){               
    console.log('you enter button');
}

// event listners                                           use for call multiple fucntion on one event

let btn = document.querySelector('button');
console.dir(btn);
btn.addEventListener("click",sayhello);
btn.addEventListener("click",sayname);

function sayhello(){
    alert('hello');
}

function sayname(){
    alert('vatsal');
}