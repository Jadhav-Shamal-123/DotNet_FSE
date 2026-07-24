import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  count = 0;

  increment() {
    this.count++;
  }
}