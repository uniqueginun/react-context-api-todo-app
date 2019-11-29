import React, { Component } from "react";
import PropTypes from "prop-types";
import { TodosConsumer } from "../TodosContext";

export default class Todo extends Component {
  toggleStatus = toggleStatus => {
    toggleStatus(this.props.todo.id);
  };

  removeTask = removeTask => {
    removeTask(this.props.todo.id);
  };

  editTask = editTask => {
    editTask(this.props.todo.id);
  };

  toggleClass = () => {
    return this.props.todo.isCompleted ? "fa fa-backward" : "fa fa-check";
  };

  render() {
    const { title, isCompleted } = this.props.todo;

    let properStyle = "mb-1 ";
    properStyle += isCompleted ? "bg-light" : "bg-success text-light";

    return (
      <TodosConsumer>
        {value => {
          const { toggleStatus, removeTask, editTask } = value;
          return (
            <div className={properStyle}>
              <div className="card-body">
                <div>
                  <strong>{title}</strong>
                  <div className="float-right">
                    <button onClick={() => this.toggleStatus(toggleStatus)}>
                      <i className={this.toggleClass()} aria-hidden="true"></i>
                    </button>
                    <button onClick={this.editTask.bind(this, editTask)}>
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button onClick={this.removeTask.bind(this, removeTask)}>
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </TodosConsumer>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};
