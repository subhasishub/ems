import { take, takeLatest, takeEvery, call, put } from "redux-saga/effects";
import API from "../util/API_URI.js";

function* authenticate(user) {
  try {
    const response = yield call(fetch, API.AUTHENTICATE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user.value),
    });
    
    yield put({ type: "LOGGED_IN_ASYNC", value: response});
  } finally {
  }
}

export default function* LoginSaga() {
  const user = yield take("LOGIN");
  yield call(authenticate, user);
}
