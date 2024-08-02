import {Component, Input, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Bug} from "../../bugs/models/bug";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  @Input()
  userList: User[] = [
    {
      firstName: "Bob",
      lastName: "Bobbers",
      age: 21,
      id: 1
    },
    {
      firstName: "Dob",
      lastName: "Dobbers",
      age: 26,
      id: 2
    },
    {
      firstName: "Lob",
      lastName: "Lobbers",
      age: 19,
      id: 3
    },
    {
      firstName: "Zob",
      lastName: "Zobbers",
      age: 12,
      id: 4
    }
  ];

  apiUsers: User[];

  showList: boolean = true;

  assignedBug: Bug | null;

  constructor(private userService: UserService) {
  }

  alertUser(event: User) {
    let firstUser: User | undefined = this.userList.shift();
    if (firstUser) {
      this.userList.push(firstUser);
    }
  }

  deleteUser(event: User) {
    this.userList.splice(this.userList.indexOf(event), 1);
  }

  ngOnInit() {
    this.userService.getRandomUserFromTheInternet().subscribe((data) => {
      this.apiUsers = data.results.map((user: any, index: number) => {
        return {
          firstName: user.name.first,
          lastName: user.name.last,
          age: user.dob.age,
          id: index
        }
      });
    })
    this.assignedBug = this.userService.getAssignedBug();
  }
}
