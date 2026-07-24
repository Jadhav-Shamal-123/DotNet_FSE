import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-student-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-summary.html'
})
export class StudentSummaryComponent {

  constructor(
    public enrollmentService: EnrollmentService
  ) {}
}