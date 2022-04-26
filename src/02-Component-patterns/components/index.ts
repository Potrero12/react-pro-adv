import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';


import { ProductTitle } from './ProductTitle';
import { ProducBottons } from './ProductButtons';
import { ProductImage } from './ProductImage';

export { ProducBottons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProducBottons
})

export default ProductCard;