import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowsService } from './shows/shows.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowSearchComponent } from './show-search/show-search.component';
import { AppRoutingModule } from './app-routing.module';
//import { StarRatingModule } from 'angular-star-rating';
//import { MatAutocompleteModule, MatInputModule } from '@angular/material';
//import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // StarRatingModule.forRoot(),
    // MatInputModule,
    // ReactiveFormsModule,
    // MatAutocompleteModule,
    FormsModule,
    // HttpModule
  ],
  providers: [ShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
