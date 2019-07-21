import React, {Component} from 'react'

class CheckBox extends Component {

    
    render(){
        const entryStyle = {
            textDecorationLine: this.props.item.completed ? "line-through" : null
        }
        return (
            <div className = "container-fluid">
                <div className = "row justify-content-center"> 
                    <div className= "col-4 form-check">
                        <label 
                            htmlFor = {this.props.item.id}
                            style = {entryStyle}
                            className = "form-check-label"
                        >
                            <input 
                                className = "form-check-input"
                                type = "checkbox" 
                                id = {this.props.item.id}
                                checked = {this.props.item.completed}
                                onChange = {() => this.props.handleChange(this.props.item.id)}
                            />

                            {this.props.item.entry}
                            
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckBox