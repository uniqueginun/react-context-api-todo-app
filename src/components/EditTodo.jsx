import React, { Component } from "react";
import { TodosConsumer } from "../TodosContext";

export default class EditTodo extends Component {
  state = {
    newTitle: ""
  };

  syncTitle = (setEditItemTitle, event) => {
    setEditItemTitle(event.target.value);
  };

  updateTask = (fun, event) => {
    event.preventDefault();
    fun();
  };

  abortEditing = fun => {
    fun();
  };

  render() {
    return (
      <TodosConsumer>
        {value => {
          const {
            updateTask,
            editItem,
            setEditItemTitle,
            abortEditing
          } = value;
          return (
            <div className=" text-white bg-warning my-4">
              <div className="card-body">
                <form onSubmit={this.updateTask.bind(this, updateTask)}>
                  <div className="form-group">
                    <label className="text-dark">Edit Task</label>
                    <input
                      type="text"
                      name="title"
                      value={editItem.title}
                      onChange={this.syncTitle.bind(this, setEditItemTitle)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      <i className="fa fa-check" aria-hidden="true"></i>
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
