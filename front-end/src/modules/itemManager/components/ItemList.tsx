import React, {FC} from 'react';
import { ItemT } from '../index';

type ItemsListPropsT = {
  items: ItemT [];
}

const ItemList: FC<ItemsListPropsT> = ({items}) => {
  return (<div>{items.map(({ id, name}) => (<div key={id} className='item'>{name}</div>))}</div>);
};

export default ItemList;