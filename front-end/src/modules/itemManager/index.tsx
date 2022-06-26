import React, { FC, useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './index.css';

export type ItemT = {
  name: string;
  url: string;
  weight: number;
  id: number;
};

export type UserT = {
  username: string;
  id: number;
  items: [];
};

export type Inputs = Pick<ItemT, 'name' | 'url' | 'weight'>;

export type FormStateT = {
  isNew: boolean;
  selectedItem: ItemT | null;
};

const initialFormState: FormStateT = {
  isNew: true,
  selectedItem: null,
};

const ItemManager: FC = () => {
  const [id, setNewId] = useState(0);
  const [items, setItems] = useState<ItemT[]>([]);
  const [formState, setFormState] = useState<FormStateT>(initialFormState);

  const editItem = (id: number) => {
    const item = items.find((item) => item.id == id);

    if (item) {
      setFormState({
        isNew: false,
        selectedItem: { ...item },
      });
    }
  };

  const addItem = (data: Inputs) => {
    const { isNew, selectedItem } = formState;
    if (isNew) {
      const newItems = [...items];
      newItems.push({ ...data, id });
      setItems(newItems);
      setNewId(id + 1);
    } else {
      if (selectedItem) {
        const updatedItems = [...items];
        const indexOfItem = updatedItems.findIndex(
          (item) => item.id === selectedItem.id
        );
        if (indexOfItem !== -1) {
          updatedItems[indexOfItem] = {
            ...selectedItem,
            ...data,
          };
          setItems(updatedItems);
        }
      }
    }
  };

  return (
    <>
      <ItemForm addItem={addItem} itemFormState={formState} />
      <ItemList items={items} editItem={editItem} />
    </>
  );
};

export default ItemManager;
