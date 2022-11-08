import styled from "styled-components";

interface DayProps {
  day: number;
}

const DayWrapper = styled.div`
  display: flex;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

const Day = ({ day, ...props }: DayProps) => {
  return <DayWrapper {...props}>{day}</DayWrapper>;
};

export default Day;
