/// <reference types="react" />
export interface ILoadingProps {
    type: string;
    location: string;
    contactNo: number;
    image: string;
    price: number;
    userName: string;
}
export declare const LoadingCard: {
    (props: ILoadingProps): JSX.Element;
    defaultProps: {
        image: string;
        location: string;
        price: number;
        type: string;
        contactNo: number;
        userName: string;
    };
};
export default LoadingCard;
