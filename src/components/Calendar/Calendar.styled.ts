import styled from "styled-components";

export const PageWrapper = styled.nav`
  display: flex;
  & button {
    height: 25px;
    width: 25px;
  }
  & span {
    height: 25px;
    width: 80px;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
  }
`;
export const CalendarDashboard = styled.header`
  display: flex;
  padding: 15px 50px;
  align-items: center;
`;

export const DisplayOptionsWrapper = styled.div`
  display: flex;
  margin: 0 10px;
`;

export const OptionWrapper = styled.div`
  margin-right: 5px;
  & input {
    display: none;
    &:checked {
      & + label {
        &:before {
          background-color: #000000;
        }
      }
    }
  }
  & label {
    display: flex;
    align-items: center;
    &:before {
      content: "";
      display: flex;
      outline: 1px solid #000000;
      border: 2px solid #ffffff;
      border-radius: 100%;
      height: 10px;
      width: 10px;
      margin-right: 5px;
    }
  }
`;

export const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 1em;
  max-width: calc(100vw - 100px);
  margin: 50px auto;
  aspect-ratio: auto 2 / 1;
  position: relative;
  &:before {
    inset: 0;
    position: absolute;
    display: block;
    content: "";
    z-index: -1;
    background: radial-gradient(
      ellipse farthest-corner at center center,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 60%
    );
  }
`;
