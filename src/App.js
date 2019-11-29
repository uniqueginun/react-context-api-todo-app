import React, { Component } from "react";
import Navigation from "./components/Navigation";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import EditTodo from "./components/EditTodo";
import { TodosConsumer } from "./TodosContext";

export default class App extends Component {
  render() {
    return (
      <TodosConsumer>
        {value => {
          return (
            <div className="container-fluid">
              <Navigation />
              <div className="row justify-content-center">
                <div className="col-md-10">
                  {value.editItem !== null ? <EditTodo /> : <AddTodo />}
                  <Todos />
                </div>
              </div>
            </div>
          );
        }}
      </TodosConsumer>
    );
  }
}
