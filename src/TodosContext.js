import React, { Component, createContext } from "react";

const TodosContext = createContext();

export class TodosProvider extends Component {
  state = {
    todos: [
      { id: 1, title: "go to prayer", isCompleted: true },
      {
        id: 2,
        title: "fix yourself a fine sandwitch",
        isCompleted: false
      },
      { id: 3, title: "learn more react js", isCompleted: false },
      { id: 4, title: "call your mom", isCompleted: false }
    ],
    editItem: null
  };

  addNewTask = title => {
    const todo = {
      id: this.getMaxID(this.state.todos) + 1,
      title,
      isCompleted: false
    };
    this.setState({ todos: [...this.state.todos, todo] });
  };

  getMaxID = array => {
    return Math.max.apply(
      Math,
      array.map(function(todo) {
        return todo.id;
      })
    );
  };

  toggleStatus = taskId => {
    this.setState({
      todos: [...this.state.todos].map(todo => {
        if (todo.id === taskId) todo.isCompleted = !todo.isCompleted;
        return todo;
      })
    });
  };

  removeTask = taskId => {
    this.setState({
      todos: [...this.state.todos].filter(todo => {
        return todo.id !== taskId;
      })
    });
  };

  editTask = taskId => {
    const item = this.state.todos.find(item => item.id === taskId);
    if (item.isCompleted) {
      alert("you cant edit todo that is completed");
      return;
    }
    this.setState({ editItem: item });
  };

  updateTask = () => {
    this.setState({
      todos: [...this.state.todos].map(todo => {
        if (todo.id === this.state.editItem.id) {
          todo.title = this.state.editItem.title;
        }
        return todo;
      }),
      editItem: null
    });
  };

  setEditItemTitle = title => {
    let newOne = this.state.editItem;
    newOne["title"] = title;
    this.setState({ editItem: newOne });
  };

  abortEditing = () => {
    this.setState({ editItem: null });
  };

  render() {
    return (
      <TodosContext.Provider
        value={{
          todos: this.state.todos,
          addNewTask: this.addNewTask,
          toggleStatus: this.toggleStatus,
          removeTask: this.removeTask,
          editTask: this.editTask,
          updateTask: this.updateTask,
          editItem: this.state.editItem,
          setEditItemTitle: this.setEditItemTitle,
          abortEditing: this.abortEditing
        }}
      >
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}

export const TodosConsumer = TodosContext.Consumer;
