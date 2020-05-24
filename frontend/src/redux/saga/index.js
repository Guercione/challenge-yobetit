import { takeLatest, all } from "redux-saga/effects";

import types from "redux/types/countriesType";
import {
  countriesGetUniqueCountrySaga,
  countriesGetListCountriesSaga,
  countriesGetAllCountriesSaga,
} from "./countriesSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(
      types.COUNTRIES_GET_UNIQUE_COUNTRY_SAGA,
      countriesGetUniqueCountrySaga
    ),
    takeLatest(
      types.COUNTRIES_GET_LIST_COUNTRIES_SAGA,
      countriesGetListCountriesSaga
    ),
    takeLatest(
      types.COUNTRIES_GET_ALL_COUNTRIES_SAGA,
      countriesGetAllCountriesSaga
    ),
  ]);
}
