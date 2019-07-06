import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import { SingleShowDetailsComponent } from './single-show-details/single-show-details.component';
import { ShowsService } from './shows/shows.service';
import { ShowsServiceFake } from './shows/shows.service.fake';
import { DataStorageService } from './data-storage.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterTestingModule
  
      ],
      declarations: [
        AppComponent,
        ShowDetailsComponent,
        ShowSearchComponent,
        SingleShowDetailsComponent
      ],
      providers:[
         {provide:ShowsService, useClass: ShowsServiceFake}]
        }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'tvshows-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('tvshows-app');
  // });

  it('should render title in <a> tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('TVBuzz');
  });
});
