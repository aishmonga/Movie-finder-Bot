import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRecastComponent } from './movie-recast.component';

describe('MovieRecastComponent', () => {
  let component: MovieRecastComponent;
  let fixture: ComponentFixture<MovieRecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
