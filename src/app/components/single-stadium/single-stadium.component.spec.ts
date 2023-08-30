import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStadiumComponent } from './single-stadium.component';

describe('SingleStadiumComponent', () => {
  let component: SingleStadiumComponent;
  let fixture: ComponentFixture<SingleStadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStadiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
