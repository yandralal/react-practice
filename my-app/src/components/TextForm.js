import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpClick = () => {
        const newUpperCase = text.toUpperCase();
        setText(newUpperCase);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text}
                onChange={handleOnChange} id="myTextArea" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
