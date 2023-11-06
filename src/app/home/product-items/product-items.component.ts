import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.module';
import { selectAllProducts } from '../state/product.selector';
import { loadProducts } from '../state/product.action';
import {  Products } from '../model/product.model';
import { Observable } from 'rxjs'
 
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})

export class ProductItemsComponent implements OnInit {

  constructor( private store : Store<AppState>){}

  fetchedProductDetailsFromApi$: Observable<Products[]> = this.store.select(selectAllProducts);

  selectedProduct: Products | null = null;
  isEnlarged: boolean = false;
  

  ngOnInit(): void {
    this.store.dispatch(loadProducts())
    
    console.log("Reached")
    console.log(this.fetchedProductDetailsFromApi$)

  }
  
  truncateTitle(title: string | undefined): string {
    if (typeof title === 'string') {
      const words = title.split(' ');
      return words.slice(0, 5).join(' ');
    }
    return ''; 
  }

}
