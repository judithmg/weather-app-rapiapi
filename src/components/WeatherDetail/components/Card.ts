import * as Colors from 'src/constants/colors';
import styled from 'styled-components';

interface CardProps {
  backgroundColor?: string;
}

export const Card = styled.div<CardProps>`
  border: 2px solid ${Colors.black};
  box-shadow: 2px 2px ${Colors.black};
  padding: 5px;
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};

  h2 {
    margin-left: 10px;
    font-size: 16px;
  }
`;

export const HourCard = styled.div`
  background-color: ${Colors.violet};
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 3px solid ${Colors.black};
  box-shadow: 3px 3px ${Colors.black};
  scroll-snap-align: start;
`;

export const SunriseSunsetCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  margin: 10px;
  svg {
    margin-top: 5px;
  }
  div {
    flex-direction: column;
    p:nth-child(1) {
      color: ${Colors.lightgray};
    }
    p:nth-child(2) {
      font-size: 20px;
    }
  }
`;

export const DailyCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  img {
    width: 40px;
  }
`;
