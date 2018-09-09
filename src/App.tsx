import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Hello from "./components/Hello";
class App extends React.Component {
  public render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello message ={"hello world"}/>
      </div>;
  }
}

export default App;
