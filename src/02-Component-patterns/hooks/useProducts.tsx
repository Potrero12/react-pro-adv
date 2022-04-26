import { useState } from 'react';

const useProducts = () => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value:number) => {
        setCounter(prev => Math.max(prev + value,0))
    }

    // para enviar funcione o counter se hace el return de dichas funciones
  return {
      counter,
      increaseBy
  }
}

export default useProducts