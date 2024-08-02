import {Component} from '@angular/core';
import {Bug} from "../models/bug";
import {Severity} from "../models/severity";

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrl: './bug-list.component.scss'
})
export class BugListComponent {
  bugs: Bug[] = [
    {
      severity: Severity.MINOR,
      description: "blabla",
      assignedUser: {
        firstName: "Bob",
        lastName: "Bobbers",
        age: 21,
        id: 1
      }
    },
    {
      severity: Severity.URGENT,
      description: "bla",
      assignedUser: {
        firstName: "Lob",
        lastName: "Lobbers",
        age: 23,
        id: 2
      },
    }
  ]
}
