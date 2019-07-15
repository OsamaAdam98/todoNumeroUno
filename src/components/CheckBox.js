import React, {Component} from 'react'

class CheckBox extends Component {
    render(){
        return (
            <div className = "todoItem">
                <input 
                    type = "checkbox" 
                    value = "toggler"
                    checked = {this.props.item.completed}
                    onChange = {() => this.props.handleChange(this.props.item.id)}/>
                <label 
                    for = "toggler"
                    style = {{ textDecorationLine: this.props.item.completed ? "line-through" : "" }}>

                    {this.props.item.entry}
                    
                </label>
            </div>)}
}

export default CheckBox