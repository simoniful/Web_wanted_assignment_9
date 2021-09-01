import React, { FormEvent, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface TodoFormProps {
  emptyList: boolean;
  addItem(text: string): void;
}

export default ({ emptyList, addItem }: TodoFormProps) => {
  const inputText = useRef<HTMLInputElement>(null);

  const focusInputText = () => inputText?.current?.focus();
  // input 포커싱 함수

  useEffect(() => {
    if (emptyList) focusInputText();
  });

  const submitHandler = (e: FormEvent) => {
    // 제출 시 동작 함수 - text 확인 후 목록 추가 요청
    e.preventDefault();

    if (inputText && inputText.current && inputText.current.value !== '') {
      addItem(inputText.current.value);
      inputText.current.value = '';
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input ref={inputText} placeholder="What needs to be done?" />
      <Button type="submit">
        <i className="fas fa-plus" />
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
`;

const Input = styled.input`
  flex: 1;
  line-height: 2.5;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  color: #666;
  border: 0px;
  outline-color: #bbb;
  & ::placeholder {
    opacity: 0.5;
  }
`;

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #9a9a9a;
  color: #fff;
  margin-left: 10px;
  border: 0;
  border-radius: 50%;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #8c91cb;
  }
`;
