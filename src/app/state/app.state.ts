import { Driver } from '../drivers/drivers';
import { Vehicle } from '../vehicles/vehicle';

export interface AppState {
  driversVehicles: DriversVehicles;
}

export interface DriversVehicles {
  drivers: Driver[];
  vehicles: Vehicle[];
}

export const selectDriversVehicles = (state: AppState) => state.driversVehicles;
