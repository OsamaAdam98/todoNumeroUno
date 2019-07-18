import React, { Component } from 'react'

export class InputBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            entry: "",
            id: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
                [event.target.name]: event.target.value,
                id: this.props.todos.length
            }
        )
    }

    handleSubmit(event) {
        this.props.newEntry(this.state.entry, this.state.id)
        event.preventDefault()
    }


    render() {

        return (
            <div className = "inputBox">
                <form onSubmit = {this.handleSubmit}>
                    <input 
                    type = "text" 
                    name = "entry"
                    value = {this.state.entry}
                    placeholder = "add a new entry.."
                    onChange = {this.handleChange}
                    autoFocus = {true}
                    />
                </form>
            </div>
        )
    }
}

export default InputBox
