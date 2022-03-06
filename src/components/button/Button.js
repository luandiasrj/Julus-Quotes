import styled from 'styled-components';

export const Button = styled.button`
  background: #888;
  color: #fff;
  border: none;
  font-size: 1.5em;
  padding: 10px 20px;
  font-family: 'Times New Roman', serif;
  cursor: pointer;
  box-shadow: #332c36 3px 3px;

  &:hover {
    background-color: #aaa;
  }

  &:focus {
    outline: none;
  }
`;
