import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugsRoutingModule } from './bugs-routing.module';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugComponent } from './bug/bug.component';
import {UserModule} from "../user/user.module";


@NgModule({
  declarations: [
    BugListComponent,
    BugComponent
  ],
  exports: [
    BugListComponent
  ],
  imports: [
    CommonModule,
    BugsRoutingModule,
    UserModule,
  ]
})
export class BugsModule { }
