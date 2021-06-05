import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [led1, setLed1] = useState(false);
  const [led2, setLed2] = useState(false);
  const [led3, setLed3] = useState(false);
  const [led4, setLed4] = useState(false);
  const toggle1 = () => setLed1(!led1)
  const toggle2 = () => setLed2(!led2)
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="powerled" />
        <img src="https://hokutodenshi.co.jp/images/photo/photo_HSBRH850F1L.jpg" className="App-board"/>
        <button  className="psw one" onClick={toggle1}></button >
        <button  className="psw two" onClick={toggle2}></button >
        <div className={led1 ? "none":"led one"}/>
        <div className={led2 ? "none":"led two"}/>
        <div className={led3 ? "none":"led three"}/>
        <div className={led4 ? "none":"led four"}/>
      </header>
    </div>
  );
}

export default App;
