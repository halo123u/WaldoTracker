import React, {FC, useState} from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './index.css';

export type ItemT = {
  name: string;
  url: string;
  weight: number;
  id: number;
}

export type UserT =  {
  username: string;
  id: number;
  items: []
}

export type Inputs = Pick<ItemT, 'name' | 'url' | 'weight'>;


const ItemManager:FC = () => {
  const [id, setNewId] = useState(0);
  const [items, setItems] = useState<ItemT []>([]);

  const addItem = (data: Inputs) => {
    const newItems = [...items];
    newItems.push({...data, id});
    setItems(newItems);
    setNewId(id+1);
  };
  
  return (
    <>
    <ItemForm addItem={addItem}/>
      <ItemList items={items}/>
    </>
  );
};

export default ItemManager;
