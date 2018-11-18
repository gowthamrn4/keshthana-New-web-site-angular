import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentmacComponent } from './equipmentmac.component';

describe('EquipmentmacComponent', () => {
  let component: EquipmentmacComponent;
  let fixture: ComponentFixture<EquipmentmacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentmacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentmacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
