import React from 'react';
import { VisibilityFilters } from 'utils/types';
import FilterLink from 'components/FilterLink';
import styled from 'styled-components';

interface CounterProps {
  taskCounter: {
    counter: number;
    text: string;
  };
}

export default ({ taskCounter: { counter, text } }: CounterProps) => (
  <FilterContainer>
    <div>
      <Counter>{counter}</Counter> <span>{text}</span>
    </div>
    <Filters>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </Filters>
  </FilterContainer>
);

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 5px;
  font-size: 14px;
  color: #bbb;
`;

const Counter = styled.span`
  color: #525252;
`;

const Filters = styled.div`
  & > * {
    margin: 0 0.2rem;
    cursor: pointer;

    &:hover {
      color: $text-color;
    }
  }
`;
