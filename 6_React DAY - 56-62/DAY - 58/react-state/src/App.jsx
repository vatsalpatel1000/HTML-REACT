import './App.css'
//import LudoBoard from './LudoBoard'
//import TodoList from "./TodoList";
//import Counter from "./Counter";
//import LikeButton from './LikeButton';
//import Lottry from './Lottery';
//import Ticket from './Ticket';
//import Lottery from './Lottery';
// import Form from './Form';
// import CommentsForm from './CommentsForm';
import counterr from "./counterr";

function App() {
//   let winCondition = (ticket) =>{
//     return ticket.every((num) => num === ticket [0]);        every no is equal to first no.
//     return ticket [0] === 0 ;                                first no is 0
//     return sum(ticket) === 15;                               sum of ticket equal to 05
//   }

  return (
    <counterr>
      {/* <p> State in react</p>
      <LikeButton/> 
      <LudoBoard/>

      <TodoList/>

      <Lottry/>
      <Ticket Ticket = {[0,1,2]}/>
      <Ticket Ticket = {[5,6,7,7,8]}/>
      <Lottery n={3} winningSum ={15} winCondition = { winCondition } />

      <Form/>
      <CommentsForm/> */}
      <counterr/>

    </>
  ); 
}

export default App