import { createReducer, on } from '@ngrx/store';
import { Driver } from '../../drivers/drivers';
import {
  addDriver,
  editDriver,
  removeDriver,
  setDrivers,
} from './drivers.actions';

export const initialState: Driver[] = [];

export const driversReducer = createReducer(
  initialState,
  on(setDrivers, (state, { drivers }) => drivers),
  on(addDriver, (state, driver) => [...state, driver]),
  on(editDriver, (state, driver) =>
    state.map((oldDriver) => (oldDriver.id === driver.id ? driver : oldDriver))
  ),
  on(removeDriver, (state, { id }) =>
    state.filter((driver) => id !== driver.id)
  )
);
