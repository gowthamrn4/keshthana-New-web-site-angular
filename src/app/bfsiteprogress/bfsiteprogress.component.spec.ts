import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfsiteprogressComponent } from './bfsiteprogress.component';

describe('BfsiteprogressComponent', () => {
  let component: BfsiteprogressComponent;
  let fixture: ComponentFixture<BfsiteprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfsiteprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfsiteprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
