import { put, call } from "redux-saga/effects";

import CountriesTypes from "redux/types/countriesType";
import { requestStatusCheck } from "utils/httpErrors";
import {
  getAllCountriesApi,
  getCountryByNameApi,
  getCountriesByNamesApi,
} from "services/countriesService";

export function* countriesGetUniqueCountrySaga(data) {
  try {
    yield put({ type: CountriesTypes.COUNTRIES_REQUEST });

    const api = requestStatusCheck(
      "countriesGetUniqueCountrySaga",
      yield call(getCountryByNameApi, data)
    );

    if (api.error) {
      yield put({
        type: CountriesTypes.COUNTRIES_REQUEST_FAILURE,
        message: api.error,
      });
    } else {
      yield put({
        type: CountriesTypes.COUNTRIES_REQUEST_SUCCESS,
      });
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

export function* countriesGetListCountriesSaga(data) {
  try {
    yield put({ type: CountriesTypes.COUNTRIES_REQUEST });

    const countries = data.countriesList.join(",");

    const api = requestStatusCheck(
      "countriesGetListCountriesSaga",
      yield call(getCountriesByNamesApi, countries)
    );

    if (api.error) {
      yield put({
        type: CountriesTypes.COUNTRIES_REQUEST_FAILURE,
        message: api.error,
      });
    } else {
      yield put({
        type: CountriesTypes.COUNTRIES_REQUEST_SUCCESS,
      });
      yield put({
        type: CountriesTypes.COUNTRIES_SET_FAVORITE_LIST_COUNTRIES,
        countries: api.data,
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

export function* countriesGetAllCountriesSaga() {
  try {
    yield put({ type: CountriesTypes.COUNTRIES_REQUEST });

    const api = requestStatusCheck(
      "countriesGetListCountriesSaga",
      yield call(getAllCountriesApi)
    );

    if (api.error) {
      yield put({
        type: CountriesTypes.COUNTRIES_REQUEST_FAILURE,
        message: api.error,
      });
    } else {
      yield put({
        type: CountriesTypes.COUNTRIES_REQUEST_SUCCESS,
      });
      yield put({
        type: CountriesTypes.COUNTRIES_SET_ALL_COUNTRIES,
        countries: api.data,
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
