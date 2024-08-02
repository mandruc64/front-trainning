import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {BugsModule} from "../bugs/bugs.module";
import {UserModule} from "../user/user.module";


@NgModule({
    declarations: [
        NavigationBarComponent
    ],
    exports: [
        NavigationBarComponent
    ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    BugsModule,
    UserModule
  ]
})
export class NavigationModule { }
