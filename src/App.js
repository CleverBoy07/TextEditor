// import logo from './logo.svg';
import './App.css';
import Champ from './components/Champ';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
   Routes,
  Route,
  // Link
} from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert =(message, type) =>{
    setAlert({
      message : message,
        type : type
    }) 
    setTimeout(() =>{
      setAlert(null);
  }, 1000);
  }
  
  const toggleMode =() =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showalert("Dark mode has been enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enable","success");
    }
  }

  return (
      <>
      <Router>
      <Champ title ="Word utility"  mode ={mode} toggleMode ={toggleMode} />
    <Alert alert ={alert} mode ={mode}/>
    <div className="container my -3">
    < Routes>
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/" element={<TextForm showAlert ={showalert} heading = "Enter the text  to anylyse below"  mode ={mode}/> } />           
    </ Routes>
      {/* <About/> */}
      </div>
      </Router>
      
      
      </>
    );
}

export default App;
