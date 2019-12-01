import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';

const routes: Routes = [
  {path:'display',component:DisplayDataComponent},
  {path:'', redirectTo:'/display',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
