import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./pages/Search"
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div>
      <Jumbotron />
      <Search />
    </div>
  );
}

export default App;
