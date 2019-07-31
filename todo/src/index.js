import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

//gives us access to createStore function from Redux
import { createStore } from "redux";

//gives us access to Provider component, which makes our app aware of the store
import { Provider } from "react-redux";

import reducer from "./reducers";
import TodoApp from "./components/TodoApp";

//createStore function receives reducer responsible for updating the store, along with any initial state
const store = createStore(reducer);

//Provider is where store lives and it makes our app aware of store by wrapping our component inside of it
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
