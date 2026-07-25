import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {

    this.courseService
      .getCourses()
      .subscribe(data => {

        this.courses = data;

      });

  }

}