import { useState } from 'react';
import { productInCart, Product } from '../interfaces/interfaces';
import { products } from '../data/product';



export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:productInCart }>({});

    const onProductCountChange = ({count, product}:{count:number, product:Product}) => {
        // console.log('onProductCountChange', count, product);
        setShoppingCart((oldShoppingCart:any) => {

            if(count === 0){

                //eliminar un objeto de un arreglo usando desestructuracion
                const { [product.id]:toDelete, ...rest } = oldShoppingCart;

                return {
                    ...rest
                }
            } 

            return {
                ...oldShoppingCart,
                [product.id]: {...product, count}
            }
        })

    }

    return {
        shoppingCart,
        onProductCountChange
    }

}