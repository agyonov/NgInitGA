import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaLibComponent } from './ga-lib.component';

describe('GaLibComponent', () => {
  let component: GaLibComponent;
  let fixture: ComponentFixture<GaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
