import {Component, Input} from '@angular/core';
import {Bug} from "../models/bug";
import {UserService} from "../../user/services/user.service";

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrl: './bug.component.scss'
})
export class BugComponent {
  @Input()
  bug: Bug;

  constructor(private userService: UserService) {
  }

  assignBug(): void {
    this.userService.setAssignedBug(this.bug);
  }
}
