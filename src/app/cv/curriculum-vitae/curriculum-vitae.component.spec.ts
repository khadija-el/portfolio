import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurriculumVitaeComponent } from './curriculum-vitae.component';

describe('CurriculumVitaeComponent', () => {
  let component: CurriculumVitaeComponent;
  let fixture: ComponentFixture<CurriculumVitaeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumVitaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumVitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
