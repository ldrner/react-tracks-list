import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

// import Navbar from './Navbar';
// import Main from "./Main";
// import registerServiceWorker from './registerServiceWorker';
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from 'redux-thunk'; // <- библиотека для написания асинхронных методов
// import { Provider } from "react-redux";
// import { Router } from "react-router";
// import { syncHistoryWithStore } from "react-router-redux";  // <- библиотека-обертка над react-router и hashHistory
// import createBrowserHistory from "history/createBrowserHistory";// <- библиотека для работы с историей браузера
// import createHashHistory from "history/createHashHistory";// <- библиотека для работы с историей http://host/#/

// import reducers from "./reducers"; // композиция редьюсеров

// const store = createStore(
  // reducers,
  // undefined,
  // composeWithDevTools(applyMiddleware(thunk)) // <- улучшеный метод compose, который автоматически добавляет devtools ко всему, что передается в аргументы
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // <- переписываем с использованием composeWithDevTools
// ); // <-reduser, чистая ф-ция, которая берет предыдущее состояние и экшн и возвращает новое сост-е. Не модифицирует данные

// Create a history of your choosing (we're using a browser history in this case)
// const createdHistory = createHistory();
// const browserHistory = createBrowserHistory();
// const history = syncHistoryWithStore(browserHistory, store); // TODO: этот кусок говна не работает - текущий урл и параметры синхронизуются со стором, но контент вьюхи не меняется

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
