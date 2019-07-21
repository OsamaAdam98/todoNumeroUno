import React, {Component} from 'react'

class CheckBox extends Component {

    
    render(){
        const entryStyle = {
            textDecorationLine: this.props.item.completed ? "line-through" : null,
            color: this.props.item.completed ? "grey" : null            
        }
        return (
            <div>
                <ul className = "list-group">
                    <li className = "list-group-item list-group-item-action"
                        onClick={() => this.props.handleChange(this.props.item.id)}
                    >
                        <label 
                            htmlFor = {this.props.item.id}
                            style = {entryStyle}
                            className = "chBoxLabel"
                        >
                            <input 
                                className = "chBox"
                                type = "checkbox" 
                                id = {this.props.item.id}
                                checked = {this.props.item.completed}
                                onChange = {() => this.props.handleChange(this.props.item.id)}
                            />

                            {this.props.item.entry}
                            
                        </label>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CheckBox