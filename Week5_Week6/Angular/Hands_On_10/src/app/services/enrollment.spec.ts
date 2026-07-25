import { TestBed } from '@angular/core/testing';

import { EnrollmentService } from './enrollment';

describe('EnrollmentService', () => {

  let service: EnrollmentService;

  beforeEach(() => {

    TestBed.configureTestingModule({});

    service = TestBed.inject(EnrollmentService);

  });

  it('should create', () => {

    expect(service).toBeTruthy();

  });

  it('should enroll student', () => {

    service.enroll(1);

    expect(service.isEnrolled(1)).toBeTrue();

  });

  it('should unenroll student', () => {

    service.enroll(1);

    service.unenroll(1);

    expect(service.isEnrolled(1)).toBeFalse();

  });

});