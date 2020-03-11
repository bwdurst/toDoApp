import React, { Component } from 'react';

import ListContainer from './listContainer'
import "../App.css"

function Layout() {
  return (
    <div className="Container">
      <h1>To Do List</h1>
      <ListContainer />
    </div>
  )
}

export default Layout;