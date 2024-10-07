import { useState } from "react";
import "./helper"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

//export default function Lottery ({n = 3, winningSum =15  }) {
export default function Lottery ({n = 3, winCondition }) {
    let [ticket, setTicket] = useState (genTicket(n));
 // let isWinning = sum(ticket) === winningSum;
    let isWinning = winCondition(ticket);

    let buyTicket = () => {                         // 1st class object by default
        setTicket(genTicket(n));
    };

    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket} />
            <Button action = {buyTicket} />
            <h3>{isWinning && "Congratulations, you won "}</h3>
        </div>
    );
}