import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpperClick = () => {
        const newUpperCase = text.toUpperCase();
        setText(newUpperCase);
    }
    const handleLowerClick = () => {
        const newUpperCase = text.toLowerCase();
        setText(newUpperCase);
    }
    const handleClearClick = () => {
        setText('');
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" value={text}
                    onChange={handleOnChange} id="myTextArea" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            </div> 
            <div className="container my-3">
                <h4>Your Text Summary</h4>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                <p>Preview</p>
                <h4>{text}</h4>
            </div>       
        </>
    )
}
