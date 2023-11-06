import { Component, Input } from '@angular/core';
import { Products } from '../model/product.model';

@Component({
  selector: 'app-product-pop-up',
  templateUrl: './product-pop-up.component.html',
  styleUrls: ['./product-pop-up.component.css']
})
export class ProductPopUpComponent {
  @Input() product: Products | undefined;
}
