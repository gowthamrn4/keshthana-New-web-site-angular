import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfpicturesComponent } from './bfpictures.component';

describe('BfpicturesComponent', () => {
  let component: BfpicturesComponent;
  let fixture: ComponentFixture<BfpicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfpicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfpicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
