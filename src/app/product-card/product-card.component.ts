import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { HeadCounterService } from '../services/head-counter.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private router: Router, private cartService: CartService,private headCounterService: HeadCounterService )   {}

  redirectToDetails(id: number) {
    this.router.navigate(['product-details', id]);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    
    this.headCounterService.incrementCounter(); 



}}