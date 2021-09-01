import React from 'react';
import styled from 'styled-components';

interface EmptyMessageProps {
  message: string;
}

export default ({ message }: EmptyMessageProps) => (
  <EmptyList>
    <EmptyIcon className="fas fa-clipboard-list" />
    <span>{message}</span>
  </EmptyList>
);

const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #bbb;
  margin: 12px;
`;

const EmptyIcon = styled.i`
  font-size: 30px;
  margin: 10px;
`;
