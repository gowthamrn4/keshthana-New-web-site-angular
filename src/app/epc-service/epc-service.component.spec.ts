import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcServiceComponent } from './epc-service.component';

describe('EpcServiceComponent', () => {
  let component: EpcServiceComponent;
  let fixture: ComponentFixture<EpcServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
