import React, { Component } from "react";
import Todo from "./Todo";
import { TodosConsumer } from "../TodosContext";

export default class Todos extends Component {
  render() {
    return (
      <div>
        <TodosConsumer>
          {value => {
            return value.todos.map(todo => {
              return <Todo todo={todo} key={todo.id} />;
            });
          }}
        </TodosConsumer>
      </div>
    );
  }
}
