import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importing components from react-router
import {IndexLink, Link} from 'react-router';

// importing custom components
// import StartStopButton from './components/StartStopButton';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <div className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <h2>Welcome to Pomodoro-In-React</h2>
                    </div>
                </div>


                <div className="pomodoroApp">
                    <div className="content">
                        {this.props.children}
                    </div>

                    <ul className="pills">
                      <li><IndexLink to="/" activeClassName="active">Work</IndexLink></li>
                      <li><Link to="/shortBreak" activeClassName="active">Short Break</Link></li>
                      <li><Link to="/longBreak" activeClassName="active">Long Break</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
