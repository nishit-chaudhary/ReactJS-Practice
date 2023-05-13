import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log("Convert to UpperCase clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = () => {
        // console.log("Convert to UpperCase clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleClear = () => {
        setText('')
        props.showAlert("Cleared text", "success");
    }

    const handleExtraSpace = () => {
        let newtext = text.split(/[ ] + /);
        setText(newtext.join(" "))
        props.showAlert("Removed extra spaces from text", "success");
    }

    return (
        <div className="container my-3">
            <div>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> {props.title} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"> </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}> Convert to Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}> Clear Text </button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}> Remove Extra Spaces </button>
                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2 className='my-2' >Text Summary</h2>
                    <p> {text.split(' ').length} words and {text.length} characters </p>
                    <p> {0.008 * text.split(' ').length} mins read </p>
                    <h2>Preview</h2>
                    <p> {text.length > 0 ? text : 'Enter something in the textbox to preview here'} </p>
                </div>
            </div>
        </div>
    )
}

TextForm.propsTypes = {
    title: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    title: "Enter title"
}