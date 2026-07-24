import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.totalCourses = this.courseService.getCourses().length;
  }
}