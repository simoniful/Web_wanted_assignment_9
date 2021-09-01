import { VisibilityFilters } from 'utils/types';
// todo 필터링 관련 상태 변화 액션 생성자

export const updateFilter = (filter: string) => ({
  type: VisibilityFilters.UPDATE_FILTER,
  payload: {
    filter,
  },
});
