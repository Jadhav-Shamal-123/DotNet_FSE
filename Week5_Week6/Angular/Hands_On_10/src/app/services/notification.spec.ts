import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: 'React',
      code: 'REA102',
      credits: 3,
      gradeStatus: 'pending'
    }

  ];

  beforeEach(() => {

    TestBed.configureTestingModule({

      imports: [
        HttpClientTestingModule
      ]

    });

    service = TestBed.inject(CourseService);

    httpMock = TestBed.inject(
      HttpTestingController
    );

  });

  afterEach(() => {

    httpMock.verify();

  });

  it('should be created', () => {

    expect(service).toBeTruthy();

  });

  it('should fetch all courses', () => {

    service.getCourses().subscribe(data => {

      expect(data.length).toBe(2);

      expect(data).toEqual(mockCourses);

    });

    const req = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);

  });

  it('should fetch course by id', () => {

    service.getCourseById(1).subscribe(course => {

      expect(course.name).toBe('Angular');

    });

    const req = httpMock.expectOne(
      'http://localhost:3000/courses/1'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses[0]);

  });

  it('should add a course', () => {

    const newCourse: Course = {

      id: 3,
      name: 'Node',
      code: 'NOD103',
      credits: 4,
      gradeStatus: 'pending'

    };

    service.addCourse(newCourse).subscribe(course => {

      expect(course).toEqual(newCourse);

    });

    const req = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    expect(req.request.method).toBe('POST');

    req.flush(newCourse);

  });

  it('should update a course', () => {

    const updatedCourse: Course = {

      id: 1,
      name: 'Angular 20',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'

    };

    service.updateCourse(updatedCourse)
      .subscribe(course => {

        expect(course.name)
          .toBe('Angular 20');

      });

    const req = httpMock.expectOne(
      'http://localhost:3000/courses/1'
    );

    expect(req.request.method).toBe('PUT');

    req.flush(updatedCourse);

  });

  it('should delete course', () => {

    service.deleteCourse(1)
      .subscribe();

    const req = httpMock.expectOne(
      'http://localhost:3000/courses/1'
    );

    expect(req.request.method)
      .toBe('DELETE');

    req.flush(null);

  });

  it('should handle HTTP error', () => {

    service.getCourses().subscribe({

      next: () => fail('Expected an error'),

      error: error => {

        expect(error.status)
          .toBe(500);

      }

    });

    const req = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    req.flush(
      'Server Error',
      {
        status: 500,
        statusText: 'Server Error'
      }
    );

  });

});