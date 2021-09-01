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
  const filterSelected: boolean = useSelector((state: ApplicationState) => state.filterState) === filter;
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
