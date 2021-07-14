import React, { Component } from 'react';

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date() 
        }
    }
    componentDidMount() {
        const oneSecond = 1000;
        this.intervalID = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, oneSecond);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    render() { 
        return ( 
            <div></div>
         );
    }
}
 
export default Clock;