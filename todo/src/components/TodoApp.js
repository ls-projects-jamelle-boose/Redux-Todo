import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleCompleted } from "../actions/index";

import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addTodoToList = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    console.log(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  };

  toggleCompleted = id => {
    this.props.toggleCompleted(id);
  };

  render() {
    return (
      <React.Fragment>
        <div className="TodoList">
          {this.props.todoList.map(item => (
            <h4
              className={`${item.completed ? "item-completed" : null}`}
              key={item.id}
              onClick={() => this.toggleCompleted(item.id)}>
              {item.todoItem}
            </h4>
          ))}
        </div>
        <input
          name="newTodo"
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add a new Todo"
        />
        <button onClick={this.addTodoToList}>Add Todo</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoItems
});

export default connect(
  mapStateToProps,
  { addTodo, toggleCompleted }
)(TodoApp);
