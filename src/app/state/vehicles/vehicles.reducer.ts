import { createReducer, on } from '@ngrx/store';
import { Vehicle } from 'src/app/vehicles/vehicle';
import { setVehicles } from './vehicles.actions';

export const initialState: Vehicle[] = [];

export const vehiclesReducer = createReducer(
  initialState,
  on(setVehicles, (state, { vehicles }) => vehicles)
);
