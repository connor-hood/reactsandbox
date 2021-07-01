import React from 'react'

// functional component
const Matchup = (props) => {
    return (
        <span>
            {/* props comes from ^ there and are defined when the component gets called */}
            <h1>{props.homeTeam} vs. {props.awayTeam}</h1> 
        </span>
    )
}

export default Matchup;