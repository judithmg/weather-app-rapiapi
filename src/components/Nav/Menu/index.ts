import * as Colors from 'src/constants/colors';
import styled from 'styled-components';

const Menu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  top: 50px;
  left: 0;
  width: 100%;
  height: 80vh;
  background-color: ${Colors.black};
  z-index: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.white};
    border-radius: 10px;
    border: 3px solid ${Colors.black};
  }

  ul {
    width: 100%;
  }

  p {
    color: ${Colors.white};
  }
`;

export default Menu;
