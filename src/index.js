import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// import  reducer from './reducers'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import App from './App';
import allReducers from "./reducers";
import WebPage from './components/WebPage'

//
// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(thunk)
//     ));
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//    document.getElementById('root'));

//////////////////////
const store = createStore(allReducers);
ReactDOM.render(
    <Provider store={store}>
        <WebPage />
    </Provider>,
   document.getElementById('root'));
registerServiceWorker();