import React, { Component } from 'react';
import BoilingVerdict from '../BoilingVerdict/boilingVerdict';
import TemperatureInput from '../TemperatureInput/temperatureInput';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.toCelsius = this.toCelsius.bind(this);
        this.toFarenheit = this.toFarenheit.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        });
    }

    toCelsius(temperature) {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    toFarenheit(temperature) {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) /1000;
        return rounded.toString();
    }

    render() { 
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFarenheit) : temperature;
        return (
        <div>
            <TemperatureInput 
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.toCelsius} />
            <TemperatureInput 
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.toFarenheit} />
            <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>  
        );
    }
}
 
export default Calculator;