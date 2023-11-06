import { Products } from "../model/product.model";

export interface ProductState {
    products : Products[],
    loading : boolean,
    error ?: any,
}

export const initialState : ProductState = {
    products : [],
    loading : false,
    error : null,
}