# DriversVehicles

A simple Angular SPA based on Angular Material.

1. Displays an overview in which all the driver data is represented, except for the id.
2. Possibilities to create, edit and delete drivers.

Uses json-server mock API and NgRx state management.

Start JSON Server `json-server --watch db.json`
Start SPA in dev mode `npm run start`

Also:

- Displays in the overview the license plate number of the vehicle associated to each driver.
- Allows the change of vehicle associated to each driver.
- Applies validation to the form.
- Customizes the color palette of the Angular Material theme.

What else can be done:

- Table pagination
- Backend table interaction (filtering, sorting, pagination through API)
- Better UI (e.g. columns' order) after feedback from end-users
- In case of big number of vehicles we can replace select with autocomplete for better searchability (but to see other options we will need to clear the field first)
- Better responsiveness
- Delete duplicate vehicles if needed (although it is a 100% backend task)
- Save empty vehicleId (initial json didn't contain null vehicleId property in some drivers' objects) and use PATCH instead of PUT
- Refresh drivers' list on every server interaction if we need the most actual data
- Split driver form into two dialogs with the same form in case Add and Edit scenarios become too different

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
