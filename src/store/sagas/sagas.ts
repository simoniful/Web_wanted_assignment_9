import { call, put } from 'redux-saga/effects';
import api from 'utils/api';
import { TodoListActionTypes } from 'utils/types';
import { loadFailure, loadSuccess } from 'store/actions/items';

export function* load() {
  try {
    const { data } = yield call(api.get, 'http://dummy-server.io/todo');
    // 해당 서버에서 데이터를 받아 옴
    yield put(loadSuccess(data));
    // 성공시 액션 생성자 호출
  } catch (error) {
    yield put(loadFailure());
    // 실패시 액션 생성자 호출
  }
}

export function* addRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.put, 'http://dummy-server.io/todo', {
      text: payload.text,
    });
    // 대상 추가 시 보내는 요청
    // axios put 메서드 활용
    // 실제 동작 시 id 관련 로직 조율 필요
  } catch (error) {
    console.log('ADD ERROR');
  }
}

export function* deleteRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.delete, `http://dummy-server.io/todo/:${payload.id}`);
    // 대상 삭제 시 보내는 요청
    // axios delete 메서드 활용
  } catch (error) {
    console.log('DELETE ERROR');
  }
}

export function* toggleRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.put, `http://dummy-server.io/todo/:${payload.id}`, {
      complete: !payload.complete,
    });
    // 대상 complete 요소 변경 시 보내는 요청
    // axios put 메서드 활용 - 수정
  } catch (error) {
    console.log('TOGGLE ERROR');
  }
}

export function* updateRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.put, `http://dummy-server.io/todo/:${payload.id}`, {
      text: payload.text,
    });
    // 대상 text 요소 변경 시 보내는 요청
    // axios put 메서드 활용 - 수정
  } catch (error) {
    console.log('UPDATE ERROR');
  }
}
