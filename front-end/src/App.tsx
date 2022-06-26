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
    <ItemManager/>
  );
}

export default App;
