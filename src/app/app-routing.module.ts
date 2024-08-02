import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {testGuard} from "../navigation/guards/test.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('../user/user.module').then(m => m.UserModule),
    canActivate: [testGuard],
    data: {roles: ['admin']}
  },
  {
    path: 'bugs',
    loadChildren: () => import('../bugs/bugs.module').then(m => m.BugsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
