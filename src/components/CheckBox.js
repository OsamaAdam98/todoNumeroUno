import React, {Component} from 'react'

class CheckBox extends Component {
    render(){
        return (
            <div className = "todoItem">
                <input 
                    type = "checkbox" 
                    id = {this.props.item.id}
                    checked = {this.props.item.completed}
                    onChange = {() => this.props.handleChange(this.props.item.id)}/>
                <label 
                    htmlFor = {this.props.item.id}
                    style = {{ textDecorationLine: this.props.item.completed ? "line-through" : null }}
                >

                    {this.props.item.entry}
                    
                </label>
            </div>)
    }
}

export default CheckBox