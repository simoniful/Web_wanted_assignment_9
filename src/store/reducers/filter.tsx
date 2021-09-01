import { VisibilityFilters, FilterActionTypes } from 'utils/types';

// todo 필터링 관련 상태 변화 시 리듀서
export default (state = VisibilityFilters.SHOW_ALL, { type, payload }: FilterActionTypes) => {
  switch (type) {
    case VisibilityFilters.UPDATE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};
