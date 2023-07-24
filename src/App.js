//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './Componets/About';
import Navbar from './Componets/Navbar';
import TextForm from './Componets/TextForm';
import Alert from './Componets/Alert';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
  }
    const togglemode=()=>{
      if(mode==='light'){
        setmode('dark')
        document.body.style.backgroundColor='gray';
        showalert("dark mode is enable","succes");
      }
      else{
        setmode('light')
        document.body.style.backgroundColor='light';
        showalert("light mode is enable","succes");
      }

  }

  return (
    <>
      {/*  change navbar using props */}
      {/* <Navbar title="TextUtil" abouttext=" About Textutil" /> */}

      {/* chane name of title and navbar according to us */}
      {/* <Navbar /> */}

      <Navbar title="TextUtil"  mode={mode}  togglemode={togglemode}/>
      <Alert   alert={alert}/>
      <div className="container  my-3"  >
        <TextForm heading=" Enter the text of analyze below"   mode={mode}/>

      {/* <About/> */}

      </div>

    </>


  );
}

export default App;
