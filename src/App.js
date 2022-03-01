// import logo from './logo.svg';
import React, {useState} from 'react'


import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';

function App() {

  const handleClick = () => {
    if(mode === 'dark') {
      setMode('light');
      setTextColor('dark');
      setBtn('Enable Dark Mode');
    }
    else {
      setMode('dark');
      setTextColor('light');
      setBtn('Enable Light Mode');
  }
}

  const[mode,setMode] = useState('light');
  const[TextColor,setTextColor] = useState('dark');
  const[btn,setBtn] = useState('Enable Dark Mode');
  return (
    <>
     <Navbar title = "TextUtils" mode = {mode} handleClick = {handleClick} TextColor = {TextColor} btn = {btn}/>
     <TextForm heading = "Enter Text Here"/>
    </>
  );
}

export default App;
