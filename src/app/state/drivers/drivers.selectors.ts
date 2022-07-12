import { createSelector } from '@ngrx/store';
import { DriversVehicles, selectDriversVehicles } from '../app.state';

export const selectDrivers = createSelector(
  selectDriversVehicles,
  (state: DriversVehicles) => state.drivers
);
