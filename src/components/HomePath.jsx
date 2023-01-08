import styled from 'styled-components';

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  /* display: ${(props) => (props.changeBackground ? 'default' : 'none')}; */
  background-color: #ddd;
`;

export default function HomePath({ changeBackground }) {
  return <SvgContainer></SvgContainer>;
}
