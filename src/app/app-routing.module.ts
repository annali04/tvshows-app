import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleShowDetailsComponent } from './single-show-details/single-show-details.component';

const routes: Routes = [
  {path:'single-show-details/:id', component: SingleShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    SingleShowDetailsComponent
  ]
})
export class AppRoutingModule { }
