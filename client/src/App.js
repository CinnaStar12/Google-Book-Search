import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Search from "./pages/Search"
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Router>
      <Jumbotron />
      <Switch>
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
