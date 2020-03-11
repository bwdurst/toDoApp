import React from 'react';

import "../App.css"

function toDoRow(props) {
  return (
    <li className="toDoRow">
      <p>{props.text}</p>
      <button className="toDoButton" onClick={props.toDelete}>X</button>
    </li>
  )
}

export default toDoRow