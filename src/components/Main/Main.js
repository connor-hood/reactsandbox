import React, { Component } from 'react';
import Matchup from '../Matchup/Matchup';
import Die from '../Die/Die';

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
        <h1>Match up of the Week</h1>
        <Matchup 
        // these are the props that get called in the function
            homeTeam = "Packers"
            awayTeam = "Patnthers"/>
    {/* need to figure out how to update number of sides with get side value button */}
        <Die 

            numberOfSides={this.state.numberOfSides}
            buttonClick={(message) => this.display(message)}
            sideButtonClick={() => this.chooseNewNumberOfSides()}
            />
      </div>
    )
  }
}

export default Main;