// import React from 'react'
import React, { useState } from 'react';

export default function TextForm(props) {
  const [btnstyle,setbtnStyle] = useState("btn")
  const[style,setMystyle] = useState({
    color : 'white',
    backgroundColor : 'gray'
  })
  const toggleStyle=()=>{
    if(style.color === 'white'){
    setMystyle({
      color : 'gray',
      backgroundColor : 'white'
    }) 
    setbtnStyle("Enable gray Mode");
    
    }else{
      setMystyle({
        color : 'white',
    backgroundColor : 'gray'
      })
      setbtnStyle("Enable light Mode");
    }

  }

  const [text,setText] = useState("");
  const handleUpClick=()=>{
    // console.log("up click")
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("This is UpperCase","success")
  }
  const handleLower=()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("This is LowerCase","success")
   
  }
  const copyText = () => {
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Text Done","success")
}
  const clearButton=()=>{
    let newtext = '';
    setText(newtext)
    props.showAlert("All clear Text","success")


  }
  const handleOnChange=(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
 
    return (
   <>
   <div className=" container my-3" style={style}>
    <h1>This is Text Area</h1>
<div className="mb-3">
  <textarea className="form-control"  style={style} id="mybox" onChange={handleOnChange} value={text} rows="10"></textarea>
</div>
<div className="container">
  <button className='btn btn-dark' onClick={handleUpClick}>Convert To UpperCase</button>
  <button className='btn btn-dark mx-2'onClick={handleLower}>Convert To LowerCase</button>
  <button className='btn btn-dark mx-2'onClick={copyText}>Copy Text</button>
  <button className='btn btn-dark mx-2'onClick={clearButton}>Clear</button>
  <h1>This is Summary Text</h1>
  <p>words {text.split(" ").length} chararters{text.length}</p>
  <p>Minutes {0.008*text.split(" ").length}</p>
  <h2>preview</h2>
</div>
</div>
<div className="container">
<button className='btn btn-dark my-2 'onClick={toggleStyle}>{btnstyle}</button>
</div>

   </>
  )
}
