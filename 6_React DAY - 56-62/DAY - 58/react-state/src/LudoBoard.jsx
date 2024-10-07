import { useState } from "react";

export default function LudoBoard(){
    let [ moves, setMoves ]= useState({blue : 0 , red : 0, green : 0, yellow : 0});
    let [arr, SetArr ] = useState(["no moves"]);

    let updateBlue = () =>{
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return { ...prevMoves ,  blue : prevMoves.blue + 1 };
    });

//    arr.push("blue moves");
    SetArr(( prevArr) => {
        return[...prevArr, "blue moves"]
    });
    console.log(arr);
};

let updateYellow = () =>{
    console.log(`moves.blue = ${moves.Yellow}`);
    setMoves((prevMoves) => {
        return { ...prevMoves ,  blue : prevMoves.Yellow + 1 };
});
};

    return(
        <div>
            <p> Game begins </p>
            <p>{arr}</p>
            <div className = "Board">

                <p>Blue moves = {moves.blue}</p>
                <button style = {{ backgroundColor : "blue"}} onClick={updateBlue}>+1</button>

                <p>Yellow moves = {moves.Yellow}</p>
                <button style = {{ backgroundColor : "red", textColor : "black" }} onClick = {updateYellow}>+1</button>

                <p>Green moves = {moves.green}</p>
                <button style = {{ backgroundColor : "green"}}>+1</button>

                <p>Red moves = {moves.yellow}</p>
                <button style = {{ backgroundColor : "yellow"}}>+1</button>
            </div>
        </div>
    )
}