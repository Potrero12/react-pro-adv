import { useEffect, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductsArgs {
    product: Product,
    onChange?: (args: OnChangeArgs) => void,
    value?:number
}

const useProducts = ({onChange, product, value = 0}:useProductsArgs) => {

    const [counter, setCounter] = useState(value);

    const increaseBy = (value:number) => {


        const newValue = Math.max(counter + value,0)

        setCounter(newValue)

        onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
        setCounter(value)
    }, [value])
    

    // para enviar funcione o counter se hace el return de dichas funciones
  return {
      counter,
      increaseBy
  }
}

export default useProducts