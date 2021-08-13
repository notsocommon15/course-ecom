import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent , canActivate: [] },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wishlist', component: WishlistComponent },
  {path: 'courses/:courseId', component: CoursedetailComponent},
  {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/courses',
        pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
