import { createContext, ReactElement, CSSProperties } from 'react';

import { ProductContextProps, Product, OnChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'
import useProducts from '../hooks/useProducts';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string,
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?:number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props ) => {

    const { counter, increaseBy } = useProducts({onChange, product, value});

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ `${styles.productCard} ${className}` }
                style={style}
            >
                { children }
            </div>
        </Provider>
    )
}