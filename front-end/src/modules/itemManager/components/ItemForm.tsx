import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs, FormStateT } from '../index';

type ItemFormPropsT = {
  addItem: (data: Inputs) => void;
  itemFormState: FormStateT;
};

const ItemForm: FC<ItemFormPropsT> = ({addItem, itemFormState}) => {
  const { register, handleSubmit, setValue, reset ,formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler <Inputs> = data => addItem(data);

  useEffect(() => {
    const { selectedItem } = itemFormState;
    reset();
    if(selectedItem) {
      const { name, weight, url} = selectedItem;
      setValue('name', name);
      setValue('url', url);
      setValue('weight', weight);
    }
  }, [itemFormState]);

  return (
    <form className='Item-Form' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="Lagunitas" {...register('name')} />
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