import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import App1 from './app1/pages';
import App2 from './app2/pages';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/App1'>
                    <App1 />
                </Route>
                <Route path='/App2'>
                    <App2 />
                </Route>
            </Switch>
        </Router>

    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
