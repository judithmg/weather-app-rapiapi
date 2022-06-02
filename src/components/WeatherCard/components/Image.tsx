import styled from 'styled-components';

export const Div = styled.div`
  transform-origin: bottom right;
  margin-right: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

interface Props {
  alt: string | undefined;
  src: string | undefined;
}
const Image: React.FC<Props> = ({ alt, src }) => (
  <Div>
    <img src={src} alt={alt} />
  </Div>
);

export default Image;
