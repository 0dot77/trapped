import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  width: ${(props) => (props.pathname === '/' ? '10%' : '15%')};
  height: 100%;
  font-family: 'Nats';
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  z-index: 10;
`;

const NavCircle = styled.div`
  width: 2.125rem;
  height: 2.125rem;
  border-radius: 50%;
  margin-bottom: 0.68rem;
  cursor: pointer;

  /**********************path에 따라 변하는 버튼 색 */

  :first-child {
    background-color: ${(props) => (props.pathname === '/' ? props.theme.colors.mainColor : 'white')};
    border: 1px solid ${(props) => (props.pathname === '/' ? props.theme.colors.mainColor : 'black')};
  }

  :nth-child(2) {
    background-color: ${(props) => (props.pathname === '/collect' ? props.theme.colors.mainColor : 'white')};
    border: 1px solid ${(props) => (props.pathname === '/collect' ? props.theme.colors.mainColor : 'black')};
  }

  :nth-child(3) {
    background-color: ${(props) => (props.pathname === '/push' ? props.theme.colors.mainColor : 'white')};
    border: 1px solid ${(props) => (props.pathname === '/push' ? props.theme.colors.mainColor : 'black')};
  }

  :nth-child(4) {
    background-color: ${(props) => (props.pathname === '/pull' ? props.theme.colors.mainColor : 'white')};
    border: 1px solid ${(props) => (props.pathname === '/pull' ? props.theme.colors.mainColor : 'black')};
  }
`;

const NavCircleContainer = styled.div`
  margin-left: 2.125rem;
`;

const NotHomeLavContainer = styled.div`
  display: flex;
  width: 100%;
`;

const NavTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.black};
  font-size: 1.5rem;
  justify-content: space-around;
  margin-left: 0.8rem;

  p:first-child {
    color: ${(props) => (props.pathname === '/' ? props.theme.colors.mainColor : 'black')};
  }
  p:nth-child(2) {
    color: ${(props) => (props.pathname === '/collect' ? props.theme.colors.mainColor : 'black')};
  }
  p:last-child {
    color: ${(props) => (props.pathname === '/pull' ? props.theme.colors.mainColor : 'black')};
  }

  p {
    margin-bottom: 0.8rem;
  }
`;

export default function Layout() {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (pathname !== '/') {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [pathname]);

  function handleOnClick(pathname) {
    nav(pathname);
  }

  return (
    <NavContainer pathname={pathname}>
      {isHome ? (
        <NavCircleContainer>
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
        </NavCircleContainer>
      ) : (
        <NotHomeLavContainer>
          <NavCircleContainer>
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
          </NavCircleContainer>
          <NavTextContainer pathname={pathname}>
            <p>Trapped</p>
            <p>Collect</p>
            <p>Push</p>
            <p>Pull</p>
          </NavTextContainer>
        </NotHomeLavContainer>
      )}
    </NavContainer>
  );
}
