import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import storage from "redux-persist/lib/storage";

import Reducers from "./reducers";
import saga from "./saga";

const sagaMiddleware = new createSagaMiddleware();

const persistConfig = {
  key: "storage",
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(Reducers)
);

const store = createStore(
  persistedReducer,
  process.env.NODE_ENV === "development"
    ? applyMiddleware(sagaMiddleware, logger)
    : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

const persistor = persistStore(store);

export default {
  store,
  persistor,
};
