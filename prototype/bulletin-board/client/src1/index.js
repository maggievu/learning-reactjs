import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Board from './Board';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
