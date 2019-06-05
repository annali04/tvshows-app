import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleShowDetailsComponent } from './single-show-details/single-show-details.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes: Routes = [
  {
    path: 'shows',
    component: ShowDetailsComponent
},  
  {path:'single-show-details/:id', 
  component: SingleShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    //SingleShowDetailsComponent
  ]
})
export class AppRoutingModule { }

