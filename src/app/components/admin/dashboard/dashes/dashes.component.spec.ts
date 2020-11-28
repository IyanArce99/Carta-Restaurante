import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashesComponent } from './dashes.component';

describe('DashesComponent', () => {
  let component: DashesComponent;
  let fixture: ComponentFixture<DashesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
