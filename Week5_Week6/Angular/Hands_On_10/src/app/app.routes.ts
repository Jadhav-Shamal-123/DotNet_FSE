import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { StudentProfileComponent } from './pages/student-profile/student-profile';

import { authGuard } from './guards/auth';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'courses',
    component: CourseListComponent
  },

  {
    path: 'courses/:id',
    component: CourseDetailComponent
  },

  {
    path: 'enrollment',
    component: EnrollmentFormComponent,
    canActivate: [authGuard]
  },

  {
    path: 'reactive-enrollment',
    component: ReactiveEnrollmentFormComponent
  },

  {
    path: 'profile',
    component: StudentProfileComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];