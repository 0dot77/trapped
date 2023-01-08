import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  width: 10vw;
  height: 100%;
  font-family: 'Nats';
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  z-index: 10;
`;

const NavCircle = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  margin: 0.5rem;
  border: 1px solid black;
  cursor: pointer;

  /**********************path에 따라 변하는 버튼 색 */

  :first-child {
    background-color: ${(props) => (props.pathname === '/' ? props.theme.colors.mainColor : 'white')};
  }

  :nth-child(2) {
    background-color: ${(props) => (props.pathname === '/collect' ? props.theme.colors.mainColor : 'white')};
  }

  :nth-child(3) {
    background-color: ${(props) => (props.pathname === '/push' ? props.theme.colors.mainColor : 'white')};
  }

  :nth-child(4) {
    background-color: ${(props) => (props.pathname === '/pull' ? props.theme.colors.mainColor : 'white')};
  }
`;

export default function Layout() {
  const { pathname } = useLocation();
  const nav = useNavigate();

  function handleOnClick(pathname) {
    nav(pathname);
  }

  return (
    <NavContainer>
      <NavCircle
        pathname={pathname}
        onClick={() => {
          handleOnClick('/');
        }}
      />
      <NavCircle
        pathname={pathname}
        onClick={() => {
          handleOnClick('/collect');
        }}
      />
      <NavCircle
        pathname={pathname}
        onClick={() => {
          handleOnClick('/push');
        }}
      />
      <NavCircle
        pathname={pathname}
        onClick={() => {
          handleOnClick('/pull');
        }}
      />
    </NavContainer>
  );
}
