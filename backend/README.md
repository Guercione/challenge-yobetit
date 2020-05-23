# Challenge Yobetit - Backend (NodeJS + ExpressJS)

### How to run

- npm install / yarn
- npm run start / yarn start
- Endpoint: http://localhost:3333

## API

### GET - /countries

Return an array `[]` with all countries

#### Reference

- https://restcountries.eu/#api-endpoints-all

### GET - /countries?names={name}

Return an object `{}` with the closest item from the query

#### Reference

- https://restcountries.eu/#api-endpoints-name

### GET - /countries?names={name},{name}

Return an array `[]` with all **match** countries

#### Reference

- https://restcountries.eu/#api-endpoints-name

## Packages

- https://www.npmjs.com/package/cors
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/axios
- https://www.npmjs.com/package/nodemon
- https://www.npmjs.com/package/dotenv

#### Warning: import "postman-collection.json" to the Postman
