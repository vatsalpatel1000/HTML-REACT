btns = document.querySelectorAll("button");

for(btn of btns){
btn.addeventlistner("click",()=>{
    console.log('button is clicked');
})}