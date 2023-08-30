import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculeImcComponent } from './calcule-imc.component';

describe('CalculeImcComponent', () => {
  let component: CalculeImcComponent;
  let fixture: ComponentFixture<CalculeImcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculeImcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculeImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
