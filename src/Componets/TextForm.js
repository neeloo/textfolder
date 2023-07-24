import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("upper case was clicked" +text);
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handleLoclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const handleclearclick = () => {
    let newtext = '';
    setText(newtext);
  }

  const handlecopy = () => {
  var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const handleonchange = (event) => {
    // console.log("handle on change");
    setText(event.target.value);
  }
  // const [text, setText] = useState('Enter text hear');
  const [text, setText] = useState('');
  //text="new text"  //wrong way
  //setText("new text")  //correct  way
  return (
    <>
      <div className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonchange} 
          style={{backgroundColor:props.mode==='dark'?'gray':'white' ,color:props.mode==='dark'?'white':'dark'}} id="myBox" rows="8"></textarea>

        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>convert UpperCase</button>
        <button className="btn btn-primary  mx-2" onClick={handleLoclick}>convert LowerCase</button>
        <button className="btn btn-primary  mx-2" onClick={handleclearclick}>Clear text</button>
        <button className="btn btn-primary  mx-2" onClick={handlecopy}>Copy text</button>
  
      </div>

      <div className="container  my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
