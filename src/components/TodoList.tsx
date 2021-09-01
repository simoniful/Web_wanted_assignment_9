import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState, Item, VisibilityFilters } from 'utils/types';
import styled from 'styled-components';
import TodoHeader from './TodoHeader';
import TodoFilters from './TodoFilters';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoMessage from './TodoMessage';
import { addItem, toggleItem, toggleEditItem, updateItem, removeItem, loadRequest } from '../store/actions/items';

// 필터링 상태에 따른 보여지는 items 필터
const filterItems = (items: Item[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter((item) => !item.complete);
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter((item) => item.complete);
    default:
      return items;
  }
};

const TodoList = () => {
  // store에서 정적인 상태 불러오기
  const filterState: string = useSelector((state: ApplicationState) => state.filterState);
  const items: Item[] = filterItems(
    useSelector((state: ApplicationState) => state.items.data),
    filterState,
  );
  // dispatch를 통한 액션 생성자 호출
  const dispatch = useDispatch();
  const handleAddItem = useCallback((text: string) => dispatch(addItem(text)), [dispatch]);
  const handleToggleItem = useCallback((id: number, complete: boolean) => dispatch(toggleItem(id, complete)), [dispatch]);
  const handleToggleEditItem = useCallback((id: number) => dispatch(toggleEditItem(id)), [dispatch]);
  const handleUpdateItem = useCallback((id: number, text: string) => dispatch(updateItem(id, text)), [dispatch]);
  const handleRemoveItem = useCallback((id: number) => dispatch(removeItem(id)), [dispatch]);
  const handleLoadRequest = useCallback(() => dispatch(loadRequest()), [dispatch]);

  useEffect(() => {
    handleLoadRequest();
    // 초기 데이터 불러오기
  }, [handleLoadRequest]);

  const getTaskCounter = () =>
    // 필터에 따른 조건부 반환값 설정, 완료된 목록 파악
    filterState === VisibilityFilters.SHOW_COMPLETED
      ? {
          counter: items.filter((item) => item.complete).length,
          text: 'completed tasks',
        }
      : {
          counter: items.filter((item) => !item.complete).length,
          text: 'tasks left',
        };

  return (
    <TodoListWrap>
      <TodoHeader title="📚 To-Do-List" />

      <Contents>
        <TodoForm emptyList={!items.length} addItem={handleAddItem} />

        {items.length === 0 ? (
          <TodoMessage filterState={filterState} getTaskCounter={getTaskCounter} />
        ) : (
          <>
            <ItemList>
              {items.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  toggleItem={handleToggleItem}
                  toggleEditItem={handleToggleEditItem}
                  updateItem={handleUpdateItem}
                  removeItem={handleRemoveItem}
                />
              ))}
            </ItemList>

            <TodoFilters taskCounter={getTaskCounter()} />
          </>
        )}
      </Contents>
    </TodoListWrap>
  );
};

const TodoListWrap = styled.div`
  width: 50%;
  min-width: 450px;
  margin: 50px auto;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const Contents = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 0px 0px 10px 10px;
`;

const ItemList = styled.ul`
  margin: 15px 0;
`;

export default TodoList;
