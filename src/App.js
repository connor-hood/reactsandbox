import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Matchup from './components/Matchup/Matchup';
import Die from './components/Die/Die';
import TodoContainer from './components/TodoContainer/todoContainer';
import Clock from './components/Clock/clock';

import './App.css'

class App extends Component{
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
      <div>
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
              homeTeam="Falcons"
              awayTeam="Bucks" />
            </Route>
            <Route exact path="/dice" component={Die}>
              <Die 
              numberOfSides={this.state.numberOfSides}
              buttonClick={(message) => this.display(message)}
              sideButtonClick={() => this.chooseNewNumberOfSides()}/>
            </Route>
            <Route exact path="/clock" component={Clock}>
              <Clock />
            </Route>
          <h4 style={{textAlign: 'center'}}>Demonstration of props being passed into component</h4>
    
    {/* number of sides gets passed down to Die from state */}
    <h4 style={{textAlign: 'center'}}>Demonstration of functions from components being passed back up from child</h4>
    
    <h4 style={{textAlign: 'center'}}>React tutorial to build todo list</h4>
        
    
        
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;