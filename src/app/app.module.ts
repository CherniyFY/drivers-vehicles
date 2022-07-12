import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { DriverDeleteDialogComponent } from './driver-delete-dialog/driver-delete-dialog.component';
import { DriverFormDialogComponent } from './driver-form-dialog/driver-form-dialog.component';
import { DriversComponent } from './drivers/drivers.component';

import { StoreModule } from '@ngrx/store';
import { driversReducer } from './state/drivers/drivers.reducer';
import { vehiclesReducer } from './state/vehicles/vehicles.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    DriverFormDialogComponent,
    DriverDeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      drivers: driversReducer,
      vehicles: vehiclesReducer,
    }),
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
