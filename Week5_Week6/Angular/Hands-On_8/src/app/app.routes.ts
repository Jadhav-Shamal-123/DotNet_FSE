import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

import { HomeComponent } from './pages/home/home';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { CourseListComponent } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { NotFoundComponent } from './pages/not-found/not-found';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
{
  path: 'enroll',
  canDeactivate: [unsavedChangesGuard],
  component: ReactiveEnrollmentFormComponent
},
  {
    path: 'profile',
    canActivate: [authGuard],
    component: StudentProfileComponent
  },

  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: ':id',
        component: CourseDetailComponent
      }
    ]
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];