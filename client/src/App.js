import React, { Component } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import Homepage from './components/homepage'
import AddUser from './components/adduser'
import EditUser from './components/edituser'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" name="Home Page" render={props => <Homepage {...props} />} />
        <Route exact path="/homepage/:page?" name="Home Page" render={props => <Homepage {...props} />} />
        <Route exact path="/adduser" name="Add User" render={props => <AddUser {...props} />} />
        <Route exact path="/edituser" name="Edit User" render={props => <EditUser {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
