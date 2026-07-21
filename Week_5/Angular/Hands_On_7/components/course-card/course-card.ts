import { Component, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.html'
})
export class CourseCardComponent {

  @Input() course!: Course;

  constructor(
    public enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  toggleEnrollment(): void {
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
  }

  viewDetails(): void {
    this.router.navigate([
      '/courses',
      this.course.id
    ]);
  }
}