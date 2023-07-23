import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  // Switch,
  Route,            
  // Link,
  Routes,
} from "react-router-dom";
import React,{useState} from 'react';
import Alert from './components/Alert';
import './App.css';

// let a =`kd` 
 function App() {
  const [mode,setMode] = useState(`light`) //initial is important other effect wiill be shown after use of button. 
   const [text, setText] = useState(`Enable dark mode `)
   
   const removeClassList = () => {
     document.body.classList.remove(`bg-warning`)
     document.body.classList.remove(`bg-success`)
     document.body.classList.remove(`bg-danger`)
     document.body.classList.remove(`bg-info`)
   }
   const toggleFunc = (cls) => {
     console.log(cls)
     removeClassList()
     document.body.classList.add(`bg-${cls}`)
    if (mode === `light`) {
      setMode(`dark`)
      setText(`Enable light mode`)
      document.body.style.backgroundColor = `grey`
      showAlert(`Dark mode has been inserted`, `success`)
      document.title = 'TextUtils-Dark mode';
      // setInterval(() => {
      //   document.title = 'Download textutils';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils is text editor';
      // }, 1500);
    }
    else {
      setMode(`light`)
      setText(`Enable dark mode`)
      document.body.style.backgroundColor = `white`
      document.body.style.color = `black`
      showAlert(`Light mode has been inserted`, `success`)
      document.title = 'TextUtils-Light mode';
    }
  }
  const[alert,setAlert] = useState(null)
  const showAlert = (message,typ) => {
    setAlert({
      msg: message,
      type:typ
    })
    setTimeout(()=>{
     setAlert(null)
    },3000)
  }
  return (
    <>
       {/* <Router> */}
      {/* <Navbar /> */}
      <Navbar title='Navbar' home="Home" printText = {text} changeMode={mode} toggleMode ={toggleFunc} />
      {/* container is the className ,my-3 is the class for margin from above in bootstrap */}
        <Alert alert={alert} />
      <div className="container my-3">
        {/* <Alert alertText = 'This is alert'/> */}
          {/* <Route exact path="/Textform"> */}
          <About />
          <TextForm heading='Enter the text ' changeMode={mode} showAlert={showAlert} />
          {/* </Route> */}
          {/* <Routes> */}
         {/* <Route path='/About' component={About}/> */}
         {/* <Route path='/Textform' component={TextForm}/> */}
          {/* </Route>  */}
        {/* </Routes> */}
      </div>
      {/* </Router>  */}
    </>
  );
}


export default App;
