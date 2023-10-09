import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);

  constructor() {}

  getCartItemsObservable() {
    return this.cartItems.asObservable();
  }

  addToCart(item: any) {
    const currentCart = this.cartItems.value;
    const existingItemIndex = currentCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      currentCart[existingItemIndex].quantity++;
    } else {
      item.quantity = 1;
      currentCart.push(item);
    }

    this.cartItems.next(currentCart);
  }

  getCartItems(): any[] {
    return this.cartItems.value;
  }

  incrementQuantity(item: any) {
    const currentCart = this.cartItems.value;
    const targetItem = currentCart.find((cartItem) => cartItem.id === item.id);

    if (targetItem) {
      targetItem.quantity++;
      this.cartItems.next(currentCart);
    }
  }

  decrementQuantity(item: any) {
    const currentCart = this.cartItems.value;
    const targetItem = currentCart.find((cartItem) => cartItem.id === item.id);

    if (targetItem && targetItem.quantity > 1) {
      targetItem.quantity--;
      this.cartItems.next(currentCart);
    }
  }


  getQuantity(item: any): number {
    const targetItem = this.cartItems.value.find((cartItem) => cartItem.id === item.id);
    return targetItem ? targetItem.quantity : 0;
  }

  removeFromCart(item: any) {
    const currentCart = this.cartItems.value;
    const updatedCart = currentCart.filter((cartItem) => cartItem.id !== item.id);
    this.cartItems.next(updatedCart);
  }

}
