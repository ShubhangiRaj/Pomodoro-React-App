import React, { Component } from 'react';

class WorkClock extends Component{
    constructor(props){
        super(props);
        this.state={
            time: 1500
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let newState = this.state.time - 1;
        this.setState({
            time: newState
        });
    }

    format(seconds) {
        let mins = Math.floor(seconds % 3600 / 60);
        let secs = Math.floor(seconds % 3600 % 60);
        let timeFormated = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
        return timeFormated;
    }

    render() {
        return (
            <div>
               <h2 className="componentHeading">{this.format(this.state.time)}</h2>
            </div>
        );
    }
};

export default WorkClock;
