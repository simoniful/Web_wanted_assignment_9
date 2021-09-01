import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
}

const TodoHeader = ({ title }: HeaderProps) => <Header>{title}</Header>;

const Header = styled.div`
  background-color: #4967a4;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 1rem;
  border-radius: 10px 10px 0px 0px;
`;

export default TodoHeader;
