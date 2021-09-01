import { combineReducers } from 'redux';
import items from './items';
import filterState from './filter';

// 리듀서 병합
export default combineReducers({
  items,
  filterState,
});
