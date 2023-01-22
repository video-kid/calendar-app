import styled from "styled-components";

export const ButtonWrapper = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1;
  overflow: visible;
  border: 0;
  padding: 5px;
  border-radius: 3px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #000000;
  &:focus {
    box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.1);
  }
`;
