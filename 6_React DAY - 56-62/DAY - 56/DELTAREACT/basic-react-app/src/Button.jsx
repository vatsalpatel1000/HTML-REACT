
function printHello(event){
    console.log("hello");
    console.log(event);         // print default event object 
}

function printbye(){
    console.log("bye");
}

export default function Button(){
    return(
    <div>
        <button onClick = {printHello} >Click me </button>
        <p onMouseOver  = {printbye}>vatsal</p>                 {/* mouserOver => onMouseOver */}
    </div>)
} 