import React from 'react'

// functional component
const Matchup = (props) => {
    return (
        <span>
            {/* props comes from ^ there and are defined when the component gets called */}
            <h1>Today's Matchup!!!</h1>
            <h3>{props.homeTeam} vs. {props.awayTeam}</h3> 
        </span>
    )
}

export default Matchup;