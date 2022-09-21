/// <reference types="react" />
export interface IProductCard {
    image: string;
    type: string;
    price: number;
    location: string;
}
export declare const ProductCard: {
    (props: IProductCard): JSX.Element;
    default: {
        image: string;
        type: string;
        price: string;
        location: string;
    };
};
