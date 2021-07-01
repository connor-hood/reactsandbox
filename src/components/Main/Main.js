import React, { Component } from 'react';
import Matchup from '../Matchup/Matchup';
import Die from '../Die/Die';

class Main extends Component{
  display(message){
    alert(message);
  }

  render(){
    return(
      <div className='App'>
        <h1>Match up of the Week</h1>
        <Matchup 
        // these are the props that get called in the function
            homeTeam = "Packers"
            awayTeam = "Patnthers"/>
        <Die 
            numberOfSides={22}
            buttonClick={(message) => this.display(message)}
            />
      </div>
    )
  }
}

export default Main;