import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  providers: [NotificationService],

  // New service instance created
  // only for this component and
  // its children.

  templateUrl: './notification.html'
})
export class NotificationComponent {

  constructor(
    public notificationService: NotificationService
  ) {}
}