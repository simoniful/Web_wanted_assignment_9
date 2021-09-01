import { call, put } from 'redux-saga/effects';
import api from 'utils/api';
import { TodoListActionTypes } from 'utils/types';
import { loadFailure, loadSuccess } from 'store/actions/items';

export function* load() {
  try {
    const { data } = yield call(api.get, 'http://dummy-server.io/todo');
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* addRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.put, 'http://dummy-server.io/todo', {
      text: payload.text,
    });
  } catch (error) {
    console.log('ADD ERROR');
  }
}

export function* deleteRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.delete, `http://dummy-server.io/todo/:${payload.id}`);
  } catch (error) {
    console.log('DELETE ERROR');
  }
}

export function* toggleRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.put, `http://dummy-server.io/todo/:${payload.id}`, {
      complete: !payload.complete,
    });
  } catch (error) {
    console.log('TOGGLE ERROR');
  }
}

export function* updateRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.put, `http://dummy-server.io/todo/:${payload.id}`, {
      text: payload.text,
    });
  } catch (error) {
    console.log('UPDATE ERROR');
  }
}
