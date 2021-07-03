import React, { Component } from 'react';
import Matchup from '../Matchup/Matchup';
import Die from '../Die/Die';
import TodoContainer from '../TodoContainer/todoContainer';

import "../../App.css"

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfSides: null
        }
    }
  display(message){
    alert(message);
  }

  chooseNewNumberOfSides(){
      let sideAnswer = prompt("How many sides do you want");
      this.setState({
          numberOfSides:sideAnswer
      })
  }

  render(){
    return(
      <div className='App'>
          <h1 style={{textAlign:'center'}}>React Sandbox</h1>
          <h4 style={{textAlign: 'center'}}>Demonstration of props being passed into component</h4>
        <h1>Match up of the Week</h1>
        <Matchup 
        // these are the props that get called in the function
            homeTeam = "Packers"
            awayTeam = "Patnthers"/>
    <hr />
    {/* number of sides gets passed down to Die from state */}
    <h4 style={{textAlign: 'center'}}>Demonstration of functions from components being passed back up from child</h4>
        <Die 
            numberOfSides={this.state.numberOfSides}
            buttonClick={(message) => this.display(message)}
            sideButtonClick={() => this.chooseNewNumberOfSides()}
            />
    <hr />
    <h4 style={{textAlign: 'center'}}>React tutorial to build todo list</h4>
        <TodoContainer />
      </div>
    )
  }
}

export default Main;