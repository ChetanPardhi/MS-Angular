import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ProductActions from './product.action';
import { ProductService } from 'src/app/shared/product.service';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProductDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((productList) => ProductActions.fetchedProductsDetails({products : productList})),
          catchError((error) =>
            of(ProductActions.LoadProductFailure({ error }))
          )
        )
      )
    )
  );
}
