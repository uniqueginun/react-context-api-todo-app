import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { TodosProvider } from "./TodosContext";

ReactDOM.render(
  <TodosProvider>
    <App />
  </TodosProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
