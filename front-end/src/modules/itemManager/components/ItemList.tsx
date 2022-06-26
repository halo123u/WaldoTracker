import React, { FC } from 'react';
import { ItemT } from '../index';

type ItemsListPropsT = {
  items: ItemT[];
  editItem: (id: number) => void;
};

const ItemList: FC<ItemsListPropsT> = ({ items, editItem }) => {
  return (
    <div>
      {items.map(({ id, name }) => (
        <div key={id} className="item" onClick={() => editItem(id)}>
          {name}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
