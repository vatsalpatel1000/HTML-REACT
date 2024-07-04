//onclick event
// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function(){                                   // we can print multiple but using this method we can'nt call multile fucntion so we use event listners
//     console.log('cutton was clicked');
//     console.log('HIIIIII');
// }


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
// btn.onmouseenter = function(){               
//     console.log('you enter button');
// }

// event listners                                           use for call multiple fucntion on one event

// let btn = document.querySelector('button');
// console.dir(btn);
// btn.addEventListener("click",sayhello);
// btn.addEventListener("click",sayname);

// function sayhello(){
//     alert('hello');
// }

// function sayname(){
//     alert('vatsal');
// }


// This in event listners 

// let btn = document.querySelector('button');
// btn.addEventListener("mouseenter",function(){
//      console.log(this);
//      this.style.backgroundColor = 'blue';
// });

// let h1 = document.querySelector('h1');
// h1.addEventListener("mouseenter",function(){
//     // console.log(this);
//     // this.style.backgroundColor = 'blue';
// });

//let h3= document.querySelector('h3');
// h3.addEventListener("mouseenter",function(){
//     // console.log(this);
//     // this.style.backgroundColor = 'blue';
// });

// function colorchange(){
//     console.dir(this.innertext);
//     this.style.backgroundColor = 'blue';
// }


// btn.addEventListener("mouseenter",colorchange);
// h1.addEventListener("mouseenter",colorchange);
// h3.addEventListener("mouseenter",colorchange);


// keyboard event

// let int = document.document.querySelector("input");
// let btn1= document.querySelector('button');

// int.addEventListener('keydown',function(event){
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
//     console.log("key was pressed");
// })


// practice
// let int = document.document.querySelector("input");

// int.addEventListener("keydown",function (event){
//     console.log("code",event.code);
//     if(event.code == "keyU"){
//         console.log("charecter moves up");
//     }else if(event.code == "KeyD"){
//         console.log("charecter moves down");
//     }
//     else if(event.code == "KeyL"){
//         console.log("charecter moves Left");
//     }
//     else if(event.code == "KeyR"){
//         console.log("charecter moves Right");
//     }
//     }
// });


// Form Event

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();                     // to stop form redirect to action page
    alert('form submitted');

    // let inp = document.querySelector('input');
    // console.log(inp);                       // print code of element
    // console.dir(inp);                       // print tag of element
    // console.dir(inp.innerText);             // not show anything,  data store in value so 
    // console.dir(inp.value);


//  Extracting from data      
//     let user = document.querySelector('#user');
//     let pass = document.querySelector('#pass');
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hi ${user.value}, your password is set tot ${pass.value}`);
// 


// More event 
    let user = document.querySelector('#user');
     user.addEventListener("change", function () {          // give differace betweem initial stage between final stage 
        console.log("input change=", this.value);           // Value change  when the button press and click outside the input box . CHANGE EVENT trace the santence and click outside the input box and give as output.
        console.log("final change=", user.value);
    });



    user.addEventListener("input", function () {          // give differace betweem initial stage between final stage 
        console.log("input input=", this.value);          // Value change execta afte the press button. INPUT EVENT trace the key press and give as output.
        console.log("final input=", user.value);
    });    
});

