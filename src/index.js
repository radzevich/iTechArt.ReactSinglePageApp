import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './js/App'
import registerServiceWorker from './js/workers/registerServiceWorker'
import surveySinglePageApp from './js/reducers/index.js'
import configureStore from './js/store/configureStore.js'
import './styles/body.css'

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
