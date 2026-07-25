import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { CourseCardComponent } from './course-card';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const enrollmentServiceSpy = jasmine.createSpyObj(
    'EnrollmentService',
    [
      'isEnrolled',
      'enroll',
      'unenroll'
    ]
  );

  const routerSpy = jasmine.createSpyObj(
    'Router',
    [
      'navigate'
    ]
  );

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseCardComponent],

      providers: [

        {
          provide: EnrollmentService,
          useValue: enrollmentServiceSpy
        },

        {
          provide: Router,
          useValue: routerSpy
        }

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);

    component = fixture.componentInstance;

    component.course = {

      id: 1,
      name: 'Angular',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'Passed'

    };

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should display course name', () => {

    const heading =
      fixture.debugElement.query(By.css('h3'));

    expect(
      heading.nativeElement.textContent
    ).toContain('Angular');

  });

  it('should emit enroll event', () => {

    enrollmentServiceSpy.isEnrolled.and.returnValue(false);

    spyOn(
      component.enrollRequested,
      'emit'
    );

    const button =
      fixture.debugElement.queryAll(
        By.css('button')
      )[0];

    button.nativeElement.click();

    expect(
      component.enrollRequested.emit
    ).toHaveBeenCalledWith(1);

  });

  it('should call console log in ngOnChanges', () => {

    spyOn(console, 'log');

    component.ngOnChanges({

      course: new SimpleChange(

        null,

        component.course,

        true

      )

    });

    expect(console.log).toHaveBeenCalled();

  });

  it('should navigate to course details', () => {

    component.viewDetails();

    expect(routerSpy.navigate)
      .toHaveBeenCalledWith(

        ['/courses', 1]

      );

  });

});