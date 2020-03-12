import React, { Component } from 'react';

import ToDoRow from './toDoRow'

class ListContainer extends Component {
  state = {
    text: "",
    todo: []
  }

  handleEnterKey = e => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13 && this.state.text.length > 0) {
      this.setState(prevState => ({
        todo: [...prevState.todo, this.state.text]
      }))
      this.setState({ text: "" })
    }
  }

  handleSubmit = () => {
    if (this.state.text.length > 0) {
      this.setState(prevState => ({
        todo: [...prevState.todo, this.state.text]
      }))
      this.setState({ text: "" })
    }
  }

  handleInputText = e => {
    this.setState({ text: e.target.value })
  }

  deleteItem = (i) => {
    // console.log('delete button clicked')
    const todoArray = [...this.state.todo];
    todoArray.splice(i, 1);
    this.setState({ todo: todoArray })
  }

  render() {
    let todoItems = this.state.todo.map((text, i) => {
      return (
        <ToDoRow
          key={i}
          text={text}
          toDelete={this.deleteItem}
        />
      )
    })

    return (
      <div className="mainContainer">
        <div className="itemEntry">
          <input
            placeholder="What'chu need to do?"
            value={this.state.text}
            onKeyDown={this.handleEnterKey}
            onChange={this.handleInputText}>
          </input>
          <button onClick={this.handleSubmit} className="submit">Get After It</button>
        </div>
        <ul className="list">
          {todoItems}
        </ul>
        {/* <div className="footer">Footer placeholder</div> */}
      </div>
    )
  }
}

export default ListContainer;