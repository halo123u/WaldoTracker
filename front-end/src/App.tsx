import React, { useState }  from 'react';
import ItemManager from './modules/itemManager';
import './App.css';

type UserT =  {
  username: string;
  id: number;
  items: []
}

function App() {
  return (
    <>
      <h1>Waldo Tracker</h1>
      <ItemManager/>
    </>
  );
}

export default App;
