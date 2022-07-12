import { createAction, props } from '@ngrx/store';
import { Driver } from '../../drivers/drivers';

export const setDrivers = createAction(
  '[Drivers] Set drivers',
  props<{ drivers: Driver[] }>()
);

export const addDriver = createAction(
  '[Drivers] Add Driver',
  props<Driver>()
);

export const editDriver = createAction(
  '[Drivers] Edit Driver',
  props<Driver>()
);

export const removeDriver = createAction(
  '[Drivers] Remove Driver',
  props<{ id: string }>()
);
