import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { Course } from '../courses/courses.component';





@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public grandTotal: number = 0;
  public grandDiscount: number = 0;
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  checkout()
  {
    if (this.items.length != 0)
    {
      window.alert("You have successfully placed your order");
    }
    else
    {
      window.alert("Cart is empty");
      }
  }
  
  removeFromCart(course: Course)
  {
    this.cartService.removeFromCart(course);
    this.grandTotal = this.cartService.getTotalPrice();
    this.grandDiscount = this.cartService.getTotalDiscount();
  }
  moveToWishlist(course: Course) {
    this.wishlistService.addToWishlist(course);
    this.cartService.removeFromCart(course);
    this.grandTotal = this.cartService.getTotalPrice();
    this.grandDiscount = this.cartService.getTotalDiscount();
  }

  ngOnInit(): void {
    this.grandTotal = this.cartService.getTotalPrice();
    this.grandDiscount = this.cartService.getTotalDiscount();
  }

}
