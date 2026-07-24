import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {

  enrollForm!: FormGroup;
  isFormDirty(): boolean {
  return this.enrollForm.dirty;
}

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [Validators.required, Validators.minLength(3),this.noCourseCode
]
      ],

      studentEmail: [
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck]
      ],

      courseId: [
        '',
        [Validators.required, this.noCourseCode]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

  }

  onSubmit() {

    console.log('Form Value:', this.enrollForm.value);

    console.log(
      'Raw Value:',
      this.enrollForm.getRawValue()
    );

    /*
      value → excludes disabled controls
      getRawValue() → includes disabled controls
    */

  }

  noCourseCode(
    control: AbstractControl
  ): ValidationErrors | null {

    if (
      control.value &&
      control.value.startsWith('XX')
    ) {

      return {
        noCourseCode: true
      };

    }

    return null;
  }

  simulateEmailCheck(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {

    return new Promise(resolve => {

      setTimeout(() => {

        if (
          control.value &&
          control.value.includes('test@')
        ) {

          resolve({
            emailTaken: true
          });

        } else {

          resolve(null);

        }

      }, 800);

    });

  }

  get additionalCourses(): FormArray {

    return this.enrollForm.get(
      'additionalCourses'
    ) as FormArray;

  }

  addCourse() {

    this.additionalCourses.push(
      new FormControl(
        '',
        Validators.required
      )
    );

  }

  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);
  }
}