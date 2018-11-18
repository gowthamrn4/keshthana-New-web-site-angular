import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdofferingsComponent } from './pdofferings.component';

describe('PdofferingsComponent', () => {
  let component: PdofferingsComponent;
  let fixture: ComponentFixture<PdofferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdofferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdofferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
