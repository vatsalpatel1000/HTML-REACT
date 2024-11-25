// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from '@mui/material/TextField'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import { Alert } from '@mui/material';

function App() {
  let handleClick = () => { 
    console.log("button was clicked!");
  };

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon/>} >
        Delete
      </Button>
      <Button variant="contained" onClick={handleClick} color="success" size="small" disabled>
        Click me2!
      </Button>
      <Alert serverity="error">Delete option is given</Alert>
    </>
  );
}


export default App;
