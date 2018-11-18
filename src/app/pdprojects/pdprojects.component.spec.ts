import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdprojectsComponent } from './pdprojects.component';

describe('PdprojectsComponent', () => {
  let component: PdprojectsComponent;
  let fixture: ComponentFixture<PdprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
