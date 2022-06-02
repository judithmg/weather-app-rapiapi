import * as Colors from 'src/constants/colors';
import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 600;
  color: ${Colors.black};
  text-transform: uppercase;
  padding: 16px 0 0 0;
`;

export const H2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 60px;
  color: ${Colors.black};
  text-transform: uppercase;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const H3 = styled.h3`
  font-weight: 700;
  text-overflow: ellipsis;
  text-size-adjust: 100%;
  color: ${Colors.black};
  transform: rotate(-90deg);
  margin-right: 20px;
  position: absolute;
  top: 0px;
  right: 0px;
  transform-origin: top right;
`;
