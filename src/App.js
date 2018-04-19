import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import Navbar from "./Navbar";
import Main from "./Main";

import reducers from "./reducers";

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);

const browserHistory = createBrowserHistory();
const App = () => {
  return <Provider store={store}>
      <Router history={browserHistory}>
        <div>
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>;
}
export default App;