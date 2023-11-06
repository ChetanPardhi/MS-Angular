import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const selectProductDetailsState =
  createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductDetailsState,
  (state) => state.products
);


export const selectProductError = createSelector(
  selectProductDetailsState,
  (state) => state.error
);
