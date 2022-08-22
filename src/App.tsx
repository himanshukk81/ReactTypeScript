import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChildAsFC } from './components/Child';
import { GuestList } from './components/GuestList';
import UserSearch from './components/UserSearch';
import EventComponet from './components/events/EventComponent';

function App() {
  return (
    <div className="App">
      {/* <ChildAsFC name={'himanshu'}/> */}
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      <EventComponet />
    </div>
  );
}

export default App;
