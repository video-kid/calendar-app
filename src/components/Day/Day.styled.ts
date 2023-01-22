import styled from "styled-components";

export const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 3px;
  padding: 5px;
`;
export const DayIdentifier = styled.div`
  font-size: 8px;
  align-self: flex-end;
  margin: -5px;
  padding: 3px 5px;
  background-color: #000000;
  color: #ffffff;
  width: calc(100% + 10px);
`;

export const EventsWrapper = styled.div`
  flex-grow: 1;
`;
