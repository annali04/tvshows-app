import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShowDetailsComponent } from './single-show-details.component';

describe('SingleShowDetailsComponent', () => {
  let component: SingleShowDetailsComponent;
  let fixture: ComponentFixture<SingleShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleShowDetailsComponent ]
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
