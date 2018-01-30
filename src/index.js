import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)
    ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
   document.getElementById('root'));
registerServiceWorker();