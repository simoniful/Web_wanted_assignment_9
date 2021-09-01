import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Item } from 'utils/types';

interface TodoItemProps {
  item: Item;
  toggleItem(id: number, complete: boolean): void;
  toggleEditItem(id: number): void;
  updateItem(id: number, text: string): void;
  removeItem(id: number): void;
}

export default ({ item: { id, text, editing, complete }, toggleItem, toggleEditItem, updateItem, removeItem }: TodoItemProps) => {
  const inputText = useRef<HTMLInputElement>(null);

  useEffect(() => inputText?.current?.focus());

  const acceptEdit = (itemID: number) => {
    const itemText = inputText?.current?.value?.trim() || '';

    if (itemText !== '') {
      updateItem(itemID, itemText);
      toggleEditItem(itemID);
    }
  };

  return (
    <ItemComp>
      {editing ? (
        <>
          <EditInput ref={inputText} defaultValue={text} />
          <div>
            <Icon role="presentation" onClick={() => acceptEdit(id)}>
              <i className="fas fa-save" />
            </Icon>
            <Icon role="presentation" onClick={() => toggleEditItem(id)}>
              <i className="fas fa-ban" />
            </Icon>
          </div>
        </>
      ) : (
        <>
          <CheckItemContainer>
            <CheckboxItem onClick={() => toggleItem(id, complete)} role="presentation" complete={complete} />
            <span>{complete ? <s>{text}</s> : text}</span>
          </CheckItemContainer>
          <div>
            <Icon role="presentation" onClick={() => toggleEditItem(id)}>
              <i className="fas fa-pencil-alt" />
            </Icon>
            <Icon role="presentation" onClick={() => removeItem(id)}>
              <i className="fas fa-trash-alt" />
            </Icon>
          </div>
        </>
      )}
    </ItemComp>
  );
};

const ItemComp = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 3.5;
  color: #525252;
  margin: 0px 10px;
  + li {
    border-top: 1px solid #f1f1f1;
  }
`;

const EditInput = styled.input`
  flex: 1;
  color: #525252;
  line-height: 2.2;
  font-size: 14px;

  border: 1px solid #bbb;
  border-radius: 3px;
  outline-color: #4967a4;
`;

const Icon = styled.span`
  margin-left: 10px;
  color: #4967a4;
  &:hover {
    cursor: pointer;
    color: #324771;
  }
`;

const CheckItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxItem = styled.div<{ complete: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #4967a4;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  ${(props) =>
    props.complete === true &&
    css`
      background-color: #4967a4;
      &::before {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        content: '\f00c';
        display: flex;
        justify-content: center;
        line-height: 1.2rem;
        font-size: 0.8rem;
        animation: grow 0.2s;
        color: #fff;
      }
      &:hover::before {
        content: '\f068';
        color: #fff;
      }
    `}
  &:hover::before {
    color: #4967a4;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f00c';
    display: flex;
    justify-content: center;
    line-height: 1.2rem;
    font-size: 0.8rem;
    animation: grow 0.2s;
  }
  @keyframes grow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
