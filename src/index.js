import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
, document.getElementById('root'));


