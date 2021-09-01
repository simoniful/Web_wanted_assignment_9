import { all, takeLatest } from 'redux-saga/effects';
import { ItemsTypes } from 'utils/types';
import { deleteRequest, load, toggleRequest, updateRequest, addRequest } from './sagas';

// 병렬적 루트 사가 동작
export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(ItemsTypes.LOAD_REQUEST, load),
    takeLatest(ItemsTypes.REMOVE_ITEM, deleteRequest),
    takeLatest(ItemsTypes.TOGGLE_ITEM, toggleRequest),
    takeLatest(ItemsTypes.UPDATE_ITEM, updateRequest),
    takeLatest(ItemsTypes.ADD_ITEM, addRequest),
  ]);
}
