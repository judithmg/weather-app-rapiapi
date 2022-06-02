import * as Colors from 'src/constants/colors';
import styled from 'styled-components';

export const HourContainer = styled.div`
  display: flex;
  position: relative;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  margin-bottom: 3px;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.white};
    border-radius: 10px;
    border: 3px solid ${Colors.background};
  }
`;
