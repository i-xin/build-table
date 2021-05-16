# Getting Started with tatari

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions

- values will be double counted in overlap rotation.
- Gap will be ignored in rotation table.
- Directly display time data from csv files without worrying about timezone.
- No support for infinite scroll or pagination.

## Start the app

### `yarn && yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Folder structure

- public: public facing files including two csv files.
- src/components: reusable components with minimal business logic.
- src/utils: utilities for api, data, and formatter.
