import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// importing the components from react-router
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

// importing custom components
import App from './App';
import WorkClock from './components/WorkClock';
import ShortBreakClock from './components/ShortBreakClock';
import LongBreakClock from './components/LongBreakClock';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
	    	<IndexRoute component={WorkClock}/>
	  		<Route path="shortBreak" component={ShortBreakClock} />
	  		<Route path="longBreak" component={LongBreakClock} />
	  	</Route>
	</Router>,
	document.getElementById('root')
);
