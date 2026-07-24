import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  templateUrl: './course-summary-widget.html'
})
export class CourseSummaryWidgetComponent implements OnInit {

  count = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.count = this.courseService.getCourses().length;
  }
}