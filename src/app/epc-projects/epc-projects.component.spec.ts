import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcProjectsComponent } from './epc-projects.component';

describe('EpcProjectsComponent', () => {
  let component: EpcProjectsComponent;
  let fixture: ComponentFixture<EpcProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
