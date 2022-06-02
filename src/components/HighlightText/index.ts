import styled from 'styled-components';

const color = '#46b96c';

interface Props {
  color?: string;
  size?: number;
}
export default styled.strong<Props>`
  position: relative;
  z-index: 0;
  ${(props) => props.size && `font-size: ${props.size}px`};

  &::after {
    ${(props) =>
      props.color
        ? `background-color: ${props.color}`
        : `background-color: ${color}`};

    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: 60%;
    left: -2px;
    bottom: 0;
    z-index: -1;
    transform: rotate(-2deg);
  }
`;
