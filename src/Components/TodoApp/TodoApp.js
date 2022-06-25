import "./TodoApp.css";
import React, { Component } from "react";

export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handileChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  onItemSubmit = (event) => {
    event.preventDefault();
    const { input } = this.state;
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };

  removeItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  edit = (i) => {
    const newName = prompt("Edit");
    this.setState({
      items: this.state.items.map((v, ind) => (i === ind ? newName : v)),
    });
  };
  render() {
    const { input, items } = this.state;
    return (
      <div className="todo-container">
        <form
          className="input-section"
          value={input}
          onSubmit={this.onItemSubmit}
        >
          <h1>Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handileChange}
            placeholder="Enter the Items.."
          />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <span className="arr">
                <i
                  onClick={() => this.edit(index)}
                  className="fa-solid fa-pen-to-square"
                ></i>
                <i
                  onClick={() => this.removeItem(index)}
                  className="fa-solid fa-trash-can"
                ></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
