import { ItemsState, ItemsTypes, TodoListActionTypes } from 'utils/types';

const initialState: ItemsState = {
  data: [],
};

// todo 목록 관련 상태 변화 시 리듀서
export default (state = initialState, action: TodoListActionTypes): ItemsState => {
  switch (action.type) {
    case ItemsTypes.ADD_ITEM:
      // 아이템 추가 시
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            text: action.payload.text,
            editing: false,
            complete: false,
          },
        ],
      };

    case ItemsTypes.TOGGLE_ITEM:
      // id 값에 따른 complete 상태 변화
      return {
        data: state.data.map((item) => (item.id === action.payload.id ? { ...item, complete: !item.complete } : item)),
      };

    case ItemsTypes.TOGGLE_EDIT_ITEM:
      // id 값에 따른 editing 상태 변화 - 조건부 렌더링을 위함
      return {
        data: state.data.map((item) => (item.id === action.payload.id ? { ...item, editing: !item.editing } : item)),
      };

    case ItemsTypes.UPDATE_ITEM:
      // id, text값에 따른 수정
      return {
        data: state.data.map((item) => (item.id === action.payload.id ? { ...item, text: action.payload.text } : item)),
      };

    case ItemsTypes.REMOVE_ITEM:
      // id값에 따른 삭제
      return {
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

    case ItemsTypes.LOAD_REQUEST:
      // 초기 데이터 요청 - 미들웨어 활용
      return { ...state };

    case ItemsTypes.LOAD_SUCCESS:
      // 미들웨어 응답 완료시 동작하는 리듀서
      return {
        data: action.data,
      };

    case ItemsTypes.LOAD_FAILURE:
      // 미들웨어 응답 실패시 동작하는 리듀서
      return {
        data: [],
      };

    default:
      return state;
  }
};
