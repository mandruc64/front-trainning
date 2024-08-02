import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input()
  user: User;

  @Input()
  positionInQueue: number;

  @Output()
  outputEvent: EventEmitter<User> = new EventEmitter();

  @Output()
  deleteEvent: EventEmitter<User> = new EventEmitter();

  constructor(private router: Router) {
  }

  emitUser() {
    this.outputEvent.emit(this.user);
  }

  deleteUser() {
    this.deleteEvent.emit(this.user);
  }

  navigateToUser(userPayload: User): void {
    this.router.navigate(['users/user-profile'], {
      queryParams: {
        firstName: userPayload.firstName,
        lastName: userPayload.lastName,
        id: userPayload.id,
        age: userPayload.age,
      }
    })
  }
}
