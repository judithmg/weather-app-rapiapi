import * as Colors from 'src/constants/colors';
import styled from 'styled-components';

export default styled.div`
  position: relative;
  margin: 5px 0;
  padding: 16px;
  border: 3px solid ${Colors.black};
  box-shadow: 5px 5px ${Colors.black};
  width: 80%;
  height: 120px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :nth-of-type(1n) {
    background-color: ${Colors.violet};
  }
  :nth-of-type(2n) {
    background-color: ${Colors.yellow};
  }
  :nth-of-type(3n) {
    background-color: ${Colors.green};
  }

  &:hover {
    background-color: ${Colors.blue};
    color: ${Colors.white};
  }

  p {
    color: ${Colors.black};
  }
`;
