import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { ApplicationState } from 'utils/types';
import { updateFilter } from '../store/actions/filter';

interface Props {
  children: string;
  filter: string;
}

const FilterLink = ({ children, filter }: Props) => {
  // store에서 정적인 상태 불러오기
  const filterSelected: boolean = useSelector((state: ApplicationState) => state.filterState) === filter;

  // dispatch를 통한 액션 생성자 호출
  const dispatch = useDispatch();
  const handleUpdateFilter = useCallback((filter: string) => dispatch(updateFilter(filter)), [dispatch]);

  return (
    <FilterTab role="presentation" onClick={() => handleUpdateFilter(filter)} filterSelected={filterSelected}>
      {children}
    </FilterTab>
  );
};

const FilterTab = styled.span<{ filterSelected: boolean }>`
  ${(props) =>
    props.filterSelected === true &&
    css`
      color: #525252;
    `}
`;

export default FilterLink;
