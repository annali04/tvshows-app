import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShowDetailsComponent } from './single-show-details.component';
import { AppComponent } from '../app.component';
import { ShowDetailsComponent } from '../show-details/show-details.component';
import { ShowSearchComponent } from '../show-search/show-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('SingleShowDetailsComponent', () => {
  let component: SingleShowDetailsComponent;
  let fixture: ComponentFixture<SingleShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        RouterTestingModule
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
