import * as Colors from 'src/constants/colors';
import styled from 'styled-components';

interface CardProps {
  backgroundColor?: string;
}
export default styled.div<CardProps>`
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
