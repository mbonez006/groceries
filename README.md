# EE groceries

The project includes 2 Directories:

- `groceries-frontend` (The view side of the application)
- `groceries-backend-api` (The backend API)


## Version number
`5b8d0fd276b6d288905ed2f63a934e057e8feca2`

## Requirements
- Node >16
- Unix Terminal Window

## Frameworks & Tools USed
- NodeJS
- Express JS
- Pug
- Webpack
- Babel Transpiler
- Eslint
- Jest

## How to run
### Getting backend API server up and running.

Upon checkout of the repository, using a Unix Terminal Window, change directory (`cd`) into `groceries-backend-api` directory, and run the following commands
```
npm install
npm run start
```

You should see `Running on http://localhost:3000` - indicating that we now have the backend server running.

### Getting frontend up and running.

Open another terminal window, and change directory back to the root of the repository.
Then change directory (`cd`) into `groceries-frontend` directory, and run the following commands
```
npm install
npm run start
```

You should see `Running on http://localhost:7080` - indicating that we now have the frontend running on port 7080.

Next open up a browser and navigate to `http://localhost:7080` - this should display the Groceries application.