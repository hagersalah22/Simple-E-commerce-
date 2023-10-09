import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { HeadCounterService } from '../services/head-counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  incrementQuantity(item: any) {

    this.cartService.incrementQuantity(item);
  }

  decrementQuantity(item: any) {
  
    this.cartService.decrementQuantity(item);
  }

  getQuantity(item: any): number {
    return this.cartService.getQuantity(item);
  }

  removeFromCart(item: any) {
   
    this.cartService.removeFromCart(item);

    this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * this.getQuantity(item), 0);
  }

}
