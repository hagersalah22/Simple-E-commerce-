import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  selected_product_id: number = 0;
  selected_product: Product | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.selected_product_id = this.activeRoute.snapshot.params['id']; 
  
    this.productsService.getProductDetails(this.selected_product_id).subscribe((product: Product) => {
      this.selected_product = product;
})
  }
}
