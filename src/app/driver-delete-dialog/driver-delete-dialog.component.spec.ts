import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDeleteDialogComponent } from './driver-delete-dialog.component';

describe('DriverDeleteDialogComponent', () => {
  let component: DriverDeleteDialogComponent;
  let fixture: ComponentFixture<DriverDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
