import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { CartService } from '../cart.service';
import { Course } from '../courses/courses.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
   grandTotal: number = 0;
   grandDiscount: number = 0;
    cartitems = this.cartService.getItems();
  items = this.wishlistService.getItems();


    
  SortOrder: string = "";
  constructor(private wishlistService: WishlistService, private cartService: CartService) { }
removeFromWishlist(course: Course)
  {
    this.wishlistService.removeFromWishlist(course);
}
  moveToCart(course: Course) {
    this.cartService.addToCart(course);
    this.wishlistService.removeFromWishlist(course);
     this.grandTotal = this.cartService.getTotalPrice();
    this.grandDiscount = this.cartService.getTotalDiscount();
  }

  ngOnInit(): void {
    this.grandTotal = this.cartService.getTotalPrice();
    this.grandDiscount = this.cartService.getTotalDiscount();
  }


}
