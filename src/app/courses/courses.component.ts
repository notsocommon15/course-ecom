import { Component, OnInit } from '@angular/core';
import courseData from "../mock.json";
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';


export interface Course {
  id:string;
  title:string;
  course_creator:string;
  tags:string[];
  discount:number;
  price:number;
  cart:boolean;
}



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public grandTotal: number = 0;
  public grandDiscount: number = 0;
  items = this.cartService.getItems();

  searchCourse: string = "";
  SortOrder: string = "";
  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

 
  courses: Course[] = courseData.courses;
  
  addToCart(course: Course) {
    this.cartService.addToCart(course);
    this.grandTotal = this.cartService.getTotalPrice();
    this.grandDiscount = this.cartService.getTotalDiscount();
  }
  addToWishlist(course: Course) {
    this.wishlistService.addToWishlist(course);
  }
   ngOnInit(): void {
    this.grandTotal = this.cartService.getTotalPrice();
    this.grandDiscount = this.cartService.getTotalDiscount();
  }
}
