import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from '../index';

type ItemFormPropsT = {
  addItem: (data: Inputs) => void;
};

const ItemForm: FC<ItemFormPropsT> = ({addItem}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler <Inputs> = data => addItem(data);

  return (
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
  );
};


export default ItemForm;