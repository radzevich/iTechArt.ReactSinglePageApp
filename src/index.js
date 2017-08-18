import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import registerServiceWorker from './js/workers/registerServiceWorker';
import './styles/body.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
