import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
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
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.scss']
})
export class CoursedetailComponent implements OnInit {
 
  courses: Course[] = courseData.courses;
   course: Course;
  constructor(private route: ActivatedRoute,
  private cartService: CartService,
    private wishlistService: WishlistService
) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    // this.route.paramMap.subscribe(params => {
    //   let x = String(params.get('courseId'));
    //   console.log(x);
    //  })
    //console.log(routeParams);
     const courseIdFromRoute = String(routeParams.get('courseId'));
   this.course = this.courses.find(course => course.id === courseIdFromRoute);
    //console.log(this.course);
  }
addToCart(course: Course) {
    this.cartService.addToCart(course);
  }
  addToWishlist(course: Course) {
    this.wishlistService.addToWishlist(course);
  }


}
