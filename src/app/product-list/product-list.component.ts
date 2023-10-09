import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = []; 
  loader: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loader = true;
    this.productsService.getProductsList().subscribe(
      (data: any) => {

          this.products = data.products;
       
      },
      (error) => console.error(error),
      () => (this.loader = false)
    );
  }
}