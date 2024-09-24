export default function Counter(){
    let count = 0;

    function inCount(){
        count += 1;
        console.log(count); 
    }
    return(
        <div>
            <h3>Count = {count }</h3>
            <Button onClick = {inCount}> increase count </Button>
        </div>
    ) 
} 