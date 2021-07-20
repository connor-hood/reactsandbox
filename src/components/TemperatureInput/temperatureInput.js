import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}:</legend>
                    <input value={temperature}
                            onChange={this.handleChange}/>
                </fieldset>
            </div>
        )
    }
}

export default TemperatureInput;