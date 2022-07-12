import { createSelector } from '@ngrx/store';
import { DriversVehicles, selectDriversVehicles } from '../app.state';

export const selectVehicles = createSelector(
  selectDriversVehicles,
  (state: DriversVehicles) => state.vehicles
);
