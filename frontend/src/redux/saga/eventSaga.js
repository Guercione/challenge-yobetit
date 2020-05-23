import { put, call } from "redux-saga/effects";
import eventType from "redux/types/eventType";

import { requestStatusCheck } from "utils/httpErrors";

import notificationType from "redux/types/notificationType";
import { getCountriesApi } from "services/countriesService";

export function* getCountriesSaga(data) {
  try {
    yield put({ type: eventType.EVENT_REQUEST });

    const api = requestStatusCheck(
      "getCountriesSaga",
      yield call(getCountriesApi, data)
    );

    if (api.error) {
      yield put({
        type: eventType.EVENT_REQUEST_FAILURE,
      });

      yield put({
        type: notificationType.NOTIFICATION_REQUEST_ERROR,
        message: api.error,
      });
    } else {
      yield put({
        type: eventType.EVENT_REQUEST_SUCCESS,
        ...api.data,
      });
    }

    return;
  } catch (error) {
    console.error(error);
    yield put({
      type: notificationType.NOTIFICATION_REQUEST_ERROR,
      message: error,
    });
  }
}
