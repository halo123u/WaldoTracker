import React, {FC} from 'react';
import { useForm, SubmitHandler  } from 'react-hook-form';

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
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler <Inputs> = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <input defaultValue="Lagunitas Ipa" {...register('name')} />
    <input defaultValue="http://www.example.com" {...register('url')} />
    {/* include validation with required or other standard HTML validation rules */}
    <input {...register('weight', { required: true })} />
    {/* errors will return when field validation fails  */}
    {errors.weight && <span>This field is required</span>}
    
    <input type="submit" />
  </form>
  );
};

export default ItemManager;
