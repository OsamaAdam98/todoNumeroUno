import React, {Component} from 'react'
import CheckBox from "./CheckBox"
import todosData from "./todosData"
import InputBox from './InputBox';

class Main extends Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.newEntry = this.newEntry.bind(this)
        this.state = {
            todos: todosData
        }
    }

    handleChange(id) {
        this.setState(
            prevState => {
                const updatedState = prevState.todos.map(
                    todo => {
                        if(todo.id === id)
                            todo.completed = !todo.completed
                        return todo
                    }
                )
                return {todos: updatedState}
            }
        )
    }

    newEntry(textEntry, itemId) {
        this.setState(
            (prevState) => {
                const updatedState = prevState.todos.concat(
                    {
                        id: itemId,
                        entry: textEntry,
                        completed: false
                    }
                )
                return {todos: updatedState}
            }
        )
    }
    
    render(){
        const checkBoxComponent = this.state.todos.map(item => 
            <CheckBox 
                key = {item.id} 
                item = {item}
                handleChange = {this.handleChange}
            />)

        return (
            <div className = "container-fluid">
                <InputBox 
                    newEntry = {this.newEntry}
                    todos = {this.state.todos}
                />
                {checkBoxComponent}
            </div>
        )
    }
}

export default Main
