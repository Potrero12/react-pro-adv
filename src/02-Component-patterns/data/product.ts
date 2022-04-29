import { Product } from '../interfaces/interfaces';

const product1 = {
    id: '1',
    img: './coffee-mug.png',
    title: 'Coffee Mug - Card',
}

const product2 = {
    id: '2',
    img: './coffee-mug2.png',
    title: 'Coffee Mug - meme',
}

export const products:Product[] = [product1, product2];