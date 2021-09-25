import React,{ useState } from 'react';

import './App.css';
// import About from './components/About.js';
import Navbar from './components/Navbar.js';

import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  // const removeBodyClass=()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-secondary')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  // }
   
      
  const toggleMode = (cls)=>{
  
  //   removeBodyClass();
  //   // document.
  // document.body.classList.add('bg-'+cls)
    if ( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('dark mode has been enabled','success');
      document.title='textUtils - dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('light mode has been enabled','success');
      document.title='textUtils - light mode';

    }
  }
  return (
     <>
    {/* <Router>  */}
{/* <Navbar title='home' aboutText='about' /> */}
<Navbar title='Text Utils' mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
{/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About mode={mode}   /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <TextForm heading="enter the text to analyse" showAlert={showAlert} mode={mode}/>
          {/* </Route>
          </Switch>  */}
 </div>
 {/* </Router> */}

 
   </>
  );
}

export default App;
