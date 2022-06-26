import React, {FC, useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ItemList from './components/ItemList';
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

type Inputs = Pick<ItemT, 'name' | 'url' | 'weight'>;


const ItemManager:FC = () => {
  const [id, setNewId] = useState(0);
  const [items, setItems] = useState<ItemT []>([]);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler <Inputs> = data => {
    const newItems = [...items];
    newItems.push({...data, id});
    setItems(newItems);
    setNewId(id+1);
  };
  return (
    <>
      <form className='Item-Form' onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="Lagunitas Ipa" {...register('name')} />
        <input defaultValue="http://www.example.com" {...register('url')} />
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('weight', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.weight && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
      <ItemList items={items}/>
    </>
  );
};

export default ItemManager;
