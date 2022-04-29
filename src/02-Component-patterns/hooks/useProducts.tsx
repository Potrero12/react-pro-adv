import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductsArgs {
    product: Product,
    onChange?: (args: OnChangeArgs) => void,
    value?:number,
    initialValues?:InitialValues
}

const useProducts = ({onChange, product, value = 0, initialValues}:useProductsArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value:number) => {

        //bloquear el valor del count hasta el maximo permitido
        let newValue = Math.max(counter + value, 0);
        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        
        setCounter(newValue)
        onChange && onChange({count: newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value]);
 
    useEffect(() => {
        isMounted.current = false;
    }, []);
    
    

    // para enviar funcione o counter se hace el return de dichas funciones
  return {
      counter,
      increaseBy,
      isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
      maxCount: initialValues?.maxCount,
      reset
  }
}

export default useProducts