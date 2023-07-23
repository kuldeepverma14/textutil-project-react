import React, { useState } from 'react'
export default function TextForm(props) {
    // const [myState, setMyState] = useState(initialValue);
    const [text, setText] = useState('Enter text here')
    // text(state variable),it's value stores in `useState()` and it is updated by setText
    // const updateState = () => {   //not in use now
    //     setText('New state');
    // };
    //whan u will click on button then these two functions will be executed.
    const upperCase =() => {
        // console.log(`Converted to upperCase`,text)   //value of text`is changed`
        // setText(`text has been changed`)
        const newText = text.toUpperCase()
        setText(newText)//it is used to update the changed the `text` value.
        props.showAlert(`Converted to upperCase`, `success`)
        document.title = 'TextUtils-Upper case';
    }
    const lowerCase =() => {
        const newText = text.toLowerCase()
        setText(newText)//it is used to update the changed the `text` value.
        props.showAlert(`Converted to lowerCase`, `success`)
        document.title = 'TextUtils-Lower case';
    }
    const clearText =() => {
        const newText = ''
        setText(newText)//it is used to update the changed the `text` value.
        props.showAlert(`Text has been cleared`, `success`)
        document.title = 'TextUtils-Text clear';
    }
    // u can use more concepts , visit to text analyser for more concepts  
    const changeHandler =(eventFired) => {
        // console.log(`You will have to use a change handler if something is going to change`)
        setText(eventFired.target.value) //it is used just to make box typeable.
    }

    //to copy text
    const copyText = () => {
        // var copy = document.querySelector('#myBox')
        // copy.select();
        // copy.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges()
        props.showAlert(`Text has been copied to clipboard`, `success`)
        document.title = 'TextUtils-Text copy';
    }

    //to remove extra spaces like `trim` works in js
    const removeExtraSpaces = () => {
        const singleSpace = text.split(/[ ]+/) //it makes an array of all the spaces between two words and remove that spaces.
        setText(singleSpace.join(' ')) //it insert the things whatever u will type in quote like there is a single spaces.
        props.showAlert(`Extra spaces removed`, `success`)
        document.title = 'TextUtils-Remove extra spaces';
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}{ text}</h1>
            <div className="mb-3">
                    {/* <label htmlFor='mybox' className="form-label">Textarea</label> */}
                    {/* here one curly braces for js another for making object */}
                    <textarea className="form-control" style={{ backgroundColor: props.changeMode === 'light' ? 'blue' : 'grey', color: props.changeMode === 'light' ? 'white' : 'red' }} value={text} onChange={changeHandler} id="myBox" rows="8"></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={upperCase}>Convert to Uppercase</button>
                    {/* and mx-3 is for horizontal margin my-3 is for vertical margin. */}
                <button disabled={text.length===0} className="btn btn-primary my-3" onClick={lowerCase}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={clearText}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={copyText}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={removeExtraSpaces}>Remove extra spaces</button>
            </div>
            </div>
            <div className="container">
                <h1>Your text summary:</h1>
                {/* filter means stopping something and element will be stopped when that element proves false after passing through the function inside filter   */}
                {/* if we give single space that space is not being counted it means it has no length */}
                {/* '\s+' means white spaces and new lines  */}
                <p>Total words:{text.split(/\s+/).filter((Element) => {
                    return Element.length != 0
                }).length},Total characters:{text.length}</p> 
                {/* time to read number of words in a minute: at slow rate 125 words and at average rate 300 words */}
                <p>It takes {1 / 125 * text.split(/\s+/).filter((Element) => {
                    return Element.length != 0
                }).length} minute</p>
                {/* <p>It takes {1 / 125 * text.split('b').length} minute</p> not work */}
                <h2>Preview</h2>
                <p>{ text.length>0?text:`Enter something in the preview.`}</p>
           </div>
        </>
    )
}