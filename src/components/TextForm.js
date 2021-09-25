import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick =()=>{
        console.log('Uppercase is clicked');
        let newText = text.toUpperCase();
        props.showAlert('converted to uppercase','success');

        setText(newText)
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('converted to lowercase','success');
    }
    const handleClClick=()=>{
        let newText = ("");
        setText(newText)
        props.showAlert('converted to cleared','success');


    }
    const handleOnChange =(event)=>{
        console.log('on change');
        setText(event.target.value);
    }
    const [text, setText]=useState("");
    const handleCopy =()=>{
         
        navigator.clipboard.writeText(text);
         props.showAlert('text has been copied','success');

    }
    const handleExtraSpace =()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('removed extra spaces','success');


    }

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'
            }}>
        <h1>{props.heading} </h1>
         
             <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'
            ,color: props.mode==='dark'?'white':'#042743'
        }} id="myBox" rows="8"></textarea>

             </div>
             <button disabled={text.length===0}  className="btn btn-primary but mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
             <button disabled={text.length===0} className="btn btn-primary but mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
             <button disabled={text.length===0} className="btn btn-primary but mx-1 my-1" onClick={handleClClick}> Text Remove</button>
             <button disabled={text.length===0} className="btn btn-primary but mx-1 my-1" onClick={handleCopy}>Text copy</button>
             <button disabled={text.length===0} className="btn btn-primary but mx-1 my-1" onClick={handleExtraSpace}>Remove Extra space</button>
             
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'
            }}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes  read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:'nothing to preview'}</p>
        </div>
        </>
       
    )
}
 