import React, { Component } from 'react'

export class InputBox extends Component {
    render() {

        let submitValue = document.getElementsByClassName("inputBox.value")

        return (
            <div className = "inputBox">
                <form method = "get">
                    <input 
                    type = "text" 
                    id = "entry"
                    placeholder = "add a new entry.."
                    />
                </form>
            </div>
        )
    }
}

export default InputBox
