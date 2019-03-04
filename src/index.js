import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {urls} from "./utils/urlUtils";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Route path={urls.home.path} component={App}/>
    </Router>
    , document.getElementById('root'));

registerServiceWorker();