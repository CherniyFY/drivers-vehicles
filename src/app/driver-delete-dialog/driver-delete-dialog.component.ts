import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DriversService } from '../drivers/drivers.service';
import { DriverDeleteDialogData } from './driver-delete-dialog';

@Component({
  selector: 'app-driver-delete-dialog',
  templateUrl: './driver-delete-dialog.component.html',
  styleUrls: ['./driver-delete-dialog.component.sass'],
})
export class DriverDeleteDialogComponent implements OnInit {
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DriverDeleteDialogData,
    private driversService: DriversService,
    public dialogRef: MatDialogRef<DriverDeleteDialogComponent>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  async deleteDriver() {
    try {
      this.loading = true;
      await this.driversService.deleteDriver(this.data.id);
      this.dialogRef.close(this.data.id);
    } catch (error: any) {
      console.error(error);
      this._snackBar.open(error.message, 'X', { verticalPosition: 'bottom' });
    } finally {
      this.loading = false;
    }
  }
}
