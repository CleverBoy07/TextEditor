import React, {useState} from 'react';


// import PropTypes from 'prop-types'
export default function TextForm(props) {
  const handleUpClick =() =>{
    // console.log("Uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  
  const handleDownClick =() =>{
    // console.log("Uppercase was click" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  
  const handleClear =() =>{
    // console.log("Uppercase was click" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text is cleared","success");
  }
  const handleRes =() =>{
    // console.log("Uppercase was click" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Successfully Removed","success");
  }
  
  const handleCopy =() =>{
 
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success");

  }

  const handleOnChange =(event) =>{
    // console.log("On changed");
    setText(event.target.value); 
  }
  const [text, setText] = useState('');
  return (
    <>
    {/* <div className ='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOfChange} id="Mybox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleDownClick}>Convert to LowerrCase</button>
    </div> */}

    <div className ="container" style ={{color :props.mode ==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor :props.mode ==='dark'?'black':'white',
      color :props.mode ==='light'?'black':'white'}} id="Mybox" rows="10"></textarea>
    </div >
    
    <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to UpperCase </button>
    <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleDownClick}> Convert to LowerCase </button>
    <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleClear}> Clear the Text </button>
    <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text </button>
    <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleRes}> Remove Extra Spaces </button>
   
    
    </div>
    <div className="container my-3" style ={{color :props.mode ==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} chraracter</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
