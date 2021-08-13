import { Injectable } from '@angular/core';
import { Course } from './courses/courses.component';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  items: Course[] = [];
  constructor() { }
  addToWishlist(course: Course) {
    if (this.items.find(x => x.id == course.id)) {
      window.alert("Course already in wishlist");
    }
    else {
      this.items.push(course);
      window.alert('Your course has been added to the wishlist!');
    }
  }

  removeFromWishlist(course: Course) {
    this.items.map((a: any, index: any) => {
      if (course.id === a.id) {
        this.items.splice(index, 1);
      }
    })
  }

  

  getItems() {
    return this.items;
  }

  clearWishlist() {
    this.items = [];
    return this.items;
  }

  
}
