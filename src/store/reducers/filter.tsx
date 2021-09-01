import { VisibilityFilters, FilterActionTypes } from 'utils/types';

export default (state = VisibilityFilters.SHOW_ALL, { type, payload }: FilterActionTypes) => {
  switch (type) {
    case VisibilityFilters.UPDATE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};
