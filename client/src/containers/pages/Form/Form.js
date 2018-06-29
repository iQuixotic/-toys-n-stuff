import React, {Component} from "react";
import './style.css';

// let holding = [];

class Form extends Component {
constructor(props) {
    super(props)
    this.state = {
        inputVal: '',
        selectedField: this.props.id,
        shouldSubmit: false,
    }
}

selectFieldHandler = () => {
    console.log({[this.state.selectedField]: this.state.inputVal})
}

inputChangeHandler = event => {
    this.setState({ 
        inputVal: (event.target.value),
    })
    let data = {
        [this.state.selectedField]: this.state.inputVal
    }
    console.log(data)
}

    render() {
        return(
            <div>

            </div>
        );
    }
}

export default Form;