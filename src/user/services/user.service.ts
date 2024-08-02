import {Injectable, signal} from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {Bug} from "../../bugs/models/bug";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private assignedBug = signal<Bug | null>(null);

  constructor(private backendService: BackendService) { }

  getRandomUserFromTheInternet() {
    return this.backendService.get('https://randomuser.me/api/?results=5');
    // return this.backendService.get('http://localhost:8080/user');
  }

  setAssignedBug(assignedBug: Bug): void {
    this.assignedBug.set(assignedBug);
  }

  getAssignedBug() {
    return this.assignedBug();
  }
}
