import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Search from "./pages/Search"
import Jumbotron from './components/Jumbotron';
import Saved from './pages/Saved'

function App() {
  return (
    <Router>
      <Jumbotron />
      <Switch>
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>
        <Route exact path={"/saved"}>
          <Saved />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
