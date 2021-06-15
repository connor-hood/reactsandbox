import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Connor',
            mood: 'Radical'
        }
    }

    render() {
        return (
            <div>
                <h1>My name is {this.state.name} and I'm feeling {this.state.mood}</h1>
            </div>
        )
    }
}

export default Greeting;