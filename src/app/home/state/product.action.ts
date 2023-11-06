import { createAction, props } from '@ngrx/store';
import { Products } from '../model/product.model';

const LOAD_PRODUCT = '[Product] Load Products'
const FETCHED_PRODUCT = '[Product] Fetched Products and Saved'
const PRODUCT_ERROR = '[Product] Load Products Failure'

export const loadProducts = createAction(
  LOAD_PRODUCT
);

export const fetchedProductsDetails = createAction(
  FETCHED_PRODUCT,
  props<{products : any[]}>()
);

export const LoadProductFailure = createAction(
  PRODUCT_ERROR,
  props<{ error: any }>()
);
