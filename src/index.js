import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store="">
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
