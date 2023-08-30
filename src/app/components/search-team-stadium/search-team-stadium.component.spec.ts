import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeamStadiumComponent } from './search-team-stadium.component';

describe('SearchTeamStadiumComponent', () => {
  let component: SearchTeamStadiumComponent;
  let fixture: ComponentFixture<SearchTeamStadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTeamStadiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTeamStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
