import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Matchup from './components/Matchup/Matchup';
import Die from './components/Die/Die';
import PracticeStateHook from './components/PracticeStateHook/practiceStateHook';
import PracticeEffectHook from './components/PracticeEffectHook/practiceEffectHook';
import PracticeEffectHookTwo from './components/PracticeEffectHook2/practiceEffectHook2';
import Random from './components/Random/random_v1';
import Tag from './components/Tag/tag_v1';
import Calculator from './components/Calculator/calculator';

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

   onMouseOver = event => {
    const el = event.target;
    let colorhex = [
      "#7AF377",
      "#3498DB",
      "#F1C530",
      "#F29C29",
      "#8E44AD",
      "#4AA086",
      "#E74C3C",
      "#65CC71",
      "#D3541B",
      "#EB4367",
      "#74F7D9",
      "#DDA8FC"
    ];
    el.style.color = colorhex[Math.floor(Math.random() * 12)];
  };

  onMouseOut = event => {
    const el = event.target;
    let black = "#000000";
    el.style.color = black;
  }

  render(){
    return(
      <Router>
      <div>
          <h1 style={{textAlign:'center'}}>React Sandbox</h1>
          <p>Select Component to play with</p>
          <ul onMouseEnter={event => this.onMouseOver(event)} onMouseOut={event => this.onMouseOut(event)}>
            <li><Link to={'/matchup'}>Matchup</Link></li>
            <li><Link to={'/dice'}>Custom Random Dice</Link></li>
            <li><Link to={'/temp'}>Temperature Calculator</Link></li>
            <li><Link to={'/statehook'}>useState hook example</Link></li>
            <li><Link to={'/effecthook'}>useEffect hook example</Link></li>
            <li><Link to={'/effecthooktwo'}>useEffect hook example #2</Link></li>
            <li><Link to={'/gifs'}>Gif Generator</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/matchup" component={Matchup}>
              <Matchup 
              homeTeam="My mind"
              awayTeam="My happiness" />
            </Route>
            <Route exact path="/dice" component={Die}>
              {/* number of sides gets passed down to Die from state */}
              <Die 
              numberOfSides={this.state.numberOfSides}
              buttonClick={(message) => this.display(message)}
              sideButtonClick={() => this.chooseNewNumberOfSides()}/>
            </Route>
            <Route exact path="/temp" component={Calculator}>
              <Calculator />
            </Route>
            <Route exact path="/statehook" component={PracticeStateHook}>
              <PracticeStateHook />
            </Route>  
            <Route exact path="/effecthook" component={PracticeEffectHook}>
              <PracticeEffectHook />
            </Route>   
            <Route exact path="/effecthooktwo" component={PracticeEffectHookTwo}>
              <PracticeEffectHookTwo />
            </Route>     
            <Route exact path="/gifs" >
              <Random />
              <Tag /> 
            </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;