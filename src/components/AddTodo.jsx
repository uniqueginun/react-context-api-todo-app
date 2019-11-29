import React, { Component } from "react";
import { TodosConsumer } from "../TodosContext";

export default class AddTodo extends Component {
  state = {
    name: ""
  };

  syncName = event => {
    this.setState({ name: event.target.value });
  };

  AddNewTask = (fun, event) => {
    event.preventDefault();
    fun(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <TodosConsumer>
        {value => {
          const { addNewTask } = value;
          return (
            <div className=" text-white bg-primary my-4">
              <div className="card-body">
                <form onSubmit={this.AddNewTask.bind(this, addNewTask)}>
                  <div className="form-group">
                    <label>Create New Task</label>
                    <input
                      type="text"
                      name="title"
                      value={this.state.name}
                      onChange={this.syncName.bind(this)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-warning">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </TodosConsumer>
    );
  }
}
