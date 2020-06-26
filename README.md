# Expense Tracker Front End

Project developed using Angular with the intent of improving my skills.

It is a simple expense tracker with CRUD for expenses.

It has 5 routes:
- ```'/expenses'```: shows a table with the registered expenses from the last 6 months, you can choose a different range of 6 months;
- ```'/expenses/:desc'```: shows a table with the registered expenses that its description matches ```':desc'```;
- ```'/register'```: shows a form with which you can register a new expense;
- ```'/register/:id'```: same form as before but for updating the expense which id matches ```':id'```;
- ```'/detail/:id'```: shows the details of the expense that its id matches ```':id'```, here you can delete or edit it (redirect to ```'/register/:id'```).

It was originally developed to work with this [back-end repository](https://github.com/renato-mm/expense-tracker-back-end).

Some references:
- [Angular - Tour of Heroes ap and Tutorial](https://angular.io/tutorial);
- [Simple Application with Angular 6 + Node.js & Express](https://levelup.gitconnected.com/simple-application-with-angular-6-node-js-express-2873304fff0f);
- [Angular 8 CRUD Application example with Web API](https://bezkoder.com/angular-crud-app/).

## Dependences

It was developed with this software versions:
```
node: 13.14.0
npm: 6.14.5
angular: 9.1.11
bootstrap: 4.5.0
```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
