import { put, call } from "redux-saga/effects";

import CountriesTypes from "redux/types/countriesType";
import { requestStatusCheck } from "utils/httpErrors";
import { getCountryByNameApi } from "services/countriesService";

export function* userGetUniqueCountrySaga(data) {
  try {
    yield put({ type: CountriesTypes.COUNTRIES_REQUEST });

    const api = requestStatusCheck(
      "userGetUniqueCountrySaga",
      yield call(getCountryByNameApi, data)
    );

    if (api.error) {
      yield put({
        type: CountriesTypes.COUNTRIES_REQUEST_FAILURE,
        message: api.error,
      });
    } else {
      yield put({
        type: CountriesTypes.COUNTRIES_SET_CURRENT_COUNTRY,
        country: api.data,
      });
    }

    return;
  } catch (error) {
    console.error(error);
    yield put({
      type: CountriesTypes.COUNTRIES_REQUEST_FAILURE,
      message: error,
    });
  }
}
