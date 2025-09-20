import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reduce';

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunk)) //Esta línea es para poder hacer peticiones a un server
);

export default store;