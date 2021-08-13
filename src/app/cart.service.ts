import { Injectable } from '@angular/core';
import { Course } from './courses/courses.component';
import { WishlistService } from './wishlist.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Course[] = [];
  constructor( private wishlistService: WishlistService) { }

  addToCart(course: Course) {
    let i = this.items.find(x => x.id == course.id);
    if (i) {
      window.alert("Course already in cart");
    }
    else {
      this.items.push(course);
      window.alert('Your course has been added to the cart!');
      this.getTotalPrice();
      this.getTotalDiscount();
    }
  }

  // moveToWishlist(course: Course)
  // {
  //   this.removeFromCart(course);
  //   this.wishlistService.addToWishlist(course);
  // }

  removeFromCart(course: Course) {
    this.items.map((a: any, index: any) => {
      if (course.id === a.id) {
        this.items.splice(index, 1);
      }
    })
  }

  getTotalPrice() : number {
    let grandTotal = 0;
    this.items.map((a: any) => {
      grandTotal += a.price;
    })
    return grandTotal;
  }

  getTotalDiscount() : number {

    let grandDiscount = 0;
    this.items.map((d: any) => {
      grandDiscount += d.discount;
    })

    return grandDiscount;
    
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  
}
