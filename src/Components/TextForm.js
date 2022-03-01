// import React, {useState} from 'react'

// export default function TextForm(props) {

//     const handleUpClick = () =>{

//         let newText=text.toUpperCase();
//         setText(newText);
//     }
    
//     const handleOnChange = (event) =>{
        
//         setText(event.target.value);
//     }

//     const[text, setText] = useState("");
//   return (
//     <>
//     <div className="mb-3 my-3 container">
//         <label for="exampleFormControlTextarea1" class="form-label">{props.heading}</label>
//         <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
//         <div>
//             <button className="btn btn-primary my-3" onClick={handleUpClick}>Change to UpperCase</button>
//         </div>
//     </div>
//     </>

//   )
// }

// import { text } from 'body-parser'
import React, {useState} from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) =>{
        text = event.target.value;
        setText(text);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());   
    }

    const handleUpLower = () => {
        setText(text.toLowerCase());
    }

    // to capitalize the first character of any string
    const capitalize = () => {
        
        // let firstchar = text.charAt(0); // storing the first char of the string
        // let newText= firstchar.toUpperCase(); // converting that to uppercase
        // setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice

        setText(text.replace(/\b(\w)/g, s => s.toUpperCase()));

    }

    // *Code to Remove Extra spaces - *

    const handleExtraSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    let[text,setText] = useState("");

  return (
    <>
    <div className="mb-3 my-3 container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Change to UpperCase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleUpLower}>Change to LowerCase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={capitalize}>Capitalize First Letter</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Trim Extra Space</button>
            <button className="btn btn-primary my-3 mx-3" onClick={speak}>Read Aloud</button>
        </div>
    </div>
    </>
  )
}

