import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChildAsFC } from './components/Child';
import { GuestList } from './components/GuestList';

function App() {
  return (
    <div className="App">
      {/* <ChildAsFC name={'himanshu'}/> */}
      <GuestList />
    </div>
  );
}

export default App;
