import React, { Component } from 'react';

// class component
class Die extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
        }
    }
    componentDidMount(){
        let result = this.setDieValue();
        this.setState({
            value: result,
            numberOfSides: this.props.numberOfSides
        });
    }
    rollClick(){
        let newResult = this.setDieValue();
        this.setState({
            value: newResult
        });
    }
    sideButtonClick(){
        let sideResult = this.setSideInput();
        this.setState({
            numberOfSides: sideResult
        });
    }
    setDieValue(){
        return Math.floor(Math.random() * this.props.numberOfSides);
    }
    getUserInput(){
        return prompt("What is your favorite movie?");
    }
    getSideInput(){
        
    }
    render(){
        return (
            <div>
            <p style={{textAlign: 'center'}}>Demonstration of functions from components being passed back up from child</p>
                {/*this.props.numberOfSides since numberOfSides comes in from Main now */}
                <h1>Die number of sides: {this.props.numberOfSides}</h1>
                <h2>Die value: {this.state.value}</h2>
                {/* this is how you call props in from outside this file in main.js */}
                <button onClick={() => this.props.buttonClick(this.getUserInput())}>
                    Random Movie Callback
                </button>
                <button onClick={() => this.props.sideButtonClick(this.getSideInput())}>
                    Set Side Count
                </button>
                {/* this is how you call functions defined above^ */}
                <button onClick={() => this.rollClick()}>
                    Roll the dice
                </button>
            </div>
        )
    }
}

export default Die;