import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DriverDeleteDialogComponent } from '../driver-delete-dialog/driver-delete-dialog.component';
import { DriverFormDialogComponent } from '../driver-form-dialog/driver-form-dialog.component';
import {
  addDriver,
  editDriver,
  removeDriver,
  setDrivers,
} from '../state/drivers/drivers.actions';
import { setVehicles } from '../state/vehicles/vehicles.actions';
import { Vehicle } from '../vehicles/vehicle';
import { VehiclesService } from '../vehicles/vehicles.service';
import { Driver } from './drivers';
import { DriversService } from './drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.sass'],
})
export class DriversComponent implements OnInit {
  loading = false;

  displayedColumns = [
    'name',
    'email',
    'birthDate',
    'active',
    'licensePlate',
    'actions',
  ];
  dataSource = new MatTableDataSource<Driver>();

  drivers$: Observable<Driver[]>;
  vehicles$: Observable<Vehicle[]>;

  curVehicles = [] as Vehicle[];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private driversService: DriversService,
    private vehiclesService: VehiclesService,
    private store: Store<{ drivers: Driver[]; vehicles: Vehicle[] }>,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.vehicles$ = store.select('vehicles');
    this.drivers$ = store.select('drivers');
    this.vehicles$.subscribe((vehicles) => {
      this.curVehicles = vehicles;
    });
    this.drivers$.subscribe((drivers) => {
      let hydratedDataSource = [] as Driver[];
      drivers.forEach((driver) => {
        hydratedDataSource.push({
          ...driver,
          licensePlate: this.curVehicles.find(
            (vehicle) => vehicle.id === driver.vehicleId
          )?.registrationNumber,
        });
      });
      this.dataSource.data = hydratedDataSource;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    this.getVehicles();
  }

  async getDrivers() {
    try {
      this.store.dispatch(
        setDrivers({ drivers: await this.driversService.getDrivers() })
      );
    } catch (error: any) {
      console.error(error);
      this._snackBar.open(error.message, 'X', { verticalPosition: 'bottom' });
    }
  }

  async getVehicles() {
    try {
      this.loading = true;
      this.store.dispatch(
        setVehicles({ vehicles: await this.vehiclesService.getVehicles() })
      );
      this.getDrivers();
    } catch (error: any) {
      console.error(error);
      this._snackBar.open(error.message, 'X', { verticalPosition: 'bottom' });
    } finally {
      this.loading = false;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDriverFormDialog(driver?: Driver) {
    const dialogRef = this.dialog.open(DriverFormDialogComponent, {
      data: {
        driver: driver,
      },
    });

    dialogRef
      .afterClosed()
      .subscribe((info?: { id: string; driver: Driver }) => {
        if (info) {
          info.id
            ? this.store.dispatch(editDriver(info.driver))
            : this.store.dispatch(addDriver(info.driver));
        }
      });
  }

  openDriverDeleteDialog(driver: Driver) {
    const dialogRef = this.dialog.open(DriverDeleteDialogComponent, {
      data: {
        id: driver.id,
        name: `${driver.name} ${driver.surname}`,
      },
    });

    dialogRef.afterClosed().subscribe((id: string) => {
      if (id) {
        this.store.dispatch(removeDriver({ id }));
      }
    });
  }
}
