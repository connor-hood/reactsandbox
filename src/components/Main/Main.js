import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Matchup from '../Matchup/Matchup';
import Die from '../Die/Die';
import TodoContainer from '../TodoContainer/todoContainer';
import Clock from '../Clock/clock';

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
      <Router>
      <div className='App'>
          <h1 style={{textAlign:'center'}}>React Sandbox</h1>
          <p>Hopefully this nav section works</p>
          <ul>
            <li><Link to={'/matchup'}>Matchup</Link></li>
            <li><Link to={'/dice'}>Custom Random Dice</Link></li>
            <li><Link to={'/clock'}>Clock</Link></li>
          </ul>
          <Switch>
            <Route exact path="/matchup" component={Matchup}>
              <Matchup 
              homeTeam="Team 1"
              awayTeam="Team 2" />
            </Route>
            <Route exact path="/dice" component={Die} />
            <Route exact path="/matchup" component={Matchup} />
          <h4 style={{textAlign: 'center'}}>Demonstration of props being passed into component</h4>
        <h1>Match up of the Week</h1>
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
        
    <hr />
        <Clock />
        </Switch>
      </div>
      </Router>
    )
  }
}

export default Main;