import React, { Component } from 'react'

class InputBox extends Component {

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
        const {name, value} = event.target
        this.setState({
                [name]: value,
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
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                        className = "form-control inputBox"
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
