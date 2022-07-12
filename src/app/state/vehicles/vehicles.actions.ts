import { createAction, props } from '@ngrx/store';
import { Vehicle } from 'src/app/vehicles/vehicle';

export const setVehicles = createAction(
  '[Vehicles] Set vehicles',
  props<{ vehicles: Vehicle[] }>()
);

export const addVehicle = createAction(
  '[Vehicles] Add Vehicle',
  props<{ vehicleId: string }>()
);

export const removeVehicle = createAction(
  '[Vehicles] Remove Vehicle',
  props<{ vehicleId: string }>()
);

// export const retrievedVehicleList = createAction(
//   '[Vehicles] Retrieve Vehicles Success',
//   props<{ vehicles: Vehicle[] }>()
// );

// export const editedVehicleList = createAction(
//   '[Vehicles] Edit Vehicles Success',
//   props<{ vehicles: Vehicle[] }>()
// );
