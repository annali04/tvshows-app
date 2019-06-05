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
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { DataStorageService } from './data-storage.service';
import { SingleShowDetailsComponent } from './single-show-details/single-show-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    ShowSearchComponent,
    SingleShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [ShowsService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
