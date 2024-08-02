import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {UserComponent} from "./user/user.component";
import {RoleManagementModule} from "../role-management/role-management.module";
import {UserRoutingModule} from "./user-routing.module";
import {UserProfileComponent} from "./user-profile/user-profile.component";


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RoleManagementModule,
    UserRoutingModule,
  ],
  exports: [
    UserListComponent,
    UserComponent,
    UserProfileComponent
  ]
})
export class UserModule {
}
