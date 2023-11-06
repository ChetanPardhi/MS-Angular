import { createReducer , on } from "@ngrx/store";
import { LoadProductFailure, fetchedProductsDetails, loadProducts } from "./product.action";
import { initialState } from "./product.state";

export const productReducer = createReducer(
    initialState,
    
    on(
        fetchedProductsDetails , 
        (state , { products }) => ({ 
            ...state,
            loading : false, 
            products : products,
        })
    )
)

