## Challenge Yobetit - Backend (NodeJS + ExpressJS) and Frontend (React + Redux)

#### Live demo: https://yobetit-frontend.herokuapp.com

## BACKEND

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

---

## FRONTEND (TODO)

### UI: Material UI

https://material-ui.com/

## How to run

- npm install / yarn
- npm run start / yarn start
- Access: http://localhost:3000
- Edit `REACT_APP_API_URL` on `.env` with the API URI
