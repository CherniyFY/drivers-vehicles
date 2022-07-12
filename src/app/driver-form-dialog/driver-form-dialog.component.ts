import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DriversService } from '../drivers/drivers.service';
import { Vehicle } from '../vehicles/vehicle';
import { DriverFormDialogData } from './driver-form-dialog';

@Component({
  selector: 'app-driver-form-dialog',
  templateUrl: './driver-form-dialog.component.html',
  styleUrls: ['./driver-form-dialog.component.sass'],
})
export class DriverFormDialogComponent implements OnInit {
  loading = false;

  driverForm: FormGroup;

  vehicles$: Observable<Vehicle[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DriverFormDialogData,
    private fb: FormBuilder,
    private store: Store<{ vehicles: Vehicle[] }>,
    private driversService: DriversService,
    public dialogRef: MatDialogRef<DriverFormDialogComponent>,
    private _snackBar: MatSnackBar
  ) {
    this.vehicles$ = store.select('vehicles');
    this.driverForm = this.fb.group({
      name: [this.data.driver?.name, [Validators.required]],
      surname: [this.data.driver?.surname, [Validators.required]],
      email: [this.data.driver?.email, [Validators.required, Validators.email]],
      birthDate: [this.data.driver?.birthDate, [Validators.required]],
      active: [!!this.data.driver?.active],
      vehicleId: [this.data.driver?.vehicleId],
    });
  }

  ngOnInit(): void {}

  getEmailErrorMessage() {
    if (this.driverForm.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.driverForm.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }

  async saveDriver() {
    try {
      this.loading = true;
      let driver = this.driverForm.value;
      if (!driver.vehicleId) {
        delete driver.vehicleId;
      }
      let newDriver = this.data.driver?.id
        ? await this.driversService.putDriver(this.data.driver.id, driver)
        : await this.driversService.postDriver(driver);
      this.dialogRef.close({ id: this.data.driver?.id, driver: newDriver });
    } catch (error: any) {
      console.error(error);
      this._snackBar.open(error.message, 'X', { verticalPosition: 'bottom' });
    } finally {
      this.loading = false;
    }
  }
}
