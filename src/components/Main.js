import React, {Component} from 'react'
import CheckBox from "./CheckBox"
import todosData from "./todosData"
// #todo
//import InputBox from './InputBox';

class Main extends Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        //#todo
        //this.newEntry = this.newEntry.bind(this)
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
    // #todo: add an inputbox event handler
    /*
    newEntry(textEntry) {
        console.log("Key hit")
        this.setState(
            (prevState) => {
                prevState.todos.push(
                    {
                        id: 3,
                        entry: textEntry,
                        completed: false
                    }
                )
                return prevState
            }
        )
    }
    */
    render(){
        const checkBoxComponent = this.state.todos.map(item => 
            <CheckBox 
            key = {item.id} 
            item = {item}
            handleChange = {this.handleChange}/>)

        return (
            <div className = "todoList">
                {checkBoxComponent}
                {/* #todo add inputBox */}
                {/*<InputBox newEntry = {this.newEntry}/>*/}
            </div>
        )
    }
}

export default Main
