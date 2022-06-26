import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from '../ItemList';
import{ ItemT } from '../../index';

test('render items list', () => {
  const items: ItemT [] = [
    {
      name: 'test',
      weight: 50,
      url: 'abc.com',
      id: 1,
    },
    {
      name: 'test2',
      weight: 51,
      url: 'abc.com',
      id: 2,
    },
    {
      name: 'tes3',
      weight: 50,
      url: 'abc.com',
      id: 3,
    },
    {
      name: 'tes4',
      weight: 50,
      url: 'abc.com',
      id: 4,
    }
  ];

  const { container} = render(<ItemList items={items}/>);
  expect(container.getElementsByClassName('item').length).toBe(items.length);

});